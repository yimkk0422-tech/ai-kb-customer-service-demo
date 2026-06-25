import { Github, Linkedin, Mail } from "lucide-react";

export function Contact() {
  return (
    <section className="section contact" id="contact">
      <div>
        <p className="section-kicker">Available for projects</p>
        <h2>Need an AI portfolio, prototype, or full-stack demo?</h2>
        <p>
          Replace this area with your real email, GitHub, LinkedIn, and project
          demo links. The structure is ready for a public portfolio or GitHub
          profile feature.
        </p>
      </div>
      <div className="contact-actions">
        <a className="button primary" href="mailto:hello@example.com">
          <Mail size={18} />
          hello@example.com
        </a>
        <a className="button secondary" href="https://github.com/" target="_blank" rel="noreferrer">
          <Github size={18} />
          GitHub
        </a>
        <a className="button secondary" href="https://linkedin.com/" target="_blank" rel="noreferrer">
          <Linkedin size={18} />
          LinkedIn
        </a>
      </div>
    </section>
  );
}
