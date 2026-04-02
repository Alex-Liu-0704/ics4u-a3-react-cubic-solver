export const LocalMaxMin = (a: number, b: number, c: number): any => {
  let firstPoint: any[] = []
  let secondPoint: any[] = []

  const firstDerivative = [3 * a, 2 * b, c]
  const secondDerivative = [2 * firstDerivative[0], firstDerivative[1]]
  const discriminant = (2 * b) * (2 * b) - 4 * (3 * a) * c;

  if (discriminant < 0) {
    return []
  } else {
    firstPoint = [(-(2 * b) + Math.sqrt(discriminant)) / (2 * (3 * a))]
    secondPoint = [(-(2 * b) - Math.sqrt(discriminant)) / (2 * (3 * a))]

    if ((secondDerivative[0] * firstPoint[0] + secondDerivative[1]) > 0) {
      firstPoint.push("Min");
    } else if ((secondDerivative[0] * firstPoint[0] + secondDerivative[1]) < 0) {
      firstPoint.push("Max");
    } else {
      firstPoint = [];
    }

    if ((secondDerivative[0] * secondPoint[0] + secondDerivative[1]) > 0) {
      secondPoint.push("Min");
    } else if ((secondDerivative[0] * secondPoint[0] + secondDerivative[1]) < 0) {
      secondPoint.push("Max");
    } else {
      secondPoint = [];
    };

    return [...firstPoint, ...secondPoint];
  }
}