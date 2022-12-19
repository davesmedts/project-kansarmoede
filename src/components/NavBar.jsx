// import React, { useState } from 'react';

export default function NavBar(props) {
    // const [isOpen, setIsOpen] = useState(false);
    // const toggle = () => setIsOpen(!isOpen);

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
                            <span
                                className="nav-link active"
                                name='home'
                                onClick={handleClick}
                                >
                                Inleiding
                                <span className="visually-hidden">(current)</span>
                            </span>
                        </li>
                        <li className="nav-item">
                            <span
                                className="nav-link"
                                                                name='Kansarmoede'
                                onClick={handleClick}>
                                Kansarmoede</span>
                        </li>
                        <li className="nav-item">
                            <span
                                className="nav-link"
                                onClick={handleClick}
                                name='uitdagingen'
                                >
                                Kansarmoede in het onderwijs</span>
                        </li>
                        <li className="nav-item">
                            <span
                                className="nav-link"
                                name='helpendeHanden'
                                onClick={handleClick}
                                >
                                Helpende handen</span>
                        </li>
                        <li className="nav-item">
                            <span
                                className="nav-link"
                                name='conclusie'
                                onClick={handleClick}
                                >
                                Conclusie</span>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}