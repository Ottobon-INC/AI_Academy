import React, { useEffect, useRef } from 'react';

interface Node {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseRadius: number;
  alpha: number;
}

export const ParticleSilhouette: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef<{ x: number | null; y: number | null }>({ x: null, y: null });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const PARTICLE_COUNT = 120;
    const CONNECTION_DIST = 180;
    const MOUSE_INFLUENCE_DIST = 200;
    
    let nodes: Node[] = [];

    // Helper to check if a point is in the center text exclusion zone
    const isInCenterBox = (x: number, y: number) => {
      const boxWidth = Math.min(width * 0.7, 850);
      const boxHeight = Math.min(height * 0.5, 450);
      const cx = width / 2;
      const cy = height / 2;
      return x > cx - boxWidth/2 && x < cx + boxWidth/2 &&
             y > cy - boxHeight/2 && y < cy + boxHeight/2;
    };

    // Initialize nodes
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      let x = Math.random() * width;
      let y = Math.random() * height;
      
      // Keep trying until we spawn outside the center box
      while (isInCenterBox(x, y)) {
        x = Math.random() * width;
        y = Math.random() * height;
      }

      nodes.push({
        id: i,
        x, y,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        baseRadius: 2.0 + Math.random() * 2.5, // Increased base size
        alpha: 0.3 + Math.random() * 0.6 // Increased base alpha
      });
    }

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      const mouse = mouseRef.current;

      // Define Center Box
      const boxWidth = Math.min(width * 0.7, 850);
      const boxHeight = Math.min(height * 0.5, 450);
      const cx = width / 2;
      const cy = height / 2;
      const boxLeft = cx - boxWidth/2;
      const boxRight = cx + boxWidth/2;
      const boxTop = cy - boxHeight/2;
      const boxBottom = cy + boxHeight/2;

      // Update and draw nodes
      nodes.forEach((node, i) => {
        // Drift
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off screen edges
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        // Bounce off center box (repel force)
        if (isInCenterBox(node.x, node.y)) {
          // Find closest edge to push out
          const dLeft = Math.abs(node.x - boxLeft);
          const dRight = Math.abs(node.x - boxRight);
          const dTop = Math.abs(node.y - boxTop);
          const dBottom = Math.abs(node.y - boxBottom);
          const minD = Math.min(dLeft, dRight, dTop, dBottom);
          
          if (minD === dLeft) { node.vx = -Math.abs(node.vx); node.x = boxLeft; }
          else if (minD === dRight) { node.vx = Math.abs(node.vx); node.x = boxRight; }
          else if (minD === dTop) { node.vy = -Math.abs(node.vy); node.y = boxTop; }
          else if (minD === dBottom) { node.vy = Math.abs(node.vy); node.y = boxBottom; }
        }

        // Mouse Parallax / Repulsion
        if (mouse.x && mouse.y) {
          const mdx = mouse.x - node.x;
          const mdy = mouse.y - node.y;
          const mDist = Math.sqrt(mdx*mdx + mdy*mdy);
          if (mDist < MOUSE_INFLUENCE_DIST) {
            const force = (MOUSE_INFLUENCE_DIST - mDist) / MOUSE_INFLUENCE_DIST;
            node.x -= mdx * force * 0.02;
            node.y -= mdy * force * 0.02;
          }
        }

        // Draw connections
        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const dx = other.x - node.x;
          const dy = other.y - node.y;
          const dist = Math.sqrt(dx*dx + dy*dy);

          if (dist < CONNECTION_DIST) {
            const alpha = (1 - dist / CONNECTION_DIST) * 0.4; // Increased from 0.15 to 0.4
            ctx.beginPath();
            ctx.strokeStyle = `rgba(200, 106, 76, ${alpha})`; // #C86A4C accent
            ctx.lineWidth = 1.0; // Increased from 0.5 to 1.0
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        }

        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.baseRadius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200, 106, 76, ${node.alpha})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}>
      <canvas ref={canvasRef} style={{ display: 'block', width: '100%', height: '100%' }} />
    </div>
  );
};
