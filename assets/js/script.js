// Mengisi nama tamu dari URL parameter (?to=Nama Lengkap)
const urlParams = new URLSearchParams(window.location.search);
const namaTamu = urlParams.get('to');
const guestNameElement = document.getElementById('guestName');
if (namaTamu && guestNameElement) {
  guestNameElement.textContent = decodeURIComponent(namaTamu);
}

// Toggle Musik
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

// Autoplay Musik saat klik dan scroll pertama
document.addEventListener('DOMContentLoaded', () => {
  const openBtn = document.querySelector('.open-button');
  if (openBtn) {
    openBtn.addEventListener('click', () => {
      bgMusic.play();
      isPlaying = true;
      musicIcon.src = 'assets/img/logomusikplay.png';
    });
  }

  document.addEventListener('scroll', () => {
    if (bgMusic.paused) {
      bgMusic.play();
      isPlaying = true;
      musicIcon.src = 'assets/img/logomusikplay.png';
    }
  });
});

// Countdown ke tanggal pernikahan
const weddingDate = new Date("2025-09-22T09:00:00").getTime();
const countdownElement = document.getElementById("countdown");

if (countdownElement) {
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
}

// Animasi scroll aktif berulang
document.addEventListener("DOMContentLoaded", () => {
  const allSections = document.querySelectorAll(".container");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  }, { threshold: 0.1 });

  allSections.forEach(section => observer.observe(section));
});
