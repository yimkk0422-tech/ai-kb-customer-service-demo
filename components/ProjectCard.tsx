type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  bullets: string[];
  stack: string[];
  accent: string;
};

export function ProjectCard({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  return (
    <article className={`project-card ${featured ? "feature" : ""}`}>
      <MockScreen accent={project.accent} title={project.title} />
      <div className="project-body">
        <p className="tag">{project.category}</p>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <ul>
          {project.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
        <div className="stack-list">
          {project.stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    </article>
  );
}

function MockScreen({ accent, title }: { accent: string; title: string }) {
  return (
    <div className={`mock-screen mock-${accent}`}>
      <div className="screen-toolbar">
        <span />
        <span />
        <span />
      </div>
      <div className="screen-title">{title}</div>
      <div className="screen-chart" />
      <div className="screen-table">
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}
