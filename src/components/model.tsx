import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';
import styled from 'styled-components';

const scene = new THREE.Scene();
scene.background = new THREE.Color('powderblue');

// 렌더링 세팅
const renderer = new THREE.WebGLRenderer({
  antialias: true
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.outputEncoding = THREE.sRGBEncoding;
document.body.appendChild(renderer.domElement);

const aspect = window.innerWidth / window.innerHeight;

// 카메라 세팅
const camera = new THREE.PerspectiveCamera(20, aspect);
camera.position.set(-1.8, -0.6, 10);

// 모델 세팅
const loader = new GLTFLoader();
loader.load('../assets/shiba/scene.gltf', function (gltf) {
  scene.add(gltf.scene);

  function animate() {
    requestAnimationFrame(animate);
    gltf.scene.rotation.y -= 0.01;
    renderer.render(scene, camera);
  }
  animate();
})

const Canvas = styled.div`
`;


function model() {
  return (
    <Canvas>
    </Canvas>
  );
}

export default model;
