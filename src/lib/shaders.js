export const VERTEX_SRC = `#version 300 es

precision highp float;

out vec2 uv;
// shear matrix
uniform mat2 u_tform;
// -1 or 1
uniform float u_flip;

void main() {
  // setup a fullscreen triangle based on the vertex indices.
  vec2 v = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2));

  // apply the shear for the UV coords, shearing from the center of the image
  uv = (v - vec2(0.5)) * u_tform + vec2(0.5);
  uv.y *= u_flip;
  // position the vertices in clip space so they cover the framebuffer 
  // from 0,0 to 1,1
  gl_Position = vec4(v * vec2(2, -2) + vec2(-1, 1), 0.0, 1.0);
}
`;

export const FRAGMENT_SRC = `#version 300 es

precision highp float;

out vec4 outColor;
in vec2 uv;

uniform sampler2D u_texture;

void main() {
  // nothing interesting going on here, just sample the texture based on the UV
  // coords computed in the vertex shader
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
  const shader = gl.createShader(type);

  if (shader == null) {
    console.error("Failed to create the shader");
    return null;
  }
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    return shader;
  }

  console.error("Failed to compile shader", gl.getShaderInfoLog(shader));
  gl.deleteShader(shader);
  return null;
}

/**
 * @param {Object} args
 * @param {WebGL2RenderingContext} args.gl
 */
export function createProgram({ gl }) {
  const vertex = createShader({
    gl,
    type: gl.VERTEX_SHADER,
    source: VERTEX_SRC,
  });
  console.assert(vertex != null);
  if (!vertex) return null;

  const fragment = createShader({
    gl,
    type: gl.FRAGMENT_SHADER,
    source: FRAGMENT_SRC,
  });
  console.assert(fragment != null);
  if (!fragment) return null;

  const program = gl.createProgram();
  gl.attachShader(program, vertex);
  gl.attachShader(program, fragment);
  gl.linkProgram(program);
  if (gl.getProgramParameter(program, gl.LINK_STATUS)) {
    const textureLocation = gl.getUniformLocation(program, "u_texture");
    const transformLocation = gl.getUniformLocation(program, "u_tform");
    const flipLocation = gl.getUniformLocation(program, "u_flip");
    return { program, textureLocation, transformLocation, flipLocation };
  }

  console.error("Failed to link shader program", gl.getProgramInfoLog(program));
  gl.deleteProgram(program);
  return null;
}
