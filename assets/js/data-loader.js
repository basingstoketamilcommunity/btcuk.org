fetch('data/content.json')
  .then(res => res.json())
  .then(data => {
    const tp = document.getElementById('trusteesPreview');
    const tg = document.getElementById('trusteesGrid');
    data.trustees.forEach(t => {
      const card = `<div class="bg-white p-4 rounded shadow min-w-[200px]">
        <img src="${t.photo}" class="w-full h-40 object-cover rounded mb-2">
        <h3 class="font-bold">${t.name}</h3>
        <p>${t.role}</p>
      </div>`;
      if (tp) tp.innerHTML += card;
      if (tg) tg.innerHTML += card;
    });

    const es = document.getElementById('eventsScroll');
    const eg = document.getElementById('eventsGrid');
    data.events.forEach(e => {
      const card = `<div class="bg-white p-4 rounded shadow min-w-[250px]">
        <img src="${e.poster}" class="h-40 w-full object-cover rounded mb-2">
        <h3 class="font-bold">${e.title}</h3>
        <p>${e.date}</p>
      </div>`;
      if (es) es.innerHTML += card;
      if (eg) eg.innerHTML += card;
    });
  });
