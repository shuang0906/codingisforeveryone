// Import specific filters from the threejs library
import { RenderPixelatedPass } from "three/addons/postprocessing/RenderPixelatedPass.js";

const markerSvg = `<svg viewBox="0 0 10 10">
<defs xmlns="http://www.w3.org/2000/svg">
    <style>
      .cls-1 {
        fill: rgba(255, 255, 255, 0.01);
      }
    </style>
  </defs>
  <path fill="yellow" d="M6.47,10H3.53v-.59H1.76v-.59h-.59v-.59H.59v-1.17H0V2.35H.59v-.59h.59v-.59h.59V.59h.59V0H7.06V.59h1.18v.59h.59v.59h.59v1.17h.59v3.53h-.59v1.18h-.59v.59h-.59v.59h-.59v.59h-1.17v.59Z"/>
  <path class="cls-1" d="M6.47,10v-.59h1.17v-.59h.59v-.59h.59v-.59h.59v-1.18h.59v3.53h-3.53Z"/>
  <path class="cls-1" d="M0,7.06H.59v1.17h.59v.59h.59v.59h1.77v.59H0v-2.94Z"/>
  <path class="cls-1" d="M10,2.94h-.59V1.77h-.59v-.59h-.59V.59h-1.18V0h2.94V2.94Z"/>
  <path class="cls-1" d="M2.35,0V.59h-.59v.59h-.59v.59H.59v.59H0V0H2.35Z"/>
</svg>`;

//info
const gData =
  [
    //A
    {
      "label": "ARLOGO",
      "Syntax": "Arabic",
      "agency": "unknown",
      "date": "2012",
      "url": "http://nas.sr/---/",
      "lat": 40.7128,
      "lng": -74.0060,
      "community": "691",
      "size": "1"
    },
    //B
    //C
    {
      "label": "Chinese BASIC",
      "Syntax": "Chinese",
      "agency": "unknown",
      "date": "1980s",
      "url": "https://en.wikipedia.org/wiki/Chinese_BASIC",
      "lat": 23.6978,
      "lng": 120.9605,
      "community": "Unknown",
      "size": "1"
    },
    {
      "label": "Chinese Python",
      "Syntax": "Chinese",
      "agency": "Chinese Python Dev Team",
      "date": "2002",
      "url": "http://chinesepython.org/",
      "lat": 22.3193,
      "lng": 114.177216,
      "community": "5,727",
      "size": "1"
    },
    //D
    {
      "label": "Dolittleドリトル",
      "Syntax": "Japanese",
      "agency": "Osaka Electro-Communication University",
      "date": "2017",
      "url": "https://dolittle.eplang.jp/",
      "lat": 34.6937,
      "lng": 135.5023,
      "community": "Unknown",
      "size": "1"
    },
    {
      "label": "Dzintars",
      "Syntax": "Latvian",
      "agency": "Raimonds Simanovskis, Uģis Ozols, Maksim Berjoza",
      "date": "2013",
      "url": "https://github.com/dzintars-valoda/dzintars",
      "lat": 56.8796,
      "lng": 24.6032,
      "community": "41",
      "size": "1"
    },
    //E
    {
      "label": "易语言",
      "Syntax": "Chinese",
      "agency": " 大连大有吴涛易语言软件开发有限公司",
      "date": "2018",
      "url": "https://epl.eyuyan.com/",
      "lat": 38.9140,
      "lng": 121.6147,
      "community": "Unknown",
      "size": "1"
    },
    {
      "label": "Ezhil எழில்",
      "Syntax": "Tami",
      "agency": "Muthiah Annamalai",
      "date": "2007",
      "url": "https://ezhillang.org/",
      "lat": 11.5290,
      "lng": 78.7509,
      "community": "2938",
      "size": "2"
    },
    //H
    {
      "label": "Hindawi",
      "Syntax": "Hindi, Bangla, Gujrati, Assamese, Nepali and other Indian Syntaxs",
      "agency": "Abhishek Choudhary",
      "date": "2004",
      "url": "https://sourceforge.net/projects/hindawi/",
      "lat": 19.0760,
      "lng": 72.8777,
      "community": "Unknown",
      "size": "1"
    },
    //F
    {
      "label": "Fjölnir",
      "Syntax": "Icelandic",
      "agency": "Snorri Agnarsson",
      "date": "1980s",
      "url": "https://dl.acm.org/doi/10.1145/800225.806833",
      "lat": 64.1396,
      "lng": 21.9519,
      "community": "Unknown",
      "size": "1"
    },
    //L
    {
      "label": "Linotte",
      "Syntax": "French",
      "agency": "Ronan Mounès",
      "date": "2005",
      "url": "http://langagelinotte.free.fr/wordpress/",
      "lat": 46.2276,
      "lng": 2.2137,
      "community": "Unknown",
      "size": "1"
    },
    {
      "label": "LSE",
      "Syntax": "French",
      "agency": " Supélec, Télémécanique",
      "date": "1970s",
      "url": "https://en.wikipedia.org/wiki/LSE_(programming_Syntax)",
      "lat": 48.7086,
      "lng": 2.1639,
      "community": "Unknown",
      "size": "1"
    },
    //P
    {
      "label": "Portugol",
      "Syntax": "português",
      "agency": " António Manso, Antonio Carlos Nicolodi",
      "date": "1983",
      "url": "https://pt.wikipedia.org/wiki/Portugol",
      "lat": 39.6006,
      "lng": 8.3898,
      "community": "Unknown",
      "size": "1"
    },
    {
      "label": "Perligata",
      "Syntax": "Latin",
      "agency": "Damian Conway",
      "date": "2001",
      "url": "https://metacpan.org/pod/Lingua::Romana::Perligata",
      "lat": -37.8141,
      "lng": 144.9630,
      "community": "383",
      "size": "1"
    },
    //Z
    {
      "label": "zhpy",
      "Syntax": "Chinese",
      "agency": "gasolin, 林博仁",
      "date": "2007",
      "url": "https://pypi.org/project/zhpy/",
      "lat": 25.0330,
      "lng": 121.5654,
      "community": "55",
      "size": "1"
    },
    //?
    {
      "label": "قلب",
      "Syntax": "Arabic",
      "agency": "Ramsey Nasser",
      "date": "2012",
      "url": "http://nas.sr/---/",
      "lat": 40.7128,
      "lng": -74.0060,
      "community": "691",
      "size": "1"
    },
    {
      "label": "Эль-76",
      "Syntax": "Russian",
      "agency": "	Boris Babayan & Co",
      "date": "1973",
      "url": "https://io89.pl.tl/%26%231059%3B%26%231089%3B%26%231090%3B%26%231072%3B%26%231074%3B%26%231099%3B-%26%231085%3B%26%231072%3B-%26%231082%3B%26%231110%3B%26%231088%3B%26%231099%3B%26%231083%3B%26%231110%3B%26%231094%3B%26%231099%3B.htm#eli",
      "lat": 55.9294,
      "lng": 37.5213,
      "community": "Unknown",
      "size": "1"
    }
  ];

