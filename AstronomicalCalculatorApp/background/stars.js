(function () {
    let viajando = false;
    let velocidade = 0;
    let distanceTraveled = 0;

    // Configuração da cena, câmera e renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Criando fundo gradiente (azul-marinho para roxo escuro)
    function createGradientTexture() {
        const canvas = document.createElement('canvas');
        canvas.width = 512;
        canvas.height = 512;
        const context = canvas.getContext('2d');

        const gradient = context.createLinearGradient(0, 0, 0, canvas.height);
        gradient.addColorStop(0, '#030329');
        gradient.addColorStop(1, '#1a0238');

        context.fillStyle = gradient;
        context.fillRect(0, 0, canvas.width, canvas.height);

        return new THREE.CanvasTexture(canvas);
    }

    scene.background = createGradientTexture();

    // Criando estrelas (partículas)
    const starCount = 5000;
    const positions = new Float32Array(starCount * 3);
    const colors = new Float32Array(starCount * 3);
    const radius = 100;

    for (let i = 0; i < starCount; i++) {
        const theta = Math.random() * 2 * Math.PI;
        const phi = Math.acos(2 * Math.random() - 1);
        const x = radius * Math.sin(phi) * Math.cos(theta);
        const y = radius * Math.sin(phi) * Math.sin(theta);
        const z = radius * Math.cos(phi);

        positions[i * 3] = x;
        positions[i * 3 + 1] = y;
        positions[i * 3 + 2] = z;

        let hue, saturation, lightness;
        const colorType = Math.random();

        if (colorType < 0.7) {
            hue = Math.random() * 0.2 + 0.7;
            saturation = 0.7 + Math.random() * 0.3;
            lightness = 0.5 + Math.random() * 0.5;
        } else {
            hue = Math.random();
            saturation = Math.random() * 0.2;
            lightness = 0.9 + Math.random() * 0.1;
        }

        const rgb = hslToRgb(hue, saturation, lightness);
        colors[i * 3] = rgb.r;
        colors[i * 3 + 1] = rgb.g;
        colors[i * 3 + 2] = rgb.b;
    }

    function hslToRgb(h, s, l) {
        let r, g, b;
        if (s === 0) {
            r = g = b = l;
        } else {
            const hue2rgb = (p, q, t) => {
                if (t < 0) t += 1;
                if (t > 1) t -= 1;
                if (t < 1 / 6) return p + (q - p) * 6 * t;
                if (t < 1 / 2) return q;
                if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
                return p;
            };
            const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            const p = 2 * l - q;
            r = hue2rgb(p, q, h + 1 / 3);
            g = hue2rgb(p, q, h);
            b = hue2rgb(p, q, h - 1 / 3);
        }
        return { r, g, b };
    }

    function createCrossTexture() {
        const canvas = document.createElement('canvas');
        canvas.width = 84;
        canvas.height = 84;
        const context = canvas.getContext('2d');

        context.fillStyle = 'rgba(0, 0, 0, 0)';
        context.fillRect(0, 0, canvas.width, canvas.height);

        const gradient = context.createLinearGradient(0, 32, 64, 32);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 0)');
        gradient.addColorStop(0.3, 'rgba(255, 255, 255, 0.8)');
        gradient.addColorStop(0.5, 'rgba(255, 255, 255, 1)');
        gradient.addColorStop(0.7, 'rgba(255, 255, 255, 0.8)');
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

        context.fillStyle = gradient;
        context.fillRect(0, 16, 64, 32);

        const gradientVertical = context.createLinearGradient(32, 0, 32, 64);
        gradientVertical.addColorStop(0, 'rgba(255, 511, 255, 0)');
        gradientVertical.addColorStop(0.3, 'rgba(255, 255, 255, 0.8)');
        gradientVertical.addColorStop(0.5, 'rgba(255, 255, 255, 1)');
        gradientVertical.addColorStop(0.7, 'rgba(255, 255, 255, 0.8)');
        gradientVertical.addColorStop(1, 'rgba(255, 255, 255, 0)');

        context.fillStyle = gradientVertical;
        context.fillRect(16, 0, 32, 64);

        return new THREE.CanvasTexture(canvas);
    }

    const starGeometry = new THREE.BufferGeometry();
    starGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    starGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    const starMaterial = new THREE.PointsMaterial({
        size: 1.0,
        sizeAttenuation: true,
        map: createCrossTexture(),
        transparent: true,
        blending: THREE.AdditiveBlending,
        vertexColors: true
    });

    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    const brightStarCount = 500;
    const brightPositions = new Float32Array(brightStarCount * 3);
    const brightColors = new Float32Array(brightStarCount * 3);

    for (let i = 0; i < brightStarCount; i++) {
        const theta = Math.random() * 2 * Math.PI;
        const phi = Math.acos(2 * Math.random() - 1);
        const x = radius * Math.sin(phi) * Math.cos(theta);
        const y = radius * Math.sin(phi) * Math.sin(theta);
        const z = radius * Math.cos(phi);

        brightPositions[i * 3] = x;
        brightPositions[i * 3 + 1] = y;
        brightPositions[i * 3 + 2] = z;

        let hue, saturation, lightness;
        const colorType = Math.random();

        if (colorType < 0.7) {
            hue = Math.random() * 0.2 + 0.7;
            saturation = 0.7 + Math.random() * 0.3;
            lightness = 0.5 + Math.random() * 0.5;
        } else {
            hue = Math.random();
            saturation = Math.random() * 0.2;
            lightness = 0.9 + Math.random() * 0.1;
        }

        const rgb = hslToRgb(hue, saturation, lightness);
        brightColors[i * 3] = rgb.r;
        brightColors[i * 3 + 1] = rgb.g;
        brightColors[i * 3 + 2] = rgb.b;
    }

    const textureLoader = new THREE.TextureLoader();
    const brightStarTexture = textureLoader.load('../images/star-flare.png');

    const brightStarGeometry = new THREE.BufferGeometry();
    brightStarGeometry.setAttribute('position', new THREE.BufferAttribute(brightPositions, 3));
    brightStarGeometry.setAttribute('color', new THREE.BufferAttribute(brightColors, 3));
    const brightStarMaterial = new THREE.PointsMaterial({
        size: 10.0,
        sizeAttenuation: true,
        map: brightStarTexture,
        transparent: true,
        blending: THREE.AdditiveBlending,
        vertexColors: true
    });

    const brightStars = new THREE.Points(brightStarGeometry, brightStarMaterial);
    scene.add(brightStars);

    camera.position.set(0, 0, 0.1);

    let mouseX = 0;
    let mouseY = 0;
    const rotationSpeed = 0.002;

    document.addEventListener('mousemove', (event) => {
        mouseX = (event.clientX / window.innerWidth) * 2 - 1;
        mouseY = (event.clientY / window.innerHeight) * 2 - 1;
    });

    function resetScene() {
        viajando = false;
        velocidade = 0;
        distanceTraveled = 0;
        camera.position.set(0, 0, 0.1);
        stars.rotation.set(0, 0, 0);
        brightStars.rotation.set(0, 0, 0);
    }

    function animate() {
        starMaterial.size = 1.0 + Math.sin(Date.now() * 0.002) * 0.5;
        brightStarMaterial.size = 10.0 + Math.sin(Date.now() * 0.002) * 2.0;

        stars.rotation.y += mouseX * rotationSpeed;
        stars.rotation.x += mouseY * rotationSpeed;
        brightStars.rotation.y += mouseX * rotationSpeed;
        brightStars.rotation.x += mouseY * rotationSpeed;

        if (viajando) {
            camera.position.z -= velocidade;
            velocidade *= 1.05;
            if (velocidade > 50) velocidade = 50;
            distanceTraveled += velocidade;

            // Garantir que o resultado esteja escondido durante a animação
            const resultadoConversao = document.getElementById('resultadoConversao');
            if (resultadoConversao) {
                resultadoConversao.style.display = 'none';
            }

            // Condição para encerrar a animação
            if (distanceTraveled > 1000) {
                resetScene();
                // Agora que a animação terminou, calculamos e exibimos o resultado
                if (typeof converterUnidades === 'function') {
                    converterUnidades();
                    const resultadoConversao = document.getElementById('resultadoConversao');
                    if (resultadoConversao) {
                        resultadoConversao.style.display = 'block';
                    }
                } else {
                    console.error('Função converterUnidades não encontrada. Certifique-se de que App.js está carregado corretamente.');
                }
            }
        }

        renderer.render(scene, camera);
    }

    renderer.setAnimationLoop(animate);

    window.addEventListener('resize', () => {
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
    });

    const botaoViagem = document.getElementById('btn-viagem');
    if (botaoViagem) {
        botaoViagem.addEventListener('click', () => {
            if (!viajando) {
                viajando = true;
                velocidade = 0.2;
                distanceTraveled = 0;

                // Garantir que o resultado esteja escondido no início da animação
                const resultadoConversao = document.getElementById('resultadoConversao');
                if (resultadoConversao) {
                    resultadoConversao.style.display = 'none';
                    resultadoConversao.innerText = ''; // Limpa o texto para evitar exibição prematura
                }
            }
        });
    }
})();