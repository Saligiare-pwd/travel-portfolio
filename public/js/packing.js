const packingDays = document.querySelector('#packing-days');
const packingSeason = document.querySelector('#packing-season');
const packingLaundry = document.querySelector('#packing-laundry');
const packingList = document.querySelector('#packing-list');
const packingWeight = document.querySelector('#packing-weight');
const packingDaysOutput = document.querySelector('#packing-days-output');
const packingCustomForm = document.querySelector('#packing-custom-form');
const packingPresetButtons = [...document.querySelectorAll('[data-packing-preset]')];
const packingTripSelect = document.querySelector('#packing-trip-select');

const PACKING_STORAGE_KEY = 'travel-planner-packing-v1';
const categoryLabels = {
  essentials: 'Essentials',
  health: 'Health & pills',
  electronics: '3C / electronics',
  clothing: 'Clothing',
  toiletries: 'Toiletries',
  food: 'Food & snacks',
  other: 'Other'
};
const packingPresetItems = {
  health: [
    { id: 'prescription-pills', name: 'Prescription pills', quantity: 'for trip + 2 days', grams: 90, category: 'health' },
    { id: 'pain-allergy-pills', name: 'Pain and allergy medicine', quantity: '1 small set', grams: 55, category: 'health' },
    { id: 'blister-care', name: 'Blister care and tape', quantity: '1 kit', grams: 75, category: 'health' }
  ],
  electronics: [
    { id: 'travel-adapter', name: 'Travel adapter', quantity: '1', grams: 120, category: 'electronics' },
    { id: 'camera', name: 'Camera and spare battery', quantity: '1 set', grams: 580, category: 'electronics' },
    { id: 'earbuds', name: 'Earbuds / headphones', quantity: '1', grams: 80, category: 'electronics' }
  ],
  comfort: [
    { id: 'earplugs-mask', name: 'Earplugs and sleep mask', quantity: '1 set', grams: 45, category: 'other' },
    { id: 'day-bag', name: 'Foldable day bag', quantity: '1', grams: 180, category: 'other' },
    { id: 'notebook', name: 'Notebook and pen', quantity: '1 set', grams: 210, category: 'other' }
  ],
  snacks: [
    { id: 'trail-snacks', name: 'Trail snacks', quantity: '1 day', grams: 350, category: 'food' },
    { id: 'emergency-meal', name: 'Emergency meal', quantity: '1', grams: 300, category: 'food' },
    { id: 'electrolytes', name: 'Electrolyte tablets', quantity: '1 tube', grams: 85, category: 'food' }
  ]
};

function loadPackingState() {
  try {
    const stored = JSON.parse(localStorage.getItem(PACKING_STORAGE_KEY) || '{}');
    return {
      presets: Array.isArray(stored.presets) ? stored.presets.filter(key => packingPresetItems[key]) : [],
      custom: Array.isArray(stored.custom) ? stored.custom.filter(item => item && item.name).map(item => ({
        ...item,
        category: categoryLabels[item.category] ? item.category : 'other',
        grams: Math.max(0, Math.min(20000, Number(item.grams) || 0)),
        custom: true
      })) : []
    };
  } catch (_) {
    return { presets: [], custom: [] };
  }
}

const packingState = loadPackingState();
const activePackingPresets = new Set(packingState.presets);
let customPackingItems = packingState.custom;

function savePackingState() {
  try {
    localStorage.setItem(PACKING_STORAGE_KEY, JSON.stringify({ presets: [...activePackingPresets], custom: customPackingItems }));
  } catch (_) {
    // The planner remains usable when private browsing blocks local storage.
  }
}

