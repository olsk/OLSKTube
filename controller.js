const mod = {

	OLSKControllerRoutes  () {
		return [{
			OLSKRoutePath: '/',
			OLSKRouteMethod: 'get',
			OLSKRouteSignature: 'OLSKTubeStubRoute',
			OLSKRouteFunction (req, res, next) {
				return res.OLSKExpressLayoutRender(require('path').join(__dirname, 'stub-view'), {
					OLSKTubeConfig: Object.assign(require('./mocha-start.js').uConfig(), Object.fromEntries((new URLSearchParams(req.query)).entries())),
				});
			},
		}];
	},

	OLSKControllerStaticAssetFiles () {
		return [
			'main.js',
		];
	},

};

Object.assign(exports, mod);
