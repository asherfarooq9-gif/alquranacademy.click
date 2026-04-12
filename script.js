/**
 * AL QURAN ACADEMY — script.js
 * Three.js 3D effects, animations, interactions
 * CDN: three.js r128
 */

/* Force dark theme always */
document.documentElement.setAttribute('data-theme', 'dark');

/* ============================================
   NAV SCROLL + MOBILE MENU
   ============================================ */
const nav = document.getElementById('nav');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 50);
  const backToTop = document.getElementById('backToTop');
  if (backToTop) backToTop.classList.toggle('visible', window.scrollY > 500);
}, { passive: true });

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
  hamburger.setAttribute('aria-expanded', hamburger.classList.contains('active'));
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});

/* Back to top */
document.getElementById('backToTop')?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ============================================
   CURSOR GLOW
   ============================================ */
const cursorGlow = document.getElementById('cursorGlow');
document.addEventListener('mousemove', (e) => {
  cursorGlow.style.left = e.clientX + 'px';
  cursorGlow.style.top = e.clientY + 'px';
}, { passive: true });

/* ============================================
   MAGNETIC BUTTONS
   ============================================ */
document.querySelectorAll('[data-magnetic]').forEach(btn => {
  let bounds;
  const strength = 0.28;

  btn.addEventListener('mouseenter', () => {
    bounds = btn.getBoundingClientRect();
  });

  btn.addEventListener('mousemove', (e) => {
    if (!bounds) return;
    const x = (e.clientX - bounds.left - bounds.width / 2) * strength;
    const y = (e.clientY - bounds.top - bounds.height / 2) * strength;
    btn.style.transform = `translate(${x}px, ${y}px)`;
  });

  btn.addEventListener('mouseleave', () => {
    btn.style.transform = 'translate(0,0)';
    bounds = null;
  });
});

/* ============================================
   SCROLL REVEAL
   ============================================ */
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

revealEls.forEach(el => revealObserver.observe(el));

/* ============================================
   STAT COUNTER ANIMATION
   ============================================ */
const statNums = document.querySelectorAll('.stat-num');
let statsAnimated = false;

function animateStats() {
  if (statsAnimated) return;
  statsAnimated = true;

  statNums.forEach(el => {
    const target = parseInt(el.dataset.target);
    const isDecimal = el.hasAttribute('data-decimal');
    const duration = 1800;
    const start = performance.now();

    function update(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const val = Math.round(target * eased);

      if (isDecimal) {
        el.textContent = (val / 10).toFixed(1);
      } else {
        el.textContent = val + (target === 928 ? '+' : '+');
      }

      if (progress < 1) requestAnimationFrame(update);
    }

    requestAnimationFrame(update);
  });
}

const heroObserver = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) animateStats();
}, { threshold: 0.5 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) heroObserver.observe(heroStats);

/* ============================================
   TESTIMONIAL SLIDER
   ============================================ */
const track = document.getElementById('testimonialTrack');
const cards = track ? track.querySelectorAll('.testimonial-card') : [];
const dotsContainer = document.getElementById('sliderDots');
let currentSlide = 0;
let autoSlide;

if (cards.length && dotsContainer) {
  // Build dots
  cards.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', `Testimonial ${i + 1}`);
    dot.addEventListener('click', () => goTo(i));
    dotsContainer.appendChild(dot);
  });

  function goTo(idx) {
    currentSlide = (idx + cards.length) % cards.length;
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
    dotsContainer.querySelectorAll('.dot').forEach((d, i) => {
      d.classList.toggle('active', i === currentSlide);
    });
    resetAuto();
  }

  function resetAuto() {
    clearInterval(autoSlide);
    autoSlide = setInterval(() => goTo(currentSlide + 1), 5000);
  }

  document.getElementById('nextBtn')?.addEventListener('click', () => goTo(currentSlide + 1));
  document.getElementById('prevBtn')?.addEventListener('click', () => goTo(currentSlide - 1));

  resetAuto();
}

/* ============================================
   THREE.JS — HERO SCENE (Geometric Rings)
   ============================================ */