function packingItems(days, season, laundry) {
  const clothingDays = laundry ? Math.min(days, 4) : Math.min(days, 8);
  const items = [
    { id: 'backpack', name: 'Backpack and rain cover', quantity: '1 set', grams: 1050, category: 'essentials' },
    { id: 'phone', name: 'Phone, cable and power bank', quantity: '1 set', grams: 520, category: 'electronics' },
    { id: 'documents', name: 'Documents and wallet', quantity: '1 set', grams: 180, category: 'essentials' },
    { id: 'water-bottle', name: 'Water bottle', quantity: '1 bottle', grams: 180, category: 'essentials' },
    { id: 'first-aid', name: 'Compact first-aid kit', quantity: '1 kit', grams: 170, category: 'health' },
    { id: 'toiletries', name: 'Toiletries and quick-dry towel', quantity: '1 set', grams: 430, category: 'toiletries' },
    { id: 'rain-shell', name: 'Rain shell', quantity: '1', grams: 330, category: 'clothing' },
    { id: 'socks', name: 'Walking socks', quantity: `${clothingDays} pairs`, grams: clothingDays * 58, category: 'clothing' },
    { id: 'underwear', name: 'Underwear', quantity: `${clothingDays} sets`, grams: clothingDays * 55, category: 'clothing' },
    { id: 'tops', name: 'Quick-dry tops', quantity: `${Math.max(2, Math.ceil(clothingDays / 2))}`, grams: Math.max(2, Math.ceil(clothingDays / 2)) * 155, category: 'clothing' },
    { id: 'trousers', name: 'Trousers / shorts', quantity: `${days > 4 ? 2 : 1}`, grams: (days > 4 ? 2 : 1) * 330, category: 'clothing' },
    { id: 'evening-layer', name: 'Sleep / evening layer', quantity: '1 set', grams: 360, category: 'clothing' }
  ];
  const seasonal = {
    spring: [
      { id: 'light-fleece', name: 'Light fleece', quantity: '1', grams: 360, category: 'clothing' },
      { id: 'umbrella', name: 'Packable umbrella', quantity: '1', grams: 230, category: 'essentials' }
    ],
    summer: [
      { id: 'sun-kit', name: 'Sun hat and sunscreen', quantity: '1 set', grams: 210, category: 'toiletries' },
      { id: 'hydration', name: 'Extra hydration capacity', quantity: '1', grams: 120, category: 'essentials' }
    ],
    autumn: [
      { id: 'warm-layer', name: 'Warm mid-layer', quantity: '1', grams: 480, category: 'clothing' },
      { id: 'light-warm-set', name: 'Light gloves and beanie', quantity: '1 set', grams: 150, category: 'clothing' }
    ],
    winter: [
      { id: 'insulated-jacket', name: 'Insulated jacket', quantity: '1', grams: 720, category: 'clothing' },
      { id: 'thermal-layer', name: 'Thermal base layer', quantity: '1 set', grams: 430, category: 'clothing' },
      { id: 'warm-set', name: 'Warm gloves and beanie', quantity: '1 set', grams: 220, category: 'clothing' }
    ]
  };
  const presetItems = [...activePackingPresets].flatMap(key => packingPresetItems[key] || []);
  return items.concat(seasonal[season] || seasonal.spring, presetItems, customPackingItems);
}

function updatePackingWeight() {
  const grams = [...packingList.querySelectorAll('input:checked')].reduce((sum, input) => sum + Number(input.dataset.grams || 0), 0);
  packingWeight.textContent = `${(grams / 1000).toFixed(1)} kg`;
}

