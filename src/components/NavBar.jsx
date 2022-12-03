import React, { useState } from 'react';

export default function NavBar(props) {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const handleClick = (e) => {
        const name = e.target.getAttribute("name");
        props.onClick(name);

    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="d flex justify-content-center container-fluid">
                <div className="" id="navbarColor02">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <a
                                className="nav-link active"
                                name='home'
                                onClick={handleClick}
                                href="#">
                                Home
                                <span className="visually-hidden">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                href="#"
                                name='kansen'
                                onClick={handleClick}>
                                Kansen en bedreigingen</a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                onClick={handleClick}
                                name='uitdagingen'
                                href="#">
                                Uitdagingen</a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                name='helpendeHanden'
                                onClick={handleClick}
                                href="#">
                                Helpende handen</a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                name='conclusie'
                                onClick={handleClick}
                                href="#">
                                Conclusie</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}