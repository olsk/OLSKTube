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
			browser.assert.hasClass(OLSKTube, 'OLSKDecor');
		});

		it('sets lang', function () {
			browser.assert.attribute(OLSKTube, 'lang', 'en');
		});

	});

	describe('OLSKTubeEmbed', function test_OLSKTubeEmbed () {

		it('sets id', function () {
			browser.assert.attribute(OLSKTubeEmbed, 'id', 'youtube-player');
		});

		it('sets allow', function () {
			browser.assert.attribute(OLSKTubeEmbed, 'allow', `accelerometer; ${ ParamAutoplay ? 'autoplay; ' : '' }clipboard-write; encrypted-media; gyroscope; picture-in-picture`);
		});

		it('sets src', function () {
			browser.assert.attribute(OLSKTubeEmbed, 'src', `https://www.youtube-nocookie.com/embed/videoseries?rel=0&enablejsapi=1&list=${ ParamPlaylist }&modestbranding=1${ ParamAutoplay ? '&autoplay=1' : '' }`);
		});

	});

	describe('OLSKTubeButtonsPrevious', function test_OLSKTubeButtonsPrevious () {

		it('classes OLSKDecorPressCall', function () {
			browser.assert.hasClass(OLSKTubeButtonsPrevious, 'OLSKDecorPressCall');
		});

		it('sets text', function () {
			browser.assert.text(OLSKTubeButtonsPrevious, 'back');
		});
	
	});

	describe('OLSKTubeButtonsNext', function test_OLSKTubeButtonsNext () {

		it('classes OLSKDecorPressCall', function () {
			browser.assert.hasClass(OLSKTubeButtonsNext, 'OLSKDecorPressCall');
		});

		it('sets text', function () {
			browser.assert.text(OLSKTubeButtonsNext, 'next / zap');
		});
	
	});

});
