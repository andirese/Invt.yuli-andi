// Mengisi nama tamu dari URL parameter (?to=Nama Lengkap)
const urlParams = new URLSearchParams(window.location.search);
const namaTamu = urlParams.get('to');
const guestNameElement = document.getElementById('guestName');
if (namaTamu && guestNameElement) {
  guestNameElement.textContent = decodeURIComponent(namaTamu);
}

// Toggle musik manual
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

// Semua event saat DOM sudah siap
document.addEventListener('DOMContentLoaded', () => {
  const openBtn = document.querySelector('.open-button');
  const openingSlide = document.getElementById('openingSlide');
  const homeSlide = document.getElementById('homeSlide');

  if (openBtn && bgMusic && openingSlide && homeSlide) {
    openBtn.addEventListener('click', () => {
      bgMusic.play();
      isPlaying = true;
      musicIcon.src = 'assets/img/logomusikplay.png';

      // Aktifkan scroll & hilangkan opening
      document.body.classList.remove('no-scroll');
      openingSlide.classList.add('fade-out');

      setTimeout(() => {
        homeSlide.scrollIntoView({ behavior: 'smooth' });
      }, 800); // sesuai animasi fade-out
    });
  }

  // Autoplay musik saat scroll pertama
  let musicPlayed = false;
  document.addEventListener('scroll', () => {
    if (!musicPlayed && bgMusic) {
      bgMusic.play();
      musicPlayed = true;
      isPlaying = true;
      if (musicIcon) musicIcon.src = 'assets/img/logomusikplay.png';
    }
  });

  // Countdown waktu pernikahan
  const countdownElement = document.getElementById("countdown");
  const weddingDate = new Date("2025-09-22T09:00:00").getTime();
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

  // Animasi saat scroll ke tiap slide
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
