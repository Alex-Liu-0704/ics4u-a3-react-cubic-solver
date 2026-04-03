export const LocalMaxMin = (a: number, b: number, c: number, d: number): { x: number; y: number; type: string }[] => {
  const discriminant = (2 * b) * (2 * b) - 4 * (3 * a) * c;

  if (discriminant < 0) {
    return [];
  } else {
    const x1 = (-(2 * b) + Math.sqrt(discriminant)) / (2 * (3 * a));
    const x2 = (-(2 * b) - Math.sqrt(discriminant)) / (2 * (3 * a));

    const y = (x: number): number => {
      return (
        (a * x * x * x) + (b * x * x) + (c * x) + d
      );
    };

    const secondDerivative = (x: number): number => {
      return (
        (6 * a * x) + (2 * b)
      );
    };

    const coordinates: { x: number; y: number; type: "Max" | "Min" | "None" }[] = [];

    const handleCoordinates = (x: number) => {
      if (secondDerivative(x) > 0) {
        coordinates.push({ x, y: y(x), type: "Min" });
      } else if (secondDerivative(x) < 0) {
        coordinates.push({ x, y: y(x), type: "Max" });
    //   } else {
    //     coordinates.push({ x, y: y(x), type: "None" });
      };
    };

    handleCoordinates(x1);
    handleCoordinates(x2);

    return (coordinates);
  };
};