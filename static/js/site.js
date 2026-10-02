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
    const markers = points.map((point) => {
      const marker = L.circleMarker(point.latLng, {
        radius: 10,
        color: '#fffdf8',
        weight: 3,
        fillColor: '#334738',
        fillOpacity: 1
      }).addTo(map);
      marker.bindTooltip(`${point.index + 1}. ${point.name}`, { permanent: false, direction: 'top' });
      marker.bindPopup(`<strong>${point.index + 1}. ${point.name}</strong><br>${point.detail}`);
      marker.on('click', () => activatePoint(point.index, false));
      return marker;
    });

    const pointButtons = [...route.querySelectorAll('[data-route-point]')];
    const activeName = route.querySelector('[data-route-active-name]');
    const activeDetail = route.querySelector('[data-route-active-detail]');
    function activatePoint(index, moveMap = true) {
      const point = points[index];
      if (!point) return;
      pointButtons.forEach((button, buttonIndex) => button.classList.toggle('active', buttonIndex === index));
      markers.forEach((marker, markerIndex) => marker.setStyle({
        radius: markerIndex === index ? 13 : 10,
        fillColor: markerIndex === index ? '#b9694f' : '#334738'
      }));
      if (activeName) activeName.textContent = point.name;
      if (activeDetail) activeDetail.textContent = point.detail;
      markers[index].openPopup();
      if (moveMap) map.panTo(point.latLng, { animate: true });
    }
    pointButtons.forEach((button, index) => button.addEventListener('click', () => activatePoint(index)));
    map.fitBounds(points.map(point => point.latLng), { padding: [28, 28], maxZoom: 13 });
    activatePoint(0, false);
  });

  const atlasMapElement = document.querySelector('#atlas-map');
  const atlasButtons = [...document.querySelectorAll('[data-atlas-place]')];
  if (atlasMapElement && atlasButtons.length) {
    const atlasPlaces = atlasButtons.map((button, index) => ({
      index,
      button,
      name: button.dataset.name,
      country: button.dataset.country,
      days: button.dataset.days,
      latLng: [Number(button.dataset.lat), Number(button.dataset.lng)],
      image: button.dataset.image,
      url: button.dataset.url,
      summary: button.dataset.summary
    }));
    const atlasMap = L.map(atlasMapElement, { scrollWheelZoom: false, tap: false, minZoom: 2 });
    addOpenStreetMapTiles(atlasMap);
    const atlasMarkers = atlasPlaces.map(place => {
      const icon = L.divIcon({ className: '', html: `<span class="atlas-marker">${place.index + 1}</span>`, iconSize: [32, 32], iconAnchor: [16, 16] });
      const marker = L.marker(place.latLng, { icon }).addTo(atlasMap);
      marker.bindTooltip(place.name, { direction: 'top', offset: [0, -12] });
      return marker;
    });
    const atlasImage = document.querySelector('#atlas-image');
    const atlasCountry = document.querySelector('#atlas-country');
    const atlasDays = document.querySelector('#atlas-days');
    const atlasName = document.querySelector('#atlas-name');
    const atlasSummary = document.querySelector('#atlas-summary');
    const atlasLink = document.querySelector('#atlas-link');
    function selectAtlasPlace(index, moveMap = true) {
      const place = atlasPlaces[index];
      if (!place) return;
      atlasButtons.forEach((button, buttonIndex) => button.classList.toggle('active', buttonIndex === index));
      atlasMarkers.forEach((marker, markerIndex) => {
        const element = marker.getElement()?.querySelector('.atlas-marker');
        element?.classList.toggle('active', markerIndex === index);
      });
      atlasImage.src = place.image;
      atlasImage.alt = place.name;
      atlasCountry.textContent = place.country;
      atlasDays.textContent = place.days;
      atlasName.textContent = place.name;
      atlasSummary.textContent = place.summary;
      atlasLink.href = place.url;
      if (moveMap) atlasMap.flyTo(place.latLng, Math.max(atlasMap.getZoom(), 5), { duration: .7 });
    }
    atlasButtons.forEach((button, index) => button.addEventListener('click', () => selectAtlasPlace(index)));
    atlasMarkers.forEach((marker, index) => marker.on('click', () => selectAtlasPlace(index)));
    atlasMap.fitBounds(atlasPlaces.map(place => place.latLng), { padding: [30, 30], maxZoom: 4 });
    selectAtlasPlace(0, false);
  }
}
