type TableProps = {
  p: number;
  q: number;
  discriminant: number;
  roots: number[];
  turningPoints: { x: number; y: number; type: string }[];
};

export const CubicTable = ({ p, q, discriminant, roots, turningPoints }: TableProps) => {
  return (
    <table>
      <tr>
        <td className="border border-[#ccc] px-[14px] py-[8px] text-center">p</td>
        <td colSpan={2} className="border border-[#ccc] px-[14px] py-[8px] text-center">
          {Math.abs(p) < 0.000005 ? "0.00000" : p.toFixed(5)}
        </td>
      </tr>
      <tr>
        <td className="border border-[#ccc] px-[14px] py-[8px] text-center">q</td>
        <td colSpan={2} className="border border-[#ccc] px-[14px] py-[8px] text-center">
          {Math.abs(q) < 0.000005 ? "0.00000" : q.toFixed(5)}
        </td>
      </tr>
      <tr>
        <td className="border border-[#ccc] px-[14px] py-[8px] text-center">Discriminant</td>
        <td colSpan={2} className="border border-[#ccc] px-[14px] py-[8px] text-center">
          {Math.abs(discriminant) < 0.000005 ? "0.00000" : discriminant.toFixed(5)}
        </td>
      </tr>
      <tr className="header-row">
        <th className="border border-[#ccc] px-[14px] py-[8px] text-center bg-[#f5f5f5]">Value</th>
        <th className="border border-[#ccc] px-[14px] py-[8px] text-center bg-[#f5f5f5]">x</th>
        <th className="border border-[#ccc] px-[14px] py-[8px] text-center bg-[#f5f5f5]">y</th>
      </tr>
      <tr>
        <td className="border border-[#ccc] px-[14px] py-[8px] text-center">Root 1</td>
        <td className="border border-[#ccc] px-[14px] py-[8px] text-center">
          {Math.abs(roots[0]) < 0.005 ? "0.00" : roots[0].toFixed(2)}
        </td>
        <td className="border border-[#ccc] px-[14px] py-[8px] text-center">0.00</td>
      </tr>
      <tr>
        <td className="border border-[#ccc] px-[14px] py-[8px] text-center">Root 2</td>
        <td className="border border-[#ccc] px-[14px] py-[8px] text-center">
          {roots.length === 3
            ? (Math.abs(roots[1]) < 0.005 ? "0.00" : roots[1].toFixed(2))
            : discriminant > 0 ? "complex"
              : (Math.abs(roots[0]) < 0.005 ? "0.00" : roots[0].toFixed(2))}
        </td>
        <td className="border border-[#ccc] px-[14px] py-[8px] text-center">0.00</td>
      </tr>
      <tr>
        <td className="border border-[#ccc] px-[14px] py-[8px] text-center">Root 3</td>
        <td className="border border-[#ccc] px-[14px] py-[8px] text-center">
          {roots.length === 3
            ? (Math.abs(roots[2]) < 0.005 ? "0.00" : roots[2].toFixed(2))
            : discriminant > 0 ? "complex"
              : (Math.abs(roots[0]) < 0.005 ? "0.00" : roots[0].toFixed(2))}
        </td>
        <td className="border border-[#ccc] px-[14px] py-[8px] text-center">0.00</td>
      </tr>
      <tr>
        <th colSpan={3} className="border border-[#ccc] px-[14px] py-[8px] text-center bg-[#f5f5f5]">Turning Points</th>
      </tr>
      <tr>
        <th className="border border-[#ccc] px-[14px] py-[8px] text-center bg-[#f5f5f5]">Type</th>
        <th className="border border-[#ccc] px-[14px] py-[8px] text-center bg-[#f5f5f5]">x</th>
        <th className="border border-[#ccc] px-[14px] py-[8px] text-center bg-[#f5f5f5]">y</th>
      </tr>
      {turningPoints.length > 0 ? turningPoints.map((point, i) => (
        <tr key={i}>
          <td className="border border-[#ccc] px-[14px] py-[8px] text-center">{point.type}</td>
          <td className="border border-[#ccc] px-[14px] py-[8px] text-center">{point.x.toFixed(2)}</td>
          <td className="border border-[#ccc] px-[14px] py-[8px] text-center">{point.y.toFixed(2)}</td>
        </tr>
      )) : (
        <tr>
          <td colSpan={3} className="border border-[#ccc] px-[14px] py-[8px] text-center">No turning points</td>
        </tr>
      )}
    </table>
  );
};