(function initHeroScene() {
  const container = document.getElementById('heroCanvas');
  if (!container || typeof THREE === 'undefined') return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(50, container.clientWidth / container.clientHeight, 0.1, 100);
  camera.position.set(0, 0, 10);

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0x000000, 0);
  container.appendChild(renderer.domElement);

  // Ambient + directional light
  scene.add(new THREE.AmbientLight(0xffffff, 0.4));
  const dirLight = new THREE.DirectionalLight(0xC8A96E, 1.2);
  dirLight.position.set(5, 8, 5);
  scene.add(dirLight);
  const dirLight2 = new THREE.DirectionalLight(0x1E7A58, 0.8);
  dirLight2.position.set(-5, -3, 3);
  scene.add(dirLight2);

  // Group for all objects
  const group = new THREE.Group();
  scene.add(group);

  // Central torus knot (sacred geometry feel)
  const knotGeo = new THREE.TorusKnotGeometry(1.8, 0.18, 200, 20, 3, 5);
  const knotMat = new THREE.MeshStandardMaterial({
    color: 0x0B3D2E,
    metalness: 0.9,
    roughness: 0.1,
    emissive: 0x0B3D2E,
    emissiveIntensity: 0.2,
  });
  const knotMesh = new THREE.Mesh(knotGeo, knotMat);
  group.add(knotMesh);

  // Outer ring
  const ringGeo = new THREE.TorusGeometry(3.2, 0.03, 8, 120);
  const ringMat = new THREE.MeshStandardMaterial({
    color: 0xC8A96E,
    metalness: 1.0,
    roughness: 0.1,
  });
  const ring1 = new THREE.Mesh(ringGeo, ringMat);
  ring1.rotation.x = Math.PI / 4;
  group.add(ring1);

  const ring2 = new THREE.Mesh(
    new THREE.TorusGeometry(2.6, 0.02, 8, 100),
    new THREE.MeshStandardMaterial({ color: 0x1E7A58, metalness: 0.8, roughness: 0.2 })
  );
  ring2.rotation.x = -Math.PI / 3;
  ring2.rotation.z = Math.PI / 6;
  group.add(ring2);

  // Particles around the knot
  const particleCount = 300;
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount; i++) {
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    const r = 4 + Math.random() * 4;
    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = r * Math.cos(phi);

    const isGold = Math.random() > 0.5;
    if (isGold) {
      colors[i * 3] = 200 / 255;
      colors[i * 3 + 1] = 169 / 255;
      colors[i * 3 + 2] = 110 / 255;
    } else {
      colors[i * 3] = 30 / 255;
      colors[i * 3 + 1] = 122 / 255;
      colors[i * 3 + 2] = 88 / 255;
    }
  }

  const partGeo = new THREE.BufferGeometry();
  partGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  partGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  const partMat = new THREE.PointsMaterial({
    size: 0.06,
    vertexColors: true,
    transparent: true,
    opacity: 0.75,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });

  const particles = new THREE.Points(partGeo, partMat);
  scene.add(particles);

  // Mouse tracking
  let mouseX = 0, mouseY = 0;
  let targetX = 0, targetY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
  }, { passive: true });

  const clock = new THREE.Clock();

  function animateHero() {
    requestAnimationFrame(animateHero);
    const t = clock.getElapsedTime();

    // Smooth mouse follow
    targetX += (mouseX - targetX) * 0.04;
    targetY += (mouseY - targetY) * 0.04;

    // Rotate knot
    knotMesh.rotation.y = t * 0.15;
    knotMesh.rotation.x = Math.sin(t * 0.2) * 0.15 + targetY * 0.3;
    knotMesh.rotation.z = Math.cos(t * 0.1) * 0.05 + targetX * 0.2;

    // Counter-rotate rings for dynamic feel
    ring1.rotation.y = t * 0.08;
    ring1.rotation.z = t * 0.05;
    ring2.rotation.x = -Math.PI / 3 + t * -0.07;
    ring2.rotation.y = t * 0.06;

    // Float group
    group.position.y = Math.sin(t * 0.5) * 0.15;
    group.rotation.y = targetX * 0.4;
    group.rotation.x = targetY * 0.2;

    particles.rotation.y = t * 0.03;
    particles.rotation.x = t * 0.02;

    renderer.render(scene, camera);
  }

  animateHero();

  window.addEventListener('resize', () => {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
  });
})();

