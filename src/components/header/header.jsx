// import { Link } from "react-router-dom"
import { Link, animateScroll as scroll } from 'react-scroll';

import './header.css'

export function Header(){
    const scrollToTop = () => {
        scroll.scrollToTop();
      };

    return(
        <nav className="menu">
            <header className="menu-content">
                <Link className="Logo-menu" to={"/"} onClick={scrollToTop}><img src="icons/deo.png" alt="Logo" />DEO</Link>
                <ul className="menu-items">
                    <li className="items"><Link to="home" smooth={true} duration={500} offset={-100}>Home</Link></li>
                    <li className="items"><Link to="info" smooth={true} duration={500} offset={-100}>Info</Link></li>
                    <li className="items"><Link to="proyectos" smooth={true} duration={500} offset={-100}>Proyectos</Link></li>
                    <li className="items"><Link to="footer" smooth={true} duration={500}>Contactos</Link></li>
                </ul>
            </header>
                
        </nav>
    )
}