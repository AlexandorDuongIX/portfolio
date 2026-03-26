import { useEffect, useRef } from 'react';

export default function FloatingCode() {
  const elRef = useRef(null);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    let scrollY = window.scrollY;
    let targetX = window.innerWidth * 0.85;
    let targetY = 200;
    let currentX = targetX;
    let currentY = targetY;
    let angle = 0;
    let wingAngle = 0;
    let wingDirection = 1;
    let time = 0;
    let lastScrollY = scrollY;
    let scrollVelocity = 0;

    // Mouse dodge state
    let mouseX = -9999;
    let mouseY = -9999;
    let dodgeX = 0;
    let dodgeY = 0;
    let isDodging = false;
    const DODGE_RADIUS = 150;
    const DODGE_FORCE = 250;

    const leftWing = el.querySelector('#code-left');
    const rightWing = el.querySelector('#code-right');

    const onScroll = () => {
      scrollVelocity = window.scrollY - lastScrollY;
      lastScrollY = window.scrollY;
      scrollY = window.scrollY;
    };

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('mousemove', onMouseMove, { passive: true });

    const animate = () => {
      time += 0.016;

      // --- Mouse dodge detection ---
      const elRect = el.getBoundingClientRect();
      const elCenterX = elRect.left + elRect.width / 2;
      const elCenterY = elRect.top + elRect.height / 2;
      const distX = mouseX - elCenterX;
      const distY = mouseY - elCenterY;
      const dist = Math.sqrt(distX * distX + distY * distY);

      if (dist < DODGE_RADIUS && dist > 0) {
        // Fly away from cursor!
        isDodging = true;
        const pushStrength = (1 - dist / DODGE_RADIUS) * DODGE_FORCE;
        dodgeX += (-distX / dist) * pushStrength * 0.15;
        dodgeY += (-distY / dist) * pushStrength * 0.15;
      } else {
        isDodging = false;
      }

      // Decay dodge offset — slowly return to path
      dodgeX *= 0.94;
      dodgeY *= 0.94;

      // Clamp dodge so it doesn't fly off screen
      dodgeX = Math.max(-400, Math.min(400, dodgeX));
      dodgeY = Math.max(-300, Math.min(300, dodgeY));

      // Flapping wings - faster when dodging!
      const dodgeBoost = isDodging ? 12 : 0;
      const flapSpeed = 3 + Math.min(Math.abs(scrollVelocity) * 0.5, 8) + dodgeBoost;
      wingAngle += flapSpeed * wingDirection * 0.06;

      const maxWing = isDodging ? 35 : 20;
      if (wingAngle > maxWing) wingDirection = -1;
      if (wingAngle < -maxWing) wingDirection = 1;

      // Apply wing flap transforms
      if (leftWing) {
        leftWing.style.transform = `rotate(${wingAngle}deg)`;
      }
      if (rightWing) {
        rightWing.style.transform = `rotate(${-wingAngle}deg)`;
      }

      // Target position: follows scroll with sine wave movement
      const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = pageHeight > 0 ? scrollY / pageHeight : 0;

      // Zigzag path across the page as user scrolls
      const sineX = Math.sin(scrollProgress * Math.PI * 4) * (window.innerWidth * 0.3);
      targetX = window.innerWidth * 0.5 + sineX;
      targetY = 150 + scrollProgress * (window.innerHeight * 0.6);

      // Smooth follow with easing
      currentX += (targetX - currentX) * 0.04;
      currentY += (targetY - currentY) * 0.04;

      // Float bobbing
      const bobY = Math.sin(time * 2) * 8;
      const bobX = Math.cos(time * 1.5) * 5;

      // Rotation based on movement direction (include dodge direction)
      const dx = targetX - currentX + dodgeX * 0.1;
      const dy = scrollVelocity + dodgeY * 0.1;
      const targetAngle = Math.atan2(dy, dx) * (180 / Math.PI);
      angle += (targetAngle - angle) * 0.08;

      // Decay scroll velocity
      scrollVelocity *= 0.95;

      // Apply transforms with dodge offset
      const finalX = currentX + bobX + dodgeX;
      const finalY = currentY + bobY + dodgeY;

      el.style.left = `${finalX}px`;
      el.style.top = `${finalY}px`;
      el.style.transform = `translate(-50%, -50%) rotate(${angle * 0.3}deg) scale(${isDodging ? 1.15 : 1})`;

      // Opacity based on visibility
      const opacity = scrollY > 100 ? Math.min((scrollY - 100) / 200, 0.9) : 0;
      el.style.opacity = opacity;

      requestAnimationFrame(animate);
    };

    const frameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div ref={elRef} className="floating-code" style={{ opacity: 0 }}>
      <svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg" width="60" height="40">
        <defs>
          <linearGradient id="code-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
          <linearGradient id="code-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
          <filter id="code-glow">
            <feGaussianBlur stdDeviation="2" result="glow" />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Left bracket < - acts as left wing */}
        <g id="code-left" style={{ transformOrigin: '35px 40px' }}>
          <path
            d="M38 15 L8 40 L38 65"
            stroke="url(#code-grad-1)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#code-glow)"
          />
        </g>

        {/* Right bracket > - acts as right wing */}
        <g id="code-right" style={{ transformOrigin: '85px 40px' }}>
          <path
            d="M82 15 L112 40 L82 65"
            stroke="url(#code-grad-1)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#code-glow)"
          />
        </g>

        {/* Center slash / - body */}
        <path
          d="M68 12 L52 68"
          stroke="url(#code-grad-2)"
          strokeWidth="5"
          strokeLinecap="round"
          filter="url(#code-glow)"
        />
      </svg>

      {/* Trail particles */}
      <div className="code-trail">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}
