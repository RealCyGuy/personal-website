AOS.init();
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
function colordigit() {
  return (Math.random() * (250 - 200) + 200).toString();
}
function links() {
  if ($(window).scrollTop() >= $("#title").innerHeight()) {
    $("#links").addClass("fixed-links");
  } else {
    $("#links").removeClass("fixed-links");
  }
}

$(function () {
  const color_dark = $(":root").css("--color-dark");
  const color_primary = $(":root").css("--color-primary");
  const color_secondary = $(":root").css("--color-secondary");
  const color_thirdarary = $(":root").css("--color-thirdarary");

  var pattern = Trianglify({
    height: $("#top").innerHeight(),
    width: $("#top").innerWidth(),
    cell_size: 40,
    x_colors: shuffle([
      color_dark,
      color_primary,
      color_secondary,
      color_thirdarary,
    ]),
  });

  $("#top").css("background-image", "url(" + pattern.png() + ")");

  $(".divider>svg").css(
    "animation",
    "animateWave 2s cubic-bezier(0.23, 1, 0.32, 1) 1s forwards"
  );
  links();
  $(".preloader").fadeOut();
  $("body").css("overflow", "visible");
  $(window).scroll(links);
  function changecolour() {
    setTimeout(changecolour, 2500);
    setTimeout(function () {
      $(":root").css(
        "--cssans-primary",
        colordigit() + "," + colordigit() + "," + colordigit()
      );
    }, 500);
    setTimeout(function () {
      $(":root").css(
        "--cssans-secondary",
        colordigit() + "," + colordigit() + "," + colordigit()
      );
    }, 1000);
    setTimeout(function () {
      $(":root").css(
        "--cssans-accent1",
        colordigit() + "," + colordigit() + "," + colordigit()
      );
    }, 1500);
    setTimeout(function () {
      $(":root").css(
        "--cssans-accent2",
        colordigit() + "," + colordigit() + "," + colordigit()
      );
    }, 2000);
    setTimeout(function () {
      $(":root").css(
        "--cssans-accent3",
        colordigit() + "," + colordigit() + "," + colordigit()
      );
    }, 2500);
  }
  changecolour();
});
