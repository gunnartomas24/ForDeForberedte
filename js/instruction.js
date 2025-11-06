console.log("Instruction Loaded");

document.querySelector("#MAND2").addEventListener("click", mandKryds);

function mandKryds() {
  console.log("mandKryds blev klikket");
  document.querySelector("#KRYDS-1").classList.remove("display_none");
  document.querySelector("#KRYDS-2").classList.add("display_none");
  document.querySelector("#KRYDS-3").classList.add("display_none");
  document.querySelector(".info-text h2").textContent = "EN MAND";
  document.querySelector(".info-text-img").innerHTML =
    "<img src='svg/mand_closeup.svg' alt='Soldat Billede'>";
  document.querySelector(".placeholder").textContent =
    "En fremmed mand. Det er hans fejl at han ikke selv har forberedt sig, og han har ingen ret til at nyde af din fremsynethed. Bør skydes.";
}

document.querySelector("#KVINDE1").addEventListener("click", kvindeKryds);

function kvindeKryds() {
  console.log("kvindeKryds blev klikket");
  document.querySelector("#KRYDS-1").classList.add("display_none");
  document.querySelector("#KRYDS-2").classList.add("display_none");
  document.querySelector("#KRYDS-3").classList.remove("display_none");
  document.querySelector(".info-text h2").textContent = "EN KVINDE";
  document.querySelector(".info-text-img").innerHTML =
    "<img src='svg/kvinde_closeup.svg' alt='Soldat Billede'>";
  document.querySelector(".placeholder").textContent =
    "En fremmed kvinde. Kan være en god ressource at besidde under en invasion. Ofte flere fordele end ulemper, men kan bortskaffes på sigt. Bør reddes.";
}

document.querySelector("#SOLDAT").addEventListener("click", soldatKryds);

function soldatKryds() {
  console.log("soldatKryds blev klikket");
  document.querySelector("#KRYDS-1").classList.add("display_none");
  document.querySelector("#KRYDS-2").classList.remove("display_none");
  document.querySelector("#KRYDS-3").classList.add("display_none");
  document.querySelector(".info-text h2").textContent = "EN SOLDAT?";
  document.querySelector(".info-text-img").innerHTML =
    "<img src='svg/soldat_closeup.svg' alt='Soldat Billede'>";
  document.querySelector(".placeholder").textContent =
    "En soldat/anarkist/kommunist/antifa/svensker. Han har invaderet dit land og det vil han fortryde, skyd ham!";
}
