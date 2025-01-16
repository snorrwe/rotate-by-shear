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
