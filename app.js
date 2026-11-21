const kattaRasm = document.getElementById("kattaRasm");
const fon = document.getElementById("fon");
const kichikRasmlar = document.querySelectorAll(".kichik");

// Sahifa ochilganda fonga katta rasmni qo'yamiz
fon.style.backgroundImage = "url('" + kattaRasm.getAttribute("src") + "')";

kichikRasmlar.forEach(function (kichik) {
  kichik.addEventListener("click", function () {
    // Ikkala rasmning manzilini eslab qolamiz
    const kattaManzil = kattaRasm.getAttribute("src");
    const kichikManzil = kichik.getAttribute("src");

    // 1) Rasmlarni sekin yo'qotamiz
    kattaRasm.classList.add("yoqolish");
    kichik.style.opacity = "0";
    fon.style.opacity = "0";

    // 2) 0.4 soniyadan keyin rasmlarni almashtirib, qayta ko'rsatamiz
    setTimeout(function () {
      kattaRasm.src = kichikManzil;
      kichik.src = kattaManzil;
      fon.style.backgroundImage = "url('" + kichikManzil + "')";

      kattaRasm.classList.remove("yoqolish");
      kichik.style.opacity = "";
      fon.style.opacity = "1";
    }, 400);
  });
});
