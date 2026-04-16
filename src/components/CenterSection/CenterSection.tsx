import { useForm, type SubmitHandler } from "react-hook-form";
import heroImg from "@assets/Points_PG_Dark.png";
import "./styles.css";

type FormData = {
  salaryValue: number;
  yearValue: number;
};

const CenterSection: React.FC = () => {
  const yearOptions: number[] = [2019, 2020, 2021, 2022];
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      salaryValue: Number("Enter Your Salary..."),
      yearValue: yearOptions[0],
    },
    mode: "onChange",
  });
  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("data: ");
    console.log(data);
    if (errors) {
      console.log("error: ");
      console.log(errors);
    }
  };

  return (
    <section id="center">
      <div className="hero">
        <img src={heroImg} className="base" alt="" />
      </div>
      <div>
        <h1>Tax Calculator</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="number"
            step="0.01"
            placeholder="Enter Your Salary..."
            {...register("salaryValue", {
              required: true,
              valueAsNumber: true,
            })}
            aria-invalid={errors.salaryValue ? "true" : "false"}
          />
          <select
            {...(register("yearValue"), { required: true })}
            aria-invalid={errors.yearValue ? "true" : "false"}
          >
            <option value="" disabled selected>
              Select Year
            </option>
            {yearOptions.map((year) => (
              <option key={year}>{year}</option>
            ))}
          </select>
          <button type="submit" className="submit">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default CenterSection;
