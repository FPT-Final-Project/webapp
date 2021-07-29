/* eslint-disable no-empty */
/* eslint-disable consistent-return */
/* eslint-disable react/prop-types */
import React, { createRef, useEffect } from 'react';

export default function Canvas({ videoRef, className } : any) {
  const canvasRef = createRef<any>();

  useEffect(() => {
    if (canvasRef.current && videoRef.current) {
      const interval = setInterval(() => {
        try {
          const ctx = canvasRef.current.getContext('2d');
          ctx.drawImage(videoRef.current, 0, 0, 1280, 720);
          ctx.shadowColor = 'black';
          ctx.shadowBlur = 6;
          ctx.shadowOffsetX = 6;
          ctx.shadowOffsetY = 6;
        } catch {}
      }, 10);
      return () => clearInterval(interval);
    }
  });

  return (
    <canvas ref={canvasRef} className={className} width="1280" height="720" />
  );
}
