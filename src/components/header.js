import React from 'react';
import './header.css'; // Assurez-vous de créer un fichier CSS pour styliser votre header

const Header = () => {
    return (
        <header>
            <div className="container">
                <h1>Julien Medina</h1>
                <nav>
                    <ul>
                        <li><a href="#about">À propos</a></li>
                        <li><a href="#projects">Projets</a></li>
                        <li><a href="#skills">Compétences</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;