import * as THREE from './node_modules/three/src/Three.js';
import { GLTFLoader } from './node_modules/three/examples/jsm/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const loader = new GLTFLoader();



loader.load( './cargo-ship/source/cargo_ship.glb', function ( gltf ) {

    scene.add( gltf.scene );
    console.log('test');
    

}, undefined, function ( error ) {

    console.error( error );

} );

renderer.render(scene, camera);