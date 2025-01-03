/**
 * @param {Object} args
 * @param {WebGL2RenderingContext} args.gl
 * @param {string} args.url
 */
export function createTexture({ gl, url }) {
    console.debug('loading texture', url);

    return new Promise((resolve, reject) => {
        let img = new Image();
        img.src = url;
        img.addEventListener('load', () => {
            const texture = gl.createTexture();
            gl.bindTexture(gl.TEXTURE_2D, texture);
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
            gl.generateMipmap(gl.TEXTURE_2D);
            resolve(texture);
        });
    });
}
