import React, { useState } from 'react'
import '../styles/NavBar.scss'

function NavBar() {
    const [menuToggled, setMenuToggled] = useState(false)

    const handleClick = () => {
        setMenuToggled(!menuToggled)
    }

    const handleMobileClick = () => {
        setMenuToggled(false)
    }

    return (
        <nav className="navbar">
            <div className="nav-logo">
                <a href="#/">
                    UWVR
                    <img
                        src="images/logos/uwvr-logo-transparent.png"
                        alt="UWVR Logo"
                        width="95px"
                        height="95px"
                    />
                </a>
            </div>
            <div className="nav-menu-container" onClick={handleMobileClick}>
                <ul className={menuToggled ? 'nav-menu expanded' : 'nav-menu'}>
                    <li className="nav-menu-item">
                        <a href="#/">Home</a>
                    </li>
                    <li className="nav-menu-item">
                        <a href="#/about">About</a>
                    </li>
                    <li className="nav-menu-item">
                        <a href="#/events">Events</a>
                    </li>
                    <li className="nav-menu-item">
                        <a href="#/projects">Projects</a>
                    </li>
                    <li className="nav-menu-item">
                        <a href="#/contact">Contact</a>
                    </li>
                </ul>
            </div>
            <div className="menu-btn" onClick={handleClick}>
                <i className={menuToggled ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
        </nav>
    )
}

export default NavBar
