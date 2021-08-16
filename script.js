-(
  // Polite console greeting
  console.log(
    "%cHi.",
    "color: blue; font-family:monospace; font-size: 40px; font-weight: bolder; text-shadow: 0px 0px 10px gray;"
  )
);
console.error("What are you doing in the console?");
console.log("%chmm...", "font-style: italic; font-size: 5px;");
console.log("%chmm...", "font-style: italic; font-size: 10px;");
console.log("%chmm...", "font-style: italic; font-size: 20px;");
console.log("%cHMM...", "font-style: italic; font-size: 30px;");
console.log("%cHMmmMMmMmMmmMMM!", "font-style: italic; font-size: 40px;");
$(function () {
  // Form
  $(".toggleform").click(function (e) {
    e.preventDefault();
    $(".popup").fadeToggle();
  });
  $("form").submit(function (e) {
    e.preventDefault();

    var $form = $(this);
    $.post($form.attr("action"), $form.serialize()).then(function (e) {
      alert("Thank you!");
      console.log(e);
      $(".popup").fadeOut();
    });
  });
  // Search bar
  const search = $("#search");
  search.keyup(function (e) {
    var term = search.val().toLowerCase();
    var terms = term.split(" ")
    $(".meny ul li").each(function () {
      var name = $(this).find("a").text().toLowerCase()
      var keywords = $(this).find("a").attr("keywords").split(" ") || [];
      var hasKeyword = true;
      for (let t of terms) {
        let hasThisKeyword = false;
        for (let keyword of keywords) {
          if (keyword.includes(t)) {
            hasThisKeyword = true;
          }
        }
        if (!hasThisKeyword && !name.includes(t)) {
          hasKeyword = false;
        }
      }
      if (hasKeyword) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  });
});
// Animation
function intro() {
  var tl = gsap.timeline({ defaults: { duration: 1.4, ease: "power1.in" } });
  tl.set(".about p", { "overflow-y": "hidden" })
    .set(".contactbutton", { display: "block" })
    .from(".hi", { color: "white", duration: 0.3 }, "1.2")
    .from(".comma, .im span", { opacity: 0, duration: 0.2, stagger: 0.1 })
    .from(
      ".letter",
      { y: 5, opacity: 0, stagger: 0.1, ease: "back.out(2)" },
      "+=0.2"
    )
    .from(
      ".period",
      { y: -100, opacity: 0, duration: 1, ease: "bounce.out" },
      "-=0.2"
    )
    .from(".title p", { opacity: 0, duration: 0.5, y: -5 }, "-=0.4")
    .from(".title h1, .title p", {
      x: 30,
      stagger: 0.1,
      ease: "elastic.out(1, 0.75)",
    })
    .from(".links", { y: 20, opacity: 0 }, "<0.28")
    .from(".about", { y: -100, opacity: 0 }, "<")
    .from(".about h2", { opacity: 0 }, "<")
    .from(
      ".about p",
      {
        y: 50,
        opacity: 0,
        duration: 0.7,
      },
      "-=0.3"
    )
    .set(".about p", { "overflow-y": "auto" }, "<")
    .from("footer", { opacity: 0, y: 10, ease: "none" }, "<")
    .from(
      ".links a",
      {
        "padding-top": "20px",
        "padding-bottom": "20px",
        opacity: 0,
        rotation: 5,
        stagger: { amount: 0.2, from: "center" },
        duration: 0.2,
        clearProps: "paddingTop,paddingBottom",
      },
      "<"
    )
    .from(
      ".contactbutton",
      { opacity: 0, scale: 2, duration: 0.5, clearProps: "transform" },
      "<"
    )
    .from("footer>*", { opacity: 0, duration: 0.5 }, "-=0.3")
    .from(".label", { scale: 0, duration: 0.3 }, "<");
  return tl;
}
var main = gsap.timeline();
main.add(intro());
// Meny
Meny.create({
  menuElement: document.querySelector(".meny"),
  contentsElement: document.querySelector(".contents"),
  position: "left",
  height: 200,
  width: 260,
  angle: 30,
  threshold: 40,
  overlap: 0,
  transitionDuration: "0.5s",
  transitionEasing: "ease",
  gradient: "rgba(0,0,0,0.20) 0%, rgba(0,0,0,0.65) 100%)",
  mouse: true,
  touch: true,
});
