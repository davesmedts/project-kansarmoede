import React from 'react'
import Bronnen from './Bronnen';

export default function Footer() {
    return (
        <footer id='footer' className='bg-warning'>
            <p>Auteurs: Silvie Devos</p>
            <p>Wegwijs in de samenleving</p>
            <Bronnen />
        </footer>
    )
}