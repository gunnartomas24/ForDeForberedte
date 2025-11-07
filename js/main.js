const form = document.querySelector("form");
const navnOutput = document.querySelector("#navn-output");
const emailOutput = document.querySelector("#email-output");
const frekvensOutput = document.querySelector("#frekvens-output");
const koordinaterOutput = document.querySelector("#koordinater-output");
const typeOutput = document.querySelector("#type-output");
const descOutput = document.querySelector("#description-output");

function cancelPopup(event) {
  console.log("PreventStandard Active");
  event.preventDefault();
  form.querySelector(":user-invalid").focus();
}

function handleSubmit(event) {
  console.log("submit virker!");
  event.preventDefault();

  const formData = new FormData(form);
  const name = formData.get("name");
  const email = formData.get("email");
  const frekvens = formData.get("frekvens");
  const koordinater = formData.get("koordinater");
  const type = formData.get("incident-type");
  const description = formData.get("description");

  navnOutput.textContent = name;
  emailOutput.textContent = email;
  frekvensOutput.textContent = frekvens;
  koordinaterOutput.textContent = koordinater;
  typeOutput.textContent = type;
  descOutput.textContent = description;

  document.querySelector("#submit-besked").classList.remove("display_none");
  document.querySelector("#summary-info").classList.remove("display_none");

  form.reset();
}

form.addEventListener("invalid", cancelPopup, true);
form.addEventListener("submit", handleSubmit);
