(() => {
  "use strict";

  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

  document.addEventListener("DOMContentLoaded", () => {
    if (window.lucide) window.lucide.createIcons();

    const year = $("#year");
    if (year) year.textContent = new Date().getFullYear();

    const progress = $("#progress");
    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const pct = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
      if (progress) progress.style.width = pct + "%";
    };
    window.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress();

    const menuToggle = $("#menuToggle");
    const nav = $("#nav");
    if (menuToggle && nav) {
      menuToggle.addEventListener("click", () => {
        const open = nav.classList.toggle("open");
        menuToggle.setAttribute("aria-expanded", String(open));
        menuToggle.innerHTML = open
          ? '<i data-lucide="x"></i>'
          : '<i data-lucide="menu"></i>';
        if (window.lucide) window.lucide.createIcons();
      });

      $$("#nav a").forEach((link) => {
        link.addEventListener("click", () => {
          nav.classList.remove("open");
          menuToggle.setAttribute("aria-expanded", "false");
          menuToggle.innerHTML = '<i data-lucide="menu"></i>';
          if (window.lucide) window.lucide.createIcons();
        });
      });
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    $$(".reveal").forEach(el => observer.observe(el));

    initScene();
  });

  function initScene() {
    const canvas = $("#scene");
    if (!canvas || !window.THREE) {
      const status = $("#sceneStatus");
      if (status) status.textContent = "CSS MODE";
      return;
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const container = canvas.parentElement;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.set(0, 0.2, 6.8);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance"
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.8));
    renderer.outputEncoding = THREE.sRGBEncoding;

    const root = new THREE.Group();
    scene.add(root);

    const ambient = new THREE.HemisphereLight(0xffffff, 0x15151a, 1.2);
    scene.add(ambient);

    const key = new THREE.PointLight(0xd7ff5e, 7, 18);
    key.position.set(2.8, 2.5, 4.5);
    scene.add(key);

    const rim = new THREE.PointLight(0x9df4ff, 5, 15);
    rim.position.set(-3.4, -2, 2.5);
    scene.add(rim);

    const core = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.32, 5),
      new THREE.MeshStandardMaterial({
        color: 0x2b2b31,
        metalness: 0.82,
        roughness: 0.21,
        emissive: 0x11140b,
        emissiveIntensity: 0.7
      })
    );
    root.add(core);

    const wire = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.5, 2),
      new THREE.MeshBasicMaterial({
        color: 0xd7ff5e,
        wireframe: true,
        transparent: true,
        opacity: 0.42
      })
    );
    root.add(wire);

    const halo = new THREE.Mesh(
      new THREE.SphereGeometry(1.82, 48, 48),
      new THREE.MeshBasicMaterial({
        color: 0x9df4ff,
        transparent: true,
        opacity: 0.035,
        side: THREE.BackSide
      })
    );
    root.add(halo);

    const ringGroup = new THREE.Group();
    root.add(ringGroup);

    const ringSpecs = [
      { r: 1.9, tube: 0.009, color: 0xd7ff5e, rot: [0.25, 0.2, 0.1], speed: 0.18 },
      { r: 2.15, tube: 0.006, color: 0x9df4ff, rot: [1.2, 0.1, 0.45], speed: -0.12 },
      { r: 2.45, tube: 0.004, color: 0xffffff, rot: [0.35, 1.0, 0.7], speed: 0.07 }
    ];

    ringSpecs.forEach(spec => {
      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(spec.r, spec.tube, 8, 160),
        new THREE.MeshBasicMaterial({ color: spec.color, transparent: true, opacity: spec.color === 0xffffff ? 0.12 : 0.34 })
      );
      ring.rotation.set(...spec.rot);
      ring.userData.speed = spec.speed;
      ringGroup.add(ring);
    });

    const starGeometry = new THREE.BufferGeometry();
    const count = 900;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const radius = 3.1 + Math.random() * 2.6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(THREE.MathUtils.randFloatSpread(2));
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.cos(phi);
      positions[i * 3 + 2] = radius * Math.sin(phi) * Math.sin(theta);

      const bright = Math.random() > 0.88 ? 1 : 0.4;
      colors[i * 3] = bright;
      colors[i * 3 + 1] = bright;
      colors[i * 3 + 2] = bright * (Math.random() > 0.5 ? 0.82 : 1);
    }
    starGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    starGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    const stars = new THREE.Points(
      starGeometry,
      new THREE.PointsMaterial({
        size: 0.018,
        vertexColors: true,
        transparent: true,
        opacity: 0.7,
        depthWrite: false
      })
    );
    scene.add(stars);

    const pointer = { x: 0, y: 0 };
    const target = { x: 0, y: 0 };

    const onPointer = (event) => {
      const rect = container.getBoundingClientRect();
      target.x = ((event.clientX - rect.left) / rect.width - 0.5) * 1.8;
      target.y = ((event.clientY - rect.top) / rect.height - 0.5) * 1.2;
    };
    container.addEventListener("pointermove", onPointer, { passive: true });

    const resize = () => {
      const width = Math.max(container.clientWidth, 1);
      const height = Math.max(container.clientHeight, 1);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    };
    resize();
    window.addEventListener("resize", resize, { passive: true });

    let last = performance.now();
    const clock = new THREE.Clock();

    const animate = (now) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;

      pointer.x += (target.x - pointer.x) * 0.035;
      pointer.y += (target.y - pointer.y) * 0.035;

      if (!reducedMotion) {
        const t = clock.getElapsedTime();
        core.rotation.y += dt * 0.19;
        core.rotation.x += dt * 0.08;
        wire.rotation.y -= dt * 0.11;
        wire.rotation.z += dt * 0.05;
        ringGroup.rotation.y += dt * 0.05;
        stars.rotation.y += dt * 0.009;

        ringGroup.children.forEach((ring, index) => {
          ring.rotation.z += dt * ring.userData.speed;
          ring.rotation.x += dt * 0.009 * (index + 1);
        });

        root.rotation.x += ((-pointer.y * 0.14) - root.rotation.x) * 0.04;
        root.rotation.y += ((pointer.x * 0.15) - root.rotation.y) * 0.04;
        root.position.y = Math.sin(t * 0.7) * 0.07;
      }

      camera.position.x += ((pointer.x * 0.22) - camera.position.x) * 0.025;
      camera.position.y += ((0.2 - pointer.y * 0.14) - camera.position.y) * 0.025;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    const status = $("#sceneStatus");
    if (status) status.textContent = "LIVE";
  }
})();
