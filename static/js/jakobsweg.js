const pilgrimageRoutes = {
  rhine: {
    title: "Rhine Way",
    totalKm: 84,
    stops: [
      { name: "Bonn", legKm: 0, coords: [50.7374, 7.0982], image: "../images/bonn/beethoven.jpg", caption: "Beethoven and Bonn mark the beginning of the Rhine section.", note: "Collect a pilgrim stamp, walk the Rhine promenade, and begin south only after giving the city a quiet morning.", stay: "Near Bonn Hbf for an early start, or Südstadt for a calmer first night. Reserve directly and ask about late arrival.", eat: "A bakery breakfast, market lunch, and a simple Rhineland dinner; carry food before leaving the city.", transport: "ICE and regional hub. Local trams make Bonn an easy place to shorten or restart the journey.", map: "https://www.openstreetmap.org/search?query=Bonn%20Germany" },
      { name: "Remagen", legKm: 28, coords: [50.5788, 7.2270], image: "../images/jakobsweg/stages/remagen.jpg", caption: "Remagen seen across the Rhine.", note: "A long riverside stage. Break it in Bad Godesberg or Oberwinter if 28 kilometres is too ambitious for day one.", stay: "Look around Remagen station and the riverfront; small guesthouses can fill on weekends and cycling holidays.", eat: "Choose a riverside inn, but confirm kitchen closing time. Carry lunch because options thin out between towns.", transport: "Regional trains parallel the route, making this one of the easiest stages to shorten.", map: "https://www.openstreetmap.org/search?query=Remagen%20Germany" },
      { name: "Bad Breisig", legKm: 16, coords: [50.5087, 7.2960], image: "../images/jakobsweg/stages/bad-breisig.jpg", caption: "Bad Breisig and the Rhine form a shorter recovery stage.", note: "Use the shorter day for the riverside promenade and thermal-town atmosphere rather than adding kilometres automatically.", stay: "The centre and riverfront are both practical; ask whether breakfast is early enough for walkers.", eat: "Seek a seasonal tavern menu and refill supplies near the centre before the next morning.", transport: "Bad Breisig station has regional connections along the Rhine corridor.", map: "https://www.openstreetmap.org/search?query=Bad%20Breisig%20Germany" },
      { name: "Andernach", legKm: 20, coords: [50.4390, 7.4010], image: "../images/jakobsweg/stages/andernach.jpg", caption: "The Round Tower and medieval walls of Andernach.", note: "Enter slowly through the historic centre. The famous cold-water geyser needs a timed visit, so treat it as optional.", stay: "Old Town for atmosphere or near the station for an early departure; verify reception hours.", eat: "Plan dinner in the centre and keep a backup meal, especially on a Monday or public holiday.", transport: "Rail connections make Andernach a useful entry or exit point for a partial walk.", map: "https://www.openstreetmap.org/search?query=Andernach%20Germany" },
      { name: "Koblenz", legKm: 20, coords: [50.3569, 7.5890], image: "../images/jakobsweg/stages/koblenz.jpg", caption: "The Deutsches Eck where the Moselle meets the Rhine.", note: "End at Deutsches Eck, then give tired feet a final cable-car view only if time and weather invite it.", stay: "Altstadt for a celebratory evening; near Koblenz Hbf for onward travel the next morning.", eat: "Book one good final dinner and try a regional Moselle or Middle Rhine wine.", transport: "Major regional rail interchange with onward trains toward Cologne, Frankfurt, Trier, and Mainz.", map: "https://www.openstreetmap.org/search?query=Koblenz%20Germany" }
    ]
  },
  munich: {
    title: "Munich Way",
    totalKm: 147,
    stops: [
      { name: "Munich", legKm: 0, coords: [48.1372, 11.5756], image: "../images/munich/munich.jpg", caption: "Munich is the urban beginning of the route toward the Alps.", note: "Start at city churches associated with St James, then follow the Isar south. Treat the urban exit as part of the journey.", stay: "Maxvorstadt or around Hauptbahnhof before departure; choose luggage storage if walking directly from the city.", eat: "Buy trail food at Viktualienmarkt or near the station before leaving dense neighbourhoods.", transport: "Germany-wide rail hub. S-Bahn stops south of the centre offer sensible alternatives to a full urban stage.", map: "https://www.openstreetmap.org/search?query=Munich%20Germany" },
      { name: "Schäftlarn", legKm: 24, coords: [47.9780, 11.4550], image: "../images/jakobsweg/stages/schaeftlarn.jpg", caption: "Schäftlarn Abbey in the Isar valley.", note: "A mostly gentle first full stage. Confirm the exact marked route and river conditions before departure.", stay: "Search around the monastery, Ebenhausen, or nearby villages; choices are limited, so reserve early.", eat: "Monastery-area restaurants may close between services. Carry lunch and check the evening kitchen time.", transport: "Ebenhausen-Schäftlarn S-Bahn provides an escape route back to Munich.", map: "https://www.openstreetmap.org/search?query=Sch%C3%A4ftlarn%20Germany" },
      { name: "Andechs", legKm: 27, coords: [47.9740, 11.1840], image: "../images/jakobsweg/stages/andechs.jpg", caption: "The hilltop monastery church at Andechs.", note: "This is a longer rolling stage. Split near Starnberg or Herrsching if this is your first multi-day walk.", stay: "Andechs and Herrsching both work; Herrsching has more transport and meal options.", eat: "The monastery is the obvious stop, but check serving times and avoid relying on it as the only dinner plan.", transport: "Herrsching is the western terminus of the Munich S-Bahn and a useful restart point.", map: "https://www.openstreetmap.org/search?query=Andechs%20Germany" },
      { name: "Wessobrunn", legKm: 32, coords: [47.8740, 11.0240], image: "../images/jakobsweg/stages/wessobrunn.jpg", caption: "The historic fountain in Wessobrunn.", note: "Too long for many walkers as one stage. Plan a split around the Ammersee or Raisting area and confirm every bed in advance.", stay: "Small guesthouses and holiday rooms rather than large hotels. A confirmed booking is essential.", eat: "Arrange breakfast and dinner with the accommodation; carry a full lunch and more water than on earlier stages.", transport: "Bus service is limited. Raisting rail station is the most practical bailout before Wessobrunn.", map: "https://www.openstreetmap.org/search?query=Wessobrunn%20Germany" },
      { name: "Rottenbuch", legKm: 21, coords: [47.7340, 10.9650], image: "../images/jakobsweg/stages/rottenbuch.jpg", caption: "The former monastery complex at Rottenbuch.", note: "A more manageable rural stage. Save time for the monastery church and an unhurried evening.", stay: "Village guesthouses are the practical choice. Confirm rest days and arrival time by phone or email.", eat: "Expect Bavarian inn food; carry an emergency meal because village kitchens can have weekly closing days.", transport: "Regional buses connect outward, but frequency can be low outside school and commuter times.", map: "https://www.openstreetmap.org/search?query=Rottenbuch%20Germany" },
      { name: "Füssen", legKm: 43, coords: [47.5700, 10.7000], image: "../images/jakobsweg/stages/fuessen.jpg", caption: "Füssen Old Town at the Alpine edge of the route.", note: "Do not attempt the remaining distance from Rottenbuch in one day. Break the route through Steingaden, Lechbruck, and Marktoberdorf.", stay: "Old Town for a satisfying finish; near the station for onward rail. Book well ahead in summer.", eat: "Celebrate with an Allgäu meal, then replenish properly rather than only snacking after the final walk.", transport: "Regional rail via Buchloe; buses connect castles and nearby villages but are busiest in high season.", map: "https://www.openstreetmap.org/search?query=F%C3%BCssen%20Germany" }
    ]
  }
};

