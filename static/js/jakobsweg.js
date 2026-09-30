const pilgrimageRoutes = {
  rhine: {
    stops: [
      {
        name: 'Bonn', distance: 'Starting point', image: '../images/bonn/beethoven.jpg', caption: 'Begin with the Rhine and the compact old centre.',
        note: 'Collect a pilgrim stamp, walk the Rhine promenade, and begin south only after giving the city a quiet morning.',
        stay: 'Near Bonn Hbf for an early start, or Südstadt for a calmer first night. Reserve directly and ask about late arrival.',
        eat: 'A bakery breakfast, market lunch, and a simple Rhineland dinner; carry food before leaving the city.',
        transport: 'ICE and regional hub. Local trams make Bonn an easy place to shorten or restart the journey.',
        map: 'https://www.openstreetmap.org/search?query=Bonn%20Germany', info: 'https://www.bonn-region.de/en/'
      },
      {
        name: 'Remagen', distance: 'Approx. 28 km', image: '../images/jakobsweg/rhine.jpg', caption: 'The Rhine remains the visual guide south.',
        note: 'A long riverside stage. Break it in Bad Godesberg or Oberwinter if 28 kilometres is too ambitious for day one.',
        stay: 'Look around Remagen station and the riverfront; small guesthouses can fill on weekends and cycling holidays.',
        eat: 'Choose a riverside inn, but confirm kitchen closing time. Carry lunch because options thin out between towns.',
        transport: 'Regional trains parallel the route, making this one of the easiest stages to shorten.',
        map: 'https://www.openstreetmap.org/search?query=Remagen%20Germany', info: 'https://www.remagen.de/'
      },
      {
        name: 'Bad Breisig', distance: 'Approx. 16 km', image: '../images/jakobsweg/rhine.jpg', caption: 'A deliberately shorter recovery stage beside the Rhine.',
        note: 'Use the shorter day for the riverside promenade and thermal-town atmosphere rather than adding kilometres automatically.',
        stay: 'The centre and riverfront are both practical; ask whether breakfast is early enough for walkers.',
        eat: 'Seek a seasonal tavern menu and refill supplies near the centre before the next morning.',
        transport: 'Bad Breisig station has regional connections along the Rhine corridor.',
        map: 'https://www.openstreetmap.org/search?query=Bad%20Breisig%20Germany', info: 'https://www.bad-breisig.de/'
      },
      {
        name: 'Andernach', distance: 'Approx. 20 km', image: '../images/jakobsweg/rhine.jpg', caption: 'Medieval walls and a compact old town make a natural pause.',
        note: 'Enter slowly through the historic centre. The famous cold-water geyser needs a timed visit, so treat it as optional.',
        stay: 'Old Town for atmosphere or near the station for an early departure; verify reception hours.',
        eat: 'Plan dinner in the centre and keep a backup meal, especially on a Monday or public holiday.',
        transport: 'Rail connections make Andernach a useful entry or exit point for a partial walk.',
        map: 'https://www.openstreetmap.org/search?query=Andernach%20Germany', info: 'https://www.andernach-tourismus.de/'
      },
      {
        name: 'Koblenz', distance: 'Approx. 20 km', image: '../images/jakobsweg/rhine.jpg', caption: 'Finish this section where the Moselle meets the Rhine.',
        note: 'End at Deutsches Eck, then give tired feet a final cable-car view only if time and weather invite it.',
        stay: 'Altstadt for a celebratory evening; near Koblenz Hbf for onward travel the next morning.',
        eat: 'Book one good final dinner and try a regional Moselle or Middle Rhine wine.',
        transport: 'Major regional rail interchange with onward trains toward Cologne, Frankfurt, Trier, and Mainz.',
        map: 'https://www.openstreetmap.org/search?query=Koblenz%20Germany', info: 'https://www.visit-koblenz.de/en'
      }
    ]
  },
  munich: {
    stops: [
      {
        name: 'Munich', distance: 'Starting point', image: '../images/munich/munich.jpg', caption: 'The pilgrimage begins inside the city, not outside it.',
        note: 'Start at St James-associated city churches, then follow the Isar south. Treat the urban exit as part of the journey.',
        stay: 'Maxvorstadt or around Hauptbahnhof before departure; choose luggage storage if walking directly from the city.',
        eat: 'Buy trail food at Viktualienmarkt or near the station before leaving dense neighbourhoods.',
        transport: 'Germany-wide rail hub. S-Bahn stops south of the centre offer sensible alternatives to a full urban stage.',
        map: 'https://www.openstreetmap.org/search?query=Munich%20Germany', info: 'https://www.muenchen.travel/en'
      },
      {
        name: 'Schäftlarn', distance: 'Approx. 24 km', image: '../images/jakobsweg/alpine-way.jpg', caption: 'River landscapes give way to the monastery country south of Munich.',
        note: 'A mostly gentle first full stage. Confirm the exact marked route and river conditions before departure.',
        stay: 'Search around the monastery, Ebenhausen, or nearby villages; choices are limited, so reserve early.',
        eat: 'Monastery-area restaurants may close between services. Carry lunch and check the evening kitchen time.',
        transport: 'Ebenhausen-Schäftlarn S-Bahn provides an escape route back to Munich.',
        map: 'https://www.openstreetmap.org/search?query=Sch%C3%A4ftlarn%20Germany', info: 'https://www.schaeftlarn.de/'
      },
      {
        name: 'Andechs', distance: 'Approx. 27 km', image: '../images/jakobsweg/alpine-way.jpg', caption: 'A hilltop monastery becomes the day\'s visible goal.',
        note: 'This is a longer rolling stage. Split near Starnberg or Herrsching if this is your first multi-day walk.',
        stay: 'Andechs and Herrsching both work; Herrsching has more transport and meal options.',
        eat: 'The monastery is the obvious stop, but check serving times and avoid relying on it as the only dinner plan.',
        transport: 'Herrsching is the western terminus of the Munich S-Bahn and a useful restart point.',
        map: 'https://www.openstreetmap.org/search?query=Andechs%20Germany', info: 'https://www.andechs.de/en.html'
      },
      {
        name: 'Wessobrunn', distance: 'Approx. 32 km', image: '../images/jakobsweg/alpine-way.jpg', caption: 'Quiet Upper Bavarian countryside replaces city connections.',
        note: 'Too long for many walkers as one stage. Plan a split around the Ammersee/Raisting area and confirm every bed in advance.',
        stay: 'Small guesthouses and holiday rooms rather than large hotels. A confirmed booking is essential.',
        eat: 'Arrange breakfast and dinner with the accommodation; carry a full lunch and more water than on earlier stages.',
        transport: 'Bus service is limited. Raisting rail station is the most practical bailout before Wessobrunn.',
        map: 'https://www.openstreetmap.org/search?query=Wessobrunn%20Germany', info: 'https://www.wessobrunn.de/'
      },
      {
        name: 'Rottenbuch', distance: 'Approx. 21 km', image: '../images/jakobsweg/alpine-way.jpg', caption: 'Baroque church, farmland, and the Alps drawing closer.',
        note: 'A more manageable rural stage. Save time for the monastery church and an unhurried evening.',
        stay: 'Village guesthouses are the practical choice. Confirm rest days and arrival time by phone or email.',
        eat: 'Expect Bavarian inn food; carry an emergency meal because village kitchens can have weekly closing days.',
        transport: 'Regional buses connect outward, but frequency can be low outside school and commuter times.',
        map: 'https://www.openstreetmap.org/search?query=Rottenbuch%20Germany', info: 'https://www.rottenbuch.de/'
      },
      {
        name: 'Füssen', distance: 'Multi-stage finish', image: '../images/jakobsweg/alpine-way.jpg', caption: 'Treat Füssen as a goal reached over several shorter stages.',
        note: 'Do not attempt the remaining distance from Rottenbuch in one day. Break the route through Steingaden, Lechbruck, and Marktoberdorf.',
        stay: 'Old Town for a satisfying finish; near the station for onward rail. Book well ahead in summer.',
        eat: 'Celebrate with an Allgäu meal, then replenish properly rather than only snacking after the final walk.',
        transport: 'Regional rail via Buchloe; buses connect castles and nearby villages but are busiest in high season.',
        map: 'https://www.openstreetmap.org/search?query=F%C3%BCssen%20Germany', info: 'https://www.fuessen.de/en/'
      }
    ]
  }
};

