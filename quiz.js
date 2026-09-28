const form = document.querySelector("#hobby-quiz");
const result = document.querySelector("#quiz-result");

const suggestions = {
  creative: {
    short: "Try a quick sketch! Spend 15 minutes drawing an everyday object.",
    long: "Try collage! Arrange paper scraps into a picture or abstract design."
  },
  outdoor: {
    short: "Try birdwatching! Spend 15 minutes noticing birds from a window or outside.",
    long: "Try a nature walk! Explore a nearby park and notice plants, birds, and textures."
  },
  music: {
    short: "Try singing! Practice one verse of a song you love.",
    long: "Try body percussion! Learn a rhythm using claps and taps, then build on it."
  }
};

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const interest = form.querySelector('input[name="interest"]:checked');
  const time = form.querySelector('input[name="time"]:checked');

  if (!interest || !time) {
    result.textContent = "Please answer both questions to get your suggestion.";
    return;
  }

  result.textContent = suggestions[interest.value][time.value];
});