const routeButtons = [...document.querySelectorAll("[data-route]")];
const mapElement = document.querySelector("#route-map");
const detail = document.querySelector("#stage-detail");
const previousButton = document.querySelector("#previous-stage");
const nextButton = document.querySelector("#next-stage");
let activeRoute = "rhine";
let activeStop = 0;
let routeMap;
let baseRouteLine;
let progressRouteLine;
let routeMarkers = [];

function cumulativeDistance(route, index) {
  return route.stops.slice(0, index + 1).reduce((sum, stop) => sum + stop.legKm, 0);
}

function markerIcon(index, state = "") {
  return L.divIcon({ className: "", html: `<span class="pilgrimage-marker ${state}">${index + 1}</span>`, iconSize: [32, 32], iconAnchor: [16, 16] });
}

function showStop(index, shouldScroll = false) {
  const route = pilgrimageRoutes[activeRoute];
  const stop = route.stops[index];
  if (!stop) return;
  activeStop = index;
  const travelled = cumulativeDistance(route, index);
  const percent = route.totalKm ? Math.min(100, travelled / route.totalKm * 100) : 0;

  routeMarkers.forEach((marker, markerIndex) => {
    const state = markerIndex === index ? "active" : markerIndex < index ? "complete" : "";
    marker.setIcon(markerIcon(markerIndex, state));
  });
  progressRouteLine?.setLatLngs(route.stops.slice(0, index + 1).map(item => item.coords));
  document.querySelector("#progress-fill").style.width = `${percent}%`;
  document.querySelector("#progress-distance").textContent = `${travelled} of ${route.totalKm} km`;
  document.querySelector("#progress-label").textContent = `${index === 0 ? "Starting point" : `${stop.legKm} km since previous stop`} · Stage ${index + 1} of ${route.stops.length}`;
  document.querySelector("#stage-image").src = stop.image;
  document.querySelector("#stage-image").alt = stop.caption;
  document.querySelector("#stage-caption").textContent = stop.caption;
  document.querySelector("#stage-number").textContent = `Stage ${index + 1} · ${travelled} km travelled`;
  document.querySelector("#stage-name").textContent = stop.name;
  document.querySelector("#stage-distance").textContent = index === 0 ? "Start" : `${stop.legKm} km leg`;
  document.querySelector("#stage-note").textContent = stop.note;
  document.querySelector("#stage-stay").textContent = stop.stay;
  document.querySelector("#stage-eat").textContent = stop.eat;
  document.querySelector("#stage-transport").textContent = stop.transport;
  document.querySelector("#stage-map").href = stop.map;
  previousButton.disabled = index === 0;
  nextButton.disabled = index === route.stops.length - 1;
  if (shouldScroll && window.matchMedia("(max-width: 820px)").matches) detail.scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderRoute(routeKey) {
  activeRoute = routeKey;
  activeStop = 0;
  const route = pilgrimageRoutes[routeKey];
  document.querySelector("#route-map-title").textContent = route.title;
  routeMap?.remove();
  routeMap = L.map(mapElement, { scrollWheelZoom: false, tap: false });
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", { maxZoom: 19, attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' }).addTo(routeMap);
  const points = route.stops.map(stop => stop.coords);
  baseRouteLine = L.polyline(points, { color: "#526853", weight: 6, opacity: .35, dashArray: "4 10" }).addTo(routeMap);
  progressRouteLine = L.polyline([points[0]], { color: "#b9694f", weight: 7, opacity: .95 }).addTo(routeMap);
  routeMarkers = route.stops.map((stop, index) => {
    const marker = L.marker(stop.coords, { icon: markerIcon(index) }).addTo(routeMap);
    marker.bindTooltip(stop.name, { direction: "top", offset: [0, -14] });
    marker.on("click", () => showStop(index, true));
    return marker;
  });
  routeMap.fitBounds(baseRouteLine.getBounds(), { padding: [26, 26] });
  showStop(0);
}

routeButtons.forEach(button => button.addEventListener("click", () => {
  routeButtons.forEach(item => item.setAttribute("aria-selected", String(item === button)));
  renderRoute(button.dataset.route);
}));
previousButton?.addEventListener("click", () => showStop(activeStop - 1));
nextButton?.addEventListener("click", () => showStop(activeStop + 1));
if (mapElement && window.L) renderRoute(activeRoute);

const packingDays = document.querySelector('#packing-days');
const packingSeason = document.querySelector('#packing-season');
const packingLaundry = document.querySelector('#packing-laundry');
const packingList = document.querySelector('#packing-list');
const packingWeight = document.querySelector('#packing-weight');
const packingDaysOutput = document.querySelector('#packing-days-output');

function packingItems(days, season, laundry) {
  const clothingDays = laundry ? Math.min(days, 4) : Math.min(days, 8);
  const items = [
    ['Backpack and rain cover', '1 set', 1050],
    ['Phone, cable and power bank', '1 set', 520],
    ['Documents, wallet and pilgrim credential', '1 set', 180],
    ['Water bottle', '1 bottle', 180],
    ['Compact first-aid and personal medicine', '1 kit', 240],
    ['Toiletries and quick-dry towel', '1 set', 430],
    ['Headlamp', '1', 110],
    ['Rain shell', '1', 330],
    ['Walking socks', `${clothingDays} pairs`, clothingDays * 58],
    ['Underwear', `${clothingDays} sets`, clothingDays * 55],
    ['Quick-dry tops', `${Math.max(2, Math.ceil(clothingDays / 2))}`, Math.max(2, Math.ceil(clothingDays / 2)) * 155],
    ['Walking trousers / shorts', `${days > 4 ? 2 : 1}`, (days > 4 ? 2 : 1) * 330],
    ['Light sleep / evening layer', '1 set', 360]
  ];
  const seasonal = {
    spring: [['Light fleece', '1', 360], ['Packable umbrella', '1', 230]],
    summer: [['Sun hat and sunscreen', '1 set', 210], ['Extra hydration capacity', '1', 120]],
    autumn: [['Warm mid-layer', '1', 480], ['Light gloves and beanie', '1 set', 150]],
    winter: [['Insulated jacket', '1', 720], ['Thermal base layer', '1 set', 430], ['Warm gloves and beanie', '1 set', 220]]
  };
  return items.concat(seasonal[season] || seasonal.spring);
}

function updatePackingWeight() {
  if (!packingWeight || !packingList) return;
  const grams = [...packingList.querySelectorAll('input:checked')].reduce((sum, input) => sum + Number(input.dataset.grams || 0), 0);
  packingWeight.textContent = `${(grams / 1000).toFixed(1)} kg`;
}

function renderPackingList() {
  if (!packingDays || !packingSeason || !packingLaundry || !packingList) return;
  const days = Number(packingDays.value);
  packingDaysOutput.textContent = `${days} ${days === 1 ? 'day' : 'days'}`;
  packingList.replaceChildren();
  packingItems(days, packingSeason.value, packingLaundry.checked).forEach(([name, quantity, grams]) => {
    const label = document.createElement('label');
    const checkbox = document.createElement('input');
    const copy = document.createElement('span');
    const detail = document.createElement('small');
    checkbox.type = 'checkbox';
    checkbox.checked = true;
    checkbox.dataset.grams = String(grams);
    detail.textContent = `${quantity} · about ${(grams / 1000).toFixed(2)} kg`;
    copy.textContent = name;
    copy.append(detail);
    label.append(checkbox, copy);
    packingList.append(label);
    checkbox.addEventListener('change', updatePackingWeight);
  });
  updatePackingWeight();
}

packingDays?.addEventListener('input', renderPackingList);
packingSeason?.addEventListener('change', renderPackingList);
packingLaundry?.addEventListener('change', renderPackingList);
document.querySelector('#packing-reset')?.addEventListener('click', renderPackingList);
renderPackingList();
