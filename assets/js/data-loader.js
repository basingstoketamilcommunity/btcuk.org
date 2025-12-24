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
          <div class="h-40 w-full bg-gray-100 flex items-center justify-center rounded mb-2 overflow-hidden">
            <img src="${trustee.photo}"
                 alt="${trustee.name}"
                 class="max-h-full max-w-full object-contain">
          </div>
          <h3 class="font-bold">${trustee.name}</h3>
          <p class="text-sm">${trustee.role}</p>
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

          const img = document.createElement("img");
          img.src = event.poster;
          img.alt = event.title;
          img.className = "h-40 w-full object-cover rounded mb-2 cursor-zoom-in";
          img.onclick = () => openModal(event.poster);

          card.appendChild(img);

          // Event details + optional Register button
          let innerHTML = `<h3 class="font-bold">${event.title}</h3>
                           <p>${event.date}</p>`;
          if(event.registration){
            innerHTML += `
              <a href="${event.registration}" target="_blank"
                 class="mt-2 inline-block bg-red-900 text-amber-100 px-4 py-2 rounded hover:bg-red-800">
                 Register
              </a>
            `;
          }
          card.innerHTML += innerHTML;

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

          if(event.registration){
            card.innerHTML += `
              <a href="${event.registration}" target="_blank"
                 class="mt-2 inline-block bg-red-900 text-amber-100 px-4 py-2 rounded hover:bg-red-800">
                 Register
              </a>
            `;
          }

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
