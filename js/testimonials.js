const track = document.getElementById("testimonialTrack");
const section = document.getElementById("testimonials-section");
let currentIndex = 0;
let autoSlide;

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

loadTestimonials();

const modal = document.getElementById("testimonialModal");
document.getElementById("openTestimonialForm").onclick = () => modal.classList.remove("hidden");
document.querySelector(".close").onclick = () => modal.classList.add("hidden");

document.getElementById("testimonialForm").addEventListener("submit", async e => {
  e.preventDefault();
  const form = e.target;
  const status = document.getElementById("formStatus");
  if (form.website.value) return;

  const formData = new FormData(form);

  const res = await fetch("https://YOUR_NETLIFY_SITE.netlify.app/.netlify/functions/submitTestimonial", {
    method: "POST",
    body: formData
  });

  status.textContent = res.ok ? "Thank you! Your testimonial was submitted." : "Submission failed.";
  if (res.ok) form.reset();
});
