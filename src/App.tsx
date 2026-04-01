import { useState } from 'react';
import { CubicInput } from './components/CubicInput';
import { CubicEquation } from './components/CubicEquation';
import { CubicTable } from './components/CubicTable';
import { CubicGraph } from './components/CubicGraph';
// import { CubicHistory } from './components/CubicHistory';
import { CubicSolver } from './CubicSolver';

export const App = () => {
  const [a, setA] = useState<number>(1);
  const [b, setB] = useState<number>(0);
  const [c, setC] = useState<number>(0);
  const [d, setD] = useState<number>(0);

  const p: number = (3 * a * c - b * b) / (3 * a * a);
  const q: number = (27 * a * a * d - 9 * a * b * c + 2 * b * b * b) / (27 * a * a * a);
  const discriminant: number = (q / 2) * (q / 2) + (p / 3) * (p / 3) * (p / 3);
  const roots: number[] = CubicSolver(a, b, p, q, discriminant);

  return (
    <div>
      <CubicInput
        a={a}
        b={b}
        c={c}
        d={d}
        setA={setA}
        setB={setB}
        setC={setC}
        setD={setD}
      />
      <CubicEquation
        a={a}
        b={b}
        c={c}
        d={d}
      />
      <CubicTable
        p={p}
        q={q}
        discriminant={discriminant}
        roots={roots}
      />
      <CubicGraph
        a={a}
        b={b}
        c={c}
        d={d}
        roots={roots}
      />
    </div>
  );
};