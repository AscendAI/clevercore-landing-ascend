import { Suspense, useRef, useState } from "react"
import { PointMaterial, Points, Preload } from "@react-three/drei"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import * as random from "maath/random/dist/maath-random.esm"
import * as THREE from "three"

function useCircleTexture() {
  const [texture] = useState(() => {
    const canvas = document.createElement("canvas")
    canvas.width = canvas.height = 64
    const context = canvas.getContext("2d")
    const gradient = context.createRadialGradient(
      canvas.width / 2,
      canvas.height / 2,
      0,
      canvas.width / 2,
      canvas.height / 2,
      canvas.width / 2
    )
    gradient.addColorStop(0, "rgba(255,255,255,1)")
    gradient.addColorStop(0.6, "rgba(255,255,255,1)")
    gradient.addColorStop(1, "rgba(255,255,255,0)")
    context.fillStyle = gradient
    context.fillRect(0, 0, canvas.width, canvas.height)
    return new THREE.CanvasTexture(canvas)
  })

  return texture
}

const Stars = (props) => {
  const texture = useCircleTexture()
  const ref = useRef()
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.2 })
  )

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10
    ref.current.rotation.y -= delta / 15
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#fafafa"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
          map={texture}
        />
      </Points>
    </group>
  )
}

const StarsCanvas = () => {
  return (
    <div className="absolute inset-0 z-[-1] h-[100vh] w-full">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "linear-gradient(to bottom, transparent, #030711 95%)",

        }}
      />
    </div>
  )
}

export default StarsCanvas
