const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('OLSKTube_Misc', function () {

	const ParamPlaylist = Math.random().toString();
	const ParamAutoplay = uRandomElement(true, false);

	before(function() {
		return browser.OLSKVisit(kDefaultRoute, {
			ParamPlaylist,
			ParamAutoplay,
		});
	});

	describe('OLSKTube', function test_OLSKTube() {

		it('classes OLSKDecor', function () {
			return browser.assert.hasClass(OLSKTube, 'OLSKDecor');
		});

		it('sets lang', function () {
			return browser.assert.attribute(OLSKTube, 'lang', 'en');
		});

	});

	describe('OLSKTubeEmbed', function test_OLSKTubeEmbed () {

		it('sets id', function () {
			return browser.assert.attribute(OLSKTubeEmbed, 'id', 'youtube-player');
		});

		it('sets allow', function () {
			return browser.assert.attribute(OLSKTubeEmbed, 'allow', `accelerometer; ${ ParamAutoplay ? 'autoplay; ' : '' }clipboard-write; encrypted-media; gyroscope; picture-in-picture`);
		});

		it('sets src', function () {
			return browser.assert.attribute(OLSKTubeEmbed, 'src', `https://www.youtube-nocookie.com/embed/videoseries?rel=0&enablejsapi=1&list=${ ParamPlaylist }&modestbranding=1${ ParamAutoplay ? '&autoplay=1' : '' }`);
		});

	});

	describe('OLSKTubeButtonsPrevious', function test_OLSKTubeButtonsPrevious () {

		it('classes OLSKDecorPressCall', function () {
			return browser.assert.hasClass(OLSKTubeButtonsPrevious, 'OLSKDecorPressCall');
		});

		it('sets text', function () {
			return browser.assert.text(OLSKTubeButtonsPrevious, 'back');
		});
	
	});

	describe('OLSKTubeButtonsNext', function test_OLSKTubeButtonsNext () {

		it('classes OLSKDecorPressCall', function () {
			return browser.assert.hasClass(OLSKTubeButtonsNext, 'OLSKDecorPressCall');
		});

		it('sets text', function () {
			return browser.assert.text(OLSKTubeButtonsNext, 'next / zap');
		});
	
	});

});
