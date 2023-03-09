export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.ico"]),
	mimeTypes: {".ico":"image/vnd.microsoft.icon"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.900056dc.js","imports":["_app/immutable/entry/start.900056dc.js","_app/immutable/chunks/index.896ce95c.js","_app/immutable/chunks/singletons.a41f7267.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.b1292fbc.js","imports":["_app/immutable/entry/app.b1292fbc.js","_app/immutable/chunks/index.896ce95c.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js'),
			() => import('./nodes/8.js'),
			() => import('./nodes/9.js'),
			() => import('./nodes/10.js'),
			() => import('./nodes/11.js'),
			() => import('./nodes/12.js')
		],
		routes: [
			{
				id: "/(Dashboard)",
				pattern: /^\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/GradeAlerts",
				pattern: /^\/GradeAlerts\/?$/,
				params: [],
				page: { layouts: [0,3], errors: [1,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/GradeAlerts/paul",
				pattern: /^\/GradeAlerts\/paul\/?$/,
				params: [],
				page: { layouts: [0,3], errors: [1,,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/Grades",
				pattern: /^\/Grades\/?$/,
				params: [],
				page: { layouts: [0,4], errors: [1,,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/MyCurriculum",
				pattern: /^\/MyCurriculum\/?$/,
				params: [],
				page: { layouts: [0,5], errors: [1,,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/Requirements",
				pattern: /^\/Requirements\/?$/,
				params: [],
				page: { layouts: [0,6], errors: [1,,], leaf: 12 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
