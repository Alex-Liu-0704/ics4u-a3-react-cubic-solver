type InputProps = {
  a: number;
  b: number;
  c: number;
  d: number;
  setA: (value: number) => void;
  setB: (value: number) => void;
  setC: (value: number) => void;
  setD: (value: number) => void;
  onSave: () => void;
};

export const CubicInput = ({ a, b, c, d, setA, setB, setC, setD, onSave }: InputProps) => {
  return (
    <div>
      <h1>Cubic Solver</h1>
      <form
        id="cubic-form"
        onSubmit={(event: React.SubmitEvent<HTMLFormElement>) => {
          event.preventDefault();

          if (a === 0) {
            alert("'a' value cannot be zero!");
            return;
          };

          onSave();
        }}>
        <div className="input-container">
          <label htmlFor="a">a-value:</label>
          <input
            type="number"
            id="a"
            name="a"
            step="any"
            required
            value={a}
            onChange={(e) => setA(Number(e.target.value))}
          />
        </div>
        <div className="input-container">
          <label htmlFor="b">b-value:</label>
          <input
            type="number"
            id="b"
            name="b"
            step="any"
            required
            value={b}
            onChange={(e) => setB(Number(e.target.value))}
          />
        </div>
        <div className="input-container">
          <label htmlFor="c">c-value:</label>
          <input
            type="number"
            id="c"
            name="c"
            step="any"
            required
            value={c}
            onChange={(e) => setC(Number(e.target.value))}
          />
        </div>
        <div className="input-container">
          <label htmlFor="d">d-value:</label>
          <input
            type="number"
            id="d"
            name="d"
            step="any"
            required
            value={d}
            onChange={(e) => setD(Number(e.target.value))}
          />
        </div>
        <div className="input-container">
          <input
            type="submit"
            id="solve-button"
            name="solve-button"
            value="Save"
          />
        </div>
      </form>
    </div>
  );
};