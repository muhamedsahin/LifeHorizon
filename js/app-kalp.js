//Variables for setup

let container;
let camera;
let renderer;
let scene;
let house;

function init() {
  container = document.querySelector(".scene");

  //Create scene
  scene = new THREE.Scene();

  const fov = 55;
  const aspect = container.clientWidth / container.clientHeight;
  const near = 0.1;
  const far = 1000;

  //Camera setup
  camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(0, 100, 470);

  const ambient = new THREE.AmbientLight(0xffffff, 2);
  scene.add(ambient);

  const light = new THREE.DirectionalLight(0xffffff, 20);
  light.position.set(0, 0, 470);
  scene.add(light);
  //Renderer
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  container.appendChild(renderer.domElement);

  //Load Model
  let loader = new THREE.GLTFLoader();
  loader.load("../models/kalp/heart_in_love.glb", function(gltf) {
    scene.add(gltf.scene);
    house = gltf.scene.children[0];
    house.rotation.x = 5;
    animate();
  });
  //let loader1 = new THREE.GLTFLoader();
  //loader1.load("../models/Yatak-Tek/bed.glb", function(gltf) {
    //scene.add(gltf.scene);
    //house = gltf.scene.children[0];
    //house.rotation.x = 5;
   // animate();
 // });
}

function animate() {
  requestAnimationFrame(animate);
  house.rotation.z += 0.010;
  renderer.render(scene, camera);
}

init();

function onWindowResize() {
  camera.aspect = container.clientWidth / container.clientHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(container.clientWidth, container.clientHeight);
}

window.addEventListener("resize", onWindowResize);