/* ============================================
   THREE.JS — SHOWCASE SECTION (Star Field)
   ============================================ */
(function initShowcaseScene() {
  const container = document.getElementById('showcaseCanvas');
  if (!container || typeof THREE === 'undefined') return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, container.clientWidth / container.clientHeight, 0.1, 100);
  camera.position.z = 6;

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
  renderer.setClearColor(0x000000, 0);
  container.appendChild(renderer.domElement);

  // Moving star field
  const count = 500;
  const pos = new Float32Array(count * 3);
  for (let i = 0; i < count * 3; i++) {
    pos[i] = (Math.random() - 0.5) * 40;
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));

  const mat = new THREE.PointsMaterial({
    color: 0xC8A96E,
    size: 0.04,
    transparent: true,
    opacity: 0.6,
    blending: THREE.AdditiveBlending,
  });

  const stars = new THREE.Points(geo, mat);
  scene.add(stars);

  const clock = new THREE.Clock();

  (function animateShowcase() {
    requestAnimationFrame(animateShowcase);
    const t = clock.getElapsedTime();
    stars.rotation.y = t * 0.02;
    stars.rotation.x = Math.sin(t * 0.05) * 0.1;
    renderer.render(scene, camera);
  })();

  window.addEventListener('resize', () => {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
  });
})();

/* ============================================
   THREE.JS — CTA SECTION (Ring Burst)
   ============================================ */
(function initCtaScene() {
  const container = document.getElementById('ctaCanvas');
  if (!container || typeof THREE === 'undefined') return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(55, container.clientWidth / container.clientHeight, 0.1, 100);
  camera.position.z = 8;

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
  renderer.setClearColor(0x000000, 0);
  container.appendChild(renderer.domElement);

  const rings = [];

  for (let i = 0; i < 5; i++) {
    const geo = new THREE.TorusGeometry(1.5 + i * 0.9, 0.015, 8, 80);
    const mat = new THREE.MeshBasicMaterial({
      color: i % 2 === 0 ? 0xC8A96E : 0x1E7A58,
      transparent: true,
      opacity: 0.25 - i * 0.03,
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.rotation.x = Math.random() * Math.PI;
    mesh.rotation.z = Math.random() * Math.PI;
    mesh.userData = { speedX: 0.003 + i * 0.002, speedZ: 0.002 + i * 0.001 };
    scene.add(mesh);
    rings.push(mesh);
  }

  const clock = new THREE.Clock();

  (function animateCta() {
    requestAnimationFrame(animateCta);
    const t = clock.getElapsedTime();
    rings.forEach(r => {
      r.rotation.x += r.userData.speedX;
      r.rotation.z += r.userData.speedZ;
      r.rotation.y = Math.sin(t * 0.3) * 0.5;
    });
    renderer.render(scene, camera);
  })();

  window.addEventListener('resize', () => {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
  });
})();

/* ============================================
   BACKGROUND CANVAS (Subtle particle field)
   ============================================ */
(function initBgCanvas() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let W = canvas.width = window.innerWidth;
  let H = canvas.height = window.innerHeight;

  const particles = Array.from({ length: 60 }, () => ({
    x: Math.random() * W,
    y: Math.random() * H,
    r: Math.random() * 1.5 + 0.5,
    dx: (Math.random() - 0.5) * 0.3,
    dy: (Math.random() - 0.5) * 0.3,
    alpha: Math.random() * 0.3 + 0.1,
  }));

  function drawBg() {
    ctx.clearRect(0, 0, W, H);

    particles.forEach(p => {
      p.x += p.dx;
      p.y += p.dy;
      if (p.x < 0 || p.x > W) p.dx *= -1;
      if (p.y < 0 || p.y > H) p.dy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(200, 169, 110, ${p.alpha})`;
      ctx.fill();
    });

    // Connect nearby particles
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(200, 169, 110, ${0.05 * (1 - dist / 120)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(drawBg);
  }

  drawBg();

  window.addEventListener('resize', () => {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  });
})();
