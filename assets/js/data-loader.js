document.addEventListener('DOMContentLoaded', () => {
  fetch('/data/content.json')
    .then(res => res.json())
    .then(data => {
      // ===== Trustees on Main Page =====
      const tp = document.getElementById('trusteesPreview');
      if (tp && !tp.hasChildNodes()) { // Prevent duplicates
        data.trustees.forEach(trustee => {
          const card = document.createElement('div');
          card.className = `
            min-w-[250px] 
            bg-gradient-to-br from-amber-200 via-amber-100 to-yellow-50 
            rounded-3xl 
            p-6 
            shadow-lg 
            text-center 
            flex-shrink-0 
            transform 
            hover:scale-105 
            hover:shadow-2xl 
            hover:from-amber-300 
            hover:to-yellow-100 
            transition-all 
            duration-300 
            cursor-pointer
          `;
          card.innerHTML = `
            <img src="${trustee.photo}" alt="${trustee.name}" 
                 class="w-32 h-32 mx-auto rounded-full mb-4 object-cover border-4 border-amber-300 shadow-md" />
            <h3 class="text-xl font-bold mb-2 text-red-800">${trustee.name}</h3>
            <p class="text-sm text-gray-700 mb-1">Role</p>
            <p class="text-sm text-gray-800">${trustee.role}</p>
          `;
          tp.appendChild(card);
        });
      }

      // ===== Trustees on Trustees Page (Grid) =====
      const tg = document.getElementById('trusteesGrid');
      if (tg && !tg.hasChildNodes()) { // Prevent duplicates
        data.trustees.forEach(trustee => {
          const card = document.createElement('div');
          card.className = `
            bg-white 
            p-4 
            rounded 
            shadow 
            text-center 
            hover:shadow-lg 
            transition-shadow duration-300
          `;
          const img = document.createElement("img");
          img.src = event.poster;
          img.alt = event.title;
          img.className = "h-40 w-full object-cover rounded mb-2 cursor-zoom-in";
          img.addEventListener("click", () => openModal(event.poster));
          
          card.appendChild(img);
          
          const title = document.createElement("h3");
          title.className = "font-bold";
          title.textContent = event.title;
          
          const date = document.createElement("p");
          date.textContent = event.date;
          
          card.appendChild(title);
          card.appendChild(date);

          tg.appendChild(card);
        });
      }

      // ===== Events on Scroll or Grid =====
      const es = document.getElementById('eventsScroll');
      if (es && !es.hasChildNodes()) {
        data.events.forEach(event => {
          const card = document.createElement('div');
          card.className = `
            min-w-[250px] 
            bg-white 
            p-4 
            rounded 
            shadow 
            flex-shrink-0
          `;
          card.innerHTML = `
            <img src="${event.poster}" class="h-40 w-full object-cover rounded mb-2" alt="${event.title}" />
            <h3 class="font-bold">${event.title}</h3>
            <p>${event.date}</p>
          `;
          es.appendChild(card);
        });
      }

      const eg = document.getElementById('eventsGrid');
      if (eg && !eg.hasChildNodes()) {
        data.events.forEach(event => {
          const card = document.createElement('div');
          card.className = `
            bg-white 
            p-4 
            rounded 
            shadow 
            hover:shadow-lg 
            transition-shadow duration-300
          `;
          const img = document.createElement("img");
          img.src = event.poster;
          img.alt = event.title;
          img.className = "h-40 w-full object-cover rounded mb-2 cursor-zoom-in";
          img.addEventListener("click", () => openModal(event.poster));
          
          card.appendChild(img);
          
          const title = document.createElement("h3");
          title.className = "font-bold";
          title.textContent = event.title;
          
          const date = document.createElement("p");
          date.textContent = event.date;
          
          card.appendChild(title);
          card.appendChild(date);

          eg.appendChild(card);
        });
      }
    })
    .catch(err => console.error('Error loading JSON:', err));

  // ===== Scroll Arrows for trusteesPreview (if present) =====
  const scrollContainer = document.getElementById('trusteesPreview');
  const scrollLeftBtn = document.getElementById('scrollLeft');
  const scrollRightBtn = document.getElementById('scrollRight');

  if (scrollContainer) {
    if (scrollLeftBtn) {
      scrollLeftBtn.addEventListener('click', () => {
        scrollContainer.scrollBy({ left: -300, behavior: 'smooth' });
      });
    }
    if (scrollRightBtn) {
      scrollRightBtn.addEventListener('click', () => {
        scrollContainer.scrollBy({ left: 300, behavior: 'smooth' });
      });
    }
  }
});
