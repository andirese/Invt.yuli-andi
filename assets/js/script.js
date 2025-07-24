// Mengisi nama tamu dari URL parameter (?to=Nama Tamu)
const urlParams = new URLSearchParams(window.location.search);
const namaTamu = urlParams.get('to');
const guestNameElement = document.getElementById('guestName');
if (namaTamu && guestNameElement) {
  guestNameElement.textContent = decodeURIComponent(namaTamu);
}

// Toggle Musik Manual
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

// Event ketika DOM sudah siap
document.addEventListener('DOMContentLoaded', () => {
  const openBtn = document.querySelector('.open-button');
  const openingSlide = document.getElementById('openingSlide');
  const homeSlide = document.getElementById('homeSlide');

  // Klik tombol buka undangan
  if (openBtn && openingSlide && homeSlide) {
    openBtn.addEventListener('click', () => {
      bgMusic.play();
      isPlaying = true;
      musicIcon.src = 'assets/img/logomusikplay.png';

      // Aktifkan scroll & tampilkan nav
      document.body.classList.remove('no-scroll');
      document.body.classList.remove('opening-active');

      // Fade out opening slide
      openingSlide.classList.add('fade-out');

      setTimeout(() => {
        homeSlide.scrollIntoView({ behavior: 'smooth' });
      }, 800);
    });
  }

  // Autoplay saat scroll pertama setelah buka undangan
  let musicPlayed = false;
  document.addEventListener('scroll', () => {
    if (!musicPlayed && !document.body.classList.contains('opening-active')) {
      bgMusic.play();
      musicPlayed = true;
      isPlaying = true;
      musicIcon.src = 'assets/img/logomusikplay.png';
    }
  });

  // Countdown waktu pernikahan
  const countdownElement = document.getElementById("countdown");
// 27 September 2025 pukul 09.00 WIB → setara 02.00 UTC
const weddingDate = new Date(Date.UTC(2025, 8, 27, 2, 0, 0)).getTime();

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

    countdownElement.innerHTML = `
      <div><span>${days}</span>Hari</div>
      <div><span>${hours}</span>Jam</div>
      <div><span>${minutes}</span>Menit</div>
      <div><span>${seconds}</span>Detik</div>
    `;
  }, 1000);
}

  // Animasi scroll untuk setiap slide (section)
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

// Tambahan untuk animasi satu-satu
const fadeItems = document.querySelectorAll(".fade-item");
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

fadeItems.forEach(item => fadeObserver.observe(item));

  // Animasi scroll
  document.addEventListener("scroll", () => {
    document.querySelectorAll(".reveal").forEach((el) => {
      const top = el.getBoundingClientRect().top;
      if (top < window.innerHeight - 100) {
        el.classList.add("active");
      }
    });
  });
