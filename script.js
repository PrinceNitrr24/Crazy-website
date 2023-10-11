Shery.imageEffect("#back", {
  style: 2,
  config: {
    a: { value: 2, range: [0, 30] },
    b: { value: 0.75, range: [-1, 1] },
    aspect: { value: 1.9626865683781616 },
    gooey: { value: true },
    infiniteGooey: { value: true },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1.5, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: true },
    maskVal: { value: 1.4, range: [1, 5] },
    scrollType: { value: 0 },
    geoVertex: { range: [1, 64], value: 1 },
    noEffectGooey: { value: true },
    onMouse: { value: 1 },
    noise_speed: { value: 1.12, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2] },
    discard_threshold: { value: 0.5, range: [0, 1] },
    antialias_threshold: { value: 0, range: [0, 0.1] },
    noise_height: { value: 0.5, range: [0, 2] },
    noise_scale: { value: 10.28, range: [0, 100] },
  },
  gooey: true,
});
var elems = document.querySelectorAll(".elem");
elems.forEach(function (elem) {
  var h1s = elem.querySelectorAll("h1");
  var index = 0;
  var animating = false;

  document.querySelector("#main").addEventListener("click", function () {
    if (!animating) {
      animating = true;

      // Animate the current h1 off-screen
      gsap.to(h1s[index], {
        top: "-=100%",
        ease: Expo.easeInOut,
        duration: 1,
        onComplete: function () {
          gsap.set(this.target, { top: "100%" });
        },
      });

      // Increment the index or reset to 0
      index = index === h1s.length - 1 ? 0 : index + 1;

      // Animate the next h1 back on-screen
      gsap.to(h1s[index], {
        top: "0", // Assuming you want to slide it back on-screen
        ease: Expo.easeInOut,
        duration: 1,
        onComplete: function () {
          animating = false;
        },
      });
    }
  });
});
