
import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.Group18985_default_0.geometry} material={materials['default']} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.Box002_default_0.geometry} material={materials['default']} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.Object001_default_0.geometry} material={materials['default']} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
