const form = document.querySelector("#activity-quiz");
const results = document.querySelector("#activity-results");
const summary = document.querySelector("#results-summary");

function showResults() {
  const neighborhood = form.querySelector(
    'input[name="neighborhood"]:checked'
  );

  const mood = form.querySelector(
    'input[name="mood"]:checked'
  );

  if (!neighborhood || !mood) return;

  const matches = activities.filter(function (activity) {
    const isActive = activity.active !== false;

    const matchesNeighborhood =
      neighborhood.value === "any" ||
      activity.neighborhood === neighborhood.value;

    const matchesMood =
      mood.value === "any" ||
      activity.category === mood.value;

    return isActive && matchesNeighborhood && matchesMood;
  });

  results.replaceChildren();

  if (matches.length === 0) {
  summary.textContent = "No matching ideas yet.";

  const emptyCard = document.createElement("section");
  emptyCard.className = "empty-result";

  const heading = document.createElement("h2");
  heading.textContent = "A little change of plans?";

  const message = document.createElement("p");
  message.textContent =
    "We haven’t added an idea for this combination yet. Try another neighborhood, or see what else you could do in your selected area.";

  const showMore = document.createElement("button");
  showMore.type = "button";
  showMore.className = "button";
  showMore.textContent = "Explore other moods →";

  showMore.addEventListener("click", function () {
    form.querySelector(
      'input[name="mood"][value="any"]'
    ).checked = true;

    showResults();
  });

  emptyCard.append(heading, message, showMore);
  results.append(emptyCard);
  return;
}

  summary.textContent =
    `${matches.length} ${matches.length === 1 ? "idea" : "ideas"} to explore.`;

  matches.forEach(function (activity) {
    const card = document.createElement("article");
    card.className = "activity-card";

    const title = document.createElement("h2");
    title.textContent = activity.title;

    const location = document.createElement("p");
    location.className = "activity-location";
    location.textContent =
      `${activity.place} · ${activity.address}`;

    const description = document.createElement("p");
    description.textContent = activity.description;

    const note = document.createElement("p");
    note.className = "activity-note";
    note.textContent = activity.visitNote;

    const link = document.createElement("a");
    link.className = "button";
    link.href = activity.website;
    link.textContent = "Check visiting details →";

    card.append(title, location, description);

    if (activity.stops) {
      const stopsList = document.createElement("div");
      stopsList.className = "activity-stops";

      activity.stops.forEach(function (stop) {
        const stopRow = document.createElement("p");
        const stopLink = document.createElement("a");

        stopLink.href = stop.website;
        stopLink.textContent =
          `${stop.name} — ${stop.address}`;

        stopRow.append(stopLink);
        stopsList.append(stopRow);
      });

      card.append(stopsList);
      link.textContent = "Find the first stop on Google Maps →";
    }

    card.append(note, link);
    results.append(card);
  });
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  showResults();
});

form.addEventListener("change", function () {
  results.replaceChildren();
  summary.textContent = "";
});