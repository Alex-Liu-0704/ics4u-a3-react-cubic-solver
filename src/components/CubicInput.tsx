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
    <div className="font-sans text-base">
      <h1 className="text-[32px] font-bold flex justify-center pt-2 pb-2 mb-10 bg-[#2a2a2a] text-gray-300 hover:text-white w-screen">
        Cubic Solver
      </h1>
      <form
        id="cubic-form"
        className="flex justify-between mx-[200px]"
        onSubmit={(event: React.SubmitEvent<HTMLFormElement>) => {
          event.preventDefault();

          if (a === 0) {
            alert("'a' value cannot be zero!");
            return;
          };

          onSave();
        }}>
        <div className="grid justify-items-center">
          <label htmlFor="a" className="mb-[10px] text-base">
            a-value:
          </label>
          <input
            className="w-[150px] h-[40px] border border-black/20 px-[8px] py-[5px] text-base"
            type="number"
            id="a"
            name="a"
            step="any"
            required
            value={a}
            onChange={(e) => setA(Number(e.target.value))}
          />
        </div>
        <div className="grid justify-items-center">
          <label htmlFor="b" className="mb-[10px] text-base">
            b-value:
          </label>
          <input
            className="w-[150px] h-[40px] border border-black/20 px-[8px] py-[5px] text-base"
            type="number"
            id="b"
            name="b"
            step="any"
            required
            value={b}
            onChange={(e) => setB(Number(e.target.value))}
          />
        </div>
        <div className="grid justify-items-center">
          <label htmlFor="c" className="mb-[10px] text-base">
            c-value:
          </label>
          <input
            className="w-[150px] h-[40px] border border-black/20 px-[8px] py-[5px] text-base"
            type="number"
            id="c"
            name="c"
            step="any"
            required
            value={c}
            onChange={(e) => setC(Number(e.target.value))}
          />
        </div>
        <div className="grid justify-items-center">
          <label htmlFor="d" className="mb-[10px] text-base">
            d-value:
          </label>
          <input
            className="w-[150px] h-[40px] border border-black/20 px-[8px] py-[5px] text-base"
            type="number"
            id="d"
            name="d"
            step="any"
            required
            value={d}
            onChange={(e) => setD(Number(e.target.value))}
          />
        </div>
        <div className="grid justify-items-center">
          <input
            className="w-[150px] h-[70px] text-[20px] font-semibold bg-[#2f72dc] text-white rounded transition-opacity duration-200 hover:opacity-80 cursor-pointer"
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