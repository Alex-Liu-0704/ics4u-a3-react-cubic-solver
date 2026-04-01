import { useRef, useEffect } from "react";

type GraphProps = {
  a: number;
  b: number;
  c: number;
  d: number;
  roots: number[];
};

export const CubicGraph = ({ a, b, c, d, roots }: GraphProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    };

    const ctx = canvas.getContext("2d");

    if (!ctx) {
      return;
    };

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const xCenter: number = canvas.width / 2;
    const yCenter: number = canvas.height / 2;
    const scale: number = 25;

    // draw grid
    ctx.beginPath();
    ctx.strokeStyle = "#E7E7E7";
    ctx.lineWidth = 1;

    for (let x: number = 0; x <= canvas.width; x += scale) { // dont know if i need a type for for loop but i put it anyways
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
    };

    for (let y: number = 0; y <= canvas.height; y += scale) {
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
    };

    ctx.stroke();

    // draw the axis
    ctx.beginPath();
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 2;
    ctx.moveTo(xCenter, 0);
    ctx.lineTo(xCenter, canvas.height);
    ctx.moveTo(0, yCenter);
    ctx.lineTo(canvas.width, yCenter);
    ctx.stroke();

    // draw curve
    ctx.beginPath();
    ctx.strokeStyle = "Red";
    ctx.lineWidth = 2;

    const xStart: number = -canvas.width / 2 / scale;
    const xEnd: number = canvas.width / 2 / scale;
    const yStart: number = a * xStart * xStart * xStart + b * xStart * xStart + c * xStart + d;

    ctx.moveTo(xCenter + xStart * scale, yCenter - yStart * scale);

    for (let x: number = xStart; x <= xEnd; x += 0.1) {
      const y: number = a * x * x * x + b * x * x + c * x + d;
      const canvasX: number = xCenter + x * scale;
      const canvasY: number = yCenter - y * scale;
      ctx.lineTo(canvasX, canvasY);
    };

    ctx.stroke();

    // plot roots
    ctx.fillStyle = "#8C93A8";

    for (let i: number = 0; i < roots.length; i++) {
        const root: number = roots[i];
        const x: number = xCenter + root * scale;
        const y: number = yCenter;

        ctx.beginPath();
        ctx.arc(x, y, 4, 0, 2 * Math.PI);
        ctx.fill();
    };
  }, [a, b, c, d]);

  return (
    <canvas ref={canvasRef} width={600} height={600}></canvas> // idk what this part really means
  );
};