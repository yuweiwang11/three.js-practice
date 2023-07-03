import './style.css'
import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
const group = new THREE.Group()
group.position.y = 0.5
group.scale.y = 1
group.rotation.y = 0.5

scene.add(group)

const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
)
group.add(cube1)

const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x00ff00 })
)
cube2.position.x = 1.5
group.add(cube2)

const cube3 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x0000ff })
)
cube3.position.x = -1.5
group.add(cube3)

// create one cube
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
// scene.add(mesh)

// position
// mesh.position.x = 0.7
// mesh.position.y = -0.7
// mesh.position.z = 1
mesh.position.set(0.8, 0.5, 1)

// scale
mesh.scale.set(0.5, 1, 0.2)

// rotation
// mesh.rotation.reorder('YXZ')
mesh.rotation.x = Math.PI * 0
mesh.rotation.y = Math.PI * 0
mesh.rotation.z = Math.PI * 0.2

// Axes helper
const axesHelper = new THREE.AxesHelper()
scene.add(axesHelper)

/**
 * Sizes
 */
const sizes = {
  width: 800,
  height: 600,
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// camera.lookAt()

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)
