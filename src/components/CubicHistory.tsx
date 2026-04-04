type HistoryProps = {
  history: { a: number; b: number; c: number; d: number }[];
  setA: (value: number) => void;
  setB: (value: number) => void;
  setC: (value: number) => void;
  setD: (value: number) => void;
};

export const CubicHistory = ({ history, setA, setB, setC, setD }: HistoryProps) => {
  return (
    <table className="mb-[50px]">
      <thead>
        <tr>
          <th colSpan={4} className="pl-0 pt-0 px-[14px] py-[8px] text-left font-medium">History</th>
        </tr>
        <tr className="border border-[#ccc]">
          <th className="px-[14px] py-[8px] text-center bg-[#f5f5f5]">a</th>
          <th className="px-[14px] py-[8px] text-center bg-[#f5f5f5]">b</th>
          <th className="px-[14px] py-[8px] text-center bg-[#f5f5f5]">c</th>
          <th className="px-[14px] py-[8px] text-center bg-[#f5f5f5]">d</th>
        </tr>
      </thead>
      <tbody>
        {history.map((coeff, i) => (
          <tr
            className="border border-[#ccc] cursor-pointer hover:bg-[#f0f0f0]"
            key={i}
            onClick={() => {
              setA(coeff.a);
              setB(coeff.b);
              setC(coeff.c);
              setD(coeff.d);
            }}
          >
            <td className="px-[14px] py-[8px] text-center">{coeff.a}</td>
            <td className="px-[14px] py-[8px] text-center">{coeff.b}</td>
            <td className="px-[14px] py-[8px] text-center">{coeff.c}</td>
            <td className="px-[14px] py-[8px] text-center">{coeff.d}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
};
