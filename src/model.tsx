import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Canvas } from '@react-three/fiber'
import * as THREE from 'three';
import styled from 'styled-components';

const scene = new THREE.Scene();
scene.background = new THREE.Color('white');

// 렌더링 세팅
const renderer = new THREE.WebGLRenderer({
  antialias: true
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.outputEncoding = THREE.sRGBEncoding;
document.body.appendChild(renderer.domElement);

// 카메라 세팅
const camera = new THREE.PerspectiveCamera(10, 1);
camera.position.set(0, 0, 20);

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

const ModelDiv = styled.div`
`;


function model() {
  return (
    <ModelDiv>
      <Canvas> </Canvas>
    </ModelDiv>
  );
}

export default model;
