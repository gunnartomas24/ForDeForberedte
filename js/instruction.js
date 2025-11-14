console.log("Instruction Loaded");

document.querySelector("#MAND2").addEventListener("click", mandKryds);

function mandKryds() {
  console.log("mandKryds blev klikket");
  document.querySelector("#KRYDS-1").classList.remove("display_none");
  document.querySelector("#KRYDS-2").classList.add("display_none");
  document.querySelector("#KRYDS-3").classList.add("display_none");
  document.querySelector("#info-box").classList.remove("display_none");
  document.querySelector(".info-text h2").textContent = "EN MAND";
  document.querySelector(".info-text-img").innerHTML =
    "<img src='img/mand_closeup_ai.png' alt='Mand Billede'>";
  document.querySelector(".placeholder").textContent =
    "En fremmed mand. Det er hans fejl at han ikke selv har forberedt sig, og han har ingen ret til at nyde af din fremsynethed. Bør skydes.";
  document.querySelector(".info-box-titel").textContent = "Tips & Trick";
  document.querySelector("#li-1").textContent =
    "Sigt efter brystet: Et skud i brystet har er det nemmeste mål at ramme, og det mest effektive til at neutralisere fjenden. Rammer du forbi, er der desuden chance for at du i stedet rammer hovedet, som også er effektivt.";
  document.querySelector("#li-2").textContent =
    "Øl som lokkemad: Har manden gemt sig på din store grund, er det ingen årsag til at du skal bevæge dig ud fra sikkerhed. Du kan blot smide en kold ud til ham for at få ham ud fra gemmerne. Indhent derefter øllen når dine parametre er sikret.";
}

document.querySelector("#KVINDE1").addEventListener("click", kvindeKryds);

function kvindeKryds() {
  console.log("kvindeKryds blev klikket");
  document.querySelector("#KRYDS-1").classList.add("display_none");
  document.querySelector("#KRYDS-2").classList.add("display_none");
  document.querySelector("#KRYDS-3").classList.remove("display_none");
  document.querySelector("#info-box").classList.remove("display_none");
  document.querySelector(".info-text h2").textContent = "EN KVINDE";
  document.querySelector(".info-text-img").innerHTML =
    "<img src='img/kvinde_closeup_ai.png' alt='Kvinde Billede'>";
  document.querySelector(".placeholder").textContent =
    "En fremmed kvinde. Kan være en god ressource at besidde under en invasion. Ofte flere fordele end ulemper, men kan bortskaffes på sigt. Bør reddes.";
  document.querySelector(".info-box-titel").textContent = "Fordele & Ulemper";
  document.querySelector("#li-1").textContent =
    "Fordele: Kan klare de huslige pligter, så du har mere tid til at drikke øl og skyde fremmede. Kan også være dyrebar i en byttehandel med andre preppere, hvis du løber tør for nødvendige ressourcer.";
  document.querySelector("#li-2").textContent =
    "Ulemper: Er generelt usamarbejdsvillige og utaknemmelige for at blive reddet. Uforstående for at det ikke er “gratis” at nyde af sikkerheden i dit hjem. Kan klage, skrige og græde når de informeres om at dit ord er lov.";
}

document.querySelector("#SOLDAT").addEventListener("click", soldatKryds);

function soldatKryds() {
  console.log("soldatKryds blev klikket");
  document.querySelector("#KRYDS-1").classList.add("display_none");
  document.querySelector("#KRYDS-2").classList.remove("display_none");
  document.querySelector("#KRYDS-3").classList.add("display_none");
  document.querySelector("#info-box").classList.remove("display_none");
  document.querySelector(".info-text h2").textContent = "EN SOLDAT?";
  document.querySelector(".info-text-img").innerHTML =
    "<img src='svg/soldat_closeup_v2.svg' alt='Soldat Billede'>";
  document.querySelector(".placeholder").textContent =
    "Kunne være en soldat, anarkist, kommunist, antifa eller svensker. Han har invaderet dit land og det vil han fortryde, skyd ham!";
  document.querySelector(".info-box-titel").textContent = "Advarsel!";
  document.querySelector("#li-1").textContent =
    "Bevæbnet og farlig: Spar ikke på ammunitionen, fjenden skal nedlægges før de nedlægger dig. Sigt efter hovedet da de kan have skudsikker vest på.";
  document.querySelector("#li-2").textContent =
    "Hvis muligt: Immobiliser og derefter fang en fjende hvis muligt. Information er et vigtigt våben for at bekæmpe fjenden. Tag alle midler i brug.";
}
