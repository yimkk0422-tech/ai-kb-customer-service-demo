export function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="AI Project Portfolio home">
        <span className="brand-mark">AI</span>
        <span>Project Portfolio</span>
      </a>
      <nav className="nav" aria-label="Primary navigation">
        <a href="#projects">Projects</a>
        <a href="#stack">Stack</a>
        <a href="#process">Process</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}
