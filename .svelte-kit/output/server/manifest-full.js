export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["rocket.jpg","favicon.png"]),
	mimeTypes: {".jpg":"image/jpeg",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.CpUJ484G.js","app":"_app/immutable/entry/app.DO08x33O.js","imports":["_app/immutable/entry/start.CpUJ484G.js","_app/immutable/chunks/entry.DLrngdH2.js","_app/immutable/chunks/runtime.DHxwUyU3.js","_app/immutable/chunks/index-client.Ce8H6noB.js","_app/immutable/entry/app.DO08x33O.js","_app/immutable/chunks/runtime.DHxwUyU3.js","_app/immutable/chunks/render.DywDSvmS.js","_app/immutable/chunks/disclose-version.CI0S6WHf.js","_app/immutable/chunks/this.m5CV3xlH.js","_app/immutable/chunks/index-client.Ce8H6noB.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
