const mod = {

	OLSKControllerRoutes  () {
		return [{
			OLSKRoutePath: '/',
			OLSKRouteMethod: 'get',
			OLSKRouteSignature: 'OLSKTubeStubRoute',
			OLSKRouteFunction (req, res, next) {
				return res.OLSKExpressLayoutRender(require('path').join(__dirname, 'stub-view'), {
					OLSKTubeConfig: Object.assign(require('./mocha-start.js').uConfig(), Object.fromEntries(Array.from((new URLSearchParams(req.query)).entries()).map(function (e) {
						if (e[0] === 'ParamAutoplay') {
							e[1] = JSON.parse(e[1]);
						}

						return e;
					}))),
				});
			},
		}];
	},

	OLSKControllerStaticAssetFiles () {
		return [
			'main.js',
		];
	},

	OLSKControllerSharedStaticAssetFolders () {
		return [
			'node_modules',
		];
	},

};

Object.assign(exports, mod);
