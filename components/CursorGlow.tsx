import React, { useEffect, useRef } from 'react';

const CursorGlow: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: 0, y: 0 });
  const trailPosRef = useRef({ x: 0, y: 0 });
  const hoveredRef = useRef(false);

  useEffect(() => {
    // Skip on touch devices
    if ('ontouchstart' in window) return;

    const cursor = cursorRef.current;
    const trail = trailRef.current;
    if (!cursor || !trail) return;

    const onMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('input') ||
        target.closest('[data-cursor-hover]')
      ) {
        hoveredRef.current = true;
        cursor.classList.add('hovered');
      } else {
        hoveredRef.current = false;
        cursor.classList.remove('hovered');
      }
    };

    let animId: number;
    const animate = () => {
      // Smooth cursor follow
      cursor.style.left = posRef.current.x + 'px';
      cursor.style.top = posRef.current.y + 'px';

      // Trail follows with lag
      trailPosRef.current.x += (posRef.current.x - trailPosRef.current.x) * 0.12;
      trailPosRef.current.y += (posRef.current.y - trailPosRef.current.y) * 0.12;
      trail.style.left = trailPosRef.current.x + 'px';
      trail.style.top = trailPosRef.current.y + 'px';

      animId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onOver);
    animId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
      cancelAnimationFrame(animId);
    };
  }, []);

  // Don't render on mobile
  if (typeof window !== 'undefined' && 'ontouchstart' in window) return null;

  return (
    <>
      <div ref={cursorRef} className="custom-cursor" />
      <div ref={trailRef} className="custom-cursor-trail" />
    </>
  );
};

export default CursorGlow;
