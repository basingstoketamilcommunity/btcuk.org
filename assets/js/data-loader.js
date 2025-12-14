fetch('data/content.json')
  .then(res => res.json())
  .then(data => {
    // Trustees on main page
    const tp = document.getElementById('trusteesPreview');
    if (tp) {
      data.trustees.forEach(t => {
        const card = `<div class="min-w-[250px] bg-gradient-to-br from-amber-200 via-amber-100 to-yellow-50 rounded-3xl p-6 shadow-lg text-center flex-shrink-0 transform hover:scale-105 hover:shadow-2xl hover:from-amber-300 hover:to-yellow-100 transition-all duration-300 cursor-pointer">
          <img src="${t.photo}" class="w-32 h-32 mx-auto rounded-full mb-4 object-cover border-4 border-amber-300 shadow-md">
          <h3 class="text-xl font-bold mb-2 text-red-800">${t.name}</h3>
          <p class="text-sm text-gray-700 mb-1">Role</p>
          <p class="text-sm text-gray-800">${t.role}</p>
        </div>`;
        tp.innerHTML += card;
      });
    }

    // Trustees on trustees.html page
    const tg = document.getElementById('trusteesGrid');
    if (tg) {
      data.trustees.forEach(t => {
        const card = `<div class="bg-white p-4 rounded shadow">
          <img src="${t.photo}" class="w-full h-40 object-cover rounded mb-2">
          <h3 class="font-bold">${t.name}</h3>
          <p>${t.role}</p>
        </div>`;
        tg.innerHTML += card;
      });
    }

    // Events on main or other pages
    const es = document.getElementById('eventsScroll');
    if (es) {
      data.events.forEach(e => {
        const card = `<div class="bg-white p-4 rounded shadow min-w-[250px]">
          <img src="${e.poster}" class="h-40 w-full object-cover rounded mb-2">
          <h3 class="font-bold">${e.title}</h3>
          <p>${e.date}</p>
        </div>`;
        es.innerHTML += card;
      });
    }

    const eg = document.getElementById('eventsGrid');
    if (eg) {
      data.events.forEach(e => {
        const card = `<div class="bg-white p-4 rounded shadow">
          <img src="${e.poster}" class="h-40 w-full object-cover rounded mb-2">
          <h3 class="font-bold">${e.title}</h3>
          <p>${e.date}</p>
        </div>`;
        eg.innerHTML += card;
      });
    }
  })
  .catch(err => console.error('Error loading JSON:', err));
