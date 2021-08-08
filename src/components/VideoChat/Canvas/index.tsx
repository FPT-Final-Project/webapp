/* eslint-disable no-empty */
/* eslint-disable consistent-return */
/* eslint-disable react/prop-types */
import { createRef, useEffect } from 'react';

export default function Canvas({ videoRef, className } : any) {
  const canvasRef = createRef<any>();
  useEffect(() => {
    videoRef.current.play();
    if (canvasRef.current && videoRef.current) {
      const interval = setInterval(() => {
        try {
          const ctx = canvasRef.current.getContext('2d');
          ctx.drawImage(videoRef.current, 0, 0, 720, 480);
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
    <canvas ref={canvasRef} className={className} width="720" height="480" />
  );
}
