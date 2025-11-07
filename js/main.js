const form = document.querySelector("form");
const navnOutput = document.querySelector("#navn-output");
const emailOutput = document.querySelector("#email-output");
const signalOutput = document.querySelector("#signal-output");
const koordinaterOutput = document.querySelector("#koordinater-output");

function cancelPopup(event) {
  console.log("PreventStandard Active");
  event.preventDefault();
  form.querySelector(":user-invalid").focus();
}

function errorText(event) {
  console.log("ErrorText Virker");
}

function handleSubmit(event) {
  console.log("submit virker!");
  event.preventDefault();

  const formData = new FormData(form);
  const name = formData.get("name");
  const email = formData.get("email");
  const signal = formData.get("signal");
  const koordinater = formData.get("koordinater");

  navnOutput.textContent = name;
  emailOutput.textContent = email;
  signalOutput.textContent = signal;
  koordinaterOutput.textContent = koordinater;

  form.reset();
}

form.addEventListener("invalid", cancelPopup, true);
form.addEventListener("submit", handleSubmit);
