import { ArrowRight, Sparkles } from "lucide-react";
import { Contact } from "@/components/Contact";
import { Header } from "@/components/Header";
import { HeroVisual } from "@/components/HeroVisual";
import { Process } from "@/components/Process";
import { ProjectCard } from "@/components/ProjectCard";
import { Skills } from "@/components/Skills";
import { featuredProjects } from "@/components/portfolio-data";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <HeroVisual />
          <div className="hero-content">
            <p className="eyebrow">
              <Sparkles size={16} />
              AI products, data tools, and full-stack demos
            </p>
            <h1 id="hero-title">
              Building AI ideas into usable, demo-ready products.
            </h1>
            <p className="hero-copy">
              A focused portfolio for showcasing AI applications, prototypes,
              and production-minded full-stack projects. Each project is framed
              around a real workflow, clear product value, and a technical
              implementation path.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">
                View AI Projects
                <ArrowRight size={18} />
              </a>
              <a className="button secondary" href="#contact">
                Contact
              </a>
            </div>
          </div>
        </section>

        <section className="section intro-grid" aria-label="Portfolio summary">
          <div>
            <p className="section-kicker">Focus</p>
            <h2>Portfolio website for AI project presentation</h2>
          </div>
          <p>
            This website is designed for GitHub, LinkedIn Featured links,
            personal branding, and job applications. It highlights practical AI
            projects with product context, stack details, and measurable
            implementation scope.
          </p>
        </section>

        <section className="section stats" aria-label="Portfolio metrics">
          <article>
            <strong>6</strong>
            <span>Featured AI project concepts</span>
          </article>
          <article>
            <strong>12</strong>
            <span>Core technical skills</span>
          </article>
          <article>
            <strong>Full-stack</strong>
            <span>From product idea to deployed demo</span>
          </article>
        </section>

        <section className="section" id="projects">
          <div className="section-heading">
            <p className="section-kicker">Selected work</p>
            <h2>AI project portfolio</h2>
            <p>
              These projects are written in a resume-friendly structure:
              problem, product function, stack, and implementation highlights.
            </p>
          </div>

          <div className="project-grid">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                featured={index === 0}
                key={project.slug}
                project={project}
              />
            ))}
          </div>
        </section>

        <Skills />
        <Process />
        <Contact />
      </main>
    </>
  );
}
