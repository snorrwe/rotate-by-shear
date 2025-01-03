/**
 * @typedef {Object} AppState
 * @property {WebGL2RenderingContext|null} gl
 * @property {WebGLTexture|null} texture
 * @property {any} program
 */

/**
 * @type {AppState} appState
 */
export const appState = $state({
    texture: null,
    gl: null,
    program: null
});
