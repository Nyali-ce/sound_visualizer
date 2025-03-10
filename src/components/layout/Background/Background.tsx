import "./Background.scss";
import * as THREE from "three";
import { useEffect } from "react";
// @ts-ignore
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
// @ts-ignore
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
// @ts-ignore
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";

function Background() {

    useEffect(() => {
        const canvas = document.getElementById("background") as HTMLCanvasElement;
        canvas.style.opacity = "0";
        const pointer = document.querySelector(".pointer") as HTMLDivElement;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let previousRAF: number | null = null;

        const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
        const backgroundRGB = getComputedStyle(document.documentElement).getPropertyValue('background-color').match(/\d+/g)
        const backgroundHex = `0x${parseInt(backgroundRGB![0]).toString(16)}${parseInt(backgroundRGB![1]).toString(16)}${parseInt(backgroundRGB![2]).toString(16)}`;
        const fov = 40;
        const aspect = window.innerWidth / window.innerHeight;
        const near = 0.1;
        const far = 1000;
        const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
        camera.position.set(0, 0, 50);
        const scene = new THREE.Scene();
        scene.background = new THREE.Color().setHex(parseInt(backgroundHex));

        const stars: THREE.Mesh[] = [];

        const material = new THREE.ShaderMaterial({
            uniforms: {
                color1: { value: new THREE.Color("rgb(255, 255, 255)") },
                color2: { value: new THREE.Color("rgb(240, 178, 216)") },
                color3: { value: new THREE.Color("rgb(2, 222, 238)") },
                resolution: { value: new THREE.Vector2() },
                time: { value: 0 },
            },

            vertexShader: `
              
                void main() {
                  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
                        `,
            fragmentShader: `
                        uniform vec3 color1;
                        uniform vec3 color2;
                        uniform vec3 color3;
                        uniform vec2 resolution;
                        
                        varying vec2 vUv;
                        
                        void main() {
                            vec2 screenPos = gl_FragCoord.xy;
                            float scalingFactor = 1.0;
                            float distanceFromTopLeft = distance(vec2(0.0), screenPos * scalingFactor) / length(resolution);
                        
                            vec3 starColor;
                        
                            if (distanceFromTopLeft < 0.33) {
                              starColor = mix(color1, color2, smoothstep(0.0, 1.0, distanceFromTopLeft * 3.0));
                            } else if (distanceFromTopLeft < 0.67) {
                              starColor = mix(color2, color3, smoothstep(0.0, 1.0, (distanceFromTopLeft - 0.33) * 3.0));
                            } else {
                              starColor = mix(color3, color1, smoothstep(0.0, 1.0, (distanceFromTopLeft - 0.67) * 3.0));
                            }
                        
                            gl_FragColor = vec4(starColor, 1.0);
                        }
                        `,
        });

        material.uniforms.resolution.value.x = renderer.domElement.width;
        material.uniforms.resolution.value.y = renderer.domElement.height;

        // create stars
        for (let i = 0; i < 200; i++) {
            const star = new THREE.Mesh(
                new THREE.SphereGeometry(0.25, 24, 24),
                material
            );

            star.position.set(
                Math.random() * 300 - 150,
                Math.random() * 200 - 100,
                Math.random() * 400 - 200
            );
            scene.add(star);
            stars.push(star);
        }

        let frames = 0;

        const render = (time: number) => {
            requestAnimationFrame(render);

            time *= 0.001;
            material.uniforms.time.value = time;

            previousRAF === null && (previousRAF = time);

            const deltaTime = time - previousRAF;
            previousRAF = time;

            const cameraSpeed = 3 * deltaTime;
            const panSpeed = 0.0001 * deltaTime;

            const offsetLeft = parseInt(pointer.style.left.split("px")[0]);
            const offsetTop = -parseInt(pointer.style.top.split("px")[0]);

            if (!isNaN(offsetLeft) && !isNaN(offsetTop)) {
                const moveX = (offsetLeft / 500 - camera.position.x) * cameraSpeed;
                const moveY = (offsetTop / 500 - camera.position.y) * cameraSpeed;

                if (Math.abs(moveX) <= 10 && Math.abs(moveY) <= 10) {
                    // position
                    camera.position.x += moveX;
                    camera.position.y += moveY;

                    // rotation
                    const target = new THREE.Vector3(
                        offsetLeft / 2000 - moveX * panSpeed,
                        offsetTop / 2000 - moveY * panSpeed,
                        0
                    );
                    camera.lookAt(target);
                }
            }

            // move stars
            for (let i = 0; i < stars.length; i++) {
                stars[i].position.z += (2 * deltaTime) + ((stars.length - i) * 0.0005);
                if (stars[i].position.z > 200) {
                    stars[i].position.z -= 400;

                    // put at the back of the array
                    const star = stars.splice(i, 1)[0];
                    stars.push(star);
                }
            }

            composer.render();

            frames++;
            if (frames == 30) {
                canvas.style.transition = "opacity 1s";
                canvas.style.opacity = "1";
            }
        };

        const composer = new EffectComposer(renderer);
        composer.addPass(new RenderPass(scene, camera));
        const bloomPass = new UnrealBloomPass(
            new THREE.Vector2(window.innerWidth, window.innerHeight),
            2, // strength
            0.4, // radius
            0.3 // threshold
        );
        composer.addPass(bloomPass);

        requestAnimationFrame(render);

        window.addEventListener("resize", () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
            composer.setSize(window.innerWidth, window.innerHeight);

            material.uniforms.resolution.value.x = renderer.domElement.width;
            material.uniforms.resolution.value.y = renderer.domElement.height;
        });

        window.addEventListener("mousemove", (e) => {
            const pointer = document.querySelector(".pointer") as HTMLDivElement;
            pointer.style.left = `${e.clientX - window.innerWidth / 2}px`;
            pointer.style.top = `${e.clientY - window.innerHeight / 2}px`;
        });
    }, []);

    return (
        <>
            <canvas id="background"></canvas>
            <div className="pointer"></div>
        </>
    );
}

export default Background;