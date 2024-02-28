# OLSKTube

Video zapper / randomizer from YouTube playlists, used to power [rosano.ca/tv](https://rosano.ca/tv) and [tube.moos.garden](https://tube.moos.garden).

## Setup

```html
<!-- 1. include dependencies -->
<link rel="stylesheet" type="text/css" href="https://olsk.rosano.ca/OLSKDecor/master/ui-style.css">
<link rel="stylesheet" type="text/css" href="https://olsk.rosano.ca/OLSKTube/master/ui-style.css">
<script src="https://olsk.rosano.ca/OLSKTube/master/main.js"></script>

<!-- 2. create parent element -->
<div class="alfa-bravo-charlie"></div>

<!-- 3. call OLSKTubeLoad -->
<script type="text/javascript">
OLSKTube.OLSKTubeLoad({
	ParamParent: document.querySelector('.alfa-bravo-charlie'),
	ParamPlaylist: 'YOUR_PLAYLIST_ID', // ID from any YouTube playlist URL starting with https://www.youtube.com/playlist?list=…
	ParamAutoplay: true, // default: false
});
</script>
```

## Questions

Feel free to reach out on [Mastodon](https://rosano.ca/mastodon) or [Twitter](https://rosano.ca/twitter).
