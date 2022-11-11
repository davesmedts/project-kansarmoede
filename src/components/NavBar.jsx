import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
} from 'reactstrap';

export default function NavBar(...args) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Wegwijs in de samenleving</a>
                <div className="" id="navbarColor02">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Home
                                <span className="visually-hidden">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Kansen en bedreigingen</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Uitdagingen</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Helpende handen</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Conclusie</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Bronnen</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
