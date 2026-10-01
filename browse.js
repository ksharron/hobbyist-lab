/* =========================================================
   BROWSE PAGE
   ========================================================= */

const browseResults = document.querySelector("#browse-results");
const browseCount = document.querySelector("#browse-count");
const clearFiltersButton = document.querySelector("#clear-filters");

const filterButtons = document.querySelectorAll(".filter-button");


/* =========================================================
   FILTER STATE
   ========================================================= */

const filters = {
  category: "any",
  neighborhood: "any",
  energy: "any"
};


/* =========================================================
   DISPLAY LABELS
   ========================================================= */

const neighborhoodLabels = {
  "east-village": "East Village",
  "williamsburg": "Williamsburg",
  "bushwick": "Bushwick",
  "anywhere": "Anywhere",
  "park-slope": "Park Slope"
};

const categoryLabels = {
  "create": "Make something",
  "browse": "Browse around",
  "wander": "Wander",
  "hangout": "Hang out",
  "watch": "See something"
};


/* =========================================================
   READ HOMEPAGE FILTER
   ========================================================= */

function readURLFilters() {

  const params = new URLSearchParams(window.location.search);

  const category = params.get("category");

  if (
    category &&
    categoryLabels[category]
  ) {
    filters.category = category;
  }

}


/* =========================================================
   UPDATE FILTER BUTTONS
   ========================================================= */

function updateFilterButtons() {

  document
    .querySelectorAll("[data-filter-group]")
    .forEach(function (group) {

      const filterName =
        group.dataset.filterGroup;

      const buttons =
        group.querySelectorAll(".filter-button");


      buttons.forEach(function (button) {

        const isActive =
          button.dataset.value === filters[filterName];

        button.classList.toggle(
          "active",
          isActive
        );

      });

    });

}


/* =========================================================
   CREATE TAGS
   ========================================================= */

function createTags(activity) {

  const tags = document.createElement("div");
  tags.className = "browse-card-tags";


  /* Category */

  const categoryTag = document.createElement("span");
  categoryTag.className = "browse-tag";

  categoryTag.textContent =
    categoryLabels[activity.category].toUpperCase();

  tags.append(categoryTag);


  /* Number of stops */

  if (
    activity.stops &&
    activity.stops.length > 0
  ) {

    const stopsTag = document.createElement("span");
    stopsTag.className = "browse-tag";

    stopsTag.textContent =
      `${activity.stops.length} STOPS`;

    tags.append(stopsTag);

  }


  /* Energy */

  activity.energy.forEach(function (energy) {

    const energyTag =
      document.createElement("span");

    energyTag.className = "browse-tag";


    if (energy === "low") {
      energyTag.textContent = "EASY";
    }

    if (energy === "medium") {
      energyTag.textContent = "MEDIUM";
    }

    if (energy === "high") {
      energyTag.textContent = "WHOLE THING";
    }


    tags.append(energyTag);

  });


  return tags;

}


/* =========================================================
   CREATE STANDARD ACTIVITY CARD
   ========================================================= */

function createStandardCard(activity) {

  const card = document.createElement("a");

  card.className = "browse-card";
  card.href = activity.website;
  card.target = "_blank";
  card.rel = "noopener noreferrer";


  /* Top row */

  const top = document.createElement("div");
  top.className = "browse-card-top";


  const neighborhood = document.createElement("span");
  neighborhood.className = "browse-card-neighborhood";

  neighborhood.textContent =
    neighborhoodLabels[
      activity.neighborhood
    ].toUpperCase();


  const arrow = document.createElement("span");
  arrow.className = "browse-card-arrow";
  arrow.textContent = "↗";


  top.append(
    neighborhood,
    arrow
  );


  /* Title */

  const title = document.createElement("h2");
  title.textContent = activity.title;


  /* Place */

  const place = document.createElement("p");
  place.className = "browse-card-place";

  place.textContent =
    `${activity.place} · ${activity.address}`;


  /* Description */

  const description = document.createElement("p");
  description.className = "browse-card-description";
  description.textContent = activity.description;


  /* Tags */

  const tags = createTags(activity);


  /* Build */

  card.append(
    top,
    title,
    place,
    description,
    tags
  );


  return card;

}


/* =========================================================
   CREATE MULTI-STOP ACTIVITY CARD
   ========================================================= */

