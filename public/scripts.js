$(document).ready(function() {
  var currentQuote = null;

  var randomizeColor = function() {
    var colors = [180, 163, 205, 200, 168, 357, 297, 187, 319];
    var randomColor = colors[Math.floor(Math.random()*colors.length)];

    $("body").css({
      background: 'hsl(' + randomColor + ', 50%, 55%)'
    });
  }

  var randomizeQuote = function() {
    do {
      var randomQuote = quotes[Math.floor(Math.random()*quotes.length)];
    } while (currentQuote && randomQuote.quote == currentQuote.quote);

    currentQuote = randomQuote;

    $(".quote").text(randomQuote.quote);
    $(".author").text(randomQuote.author);
  }

  $("body, blockquote").on("click", function() {
    randomizeColor();
    randomizeQuote();
  });

  randomizeColor();
  randomizeQuote();

  if(window.location.hash == "#tv") {
    $(".links").hide();

    var interval = setInterval(function() {
      randomizeColor();
      randomizeQuote();
    }, 30 * 1000);
  }
});
