import "./Header.css";

function HeaderPage() {
  return (
    <header className="header-container">
      <p className="name">Melvin</p>
      <nav className="tag-box">
        <a className="tags" href="#home">Home</a>
        <a className="tags" href="#about">About</a>
        <a className="tags" href="#projects">Projects</a>
        <a className="tags" href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default HeaderPage;