function createMultiStopCard(activity) {

  const card = document.createElement("article");
  card.className = "browse-card browse-card-multistop";


  /* Top row */

  const top = document.createElement("div");
  top.className = "browse-card-top";


  const neighborhood = document.createElement("span");
  neighborhood.className = "browse-card-neighborhood";

  neighborhood.textContent =
    neighborhoodLabels[
      activity.neighborhood
    ].toUpperCase();


  const symbol = document.createElement("span");
  symbol.className = "browse-card-symbol";
  symbol.textContent = "✦";


  top.append(
    neighborhood,
    symbol
  );


  /* Title */

  const title = document.createElement("h2");
  title.textContent = activity.title;


  /* Starting point */

  const place = document.createElement("p");
  place.className = "browse-card-place";

  place.textContent =
    activity.place;


  /* Description */

  const description = document.createElement("p");
  description.className = "browse-card-description";
  description.textContent = activity.description;


  /* Tags */

  const tags = createTags(activity);


  /* Expand button */

  const toggle = document.createElement("button");

  toggle.type = "button";
  toggle.className = "stops-toggle";

  toggle.textContent =
    "See the stops ↓";

  toggle.setAttribute(
    "aria-expanded",
    "false"
  );


  /* Stops container */

  const stops = document.createElement("div");
  stops.className = "browse-stops";
  stops.hidden = true;


  activity.stops.forEach(function (stop) {

    const stopLink = document.createElement("a");

    stopLink.className = "browse-stop";
    stopLink.href = stop.website;
    stopLink.target = "_blank";
    stopLink.rel = "noopener noreferrer";


    /* Stop text */

    const stopText = document.createElement("div");
    stopText.className = "browse-stop-text";


    const stopName = document.createElement("span");
    stopName.className = "browse-stop-name";
    stopName.textContent = stop.name;


    const stopAddress = document.createElement("span");
    stopAddress.className = "browse-stop-address";
    stopAddress.textContent = stop.address;


    stopText.append(
      stopName,
      stopAddress
    );


    /* Arrow */

    const stopArrow = document.createElement("span");

    stopArrow.className = "browse-stop-arrow";
    stopArrow.textContent = "↗";


    stopLink.append(
      stopText,
      stopArrow
    );


    stops.append(stopLink);

  });


  /* Expand / collapse */

  toggle.addEventListener(
    "click",
    function () {

      const isOpen =
        toggle.getAttribute("aria-expanded") === "true";


      toggle.setAttribute(
        "aria-expanded",
        String(!isOpen)
      );


      stops.hidden = isOpen;


      toggle.textContent =
        isOpen
          ? "See the stops ↓"
          : "Hide the stops ↑";

    }
  );


  /* Build */

  card.append(
    top,
    title,
    place,
    description,
    tags,
    toggle,
    stops
  );


  return card;

}


/* =========================================================
   CHOOSE CARD TYPE
   ========================================================= */

function createActivityCard(activity) {

  const hasStops =
    activity.stops &&
    activity.stops.length > 0;


  if (hasStops) {
    return createMultiStopCard(activity);
  }


  return createStandardCard(activity);

}


/* =========================================================
   FILTER + RENDER ACTIVITIES
   ========================================================= */

function renderActivities() {

  browseResults.replaceChildren();


  const matches = activities.filter(function (activity) {

    const isActive =
      activity.active !== false;


    const matchesCategory =
      filters.category === "any" ||
      activity.category === filters.category;


 const matchesNeighborhood =
  filters.neighborhood === "any" ||
  activity.neighborhood === "anywhere" ||
  activity.neighborhood === filters.neighborhood;


    const matchesEnergy =
      filters.energy === "any" ||
      (
        activity.energy &&
        activity.energy.includes(filters.energy)
      );


    return (
      isActive &&
      matchesCategory &&
      matchesNeighborhood &&
      matchesEnergy
    );

  });


  /* Count */

  browseCount.textContent =
    `${matches.length} ` +
    `${matches.length === 1 ? "idea" : "ideas"}`;


  /* Clear filters */

  const hasFilters =
    filters.category !== "any" ||
    filters.neighborhood !== "any" ||
    filters.energy !== "any";


  clearFiltersButton.hidden =
    !hasFilters;


  /* No matches */

  if (matches.length === 0) {

    const empty = document.createElement("div");
    empty.className = "browse-empty";


    const heading = document.createElement("h2");
    heading.textContent =
      "Nothing here yet.";


    const message = document.createElement("p");
    message.textContent =
      "Try loosening one of your filters and we'll find you something.";


    empty.append(
      heading,
      message
    );


    browseResults.append(empty);

    return;

  }


  /* Cards */

  matches.forEach(function (activity) {

    const card =
      createActivityCard(activity);

    browseResults.append(card);

  });

}


/* =========================================================
   FILTER CLICKS
   ========================================================= */

filterButtons.forEach(function (button) {

  button.addEventListener(
    "click",
    function () {

      const group =
        button.closest(
          "[data-filter-group]"
        );


      const filterName =
        group.dataset.filterGroup;


      filters[filterName] =
        button.dataset.value;


      updateFilterButtons();
      renderActivities();

    }
  );

});


/* =========================================================
   CLEAR FILTERS
   ========================================================= */

clearFiltersButton.addEventListener(
  "click",
  function () {

    filters.category = "any";
    filters.neighborhood = "any";
    filters.energy = "any";


    updateFilterButtons();
    renderActivities();

  }
);


/* =========================================================
   INITIALIZE
   ========================================================= */

readURLFilters();
updateFilterButtons();
renderActivities();