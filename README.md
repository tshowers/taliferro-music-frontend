# Taliferro Music

Static player frontend for [Taliferro Music Radio](https://music.taliferro.com) —
plain HTML/CSS/JS, no build step. Plays the live HLS stream from the
[radio engine backend](https://github.com/tshowers/Taliferro-music-radio-engine)
via [hls.js](https://github.com/video-dev/hls.js), with native HLS as a fallback
where hls.js isn't supported.

## Structure

```
public/
  index.html       Player page (hls.js wiring, channel switching)
  about.html, privacy.html, 404.html
  install/          iOS ad-hoc OTA install page (manifest.plist + index.html)
  css/ js/ fonts/ img/ assets/
```

`install/manifest.plist` points at `TaliferroMusic.ipa`, which is not checked
into this repo — dropped into `public/install/` locally before deploying
whenever there's a new ad-hoc build to distribute.

## Deploying

```bash
cp .firebaserc.example .firebaserc   # fill in your Firebase project ID, first time only
firebase deploy --only hosting:taliferro-music
```
