const form = document.querySelector("#activity-quiz");
const results = document.querySelector("#activity-results");
const summary = document.querySelector("#results-summary");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const selected = form.querySelector(
    'input[name="neighborhood"]:checked'
  );

  if (!selected) return;

  const matches = activities.filter(function (activity) {
    return selected.value === "any" ||
      activity.neighborhood === selected.value;
  });

  results.replaceChildren();

  summary.textContent = matches.length === 0
    ? "No ideas here yet. Try another neighborhood."
    : `${matches.length} ${matches.length === 1 ? "idea" : "ideas"} to explore.`;

  matches.forEach(function (activity) {
    const card = document.createElement("article");
    card.className = "activity-card";

    const title = document.createElement("h2");
    title.textContent = activity.title;

    const location = document.createElement("p");
    location.className = "activity-location";
    location.textContent = `${activity.place} · ${activity.address}`;

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
    stopLink.textContent = `${stop.name} — ${stop.address}`;

    stopRow.append(stopLink);
    stopsList.append(stopRow);
  });

  card.append(stopsList);
  link.textContent = "Find the first stop on Google Maps →";
}

card.append(note, link);
results.append(card);
  });
});

form.addEventListener("change", function () {
  results.replaceChildren();
  summary.textContent = "";
});