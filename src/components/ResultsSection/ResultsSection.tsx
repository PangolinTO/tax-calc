import "./styles.css";

const ResultsSection: React.FC = () => {
  return (
    <section id="results">
      <div id="values">
        <svg className="icon" role="presentation" aria-hidden="true">
          <use href="/icons.svg#social-icon"></use>
        </svg>
        <h2>Connect with us</h2>
        <p>Join the Vite community</p>
      </div>
    </section>
  );
};

export default ResultsSection;
