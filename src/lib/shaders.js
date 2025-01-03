const VERTEX_SRC = `#version 300 es

precision highp float;

out highp vec2 uv;
uniform mat2 u_tform;

void main() {
  vec2 v = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2));

  uv = u_tform * v;
  gl_Position = vec4(v * vec2(2, -2) + vec2(-1, 1), 0.0, 1.0);
}
`;

const FRAGMENT_SRC = `#version 300 es

precision highp float;

out vec4 outColor;
in vec2 uv;

uniform sampler2D u_texture;

void main() {
  outColor = texture(u_texture, uv);
}
`;

/**
 * @param {Object} args
 * @param {WebGL2RenderingContext} args.gl
 * @param {number} args.type
 * @param {string} args.source
 */
function createShader({ gl, type, source }) {
    let shader = gl.createShader(type);

    if (shader == null) {
        console.error('Failed to create the shader');
        return null;
    }
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        return shader;
    }

    console.error('Failed to compile shader', gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
}

/**
 * @param {Object} args
 * @param {WebGL2RenderingContext} args.gl
 */
export function createProgram({ gl }) {
    let vertex = createShader({ gl, type: gl.VERTEX_SHADER, source: VERTEX_SRC });
    console.assert(vertex != null);
    if (!vertex) return null;

    let fragment = createShader({ gl, type: gl.FRAGMENT_SHADER, source: FRAGMENT_SRC });
    console.assert(fragment != null);
    if (!fragment) return null;

    let program = gl.createProgram();
    gl.attachShader(program, vertex);
    gl.attachShader(program, fragment);
    gl.linkProgram(program);
    if (gl.getProgramParameter(program, gl.LINK_STATUS)) {
        const textureLocation = gl.getUniformLocation(program, 'u_texture');
        const transformLocation = gl.getUniformLocation(program, 'u_tform');
        return { program, textureLocation, transformLocation };
    }

    console.error('Failed to link shader program', gl.getProgramInfoLog(program));
    gl.deleteProgram(program);
    return null;
}
