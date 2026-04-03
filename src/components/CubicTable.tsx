type TableProps = {
  p: number;
  q: number;
  discriminant: number;
  roots: number[];
  turningPoints: { x: number; y: number; type: string }[];
};

export const CubicTable = ({ p, q, discriminant, roots, turningPoints }: TableProps) => {
  return (
    <table id="results-table">
      <tr>
        <td>p</td>
        <td colSpan={2}>
          {Math.abs(p) < 0.000005 ? "0.00000" : p.toFixed(5)}
        </td>
      </tr>
      <tr>
        <td>q</td>
        <td colSpan={2}>
          {Math.abs(q) < 0.000005 ? "0.00000" : q.toFixed(5)}
        </td>
      </tr>
      <tr>
        <td>Discriminant</td>
        <td colSpan={2}>
          {Math.abs(discriminant) < 0.000005 ? "0.00000" : discriminant.toFixed(5)}
        </td>
      </tr>
      <tr className="header-row">
        <th>Value</th>
        <th>x</th>
        <th>y</th>
      </tr>
      <tr>
        <td>Root 1</td>
        <td>
          {Math.abs(roots[0]) < 0.005 ? "0.00" : roots[0].toFixed(2)}
        </td>
        <td>0.00</td>
      </tr>
      <tr>
        <td>Root 2</td>
        <td>
          {roots.length === 3
            ? (Math.abs(roots[1]) < 0.005 ? "0.00" : roots[1].toFixed(2))
            : discriminant > 0 ? "complex"
              : (Math.abs(roots[0]) < 0.005 ? "0.00" : roots[0].toFixed(2))}
        </td>
        <td>0.00</td>
      </tr>
      <tr>
        <td>Root 3</td>
        <td>
          {roots.length === 3
            ? (Math.abs(roots[2]) < 0.005 ? "0.00" : roots[2].toFixed(2))
            : discriminant > 0 ? "complex"
              : (Math.abs(roots[0]) < 0.005 ? "0.00" : roots[0].toFixed(2))}
        </td>
        <td>0.00</td>
      </tr>
      <tr>
        <th>Turning Point</th>
        <th>x</th>
        <th>y</th>
      </tr>
      {turningPoints.length > 0 ? turningPoints.map((point, i) => (
        <tr key={i}>
          <td>{point.type}</td>
          <td>{point.x.toFixed(2)}</td>
          <td>{point.y.toFixed(2)}</td>
        </tr>
      )) : (
        <tr>
          <td colSpan={3}>No turning points</td>
        </tr>
      )};
    </table>
  );
};
