const form = document.querySelector("#activity-quiz");
const results = document.querySelector("#activity-results");
const summary = document.querySelector("#results-summary");
const resultsSection = document.querySelector(".quiz-results-section");
const selectionSummary = document.querySelector("#selection-summary");

const progressSteps = document.querySelectorAll(".progress-step");
const backButtons = document.querySelectorAll(".quiz-back");
const startOverButton = document.querySelector(".start-over");

const featuredResult = document.querySelector("#featured-result");
const anotherResultButton = document.querySelector("#another-result");


/* =========================================================
   QUIZ STATE
   ========================================================= */

let currentStep = 1;
let currentMatches = [];
let currentFeaturedIndex = 0;


/* =========================================================
   DISPLAY LABELS
   ========================================================= */

const neighborhoodLabels = {
  "east-village": "East Village",
  "williamsburg": "Williamsburg",
  "bushwick": "Bushwick",
  "anywhere": "Anywhere",
  "park-slope": "Park Slope",
  "any": "Any neighborhood"
};

const moodLabels = {
  "create": "Make something",
  "browse": "Browse around",
  "wander": "Wander",
  "hangout": "Hang out",
  "watch": "See something",
  "any": "Anything"
};

const energyLabels = {
  "low": "Keep it easy",
  "medium": "Medium energy",
  "high": "Give me a whole thing"
};


/* =========================================================
   QUIZ STEPS
   ========================================================= */

