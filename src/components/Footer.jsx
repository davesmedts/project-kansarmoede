import React from 'react'
import Bronnen from './Bronnen';

export default function Footer() {
    return (
        <footer id='footer' className='bg-warning'>
            <ul className='auteurs'>
                <li>Steffi Brughmans</li>
                <li>Esmé Corbijn</li>
                <li>Silvie Devos</li>
                <li>Marijke Van der Moeren</li>
            </ul>
            <p>Wegwijs in de samenleving</p>
            <Bronnen />
        </footer>
    )
}