const elem = document.getElementById('globeViz');
const labelsTopOrientation = new Set(['Apollo 12', 'Luna 2']); // avoid label collisions

//satellite--------------------------------------------------------------------------------
const sRadius = 4;
let a = 0;
const sData = [
  //A
  {
    "label": "ALGOL 68",
    "Syntax": "Multilingual",
    "agency": "International Federation for Information Processing",
    "date": "1968",
    "url": "https://github.com/stepan-mitkin/drakon_editor",
    alt: -Math.random() * 0.3 + 0.15,
    "lat": 48.0666,
    "lng": 16.35,
    "community": "Unknown",
    "size": "1"
  },
  //B
  {
    "label": "Blockly",
    "Syntax": "Visual",
    "agency": "	Google, MIT",
    "date": "2012",
    "url": "https://github.com/google/blockly",
    alt: -Math.random() * 0.3 + 0.15,
    "lat": -37.5630,
    "lng": -122.3255,
    "community": "11,200",
    "size": "10"
  },
  //D
  {
    "label": "DRAKON",
    "Syntax": "Visual",
    "agency": "	Academician Pilyugin Center",
    "date": "1986",
    "url": "https://github.com/stepan-mitkin/drakon_editor",
    alt: Math.random() * 0.3 + 0.15,
    "lat": -55.7558,
    "lng": -37.6173,
    "community": "Unknown",
    "size": "1"
  },
  //F
  {
    "label": "4th Dimension",
    "Syntax": "Multilingual",
    "agency": "4D SAS",
    "date": "1984",
    "url": "http://us.4d.com/",
    alt: Math.random() * 0.3 + 0.15,
    "lat": -48.8566,
    "lng": -2.3522,
    "community": "Unknown",
    "size": "1"
  },
  //K
  {
    "label": "Karel",
    "Syntax": "Czech, Multilingual",
    "agency": "	Richard E. Pattis",
    "date": "1981",
    "url": "http://mormegil.wz.cz/prog/karel/prog_doc.htm",
    alt: Math.random() * 0.3 + 0.15,
    "lat": -37.4275,
    "lng": -122.1697,
    "community": "Unknown",
    "size": "1"
  },
  //L
  {
    "label": "LOLCODE",
    "Syntax": "English slang words",
    "agency": "	Adam Lindsay",
    "date": "2007",
    "url": "https://www.tutorialspoint.com/lolcode/index.htm",
    alt: Math.random() * 0.3 + 0.15,
    "lat": 54.0102,
    "lng": -2.7855,
    "community": "Unknown",
    "size": "1"
  },
  //P
  {
    "label": "Pikachu",
    "Syntax": "PikaSpeak",
    "agency": "Nilabhro Datta",
    "date": "2017",
    "url": "https://trove42.com/introducing-pikachu-programming-Syntax/",
    alt: Math.random() * 0.3 + 0.15,
    "lat": 38.6270,
    "lng": 90.1994,
    "community": "Unknown",
    "size": "1"
  },
  //S
  {
    "label": "Scratch",
    "Syntax": "Multilingual",
    "agency": "MIT Media Lab",
    "date": "2007",
    "url": "https://scratch.mit.edu/",
    alt: Math.random() * 0.3 + 0.15,
    "lat": 42.3736,
    "lng": -71.1105,
    "community": "103,000,000,000",
    "size": "90"
  },
  //W
  {
    "label": "Whitespace",
    "Syntax": "English slang words",
    "agency": "	Edwin Brady, Chris Morris",
    "date": "2003",
    "url": "https://web.archive.org/web/20150618184706/http://compsoc.dur.ac.uk/whitespace/tutorial.php",
    alt: Math.random() * 0.3 + 0.15,
    "lat": 34.7650,
    "lng": 1.5782,
    "community": "Unknown",
    "size": "1"
  },
  {
    "label": "Wikitext",
    "Syntax": "Multilingual",
    "agency": "	Wikipedia",
    "date": "2001",
    "url": "https://en.wikipedia.org/wiki/Help:Wikitext",
    alt: Math.random() * 0.3 + 0.15,
    "lat": 37.7739,
    "lng": -122.4312,
    "community": "32,000,000",
    "size": "95"
  }

];

