import Link from "next/link"

const Header = () => {
  return (
    <header className="s-header">
      <div className="row s-header__inner width-sixteen-col">
        <div className="s-header__block">
          <div className="s-header__logo">
            <a className="logo" href="index.html">
              <img src="images/logo.svg" alt="Homepage" />
            </a>
          </div>
          <Link className="s-header__menu-toggle" href="#0"><span>Menu</span></Link>
        </div>
        <nav className="s-header__nav">
          <ul className="s-header__menu-links">
            <li><Link href="about.html">About</Link></li>
            <li><Link href="services.html">Services</Link></li>
            <li><Link href="blog.html">Journal</Link></li>
            <li><Link href="contact.html">Contact</Link></li>
          </ul>
          <div className="s-header__contact">
            <a href="contact.html" className="btn btn--primary s-header__contact-btn">Let's Work Together</a>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header