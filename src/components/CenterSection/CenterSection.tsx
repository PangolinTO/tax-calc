import heroImg from "../../assets/Points_PG_Dark.png";
import "./styles.css";

function CenterSection() {
  return (
    <section id="center">
      <div className="hero">
        <img src={heroImg} className="base" alt="" />
      </div>
      <div>
        <h1>Get started</h1>
        <p>
          Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
        </p>
      </div>
      <button className="submit" onClick={() => {}}>
        Submit
      </button>
    </section>
  );
}

export default CenterSection;