//----------------------------------------globe----------------------------------------
const world = Globe({ antialias: false, alpha: true })
  (document.getElementById('globeViz'))
  .globeImageUrl('//unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
  .bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png')
  //.atmosphereColor("#0070FF")
  //.atmosphereAltitude(0.6)
  .showAtmosphere(false)
  .backgroundColor('rgba(0, 0, 0, 0)')
  //.postProcessingComposer()

  //satellite--------------------------------------------------------------------------------
  .customLayerData(sData)
  .customThreeObject(d => new THREE.Mesh(
    new THREE.SphereGeometry(sRadius),
    new THREE.MeshBasicMaterial({ color: 0x6cff00 })
  ))
  .customThreeObjectUpdate((obj, d) => {
    Object.assign(obj.position, world.getCoords(d.lat, d.lng, d.alt));
  })

  //.customLayerLabel('label')
  .onCustomLayerClick(d => window.open(d.url, '_blank'))
  .onCustomLayerHover(d => {

    if (a === 0) {
      a = 1;
      appendDivToBody();
      setTimeout(function () {
        a = 0;
      }, 1000);
    }

    function appendDivToBody() {
      var appendedDiv = document.createElement('div');
      appendedDiv.className = 'appended-div';
      appendedDiv.innerHTML = `
      <div class="window" id="window1" style="width: 250px;">
      <div class="title-bar">
        <div class="title-bar-text">
        ${d.label}
        </div>
        <div class="title-bar-controls">
        <button aria-label="Help"  onclick=" window.open(${d.url},'_blank')"></button>
        <button aria-label="Close""></button>
        </div>
      </div>
      <div class="window-body" id="window-body" style="display:flex;flex-direction: row; gap:10px ;color:black">
      <div>
        <div><b>Syntax</b></div>
        <div><b>Developer</b></div>
        <div><b>Release</b></div>
        <div><b>Community Size</b></div>
      </div>
      <div style="flex-grow: 4">
        <div>${d.Syntax}</div>
        <div>${d.agency}</div>
        <div>${d.date}</div>
        <div>${d.community}</div>
        <div class="meter">
          <span style="width: ${d.size}%"></span>
        </div>
      </div>
      </div>
    </div>      
      `;
      var bodyWidth = document.body.clientWidth - 250;
      var bodyHeight = document.body.clientHeight - 100;
      var randomLeft = Math.floor(Math.random() * bodyWidth);
      var randomTop = Math.floor(Math.random() * bodyHeight);

      appendedDiv.style.left = randomLeft + 'px';
      appendedDiv.style.top = randomTop + 'px';
      document.body.appendChild(appendedDiv)

    };

  }
  )


  //html mark--------------------------------------------------------------------------------

  .htmlElementsData(gData)
  .htmlElement(d => {
    const el = document.createElement('div');
    el.innerHTML = markerSvg;
    el.style.color = '#6cff00';
    el.style.width = '20px';
    el.style['pointer-events'] = 'auto';
    el.style.cursor = 'pointer';
    el.onclick = () => window.open(d.url, '_blank');
    return el;
  })

  //label & tooltip
  .labelText('label')
  .labelSize(1)
  .labelDotRadius(1)
  .labelDotOrientation(d => labelsTopOrientation.has(d.label) ? 'top' : 'bottom')
  .labelColor(() => 'transparent')

  .labelLabel(d => `
  <div class="window" id="window1" style="width: 250px;">
    <div class="title-bar">
      <div class="title-bar-text">
      ${d.label}
      </div>
      <div class="title-bar-controls">
      <button aria-label="Help"  onclick=" window.open(${d.url},'_blank')"></button>
      <button aria-label="Close""></button>
      </div>
    </div>
    <div class="window-body" id="window-body" style="display:flex;flex-direction: row; gap:10px ;color:black">
    <div>
      <div><b>Syntax</b></div>
      <div><b>Developer</b></div>
      <div><b>Release</b></div>
      <div><b>Community Size</b></div>
    </div>
    <div style="flex-grow: 4">
      <div>${d.Syntax}</div>
      <div>${d.agency}</div>
      <div>${d.date}</div>
      <div>${d.community}</div>
      <div class="meter">
        <span style="width: ${d.size}%"></span>
      </div>
    </div>
    </div>
  </div>
  `)
  .onLabelClick(d => window.open(d.url, '_blank'))
  (elem);
world.labelsData(gData);

(function moveSpheres() {
  sData.forEach(d => d.lat += 0.05);
  sData.forEach(d => d.lng += 0.05);
  world.customLayerData(sData);
  requestAnimationFrame(moveSpheres);
})();

// custom globe material--------------------------------------------------------------------------------
const globeMaterial = world.globeMaterial();
globeMaterial.bumpScale = 10;
new THREE.TextureLoader().load('//unpkg.com/three-globe/example/img/earth-water.png', texture => {
  globeMaterial.specularMap = texture;
  globeMaterial.specular = new THREE.Color('grey');
  globeMaterial.shininess = 15;
});

setTimeout(() => { // wait for scene to be populated (asynchronously)
  const directionalLight = world.scene().children.find(obj3d => obj3d.type === 'DirectionalLight');
  directionalLight && directionalLight.position.set(1, 1, 1); // change light position to see the specularMap's effect
});

const scene = world.scene();

//camera settings--------------------------------------------------------------------------------
let SCREEN_WIDTH = window.innerWidth;
let SCREEN_HEIGHT = window.innerHeight;
let aspect = SCREEN_WIDTH / SCREEN_HEIGHT;
const frustumSize = 300;

const camera = world.camera();
//uncomment line 177 qnd 178 to use orthographic camera
//problem: all mouse over/click events stop working properly, the globe is not responsive, tooltips doesn't show up sometimes(probabily because of camera frustum near and far plane.)
//const camera = new THREE.OrthographicCamera(frustumSize * aspect / - 2, frustumSize * aspect / 2, frustumSize / 2, frustumSize / - 2, -1000, 1000);
window.addEventListener('resize', onWindowResize);


// create a new instance of the filter. Each type of filter has different parameters you need to define
const renderPixelatedPass = new RenderPixelatedPass(6, scene, camera);

// apply the filter to the rendering queue
world.postProcessingComposer().addPass(renderPixelatedPass);

//window resize--------------------------------------------------------------------------------

window.addEventListener('resize', (event) => {
  world.width([event.target.innerWidth])
  world.height([event.target.innerHeight])
});

function onWindowResize() {
  SCREEN_WIDTH = window.innerWidth;
  SCREEN_HEIGHT = window.innerHeight;
  aspect = SCREEN_WIDTH / SCREEN_HEIGHT;

  camera.left = - frustumSize * aspect / 2;
  camera.right = frustumSize * aspect / 2;
  camera.top = frustumSize / 2;
  camera.bottom = - frustumSize / 2;
  camera.updateProjectionMatrix();
}


