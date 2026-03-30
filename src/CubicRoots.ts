// // type CubicRootsProps = {
// //   a: number;
// //   b: number;
// //   c: number;
// //   d: number;
// // };

// export const CubicRoots = (a: number, b: number, c: number, d: number): number[] => {
//   function trignometricMethod(a: number, b: number, p: number, q: number): number[] {
//     const theta: number = (1 / 3) * Math.acos(-q / (2 * Math.sqrt(-Math.pow(p / 3, 3))));
//     const y1: number = 2 * Math.sqrt(-p / 3) * Math.cos(theta);
//     const y2: number = 2 * Math.sqrt(-p / 3) * Math.cos(theta + (2 * Math.PI) / 3);
//     const y3: number = 2 * Math.sqrt(-p / 3) * Math.cos(theta + (4 * Math.PI) / 3);
//     return [y1, y2, y3].map((root) => root - b / (3 * a));
//   };

//   const cardanosMethod = (a: number, b: number, q: number, disciminant: number): number => {
//     return (
//       Math.cbrt(-q / 2 + Math.sqrt(disciminant)) + Math.cbrt(-q / 2 - Math.sqrt(disciminant)) - b / (3 * a)
//     );
//   };

//   const p: number = (3 * a * c - b * b) / (3 * a * a);
//   const q: number = (27 * a * a * d - 9 * a * b * c + 2 * b * b * b) / (27 * a * a * a);
//   const discriminant: number = (q / 2) * (q / 2) + (p / 3) * (p / 3) * (p / 3);

//   let roots: number[] = [];

//   if (discriminant < 0) {
//     roots = trignometricMethod(a, b, p, q);
//   } else if (discriminant > 0) {
//     roots = [cardanosMethod(a, b, q, discriminant)];
//   } else {
//     if (p === 0 && q === 0) {
//       roots = [cardanosMethod(a, b, q, discriminant)];
//     } else {
//       roots = [
//         cardanosMethod(a, b, q, discriminant),
//         Math.cbrt(q / 2) - b / (3 * a),
//         Math.cbrt(q / 2) - b / (3 * a)
//       ];
//     };
//   };

//   roots.sort((a, b) => a - b);

// };