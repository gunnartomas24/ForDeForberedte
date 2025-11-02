console.log("Instruction Loaded");

document.querySelector("#MAND2").addEventListener("click", mandKryds);

function mandKryds() {
  console.log("mandKryds blev klikket");
  document.querySelector("#KRYDS-1").classList.remove("display_none");
  document.querySelector("#KRYDS-2").classList.add("display_none");
  document.querySelector("#KRYDS-3").classList.add("display_none");
}

document.querySelector("#KVINDE1").addEventListener("click", kvindeKryds);

function kvindeKryds() {
  console.log("kvindeKryds blev klikket");
  document.querySelector("#KRYDS-1").classList.add("display_none");
  document.querySelector("#KRYDS-2").classList.add("display_none");
  document.querySelector("#KRYDS-3").classList.remove("display_none");
}

document.querySelector("#SOLDAT").addEventListener("click", soldatKryds);

function soldatKryds() {
  console.log("soldatKryds blev klikket");
  document.querySelector("#KRYDS-1").classList.add("display_none");
  document.querySelector("#KRYDS-2").classList.remove("display_none");
  document.querySelector("#KRYDS-3").classList.add("display_none");
}
