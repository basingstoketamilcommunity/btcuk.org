document.addEventListener('DOMContentLoaded', () => {

  fetch('data/content.json')
    .then(res => res.json())
    .then(data => {

      /* ===== TRUSTEES PREVIEW (HOME) ===== */
      const tp = document.getElementById('trusteesPreview');
      if (tp && !tp.hasChildNodes()) {
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
            hover:scale-105
            transition
          `;

          card.innerHTML = `
            <img src="${trustee.photo}"
                 alt="${trustee.name}"
                 class="w-32 h-32 mx-auto rounded-full mb-4 object-cover border-4 border-amber-300" />
            <h3 class="text-xl font-bold text-red-800">${trustee.name}</h3>
            <p class="text-sm text-gray-700">${trustee.role}</p>
          `;

          tp.appendChild(card);
        });
      }

      /* ===== TRUSTEES GRID (TRUSTEES PAGE) ===== */
      const tg = document.getElementById('trusteesGrid');
      if (tg && !tg.hasChildNodes()) {
        data.trustees.forEach(trustee => {
          const card = document.createElement('div');
          card.className = "bg-white p-4 rounded shadow text-center";

          card.innerHTML = `
            <img src="${trustee.photo}"
                 alt="${trustee.name}"
                 class="h-40 w-full object-cover rounded mb-2">
            <h3 class="font-bold">${trustee.name}</h3>
            <p class="text-sm">${trustee.role}</p>
          `;

          tg.appendChild(card);
        });
      }

      /* ===== EVENTS SCROLL (HOME) ===== */
      const es = document.getElementById('eventsScroll');
      if (es && !es.hasChildNodes()) {
        data.events.forEach(event => {
          const card = document.createElement('div');
          card.className = "min-w-[250px] bg-white p-4 rounded shadow";

          card.innerHTML = `
            <img src="${event.poster}"
                 alt="${event.title}"
                 class="h-40 w-full object-cover rounded mb-2 cursor-zoom-in"
                 onclick="openModal('${event.poster}')">
            <h3 class="font-bold">${event.title}</h3>
            <p>${event.date}</p>
          `;

          es.appendChild(card);
        });
      }

      /* ===== EVENTS GRID (EVENTS PAGE) ===== */
      const eg = document.getElementById('eventsGrid');
      if (eg && !eg.hasChildNodes()) {
        data.events.forEach(event => {
          const card = document.createElement('div');
          card.className = "bg-white p-4 rounded shadow";

          card.innerHTML = `
            <img src="${event.poster}"
                 alt="${event.title}"
                 class="h-40 w-full object-cover rounded mb-2 cursor-zoom-in"
                 onclick="openModal('${event.poster}')">
            <h3 class="font-bold">${event.title}</h3>
            <p>${event.date}</p>
          `;

          eg.appendChild(card);
        });
      }

    })
    .catch(err => console.error('JSON load error:', err));


  /* ===== SCROLL ARROWS ===== */
  const scrollContainer = document.getElementById('trusteesPreview');
  const scrollLeftBtn = document.getElementById('scrollLeft');
  const scrollRightBtn = document.getElementById('scrollRight');

  if (scrollContainer) {
    scrollLeftBtn?.addEventListener('click', () =>
      scrollContainer.scrollBy({ left: -300, behavior: 'smooth' })
    );
    scrollRightBtn?.addEventListener('click', () =>
      scrollContainer.scrollBy({ left: 300, behavior: 'smooth' })
    );
  }

});
