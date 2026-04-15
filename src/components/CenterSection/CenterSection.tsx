import { useState } from "react";
import heroImg from "../../assets/Points_PG_Dark.png";
import "./styles.css";

function CenterSection() {
  const yearValues = [2019, 2020, 2021, 2022];
  const [salaryValue, setSalaryValue] = useState(null);
  const [yearValue, setYearValue] = useState(null);

  const handleSalaryChange = (e) => {
    const rawValue = e.target.value.replace(/\D/g, "");
    const formattedValue = Number(rawValue).toLocaleString();
    setSalaryValue(formattedValue);
  };

  const handleYearChange = (e) => {
    setYearValue(e.target.value);
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
            {yearValues.map((year) => (
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
}

export default CenterSection;