function renderPackingList(resetChecks = false) {
  const days = Number(packingDays.value);
  packingDaysOutput.textContent = `${days} ${days === 1 ? 'day' : 'days'}`;
  const previousChecks = resetChecks ? new Map() : new Map(
    [...packingList.querySelectorAll('.packing-item')].map(row => [row.dataset.id, row.querySelector('input').checked])
  );
  packingList.replaceChildren();
  const groupedItems = packingItems(days, packingSeason.value, packingLaundry.checked).reduce((groups, item) => {
    const category = categoryLabels[item.category] ? item.category : 'other';
    if (!groups.has(category)) groups.set(category, []);
    groups.get(category).push(item);
    return groups;
  }, new Map());

  groupedItems.forEach((items, category) => {
    const section = document.createElement('section');
    const heading = document.createElement('h3');
    const grid = document.createElement('div');
    section.className = `packing-category packing-category-${category}`;
    heading.textContent = categoryLabels[category];
    grid.className = 'packing-category-grid';

    items.forEach(item => {
      const row = document.createElement('div');
      const label = document.createElement('label');
      const checkbox = document.createElement('input');
      const copy = document.createElement('span');
      const detail = document.createElement('small');
      row.className = 'packing-item';
      row.dataset.id = item.id;
      row.dataset.name = item.name;
      row.dataset.quantity = item.quantity || '1';
      row.dataset.category = categoryLabels[category];
      row.dataset.grams = String(item.grams || 0);
      checkbox.type = 'checkbox';
      checkbox.checked = previousChecks.has(item.id) ? previousChecks.get(item.id) : true;
      checkbox.dataset.grams = String(item.grams || 0);
      detail.textContent = `${item.quantity || '1'} · ${(Number(item.grams || 0) / 1000).toFixed(2)} kg`;
      copy.textContent = item.name;
      copy.append(detail);
      label.append(checkbox, copy);
      row.append(label);
      if (item.custom) {
        const remove = document.createElement('button');
        remove.type = 'button';
        remove.className = 'packing-item-remove';
        remove.textContent = 'Remove';
        remove.setAttribute('aria-label', `Remove ${item.name}`);
        remove.addEventListener('click', () => {
          customPackingItems = customPackingItems.filter(customItem => customItem.id !== item.id);
          savePackingState();
          renderPackingList();
        });
        row.append(remove);
      }
      grid.append(row);
      checkbox.addEventListener('change', updatePackingWeight);
    });
    section.append(heading, grid);
    packingList.append(section);
  });
  updatePackingWeight();
}

function updatePresetButtons() {
  packingPresetButtons.forEach(button => {
    const active = activePackingPresets.has(button.dataset.packingPreset);
    const label = button.dataset.label || button.textContent.replace(/^[＋✓]\s*/, '');
    button.dataset.label = label;
    button.setAttribute('aria-pressed', String(active));
    button.textContent = `${active ? '✓' : '＋'} ${label}`;
  });
}

packingPresetButtons.forEach(button => button.addEventListener('click', () => {
  const preset = button.dataset.packingPreset;
  if (activePackingPresets.has(preset)) activePackingPresets.delete(preset);
  else activePackingPresets.add(preset);
  savePackingState();
  updatePresetButtons();
  renderPackingList();
}));

packingCustomForm.addEventListener('submit', event => {
  event.preventDefault();
  const nameInput = document.querySelector('#packing-custom-name');
  const categoryInput = document.querySelector('#packing-custom-category');
  const quantityInput = document.querySelector('#packing-custom-quantity');
  const weightInput = document.querySelector('#packing-custom-weight');
  const name = nameInput.value.trim();
  if (!name) return;
  customPackingItems.push({
    id: `custom-${Date.now()}`,
    name,
    category: categoryInput.value,
    quantity: quantityInput.value.trim() || '1',
    grams: Math.max(0, Math.min(20000, Number(weightInput.value) || 0)),
    custom: true
  });
  savePackingState();
  packingCustomForm.reset();
  quantityInput.value = '1';
  weightInput.value = '100';
  renderPackingList();
  nameInput.focus();
});

let packingMap;
let packingMarker;

function selectedTrip() {
  const option = packingTripSelect.options[packingTripSelect.selectedIndex];
  return {
    name: option.dataset.name,
    country: option.dataset.country,
    days: option.dataset.days,
    summary: option.dataset.summary,
    image: option.dataset.image,
    url: option.dataset.url,
    lat: Number(option.dataset.lat),
    lng: Number(option.dataset.lng)
  };
}

