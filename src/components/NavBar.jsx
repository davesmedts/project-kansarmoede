// import React, { useState } from 'react';

import { useState } from "react"

export default function NavBar(props) {
    // const [isOpen, setIsOpen] = useState(false);
    // const toggle = () => setIsOpen(!isOpen);

    const [homeClass, setHomeClass] = useState("nav-link active")
    const [kansArmoedeClass, setKansArmoedeClass] = useState("nav-link")
    const [uitdagingenClass, setUitdagingenClass] = useState("nav-link")
    const [helpendeHandenClass, setHelpendeHandenClass] = useState("nav-link")
    const [conclusieClass, setConclusieClass] = useState("nav-link")
    const [praktijktipsClass, setPraktijktipsClass] = useState("nav-link")

    const handleClick = (e) => {
        const name = e.target.getAttribute('name');

        setHomeClass("nav-link")
        setKansArmoedeClass("nav-link")
        setUitdagingenClass("nav-link")
        setHelpendeHandenClass("nav-link")
        setConclusieClass("nav-link")
        setPraktijktipsClass("nav-link")

        switch (name) {
            case 'home': setHomeClass("nav-link active")
                break;
            case 'Kansarmoede': setKansArmoedeClass("nav-link active")
                break;
            case 'uitdagingen': setUitdagingenClass("nav-link active")
                break;
            case 'helpendeHanden': setHelpendeHandenClass("nav-link active")
                break;
            case 'conclusie': setConclusieClass("nav-link active");
                break;
            case 'praktijktips': setPraktijktipsClass("nav-link active");
                break;
        }

        props.onClick(name);

    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="d flex justify-content-center container-fluid">
                <div className="" id="navbarColor02">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <span
                                className={homeClass}
                                name='home'
                                onClick={handleClick}
                            >
                                Inleiding
                                <span className="visually-hidden">(current)</span>
                            </span>
                        </li>
                        <li className="nav-item">
                            <span
                                className={kansArmoedeClass}
                                name='Kansarmoede'
                                onClick={handleClick}>
                                Kansarmoede</span>
                        </li>
                        <li className="nav-item">
                            <span
                                className={uitdagingenClass}
                                onClick={handleClick}
                                name='uitdagingen'
                            >
                                Kansarmoede in het onderwijs</span>
                        </li>
                        <li className="nav-item">
                            <span
                                className={helpendeHandenClass}
                                name='helpendeHanden'
                                onClick={handleClick}
                            >
                                Helpende handen</span>
                        </li>
                        <li className="nav-item">
                            <span
                                className={praktijktipsClass}
                                name='praktijktips'
                                onClick={handleClick}
                            >
                                Praktijktips</span>
                        </li>
                        <li className="nav-item">
                            <span
                                className={conclusieClass}
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