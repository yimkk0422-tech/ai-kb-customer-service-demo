import { processSteps } from "./portfolio-data";

export function Process() {
  return (
    <section className="section process" id="process">
      <div className="section-heading">
        <p className="section-kicker">How I work</p>
        <h2>From AI idea to demo-ready product</h2>
      </div>
      <div className="process-grid">
        {processSteps.map((step) => (
          <article key={step.number}>
            <span>{step.number}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
