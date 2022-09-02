import * as THREE from 'three';
import { CinematicCamera } from 'three/cameras/CinematicCamera.js';

const template = `
    <canvas ref="canvas" id="canvas"></canvas>
`;

export default {
    name: 'BackgroundAnimation',
    mounted() {
        this.theta = 0;
        this.radius = 100;
        this.camera = new CinematicCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
        this.scene = new THREE.Scene();
        this.light = new THREE.DirectionalLight(0xffffff, 0.35);
        this.geometry = new THREE.BoxGeometry(20, 20, 20);
        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, canvas: this.$refs.canvas });

        this.camera.setLens(5);
        this.camera.position.set(2, 1, 500);

        this.light.position.set(1, 1, 1).normalize();
        this.scene.add( new THREE.AmbientLight(0xffffff, 0.3));
        this.scene.add(this.light);

        for (let i = 0; i < 500; i++) {
            const material = new THREE.MeshLambertMaterial({
                color: Math.random() * 0xffffff,
                transparent: true,
                opacity: 1
            });

            const object = new THREE.Mesh(this.geometry,  material);

            object.position.x = Math.random() * 800 - 400;
            object.position.y = Math.random() * 800 - 400;
            object.position.z = Math.random() * 800 - 400;

            this.scene.add(object);
        }
        this.renderer.setClearColor(0x000000, 1);
        this.renderer.setPixelRatio(window.devicePixelRatio);

        document.body.appendChild(this.renderer.domElement);

        this.animate();
    },
    beforeUnmount() {
        document.body.removeChild(this.renderer.domElement);
    },
    methods: {
        animate() {
            requestAnimationFrame(this.animate, this.renderer.domElement);

            this.render();
        },
        render() {
            this.theta += 0.1;
            this.camera.position.x = this.radius * Math.sin(THREE.MathUtils.degToRad(this.theta));
            this.camera.position.y = this.radius * Math.sin(THREE.MathUtils.degToRad(this.theta));
            this.camera.position.z = this.radius * Math.cos(THREE.MathUtils.degToRad(this.theta));

            this.camera.lookAt(this.scene.position);
            this.camera.updateMatrixWorld();

            this.renderer.clear();
            this.renderer.render(this.scene, this.camera);
        }
    },
    template
};
