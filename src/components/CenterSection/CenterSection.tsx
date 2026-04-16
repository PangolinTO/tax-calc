import { useContext } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { DataContext, type RequestData } from "@contexts/DataContext";
import ApiService from "@utils/ApiService";
import { yearOptions } from "@utils/constants";
import heroImg from "@assets/Points_PG_Dark.png";
import "./styles.css";

const CenterSection: React.FC = () => {
  const { setData, setRequestData, setIsLoading } = useContext(DataContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RequestData>({
    defaultValues: {
      salary: Number("Enter Your Salary..."),
      year: yearOptions[0],
    },
    mode: "onChange",
  });
  const onSubmit: SubmitHandler<RequestData> = async (data) => {
    setIsLoading(true);
    setRequestData(data);
    if (data.year) {
      const result = await ApiService.submitData(data.year);
      setData(result);
    }
    setIsLoading(false);
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
            {...register("salary", {
              required: true,
              valueAsNumber: true,
            })}
            aria-invalid={errors.salary ? "true" : "false"}
          />
          <select
            {...(register("year"), { required: true })}
            aria-invalid={errors.year ? "true" : "false"}
          >
            <option value="" disabled>
              Select Year
            </option>
            {yearOptions.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
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
