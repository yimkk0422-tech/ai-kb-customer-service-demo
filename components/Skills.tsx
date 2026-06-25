import { skills } from "./portfolio-data";

export function Skills() {
  return (
    <section className="section split" id="stack">
      <div>
        <p className="section-kicker">Capabilities</p>
        <h2>Technical stack for AI product prototypes</h2>
        <p>
          From AI application prototypes to production-ready web projects, the
          stack covers frontend UX, backend APIs, database design, testing,
          deployment, and product storytelling.
        </p>
      </div>
      <div className="skill-cloud" aria-label="Skills">
        {skills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>
    </section>
  );
}
