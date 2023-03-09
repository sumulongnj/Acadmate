export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.ico"]),
	mimeTypes: {".ico":"image/vnd.microsoft.icon"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.900056dc.js","imports":["_app/immutable/entry/start.900056dc.js","_app/immutable/chunks/index.896ce95c.js","_app/immutable/chunks/singletons.a41f7267.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.b1292fbc.js","imports":["_app/immutable/entry/app.b1292fbc.js","_app/immutable/chunks/index.896ce95c.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js')
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