function updateSelectedTrip() {
  const trip = selectedTrip();
  document.querySelector('#packing-trip-image').src = trip.image;
  document.querySelector('#packing-trip-image').alt = trip.name;
  document.querySelector('#packing-trip-meta').textContent = `${trip.country} · ${trip.days}`;
  document.querySelector('#packing-trip-name').textContent = trip.name;
  document.querySelector('#packing-trip-summary').textContent = trip.summary;
  document.querySelector('#packing-trip-guide').href = trip.url;
  const hasLocation = Number.isFinite(trip.lat) && Number.isFinite(trip.lng);
  const mapUrl = hasLocation ? `https://www.openstreetmap.org/?mlat=${trip.lat}&mlon=${trip.lng}#map=10/${trip.lat}/${trip.lng}` : 'https://www.openstreetmap.org/';
  document.querySelector('#packing-trip-osm').href = mapUrl;
  if (hasLocation && packingMap) {
    if (!packingMarker) packingMarker = L.marker([trip.lat, trip.lng]).addTo(packingMap);
    else packingMarker.setLatLng([trip.lat, trip.lng]);
    packingMarker.bindTooltip(trip.name, { permanent: false, direction: 'top' });
    packingMap.flyTo([trip.lat, trip.lng], 7, { duration: .65 });
  } else if (packingMap) {
    if (packingMarker) {
      packingMarker.remove();
      packingMarker = null;
    }
    packingMap.setView([25, 20], 2);
  }
  const suggestedDays = Number.parseInt(trip.days, 10);
  if (Number.isFinite(suggestedDays) && packingTripSelect.value !== 'general') {
    packingDays.value = String(Math.min(21, Math.max(1, suggestedDays)));
    renderPackingList();
  }
}

if (window.L) {
  packingMap = L.map(document.querySelector('#packing-trip-map'), { scrollWheelZoom: false, tap: false, minZoom: 2 }).setView([25, 20], 2);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(packingMap);
}

function csvCell(value) {
  return `"${String(value ?? '').replace(/"/g, '""')}"`;
}

document.querySelector('#packing-download-csv').addEventListener('click', () => {
  const trip = selectedTrip();
  const mapUrl = Number.isFinite(trip.lat) && Number.isFinite(trip.lng)
    ? `https://www.openstreetmap.org/?mlat=${trip.lat}&mlon=${trip.lng}#map=10/${trip.lat}/${trip.lng}`
    : 'https://www.openstreetmap.org/';
  const rows = [
    ['Journey', trip.name],
    ['Location', trip.country],
    ['Length', packingDaysOutput.textContent],
    ['Season', packingSeason.options[packingSeason.selectedIndex].text],
    ['Map', mapUrl],
    [],
    ['Packed', 'Category', 'Item', 'Quantity', 'Weight (g)']
  ];
  document.querySelectorAll('.packing-item').forEach(row => {
    rows.push([
      row.querySelector('input').checked ? 'Yes' : 'No',
      row.dataset.category,
      row.dataset.name,
      row.dataset.quantity,
      row.dataset.grams
    ]);
  });
  const csv = `\uFEFF${rows.map(row => row.map(csvCell).join(',')).join('\r\n')}`;
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
  const downloadUrl = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = downloadUrl;
  link.download = `${trip.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'journey'}-packing-list.csv`;
  document.body.append(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(downloadUrl), 1000);
});

document.querySelector('#packing-print-pdf').addEventListener('click', () => window.print());
packingDays.addEventListener('input', renderPackingList);
packingSeason.addEventListener('change', renderPackingList);
packingLaundry.addEventListener('change', renderPackingList);
packingTripSelect.addEventListener('change', updateSelectedTrip);
document.querySelector('#packing-reset').addEventListener('click', () => renderPackingList(true));
updatePresetButtons();
renderPackingList();
updateSelectedTrip();
