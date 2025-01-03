/**
 * @type {Object} AppState
 * @property {WebGL2RenderingContext|null} appState.gl
 * @property {WebGLTexture|null} appState.texture
 * @property {any} appState.program
 *
 * @constant {AppState} appState
 */


export const appState = $state({
    texture: null,
    gl: null,
    program: null
});
