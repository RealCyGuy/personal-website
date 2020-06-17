window.onload = function start() {
  var zeros = document.querySelectorAll(".zero");
  for (i = 0; i < zeros.length; i++) {
    zeros[i].classList.remove("zero");
  }
  // Polite console greeting
  console.log(
    "%cHi.",
    "color: blue; font-family:monospace; font-size: 40px; font-weight: bolder; text-shadow: 0px 0px 10px gray;"
  );
  console.error("What are you doing in the console?");
  console.log("%chmm...", "font-style: italic; font-size: 5px;");
  console.log("%chmm...", "font-style: italic; font-size: 10px;");
  console.log("%chmm...", "font-style: italic; font-size: 20px;");
  console.log("%cHMM...", "font-style: italic; font-size: 30px;");
  console.log("%cHMmmMMmMmMmmMMM!", "font-style: italic; font-size: 40px;");
  // Animation
  function intro() {
    var tl = gsap.timeline({ defaults: { duration: 1 } });
    tl.to(".hi", { color: "#72767d", duration: 0.3 }, "1.2")
      .from(".comma, .im span", { opacity: 0, duration: 0.2, stagger: 0.1 })
      .from(
        ".letter",
        { y: 5, opacity: 0, stagger: 0.1, ease: "back.out(1.7)" },
        "+=0.2"
      )
      .from(".period", { y: -100, opacity: 0, ease: "bounce.out" }, "+=0.4")
      .from(".title p", { opacity: 0, duration: 0.5 })
      .from(".title h1, .title p", {
        x: 30,
        stagger: 0.1,
        ease: "elastic.out(1, 0.75)",
      })
      .from(".links", { y: 20, opacity: 0 }, "<")
      .from(
        ".links a",
        { x: 50, opacity: 0, stagger: 0.1, duration: 0.3 },
        "+=0.2"
      )
      .from(".about", { y: -100, opacity: 0 });
    return tl;
  }
  var main = gsap.timeline();
  main.add(intro());
};
