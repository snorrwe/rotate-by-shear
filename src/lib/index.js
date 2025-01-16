// place files you want to import through the `$lib` alias in this folder.

/**
 * @param {number} phi
 */
export function shearXFactor(phi) {
    return Math.tan(phi / 2);
}

/**
 * @param {number} phi
 */
export function shearYFactor(phi) {
    return Math.sin(phi);
}

/**
 * @param {number} phi: rotation angle in radians
 */
export function shearX(phi) {
    return new Float32Array([1, shearXFactor(phi), 0, 1]);
}

/**
 * @param {number} phi
 */
export function shearY(phi) {
    return new Float32Array([1, 0, shearYFactor(phi), 1]);
}

/**
 * output a string rounded to `decimals` number of decimal places
 * @param {number} n
 */
export function rounded(n, decimals = 2) {
    const denom = Math.pow(10, decimals);
    return (Math.round(n * denom) / denom).toFixed(decimals);
}
