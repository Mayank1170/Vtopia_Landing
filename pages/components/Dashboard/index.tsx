// src/components/CardComponent.tsx

import React, { useEffect } from 'react';

const CardComponent: React.FC = () => {
  let bounds: DOMRect | null = null;

  const rotateToMouse = (e: MouseEvent) => {
    if (!bounds) return;

    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const leftX = mouseX - bounds.x;
    const topY = mouseY - bounds.y;
    const center = {
      x: leftX - bounds.width / 2,
      y: topY - bounds.height / 2,
    };
    const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

    const $card = document.querySelector('.card') as HTMLElement;
    $card.style.transform = `
      scale3d(1.07, 1.07, 1.07)
      rotate3d(
        ${center.y / 100},
        ${-center.x / 100},
        0,
        ${Math.log(distance) * 2}deg
      )
    `;

    // const glow = $card.querySelector('.glow') as HTMLElement;
    // glow.style.backgroundImage = `
    //   radial-gradient(
    //     circle at
    //     ${center.x * 2 + bounds.width / 2}px
    //     ${center.y * 2 + bounds.height / 2}px,
    //     #ffffff55,
    //     #0000000f
    //   )
    // `;
  };

  useEffect(() => {
    const handleMouseEnter = () => {
      bounds = document.querySelector('.card')?.getBoundingClientRect() || null;
      document.addEventListener('mousemove', rotateToMouse);
    };

    const handleMouseLeave = () => {
      document.removeEventListener('mousemove', rotateToMouse);
      const $card = document.querySelector('.card') as HTMLElement;
      $card.style.transform = '';
    };

    const $card = document.querySelector('.card') as HTMLElement;
    $card.addEventListener('mouseenter', handleMouseEnter);
    $card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      $card.removeEventListener('mouseenter', handleMouseEnter);
      $card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="card">
      3D Card
      {/* <div className="glow" /> */}
    </div>
  );
};

export default CardComponent;
