let lenisSmoothScroll = () => {
  const lenis = new Lenis();

  lenis.on("scroll", (e) => {
    console.log(e);
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
};
lenisSmoothScroll();

let = cursor = (xscale, yscale) => {
  window.addEventListener("mousemove", function (dets) {
    document.querySelector(
      "#cursor"
    ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
  });
};
cursor();

let timeout;
let = cursorSequeeze = () => {
  let xscale = 1;
  let yscale = 1;

  let xprevious = 0;
  let yprevious = 0;

  window.addEventListener("mousemove", function (dets) {
    clearTimeout(timeout);
    xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - xprevious);
    yscale = gsap.utils.clamp(0.8, 1.2, dets.clientY - yprevious);

    xprevious = dets.clientX;
    yprevious = dets.clientY;

    cursor(xscale, yscale);

    timeout = setTimeout(() => {
      document.querySelector(
        "#cursor"
      ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
    }, 100);
  });
};
cursorSequeeze();

let heroAnimations = () => {
  let tl = gsap.timeline();
  tl.from(".navbar", {
    y: "-10",
    opacity: 0,
    duration: 1.5,
    ease: Expo,
  })

    .to(".boundingElem", {
      y: 0,
      // opacity: 0,
      duration: 2,
      delay: 2,
      ease: Expo.easeInOut,
      stagger: 0.1,
    })

    .to(".smallselfheadings", {
      y: 0,
      // opacity: 0,
      duration: 1,
      delay: -1,
      ease: Expo.easeInOut,
      stagger: 0.1,
    })

    .from(".herofooter", {
      y: "-10",
      opacity: 0,
      duration: 1.5,
      delay: -0.5,
      ease: Expo.easeInOut,
    });
};
heroAnimations();

let comeBack = () => {
  gsap.to("#loader",{
    // y: '-100%',
    x: '100%',
    duration: 2,
    delay: 2,
    ease: Expo.easeInOut
  })
}
comeBack();

let mainHovers = () => {
  document.querySelectorAll(".elem").forEach(function (elem) {
    let rotate = 0;
    let diffrot = 0;
    elem.addEventListener("mousemove", function (details) {
      let diff = details.clientY - elem.getBoundingClientRect().top;
      diffrot = details.clientX - rotate;
      rotate = details.clientX;
      gsap.to(elem.querySelector("img"), {
        opacity: 1,
        ease: Power3,
        top: diff,
        left: details.clientX,
        rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
      });
    });
  
    // mouse leave --------------------------
    elem.addEventListener("mouseleave", function (details) {
      gsap.to(elem.querySelector("img"), {
        opacity: 0,
        ease: Power3,
      });
    });
  });
};
mainHovers();