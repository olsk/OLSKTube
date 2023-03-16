const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('OLSKTube_Misc', function () {

	before(function() {
		return browser.OLSKVisit(kDefaultRoute);
	});

	describe('OLSKTube', function() {

		it('classes OLSKDecor', function () {
			browser.assert.hasClass(OLSKTube, 'OLSKDecor');
		});

		it('sets lang', function () {
			browser.assert.attribute(OLSKTube, 'lang', 'en');
		});

	});

});