function showStep(stepNumber) {
  currentStep = stepNumber;

  document.querySelectorAll(".quiz-step").forEach(function (step) {
    const isCurrentStep =
      Number(step.dataset.step) === stepNumber;

    step.hidden = !isCurrentStep;
    step.classList.toggle("active", isCurrentStep);
  });

  progressSteps.forEach(function (step) {
    const stepNumberValue =
      Number(step.dataset.progress);

    step.classList.toggle(
      "active",
      stepNumberValue === stepNumber
    );

    step.classList.toggle(
      "complete",
      stepNumberValue < stepNumber
    );
  });

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


/* =========================================================
   FEATURED RECOMMENDATION
   ========================================================= */

function renderFeaturedResult(activity) {
  featuredResult.replaceChildren();

  const selectedEnergy = form.querySelector(
    'input[name="energy"]:checked'
  );

  const card = document.createElement("article");
  card.className = "featured-card";


  /* Top row */

  const topRow = document.createElement("div");
  topRow.className = "featured-top-row";

  const label = document.createElement("p");
  label.className = "featured-label";
  label.textContent = "YOUR MOVE";

  const neighborhood = document.createElement("p");
  neighborhood.className = "featured-neighborhood";
  neighborhood.textContent =
    neighborhoodLabels[
      activity.neighborhood
    ].toUpperCase();

  topRow.append(label, neighborhood);


  /* Title */

  const title = document.createElement("h2");
  title.className = "featured-title";
  title.textContent = activity.title;


  /* Location */

  const location = document.createElement("p");
  location.className = "featured-location";
  location.textContent =
    `${activity.place} · ${activity.address}`;


  /* Description */

  const description = document.createElement("p");
  description.className = "featured-description";
  description.textContent = activity.description;

  /* Multiple stops */

let stopsBlock = null;

if (activity.stops && activity.stops.length > 0) {

  stopsBlock = document.createElement("div");
  stopsBlock.className = "featured-stops";

  const stopsButton = document.createElement("button");
  stopsButton.type = "button";
  stopsButton.className = "stops-toggle";

  const stopCount = activity.stops.length;

  stopsButton.textContent =
    `See ${stopCount} ${stopCount === 1 ? "stop" : "stops"} ↓`;

  const stopsList = document.createElement("div");
  stopsList.className = "stops-list";
  stopsList.hidden = true;

  activity.stops.forEach(function (stop) {

    const stopItem = document.createElement("div");
    stopItem.className = "stop-item";

    const stopInfo = document.createElement("div");
    stopInfo.className = "stop-info";

    const stopName = document.createElement("p");
    stopName.className = "stop-name";
    stopName.textContent = stop.name;

    const stopAddress = document.createElement("p");
    stopAddress.className = "stop-address";
    stopAddress.textContent = stop.address;

    stopInfo.append(
      stopName,
      stopAddress
    );

    const stopLink = document.createElement("a");
    stopLink.className = "stop-link";
    stopLink.href = stop.website;
    stopLink.target = "_blank";
    stopLink.rel = "noopener noreferrer";
    stopLink.textContent = "↗";
    stopLink.setAttribute(
      "aria-label",
      `Visit ${stop.name} website`
    );

    stopItem.append(
      stopInfo,
      stopLink
    );

    stopsList.append(stopItem);
  });

  stopsButton.addEventListener("click", function () {

    const opening = stopsList.hidden;

    stopsList.hidden = !opening;

    stopsButton.textContent = opening
      ? "Hide stops ↑"
      : `See ${stopCount} ${stopCount === 1 ? "stop" : "stops"} ↓`;
  });

  stopsBlock.append(
    stopsButton,
    stopsList
  );
}
/* Multiple locations */

let locationsBlock = null;

if (activity.locations && activity.locations.length > 0) {

  locationsBlock = document.createElement("div");
  locationsBlock.className = "featured-locations";

  const locationsButton = document.createElement("button");
  locationsButton.type = "button";
  locationsButton.className = "locations-toggle";

  const locationCount = activity.locations.length;

  locationsButton.textContent =
    `See ${locationCount} locations ↓`;

  const locationsList = document.createElement("div");
  locationsList.className = "locations-list";
  locationsList.hidden = true;

  activity.locations.forEach(function (spot) {

    const locationItem = document.createElement("div");
    locationItem.className = "location-item";

    const locationName = document.createElement("p");
    locationName.className = "location-name";
    locationName.textContent = spot.name || spot.place;

    locationItem.append(locationName);

    if (spot.address) {
      const address = document.createElement("p");
      address.className = "location-address";
      address.textContent = spot.address;
      locationItem.append(address);
    }

    if (spot.website) {
      const locationLink = document.createElement("a");

      locationLink.href = spot.website;
      locationLink.target = "_blank";
      locationLink.rel = "noopener noreferrer";

      locationLink.className = "location-link";
      locationLink.textContent = "details ↗";

      locationItem.append(locationLink);
    }

    locationsList.append(locationItem);
  });

  locationsButton.addEventListener("click", function () {

    const isOpen = !locationsList.hidden;

    locationsList.hidden = isOpen;

    locationsButton.textContent = isOpen
      ? `See ${locationCount} locations ↓`
      : `Hide locations ↑`;
  });

  locationsBlock.append(
    locationsButton,
    locationsList
  );
}
  /* Tags */

  const tags = document.createElement("div");
  tags.className = "featured-tags";

  const categoryTag = document.createElement("span");
  categoryTag.className = "result-tag";
  categoryTag.textContent =
    moodLabels[activity.category].toUpperCase();

  tags.append(categoryTag);

  if (selectedEnergy) {
    const energyTag = document.createElement("span");
    energyTag.className = "result-tag";
    energyTag.textContent =
      energyLabels[selectedEnergy.value].toUpperCase();

    tags.append(energyTag);
  }


  /* Visiting note */

  const note = document.createElement("p");
  note.className = "featured-note";
  note.textContent = activity.visitNote;


  /* External link */

  const link = document.createElement("a");
  link.className = "featured-button";
  link.href = activity.website;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.textContent = "Check visiting details ↗";


  /* Build featured card */

card.append(
  topRow,
  title,
  location,
  description
);

if (stopsBlock) {
  card.append(stopsBlock);
}

card.append(
  tags,
  note,
  link
);

  featuredResult.append(card);


  /* Update backup recommendations */

  renderBackupResults();
}


/* =========================================================
   BACKUP RECOMMENDATIONS
   ========================================================= */

function renderBackupResults() {
  results.replaceChildren();

  if (currentMatches.length <= 1) {
    return;
  }

  const featuredActivity =
    currentMatches[currentFeaturedIndex];

  const backups = currentMatches
    .filter(function (activity) {
      return activity.id !== featuredActivity.id;
    })
    .slice(0, 3);

  if (backups.length === 0) {
    return;
  }


  /* Backup section */

  const section = document.createElement("section");
  section.className = "backup-results";

  const label = document.createElement("p");
  label.className = "backup-label";
  label.textContent = "OTHER GOOD OPTIONS";

  const heading = document.createElement("h2");
  heading.className = "backup-heading";
  heading.textContent =
    "A few backups, just in case.";

  const grid = document.createElement("div");
  grid.className = "backup-grid";


 backups.forEach(function (activity) {

  const hasStops =
    activity.stops &&
    activity.stops.length > 0;

  /*
   * Single-location activities remain links.
   * Multi-stop activities become expandable articles.
   */
  const card = document.createElement(
    hasStops ? "article" : "a"
  );

  card.className = "backup-card";

  if (!hasStops) {
    card.href = activity.website;
    card.target = "_blank";
    card.rel = "noopener noreferrer";
  }


  /* ---------- Top row ---------- */

  const top = document.createElement("div");
  top.className = "backup-card-top";

  const neighborhood =
    document.createElement("span");

  neighborhood.className =
    "backup-neighborhood";

  neighborhood.textContent =
    neighborhoodLabels[
      activity.neighborhood
    ].toUpperCase();


  const arrow =
    document.createElement("span");

  arrow.className = "backup-arrow";

  /*
   * Normal card = external-link arrow
   * Multi-stop card = expand arrow
   */
  arrow.textContent = hasStops ? "↓" : "↗";

  top.append(neighborhood, arrow);


  /* ---------- Title ---------- */

  const title =
    document.createElement("h3");

  title.textContent = activity.title;


  /* ---------- Place ---------- */

  const place =
    document.createElement("p");

  place.className = "backup-place";
  place.textContent = activity.place;


  /* ---------- Description ---------- */

  const description =
    document.createElement("p");

  description.className =
    "backup-description";

  description.textContent =
    activity.description;


  /* ---------- Build basic card ---------- */

  card.append(
    top,
    title,
    place,
    description
  );


  /* =================================================
     MULTIPLE STOPS
     ================================================= */

  if (hasStops) {

    card.classList.add("backup-card-expandable");

    const stopsList =
      document.createElement("div");

    stopsList.className =
      "backup-stops-list";

    stopsList.hidden = true;


    activity.stops.forEach(function (stop) {

      const stopItem =
        document.createElement("div");

      stopItem.className =
        "backup-stop-item";


      const stopInfo =
        document.createElement("div");

      stopInfo.className =
        "backup-stop-info";


      const stopName =
        document.createElement("p");

      stopName.className =
        "backup-stop-name";

      stopName.textContent =
        stop.name;


      const stopAddress =
        document.createElement("p");

      stopAddress.className =
        "backup-stop-address";

      stopAddress.textContent =
        stop.address;


      stopInfo.append(
        stopName,
        stopAddress
      );


      const stopLink =
        document.createElement("a");

      stopLink.className =
        "backup-stop-link";

      stopLink.href =
        stop.website;

      stopLink.target =
        "_blank";

      stopLink.rel =
        "noopener noreferrer";

      stopLink.textContent = "↗";

      stopLink.setAttribute(
        "aria-label",
        `Visit ${stop.name} website`
      );


      /*
       * Don't let clicking the individual
       * website link collapse the card.
       */
      stopLink.addEventListener(
        "click",
        function (event) {
          event.stopPropagation();
        }
      );


      stopItem.append(
        stopInfo,
        stopLink
      );

      stopsList.append(stopItem);
    });


    /* ---------- Expand / collapse ---------- */

    card.addEventListener(
      "click",
      function () {

        const opening =
          stopsList.hidden;

        stopsList.hidden =
          !opening;

        arrow.textContent =
          opening ? "↑" : "↓";

        card.classList.toggle(
          "open",
          opening
        );
      }
    );


    card.append(stopsList);
  }


  grid.append(card);
});


  /* Build backup section */

  section.append(
    label,
    heading,
    grid
  );

  results.append(section);
}


/* =========================================================
   RESULTS
   ========================================================= */

function showResults() {
  const neighborhood = form.querySelector(
    'input[name="neighborhood"]:checked'
  );

  const mood = form.querySelector(
    'input[name="mood"]:checked'
  );

  const energy = form.querySelector(
    'input[name="energy"]:checked'
  );

  if (!neighborhood || !mood || !energy) {
    return;
  }


  /* Find activities matching all three answers */

  const matches = activities.filter(function (activity) {
    const isActive =
      activity.active !== false;

    const matchesNeighborhood =
  neighborhood.value === "any" ||
  activity.neighborhood === "anywhere" ||
  activity.neighborhood === neighborhood.value;

    const matchesMood =
      mood.value === "any" ||
      activity.category === mood.value;

    const matchesEnergy =
      activity.energy &&
      activity.energy.includes(energy.value);

    return (
      isActive &&
      matchesNeighborhood &&
      matchesMood &&
      matchesEnergy
    );
  });


  /* Randomize the valid results */

  currentMatches = [...matches];

  currentMatches.sort(function () {
    return Math.random() - 0.5;
  });

  currentFeaturedIndex = 0;


  /* Switch from quiz to results */

  form.hidden = true;
  resultsSection.hidden = false;

  results.replaceChildren();
  featuredResult.replaceChildren();


  /* Show what the user selected */

  selectionSummary.textContent =
    `${neighborhoodLabels[neighborhood.value]} · ` +
    `${moodLabels[mood.value]} · ` +
    `${energyLabels[energy.value]}`;


  /* =======================================================
     NO MATCHES
     ======================================================= */

  if (matches.length === 0) {
    summary.textContent =
      "No matching ideas yet.";

    anotherResultButton.hidden = true;

    const emptyCard =
      document.createElement("section");

    emptyCard.className = "empty-result";


    const heading =
      document.createElement("h2");

    heading.textContent =
      "A little change of plans?";


    const message =
      document.createElement("p");

    message.textContent =
      "We haven't added an idea for this combination yet. Try another mood or neighborhood and we'll take another swing.";


    const tryAgain =
      document.createElement("button");

    tryAgain.type = "button";
    tryAgain.className = "button";
    tryAgain.textContent =
      "Try something else →";


    tryAgain.addEventListener(
      "click",
      function () {
        resetQuiz();
      }
    );


    emptyCard.append(
      heading,
      message,
      tryAgain
    );

    results.append(emptyCard);


    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

    return;
  }


  /* =======================================================
     MATCHES FOUND
     ======================================================= */

  summary.textContent =
    `${matches.length} ` +
    `${matches.length === 1 ? "idea fits" : "ideas fit"} ` +
    `what you picked.`;


  /* Featured recommendation */

  renderFeaturedResult(
    currentMatches[currentFeaturedIndex]
  );


  /* Only show "another one" when another option exists */

  anotherResultButton.hidden =
    currentMatches.length <= 1;


  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


/* =========================================================
   GIVE ME ANOTHER ONE
   ========================================================= */

anotherResultButton.addEventListener(
  "click",
  function () {
    if (currentMatches.length <= 1) {
      return;
    }

    currentFeaturedIndex++;

    if (
      currentFeaturedIndex >=
      currentMatches.length
    ) {
      currentFeaturedIndex = 0;
    }

    renderFeaturedResult(
      currentMatches[currentFeaturedIndex]
    );
  }
);


/* =========================================================
   RESET QUIZ
   ========================================================= */

function resetQuiz() {
  form.reset();

  results.replaceChildren();
  featuredResult.replaceChildren();

  summary.textContent = "";
  selectionSummary.textContent = "";

  currentMatches = [];
  currentFeaturedIndex = 0;

  resultsSection.hidden = true;
  form.hidden = false;

  anotherResultButton.hidden = false;

  showStep(1);
}


/* =========================================================
   AUTO-ADVANCE THROUGH QUIZ
   ========================================================= */

form.addEventListener(
  "change",
  function (event) {
    const input = event.target;

    if (
      !input.matches('input[type="radio"]')
    ) {
      return;
    }


    /* Q1 → Q2 */

    if (input.name === "neighborhood") {
      setTimeout(function () {
        showStep(2);
      }, 180);
    }


    /* Q2 → Q3 */

    if (input.name === "mood") {
      setTimeout(function () {
        showStep(3);
      }, 180);
    }


    /* Q3 → Results */

    if (input.name === "energy") {
      setTimeout(function () {
        showResults();
      }, 180);
    }
  }
);


/* =========================================================
   BACK BUTTONS
   ========================================================= */

backButtons.forEach(function (button) {
  button.addEventListener(
    "click",
    function () {
      if (currentStep > 1) {
        showStep(currentStep - 1);
      }
    }
  );
});


/* =========================================================
   START OVER
   ========================================================= */

startOverButton.addEventListener(
  "click",
  function () {
    resetQuiz();
  }
);


/* =========================================================
   INITIALIZE
   ========================================================= */

showStep(1);