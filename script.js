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
// Form
$(function () {
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
});
// Animation
function intro() {
  var tl = gsap.timeline({ defaults: { duration: 1 } });
  tl.set(".about p", { "overflow-y": "hidden" })
    .set(".contactbutton", { display: "block" })
    .from(".hi", { color: "white", duration: 0.3 }, "1.2")
    .from(".comma, .im span", { opacity: 0, duration: 0.2, stagger: 0.1 })
    .from(
      ".letter",
      { y: 5, opacity: 0, stagger: 0.1, ease: "back.out(2)" },
      "+=0.2"
    )
    .from(".period", { y: -100, opacity: 0, ease: "bounce.out" }, "+=0.4")
    .from(".title p", { opacity: 0, duration: 0.5, y: -5 }, "-=0.4")
    .from(".title h1, .title p", {
      x: 30,
      stagger: 0.1,
      ease: "elastic.out(1, 0.75)",
    })
    .from(".contactbutton", { opacity: 0 }, "<0.28")
    .from(".links", { y: 20, opacity: 0 }, "<")
    .from(".links a", {
      "padding-top": "20px",
      "padding-bottom": "20px",
      opacity: 0,
      stagger: { amount: 0.2, from: "center" },
      duration: 0.2,
    })
    .from(".about", { y: -100, opacity: 0 })
    .from(".about h2", { opacity: 0 })
    .from(".about p", {
      y: 50,
      opacity: 0,
      duration: 0.7
    }, "-=0.3")
    .set(".about p", { "overflow-y": "auto" })
    .from("footer", { opacity: 0, y: 10 }, "<")
    .from("footer>*", { opacity: 0, duration: 0.5 }, "-=0.3");
  return tl;
}
var main = gsap.timeline();
main.add(intro());
