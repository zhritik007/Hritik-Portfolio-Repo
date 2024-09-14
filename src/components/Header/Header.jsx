import './Header.css';

function Header() {
  return (
    <header className="hero">
      <h1>Hi, I'm Hritik Singh</h1>
      <p>Ambitious Front-End Developer | React Enthusiast | Problem Solver</p>
      <div className="cta">
        <a href="#projects" className="btn">View Projects</a>
        <a href="#contact" className="btn">Contact Me</a>
      </div>
    </header>
  );
}

export default Header;
