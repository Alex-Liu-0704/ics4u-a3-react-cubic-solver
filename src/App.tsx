import { useState } from 'react';
import { CubicInput } from './components/CubicInput';
import { CubicEquation } from './components/CubicEquation';
import { CubicTable } from './components/CubicTable';
import { CubicGraph } from './components/CubicGraph';
import { CubicHistory } from './components/CubicHistory';
import { CubicSolver } from './utils/CubicSolver';
import { LocalMaxMin } from './utils/LocalMaxMin';

export const App = () => {
  const [a, setA] = useState<number>(1);
  const [b, setB] = useState<number>(0);
  const [c, setC] = useState<number>(0);
  const [d, setD] = useState<number>(0);
  const [history, setHistory] = useState<{ a: number; b: number; c: number; d: number }[]>([]);

  const p: number = (3 * a * c - b * b) / (3 * a * a);
  const q: number = (27 * a * a * d - 9 * a * b * c + 2 * b * b * b) / (27 * a * a * a);
  const discriminant: number = Number(((q / 2) * (q / 2) + (p / 3) * (p / 3) * (p / 3)).toFixed(6));
  const roots: number[] = CubicSolver(a, b, p, q, discriminant);
  const turningPoints = LocalMaxMin(a, b, c, d);

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
        onSave={() => setHistory([...history, { a, b, c, d }])}
      />
      <CubicEquation
        a={a}
        b={b}
        c={c}
        d={d}
      />
      <div className="flex justify-center items-start gap-[40px] mt-[30px]">
        {a === 0 ? (
          <div>
            <p className="text-[20px] text-center mt-[30px] mx-[300px] font-medium text-red-500">
              Coefficient 'a' cannot be zero.
            </p>
          </div>
        ) : (
          <div className="flex gap-[40px] items-start">
            <CubicTable
              p={p}
              q={q}
              discriminant={discriminant}
              roots={roots}
              turningPoints={turningPoints}
            />
            <CubicGraph
              a={a}
              b={b}
              c={c}
              d={d}
              roots={roots}
            />
          </div>
        )}
        <CubicHistory
          history={history}
          setA={setA}
          setB={setB}
          setC={setC}
          setD={setD}
        />
      </div>
    </div>
  );
};