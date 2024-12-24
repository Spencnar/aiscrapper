'use client'
import * as THREE from 'three'
import { useEffect, useRef } from 'react'
import { useFrame, useLoader, Canvas, ThreeElements } from '@react-three/fiber'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import { Group, Mesh } from 'three'
import { extend } from '@react-three/fiber'

declare module '@react-three/fiber' {
  interface ThreeElements {
    group: JSX.IntrinsicElements['group']
  }
}

extend({ Mesh })

export function CyberKnifeModel({ position = [0, 0, 0] }: { position?: [number, number, number] }) {
  const meshRef = useRef<Group>(null)
  const fbx = useLoader(FBXLoader, '/threed/cyberknife.fbx')

  useEffect(() => {
    if (fbx) {
      fbx.traverse((child) => {
        if (child instanceof Mesh) {
          child.castShadow = true
          child.receiveShadow = true
        }
      })
    }
  }, [fbx])

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005
    }
  })

  return (
    <Canvas>
      <group ref={meshRef} position={position} scale={0.5}>
        <primitive object={fbx} />
      </group>
    </Canvas>
  )
}