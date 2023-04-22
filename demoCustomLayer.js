// Import specific filters from the threejs library
import { RenderPixelatedPass } from "three/addons/postprocessing/RenderPixelatedPass.js";
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const markerSvg = `<svg viewBox="0 0 36 36">
<circle fill="currentColor" cx="14" cy="14" r="7"></circle>
</svg>`;

//info
const gData =
    [
        {
            "label": "قلب",
            "program": "Arabic",
            "agency": "Ramsey Nasser",
            "date": "2012",
            "url": "http://nas.sr/---/",
            "lat": 40.7128,
            "lng": -74.0060,
            "user": "?"
        },
        {
            "label": "Chinese Python",
            "program": "Chinese",
            "agency": "Chinese Python Dev Team",
            "date": "2002",
            "url": "http://chinesepython.org/",
            "lat": 22.3193,
            "lng": 114.177216,
            "user": "5,727" //visualization animation on the tooltips
        }
    ];

const elem = document.getElementById('globeViz');
const labelsTopOrientation = new Set(['Apollo 12', 'Luna 2']); // avoid label collisions

/////////////////////
const sRadius = 4;
const sData = [
    {
        "label": "قلب",
        alt: Math.random() * 0.2 + 0.1,
        "program": "Arabic",
        "agency": "Ramsey Nasser",
        "date": "2012",
        "url": "http://nas.sr/---/",
        "lat": 40.7128,
        "lng": -74.0060,
        "user": "?"
    },
    {
        "label": "Chinese Python",
        alt: Math.random() * 0.2 + 0.1,
        "program": "Chinese",
        "agency": "Chinese Python Dev Team",
        "date": "2002",
        "url": "http://chinesepython.org/",
        "lat": 22.3193,
        "lng": 114.177216,
        "user": "5,727"
    },
    {
        "label": "Chinese Python",
        alt: Math.random() * 0.2 + 0.1,
        "program": "Chinese",
        "agency": "Chinese Python Dev Team",
        "date": "2002",
        "url": "http://chinesepython.org/",
        "lat": -22.3193,
        "lng": -114.177216,
        "user": "5,727"
    }
];

//----------------------------------------globe----------------------------------------
const world = Globe({ antialias: false, alpha: true })
    (document.getElementById('globeViz'))
    .globeImageUrl('//unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
    .bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png')
    .pointOfView({ altitude: 12.5 })//not workings
    //.atmosphereColor("#0070FF")
    //.atmosphereAltitude(0.6)
    .showAtmosphere(false)
    .backgroundColor('rgba(0, 0, 0, 0)')
    //.postProcessingComposer()

    //////////////////
    .customLayerData(sData)
    .customThreeObject(d => new THREE.Mesh(
        new THREE.SphereGeometry(sRadius),
        new THREE.MeshBasicMaterial({ color: 0x6cff00 })
    ))
    .customThreeObjectUpdate((obj, d) => {
        Object.assign(obj.position, world.getCoords(d.lat, d.lng, d.alt));
    })

    //.customLayerLabel('label')
    .customLayerLabel(d => `
  <div style="background:#66ccff">
    <div><b>${d.label}</b></div>
    <div>${d.program}</div>
    <div>${d.agency}</div>
    <div>${d.date}</div>
    <!--<div>Launched on <i>${new Date(d.date).toLocaleDateString()}</i></div>-->
    </div>
  `)
    .onCustomLayerClick(d => window.open(d.url, '_blank'))

    //html mark--------------------------------------------------------------------------------

    .htmlElementsData(gData)
    .htmlElement(d => {
        const el = document.createElement('div');
        el.innerHTML = markerSvg;
        el.style.color = '#6cff00';
        el.style.width = 50;
        el.style['pointer-events'] = 'auto';
        el.style.cursor = 'pointer';
        el.onclick = () => window.open(d.url, '_blank');
        return el;
    })

    //label & tooltip
    .labelText('label')
    .labelSize(1.7)
    .labelDotRadius(3)
    .labelDotOrientation(d => labelsTopOrientation.has(d.label) ? 'top' : 'bottom')
    .labelColor(() => 'transparent')
    /*
    .labelLabel(d => `
    <div style="background:#66ccff">
      <div><b>${d.label}</b></div>
      <div>${d.program}</div>
      <div>${d.agency}</div>
      <div>${d.date}</div>
      <!--<div>Launched on <i>${new Date(d.date).toLocaleDateString()}</i></div>-->
      </div>
    `)*/
    .labelLabel(d => `
  <div class="window" id="window1" style="width: 250px;">
    <div class="title-bar">
      <div class="title-bar-text">
      ${d.label}
      </div>
      <div class="title-bar-controls">
        <button aria-label="Minimize" onclick="minWindow()"></button>
        <button id="resizeWindow" aria-label="Maximize" onclick="maxWindow()"></button>
        <button aria-label="Close" onclick="closeWindow()"></button>
      </div>
    </div>
    <div class="window-body" id="window-body" style="display:contents;">
    <div>${d.program}</div>
    <div>${d.agency}</div>
    <div>${d.date}</div>
          <section class="field-row" style="justify-content: flex-end">
        <button>OK</button>
        <button>Cancel</button>
      </section>
    </div>
  </div>
  `)
    .onLabelClick(d => window.open(d.url, '_blank'))

    //.onLabelHover(function(){
    //  $('body').append('<div style="position:absolute;width:100%;height:100%;opacity:0.3;z-index:100;background:#000;"></div>');
    //})
    (elem);
world.labelsData(gData);
//(document.getElementById('globeViz'));

(function moveSpheres() {
    sData.forEach(d => d.lat += 0.05);
    sData.forEach(d => d.lng += 0.05);
    world.customLayerData(sData);
    //.rotation.y += CLOUDS_ROTATION_SPEED * Math.PI / 180
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

//const camera = world.camera();
//uncomment line 177 qnd 178 to use orthographic camera
//problem: all mouse over/click events stop working properly, the globe is not responsive, tooltips doesn't show up sometimes(probabily because of camera frustum near and far plane.)
const camera = new THREE.OrthographicCamera(frustumSize * aspect / - 2, frustumSize * aspect / 2, frustumSize / 2, frustumSize / - 2, -1000, 1000);
window.addEventListener('resize', onWindowResize);


// create a new instance of the filter. Each type of filter has different parameters you need to define
const renderPixelatedPass = new RenderPixelatedPass(4, scene, camera);

//uncomment line 185 to use orbit controls, but it will cause the filter and orthographic camera not working
//let controls = new OrbitControls( camera, renderer.domElement );


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


