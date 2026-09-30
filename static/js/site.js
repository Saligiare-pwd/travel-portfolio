const navButton = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');

if (navButton && nav) {
  navButton.addEventListener('click', () => {
    const open = navButton.getAttribute('aria-expanded') === 'true';
    navButton.setAttribute('aria-expanded', String(!open));
    nav.classList.toggle('open', !open);
  });
}

document.querySelectorAll('[data-card-rail]').forEach((rail) => {
  const section = rail.closest('.area-section');
  section?.querySelector('[data-rail-previous]')?.addEventListener('click', () => rail.scrollBy({ left: -rail.clientWidth * 0.82, behavior: 'smooth' }));
  section?.querySelector('[data-rail-next]')?.addEventListener('click', () => rail.scrollBy({ left: rail.clientWidth * 0.82, behavior: 'smooth' }));
});

function addOpenStreetMapTiles(map) {
  return L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
}

if (window.L) {
  document.querySelectorAll('[data-city-route-map]').forEach((mapElement) => {
    const route = mapElement.closest('.city-route');
    const points = [...route.querySelectorAll('[data-route-point]')].map((item, index) => ({
      index,
      name: item.dataset.name,
      latLng: [Number(item.dataset.lat), Number(item.dataset.lng)],
      detail: item.querySelector('small')?.textContent || ''
    })).filter(point => point.latLng.every(Number.isFinite));

    if (!points.length) return;
    const map = L.map(mapElement, { scrollWheelZoom: false, tap: false });
    addOpenStreetMapTiles(map);
    L.polyline(points.map(point => point.latLng), { color: '#b9694f', weight: 4, opacity: .78 }).addTo(map);
    points.forEach((point) => {
      const marker = L.circleMarker(point.latLng, {
        radius: 10,
        color: '#fffdf8',
        weight: 3,
        fillColor: '#334738',
        fillOpacity: 1
      }).addTo(map);
      marker.bindTooltip(`${point.index + 1}. ${point.name}`, { permanent: false, direction: 'top' });
      marker.bindPopup(`<strong>${point.index + 1}. ${point.name}</strong><br>${point.detail}`);
    });
    map.fitBounds(points.map(point => point.latLng), { padding: [28, 28], maxZoom: 13 });
  });
}
