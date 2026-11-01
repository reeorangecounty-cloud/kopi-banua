// Menu hamburger untuk layar ponsel
const tombol = document.querySelector(".tombol-menu");
const menu = document.querySelector("nav ul");

tombol.addEventListener("click", function () {
  const terbuka = menu.classList.toggle("tampil");
  tombol.setAttribute("aria-expanded", terbuka);
});

// Tutup menu setelah salah satu tautan diklik
menu.addEventListener("click", function (e) {
  if (e.target.tagName === "A") {
    menu.classList.remove("tampil");
    tombol.setAttribute("aria-expanded", "false");
  }
});

// Validasi tambahan pada form pemesanan
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  const wa = document.querySelector("#wa").value;
  if (wa.length < 10) {
    e.preventDefault();
    alert("Nomor WhatsApp minimal 10 digit.");
  }
});