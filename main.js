(function(global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
		typeof define === 'function' && define.amd ? define(['exports'], factory) :
			(factory((global.OLSKTube = global.OLSKTube || {})));
}(this, (function(exports) { 'use strict';

	const mod = {

		OLSKTubeLoad (config) {
			if (typeof config !== 'object' || config === null) {
				throw new Error('OLSKErrorInputNotValid');
			}

			if (typeof config.ParamParent !== 'object' || config.ParamParent === null) {
				throw new Error('OLSKErrorInputNotValid');
			}

			if (typeof config.ParamPlaylist !== 'string') {
				throw new Error('OLSKErrorInputNotValid');
			}

			if (!config.ParamPlaylist.trim().length) {
				throw new Error('OLSKErrorInputNotValid');
			}

			const target = document.createElement('div');
			
			config.ParamParent.appendChild(target);
			
			target.innerHTML = `<div class="OLSKTube OLSKDecor" lang="en">
</div>`;
		},

	};

	Object.assign(exports, mod);

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

})));
