const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

Object.entries({
	OLSKTube: '.OLSKTube',
}).map(function (e) {
	return global[e.shift()] = e.pop();
});

describe('OLSKTube_Access', function () {

	before(function() {
		return browser.OLSKVisit(kDefaultRoute);
	});

	it('shows OLSKTube', function () {
		browser.assert.elements(OLSKTube, 1);
	});

});
