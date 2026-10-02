const form = document.querySelector(".suggest-form");

form.addEventListener("submit", async function (event) {
  event.preventDefault();

  const submitButton = form.querySelector(".suggest-submit");
  const originalButtonText = submitButton.textContent;

  // Show that something is happening
  submitButton.textContent = "sending...";
  submitButton.disabled = true;

  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json"
      }
    });

    if (response.ok) {
      form.innerHTML = `
        <div class="suggest-success">
          <p class="suggest-success-small">SENT.</p>
          <h2>got it.</h2>
          <p>thanks for making my list longer.</p>

          <a href="browse.html" class="suggest-success-link">
            go find something to do ↗
          </a>
        </div>
      `;
    } else {
      throw new Error("Form submission failed.");
    }

  } catch (error) {
    submitButton.textContent = originalButtonText;
    submitButton.disabled = false;

    let errorMessage = form.querySelector(".suggest-error");

    if (!errorMessage) {
      errorMessage = document.createElement("p");
      errorMessage.className = "suggest-error";
      form.appendChild(errorMessage);
    }

    errorMessage.textContent =
      "hmm, that didn't work. try again in a second?";
  }
});