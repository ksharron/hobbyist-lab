const form = document.querySelector(".suggest-form");

form.addEventListener("submit", async function (event) {
  event.preventDefault();

  const submitButton = form.querySelector(".suggest-submit");
  const originalButtonText = submitButton.textContent;

  // Get all form fields
  const fields = form.querySelectorAll("input, textarea");

  // Check whether at least one field has something in it
  const hasContent = Array.from(fields).some(
    field => field.value.trim() !== ""
  );

  // Remove an old error message, if there is one
  const oldError = form.querySelector(".suggest-error");
  if (oldError) {
    oldError.remove();
  }

  // Don't submit a completely empty form
  if (!hasContent) {
    const errorMessage = document.createElement("p");
    errorMessage.className = "suggest-error";
    errorMessage.textContent = "give me something to work with!!";

    form.appendChild(errorMessage);
    return;
  }

  // Show that the form is sending
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

      <div class="suggest-success-actions">
        <a href="suggest.html" class="suggest-success-link">
          make another suggestion
        </a>

        <a href="browse.html" class="suggest-success-secondary">
          go find something to do ↗
        </a>
      </div>
    </div>
  `;
}
    } else {
      throw new Error("Form submission failed.");
    }

  } catch (error) {
    submitButton.textContent = originalButtonText;
    submitButton.disabled = false;

    const errorMessage = document.createElement("p");
    errorMessage.className = "suggest-error";
    errorMessage.textContent =
      "hmm, that didn't work. try again in a second?";

    form.appendChild(errorMessage);
  }
});