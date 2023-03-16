const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

Object.entries({
	OLSKTube: '.OLSKTube',
	OLSKTubeEmbed: '.OLSKTubeEmbed',
	OLSKTubeButtonsPrevious: '.OLSKTubeButtonsPrevious',
	OLSKTubeButtonsNext: '.OLSKTubeButtonsNext',
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
	
	it('shows OLSKTubeEmbed', function() {
		browser.assert.elements(OLSKTubeEmbed, 1);
	});

	it('shows OLSKTubeButtonsPrevious', function () {
		browser.assert.elements(OLSKTubeButtonsPrevious, 1);
	});

	it('shows OLSKTubeButtonsNext', function () {
		browser.assert.elements(OLSKTubeButtonsNext, 1);
	});

});
