import React, { useEffect, useRef } from 'react';

// A single node (or weight) in the mobile
interface Node {
  id: string;
  label: string;
  level: number;
  baseRadius: number;
  glow: number;
  // Offset relative to parent
  offsetX: number; 
  offsetY: number;
  // Dynamic properties
  angle: number;
  angularVelocity: number;
  // Children (sub-nodes or weights)
  children?: Node[];
}

// Initial state for the Calder Mobile tree
const createMobileTree = (): Node => {
  return {
    id: 'root',
    label: '',
    level: 0,
    baseRadius: 0,
    glow: 0,
    offsetX: 0,
    offsetY: 0,
    angle: 0,
    angularVelocity: 0,
    children: [
      {
        id: 'branch-left',
        label: '',
        level: 1,
        baseRadius: 0,
        glow: 0,
        offsetX: -120,
        offsetY: 80,
        angle: 0.1,
        angularVelocity: 0,
        children: [
          { id: 'leadership', label: 'Leadership', level: 2, baseRadius: 4, glow: 0, offsetX: -60, offsetY: 40, angle: 0, angularVelocity: 0 },
          { id: 'experience', label: 'Experience', level: 2, baseRadius: 5, glow: 0, offsetX: 60, offsetY: 70, angle: -0.1, angularVelocity: 0 },
        ]
      },
      {
        id: 'branch-center',
        label: '',
        level: 1,
        baseRadius: 0,
        glow: 0,
        offsetX: 20,
        offsetY: 150,
        angle: -0.05,
        angularVelocity: 0,
        children: [
          { id: 'data', label: 'Data', level: 2, baseRadius: 3.5, glow: 0, offsetX: -40, offsetY: 50, angle: 0.05, angularVelocity: 0 },
          { id: 'ai', label: 'AI', level: 2, baseRadius: 6, glow: 0, offsetX: 50, offsetY: 30, angle: 0, angularVelocity: 0 },
        ]
      },
      {
        id: 'branch-right',
        label: '',
        level: 1,
        baseRadius: 0,
        glow: 0,
        offsetX: 140,
        offsetY: 60,
        angle: -0.15,
        angularVelocity: 0,
        children: [
          { id: 'cloud', label: 'Cloud', level: 2, baseRadius: 3, glow: 0, offsetX: -50, offsetY: 60, angle: 0.1, angularVelocity: 0 },
          { id: 'architecture', label: 'Architecture', level: 2, baseRadius: 4.5, glow: 0, offsetX: 70, offsetY: 40, angle: -0.05, angularVelocity: 0 },
        ]
      }
    ]
  };
};

export const CareerConstellation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef<{ x: number | null; y: number | null }>({ x: null, y: null });
  const treeRef = useRef<Node>(createMobileTree());

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    // Damping and spring constants for organic movement
    const DAMPING = 0.95;
    const RETURN_SPRING = 0.02;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: null, y: null };
    };

    window.addEventListener('resize', handleResize);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    // Recursively update node physics and draw them
    const updateAndDrawNode = (node: Node, parentX: number, parentY: number, time: number) => {
      // Base sway from sine wave (slower for higher levels)
      const swaySpeed = 0.001 * (node.level + 1);
      const targetAngle = Math.sin(time * swaySpeed + node.offsetX) * 0.1;

      // Mouse interaction (wind)
      let windTorque = 0;
      const mouse = mouseRef.current;
      
      // Calculate absolute position
      const length = Math.sqrt(node.offsetX * node.offsetX + node.offsetY * node.offsetY);
      const baseAngle = Math.atan2(node.offsetY, node.offsetX);
      
      const totalAngle = baseAngle + node.angle;
      const absX = parentX + Math.cos(totalAngle) * length;
      const absY = parentY + Math.sin(totalAngle) * length;

      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - absX;
        const dy = mouse.y - absY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < 150) {
          // Calculate a small push based on distance
          const force = (150 - dist) / 150;
          // Apply a tiny torque based on mouse position
          windTorque = (dx > 0 ? -0.01 : 0.01) * force;
          
          // Increase glow
          node.glow += (1 - node.glow) * 0.1;
        } else {
          node.glow += (0 - node.glow) * 0.05;
        }
      } else {
        node.glow += (0 - node.glow) * 0.05;
      }

      // Physics update
      const torque = (targetAngle - node.angle) * RETURN_SPRING + windTorque;
      node.angularVelocity += torque;
      node.angularVelocity *= DAMPING;
      node.angle += node.angularVelocity;

      // Draw wire from parent to this node (skip for root since it has no parent to draw from)
      if (node.id !== 'root') {
        const wireAlpha = 0.3 + node.glow * 0.5;
        ctx.strokeStyle = `rgba(148, 163, 184, ${wireAlpha})`;
        ctx.lineWidth = 0.8 + node.glow * 1.5;
        ctx.beginPath();
        ctx.moveTo(parentX, parentY);
        ctx.lineTo(absX, absY);
        ctx.stroke();
      }

      // If it's a leaf node, draw the counter-weight circle and label
      if (!node.children || node.children.length === 0) {
        // Outer glow
        if (node.glow > 0.01) {
          ctx.shadowBlur = 15 * node.glow;
          ctx.shadowColor = 'rgba(233, 90, 56, 0.5)';
        } else {
          ctx.shadowBlur = 0;
        }

        // Dot
        ctx.fillStyle = node.glow > 0.1 
          ? `rgba(233, 90, 56, ${0.5 + node.glow * 0.5})` 
          : 'rgba(148, 163, 184, 0.4)';
        
        ctx.beginPath();
        ctx.arc(absX, absY, node.baseRadius + (node.glow * 2), 0, Math.PI * 2);
        ctx.fill();

        // Label
        ctx.shadowBlur = 0;
        const labelAlpha = 0.3 + (node.glow * 0.7);
        ctx.fillStyle = `rgba(15, 23, 42, ${labelAlpha})`;
        ctx.font = '500 12px var(--font-heading, monospace)';
        ctx.letterSpacing = '0.05em';
        
        // Position label slightly below or to the side depending on offset
        ctx.fillText(node.label.toUpperCase(), absX + 15, absY + 5);
      }

      // Recursively update and draw children
      if (node.children) {
        node.children.forEach(child => {
          updateAndDrawNode(child, absX, absY, time);
        });
      }
    };

    const render = (time: number) => {
      ctx.clearRect(0, 0, width, height);

      const rootX = width / 2;
      const rootY = height * 0.1; // Hang from near the top

      // Start the recursive update/draw from the root
      updateAndDrawNode(treeRef.current, rootX, rootY, time);

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (canvas) {
        canvas.removeEventListener('mousemove', handleMouseMove);
        canvas.removeEventListener('mouseleave', handleMouseLeave);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="constellation-canvas"
      style={{ width: '100%', height: '100%', display: 'block' }}
    />
  );
};
