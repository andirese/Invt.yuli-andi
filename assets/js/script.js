// Mengisi nama tamu dari URL parameter (?to=Nama)
const urlParams = new URLSearchParams(window.location.search);
const namaTamu = urlParams.get('to');
const guestNameElement = document.getElementById('guestName');
if (namaTamu && guestNameElement) {
  guestNameElement.textContent = decodeURIComponent(namaTamu);
}

// Musik toggle
const bgMusic = document.getElementById('bgMusic');
const musicIcon = document.getElementById('musicIcon');
let isPlaying = false;

function toggleMusic() {
  if (isPlaying) {
    bgMusic.pause();
    musicIcon.src = 'assets/img/logomusiknonplay.png';
  } else {
    bgMusic.play();
    musicIcon.src = 'assets/img/logomusikplay.png';
  }
  isPlaying = !isPlaying;
}

// Countdown ke tanggal pernikahan
const weddingDate = new Date("2025-09-22T09:00:00").getTime();
const countdownElement = document.getElementById("countdown");

setInterval(() => {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  if (distance < 0) {
    countdownElement.innerHTML = "Waktu pernikahan telah tiba!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdownElement.innerHTML = `${days} Hari ${hours} Jam ${minutes} Menit ${seconds} Detik`;
}, 1000);

