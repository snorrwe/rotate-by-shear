import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.BTvTa5qJ.js","_app/immutable/chunks/disclose-version.CI0S6WHf.js","_app/immutable/chunks/runtime.DHxwUyU3.js"];
export const stylesheets = [];
export const fonts = [];