const routeButtons = [...document.querySelectorAll('[data-route]')];
const stopsEl = document.querySelector('#trail-stops');
const detail = document.querySelector('#stage-detail');
let activeRoute = 'rhine';
let activeStop = 0;

function showStop(index, focus = false) {
  const stop = pilgrimageRoutes[activeRoute].stops[index];
  if (!stop) return;
  activeStop = index;
  [...stopsEl.querySelectorAll('button')].forEach((button, i) => {
    button.setAttribute('aria-selected', String(i === index));
    button.classList.toggle('active', i === index);
  });
  document.querySelector('#stage-image').src = stop.image;
  document.querySelector('#stage-image').alt = stop.caption;
  document.querySelector('#stage-caption').textContent = stop.caption;
  document.querySelector('#stage-number').textContent = `Stage ${index + 1} of ${pilgrimageRoutes[activeRoute].stops.length}`;
  document.querySelector('#stage-name').textContent = stop.name;
  document.querySelector('#stage-distance').textContent = stop.distance;
  document.querySelector('#stage-note').textContent = stop.note;
  document.querySelector('#stage-stay').textContent = stop.stay;
  document.querySelector('#stage-eat').textContent = stop.eat;
  document.querySelector('#stage-transport').textContent = stop.transport;
  document.querySelector('#stage-map').href = stop.map;
  document.querySelector('#stage-info').href = stop.info;
  if (focus) detail.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function renderRoute(route) {
  activeRoute = route;
  stopsEl.innerHTML = '';
  pilgrimageRoutes[route].stops.forEach((stop, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.setAttribute('role', 'tab');
    button.innerHTML = `<span>${String(index + 1).padStart(2, '0')}</span><strong>${stop.name}</strong><small>${stop.distance}</small>`;
    button.addEventListener('click', () => showStop(index, true));
    stopsEl.appendChild(button);
  });
  showStop(0);
}

routeButtons.forEach(button => button.addEventListener('click', () => {
  routeButtons.forEach(item => item.setAttribute('aria-selected', String(item === button)));
  renderRoute(button.dataset.route);
}));

document.querySelector('.trail-prev')?.addEventListener('click', () => stopsEl.scrollBy({ left: -260, behavior: 'smooth' }));
document.querySelector('.trail-next')?.addEventListener('click', () => stopsEl.scrollBy({ left: 260, behavior: 'smooth' }));

if (stopsEl) renderRoute(activeRoute);
