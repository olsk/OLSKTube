const { throws, deepEqual } = require('assert');

const mod = require('./main.js');

describe('OLSKTubeLoad', function test_OLSKTubeLoad() {

	it('throws if not object', function () {
		throws(function () {
			mod.OLSKTubeLoad(null);
		}, /OLSKErrorInputNotValid/);
	});

	it('throws if ParamParent not object', function () {
		throws(function () {
			mod.OLSKTubeLoad(uConfig({
				ParamParent: null,
			}));
		}, /OLSKErrorInputNotValid/);
	});

	it('throws if ParamPlaylist not string', function () {
		throws(function () {
			mod.OLSKTubeLoad(uConfig({
				ParamPlaylist: true,
			}));
		}, /OLSKErrorInputNotValid/);
	});

	it('throws if ParamPlaylist not filled', function () {
		throws(function () {
			mod.OLSKTubeLoad(uConfig({
				ParamPlaylist: ' ',
			}));
		}, /OLSKErrorInputNotValid/);
	});

});
