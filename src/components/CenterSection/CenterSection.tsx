import { useState } from "react";
import heroImg from "@assets/Points_PG_Dark.png";
import "./styles.css";

const CenterSection: React.FC = () => {
  const [salaryValue, setSalaryValue] = useState<number>(0);
  const [yearValue, setYearValue] = useState<number>(0);
  const yearOptions: number[] = [2019, 2020, 2021, 2022];

  const handleSalaryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSalaryValue(Number(e.target.value));
  };

  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setYearValue(Number(e.target.value));
  };

  return (
    <section id="center">
      <div className="hero">
        <img src={heroImg} className="base" alt="" />
      </div>
      <div>
        <h1>Tax Calculator</h1>
        <form>
          <input
            id="salary"
            type="number"
            value={salaryValue}
            onChange={handleSalaryChange}
            placeholder="Enter Your Salary..."
          />
          <select name="team" value={yearValue} onChange={handleYearChange}>
            <option value="" disabled selected>
              Select Year
            </option>
            {yearOptions.map((year) => (
              <option key={year}>{year}</option>
            ))}
          </select>
          <button className="submit" onClick={() => {}}>
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default CenterSection;
