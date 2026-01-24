const track = document.getElementById("testimonialTrack");
const section = document.getElementById("testimonials-section");
let currentIndex = 0;
let autoSlide;

// Load testimonials.json from GitHub Pages
async function loadTestimonials() {
  try {
    const res = await fetch("/data/testimonials.json");
    const data = await res.json();
    if (!data.length) return;

    section.classList.remove("hidden");

    data.forEach(t => {
      const card = document.createElement("div");
      card.className = "testimonial-card";
      card.innerHTML = `
        <div class="testimonial-inner">
          ${t.photo ? `<img src="${t.photo}" class="testimonial-photo">` : ""}
          <p>"${t.message}"</p>
          <strong>– ${t.name}</strong>
        </div>`;
      track.appendChild(card);
    });

    startAutoSlide();
  } catch {}
}

// Carousel functions
function updateCarousel() {
  track.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function startAutoSlide() {
  autoSlide = setInterval(() => {
    currentIndex = (currentIndex + 1) % track.children.length;
    updateCarousel();
  }, 6000);
}

document.querySelector(".next").onclick = () => { currentIndex = (currentIndex + 1) % track.children.length; updateCarousel(); };
document.querySelector(".prev").onclick = () => { currentIndex = (currentIndex - 1 + track.children.length) % track.children.length; updateCarousel(); };

// Modal open/close
const modal = document.getElementById("testimonialModal");
document.getElementById("openTestimonialForm").onclick = () => modal.classList.remove("hidden");
document.querySelector(".close").onclick = () => modal.classList.add("hidden");

loadTestimonials();
