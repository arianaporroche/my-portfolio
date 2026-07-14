// src/components/NavBar/NavBar.tsx

import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const navRef = useRef<HTMLElement>(null);

    // Close menu when clicking outside
    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (navRef.current && !navRef.current.contains(e.target as Node)) {
                setMenuOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Close menu on route change
    const closeMenu = () => setMenuOpen(false);

    return (
        <nav ref={navRef} className={menuOpen ? 'nav-open' : ''}>
            <NavLink to="/" className="nav-logo" onClick={closeMenu}>
                Ariana Porroche
            </NavLink>

            {/* Hamburger button — only visible on small screens */}
            <button
                className="nav-hamburger"
                aria-label="Abrir menú de navegación"
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen(prev => !prev)}
            >
                <span className={`hamburger-bar bar-top ${menuOpen ? 'open' : ''}`} />
                <span className={`hamburger-bar bar-mid ${menuOpen ? 'open' : ''}`} />
                <span className={`hamburger-bar bar-bot ${menuOpen ? 'open' : ''}`} />
            </button>

            <ul className={`nav-links ${menuOpen ? 'nav-links--open' : ''}`}>
                <li>
                    <NavLink
                        to="/proyectos"
                        className={({ isActive }) => isActive ? 'nav-link nav-link--active' : 'nav-link'}
                        onClick={closeMenu}
                    >
                        Proyectos
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/sobre-mi"
                        className={({ isActive }) => isActive ? 'nav-link nav-link--active' : 'nav-link'}
                        onClick={closeMenu}
                    >
                        Sobre mí
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/contacto"
                        className={({ isActive }) => isActive ? 'nav-link nav-link--active' : 'nav-link'}
                        onClick={closeMenu}
                    >
                        Contacto
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;
