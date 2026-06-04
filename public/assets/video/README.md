# Video Slots — Mars & Moon

Place `HERO_VIDEO.mp4` and `HERO_VIDEO.webm` here (plus a poster frame at
`../images/HERO_VIDEO-poster.jpg`) to swap the hero from image to film.

Hero video markup (autoplay, muted, loop, playsinline):

```jsx
<video autoPlay muted loop playsInline poster="/assets/images/HERO_VIDEO-poster.jpg" className="mm-media">
  <source src="/assets/video/HERO_VIDEO.mp4" type="video/mp4" />
  <source src="/assets/video/HERO_VIDEO.webm" type="video/webm" />
</video>
```
