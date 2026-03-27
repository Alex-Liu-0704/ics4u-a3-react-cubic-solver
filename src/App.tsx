import { useState } from 'react';
import { CubicInput } from './components/CubicInput'
// import { CubicEquation } from './components/CubicEquation'
// import { CubicTable } from './components/CubicTable'
// import { CubicGraph } from './components/CubicGraph'
// import { CubicHistory } from './components/CubicHistory'

export const App = () => {
  const [a, setA] = useState<number>(0);
  const [b, setB] = useState<number>(0);
  const [c, setC] = useState<number>(0);
  const [d, setD] = useState<number>(0);

  return (
    <CubicInput />
  );
};