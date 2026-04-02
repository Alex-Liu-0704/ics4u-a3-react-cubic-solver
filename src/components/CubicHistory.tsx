type HistoryProps = {
  history: { a: number; b: number; c: number; d: number }[];
  setA: (value: number) => void;
  setB: (value: number) => void;
  setC: (value: number) => void;
  setD: (value: number) => void;
};

export const CubicHistory = ({ history, setA, setB, setC, setD }: HistoryProps) => {
  return (
    <table>
      <tr>
        <th>a</th>
        <th>b</th>
        <th>c</th>
        <th>d</th>
      </tr>
      <tr>
        {history.map((coeff, i) => (
          <tr
            key={i} onClick={() => {
              setA(coeff.a);
              setB(coeff.b);
              setC(coeff.c);
              setD(coeff.d);
            }}
          >
            <td>{coeff.a}</td>
            <td>{coeff.b}</td>
            <td>{coeff.c}</td>
            <td>{coeff.d}</td>
          </tr>
        ))}
      </tr>
    </table >
  )
};
