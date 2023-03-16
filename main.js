(function(global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
		typeof define === 'function' && define.amd ? define(['exports'], factory) :
			(factory((global.OLSKTube = global.OLSKTube || {})));
}(this, (function(exports) { 'use strict';

	const uRandomElement = function () {
		const array = [].concat(...arguments);
		return array[Date.now() % array.length];
	};

	const uShuffle = function (inputData) {
	  return inputData
	    .map(value => ({ value, sort: Math.random() }))
	    .sort((a, b) => a.sort - b.sort)
	    .map(({ value }) => value);
	};

	const mod = {

		// VALUE

		_ValueAllVideoIDs: [],
		_ValuePreviousVideoIDs: [],
		_ValueCycledVideoIDs: [],
		_ValueNextVideoIDs: [],
		_ValueAutoplay: !!document.querySelector('meta[name="tv"]') || false,
		_ValueDidPlay: false,

		// DATA

		DataNewVideoID () {
			return uRandomElement(mod._ValueAllVideoIDs.filter(function (e) {
				return !mod._ValuePreviousVideoIDs.slice(mod._ValueCycledVideoIDs.length).includes(e);
			}));
		},

		// COMMAND

		CommandNextVideo () {
			if (mod._ValueNextVideoIDs.length) {
				return mod._CommandLoadVideo(mod._ValueNextVideoIDs.pop());
			}

			let item = mod.DataNewVideoID();

			if (!item) {
				mod._ValueCycledVideoIDs.push(...mod._ValuePreviousVideoIDs.slice(mod._ValueCycledVideoIDs.length));
				item = mod.DataNewVideoID();
			}

			mod._ValuePreviousVideoIDs.push(item);

			mod._CommandLoadVideo(item);
		},

		CommandPreviousVideo () {
			mod._ValueNextVideoIDs.push(mod._ValuePreviousVideoIDs.pop());

			mod._CommandLoadVideo(mod._ValuePreviousVideoIDs.slice().pop());
		},

		_CommandLoadVideo (videoId) {
			document.querySelector('.OLSKTubeButtonsPrevious').disabled = mod._ValuePreviousVideoIDs.length === 1;

			if (!mod._ValueAutoplay && !mod._ValueDidPlay) {
				mod._ValueDidPlay = true;

				return mod._ValuePlayer.cueVideoById({
					videoId,
				});
			}

			mod._ValuePlayer.loadVideoById({
				videoId,
			});
		},

		// MESSAGE

		MessageYouTubeAPIReady () {
			mod._ValuePlayer = new YT.Player('youtube-player', {
				events: {
					onReady () {
						if (mod._ValueAllVideoIDs.length) {
							return;
						}
						
						mod._ValueAllVideoIDs = mod._ValuePlayer.getPlaylist();

						mod.CommandNextVideo();

						// mod._ValuePlayer.loadPlaylist(uShuffle(mod._ValueAllVideoIDs));

						// window.setTimeout(function () {
						// 	mod._ValuePlayer.loadPlaylist(uShuffle(mod._ValueAllVideoIDs));
						// }, 3000);
					},

					onStateChange (event) {
						if (event.data == YT.PlayerState.ENDED) {
							return mod.CommandNextVideo();
						}
					},
				},
			});
		},

		// SETUP

		SetupEverything() {
			const tag = document.createElement('script');
			tag.src = 'https://www.youtube.com/iframe_api';
			const firstScriptTag = document.getElementsByTagName('script')[0];
			firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
		},

		// LIFECYCLE

		LifecycleModuleDidLoad() {
			if (typeof window !== 'undefined' && window.location.hostname === 'loc.tests') {
				return;
			}

			mod.SetupEverything();
		},

	};

	Object.assign(exports, {

		OLSKTubeLoad (config, debug = {}) {
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

			if (config.ParamAutoplay) {
				if (typeof config.ParamAutoplay !== 'boolean') {
					throw new Error('OLSKErrorInputNotValid');
				}
			}

			config.ParamParent.innerHTML = `<div class="OLSKTube OLSKDecor" lang="en">
	<iframe class="OLSKTubeEmbed" id="youtube-player" src="https://www.youtube-nocookie.com/embed/videoseries?rel=0&amp;enablejsapi=1&amp;list=${ config.ParamPlaylist }&amp;modestbranding=1${ config.ParamAutoplay ? '&amp;autoplay=1' : '' }" width="100%" height="300" frameborder="0" allow="accelerometer; ${ config.ParamAutoplay ? 'autoplay; ' : '' }clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

	<section class="OLSKTubeButtons">
		<button class="OLSKTubeButtonsPrevious OLSKDecorPressCall" onclick="OLSKTube.CommandPreviousVideo()" disabled>previous</button>
		<button class="OLSKTubeButtonsNext OLSKDecorPressCall" onclick="OLSKTube.CommandNextVideo()">new snippet</button>
	</section>
</div>`;

			window.onYouTubeIframeAPIReady = mod.MessageYouTubeAPIReady;
			
			mod.LifecycleModuleDidLoad();
		},

	}, mod);

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

})));
