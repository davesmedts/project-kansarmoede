import React from 'react'
import logoOCMW from '../afbeeldingen/logoDesocialekaart.svg'
import AccordeonHelpendeHanden from './AccordeonHelpendeHanden'

export default function HelpendeHanden() {
    return (
        <div className='container'>
            <h1>Helpende handen</h1>
            <p>Kansarmoede kun je niet alleen oplossen. Partners zijn een onmisbare schakel in de strijd tegen kansarmoede. Wij zijn gaan zoeken naar partners die het onderwijs, ouders en kinderen kunnen ondersteunen. Ze zijn allen te vinden op de Sociale Kaart van België. <a href='https://www.desocialekaart.be/' target='_blank'>https://www.desocialekaart.be/</a> </p>
            <a href='https://www.desocialekaart.be/' target='_blank'><img src={logoOCMW} alt="logoDesocialekaart" /></a>
            <p>We hebben aan deze partners onder andere de volgende vragen gesteld:</p>
           <strong> <ul className='text-primary'>
                <li>Wat is jullie visie op onderwijs en kansarme gezinnen?  </li>
                <li>Waar denkt u dat er kansen en uitdagingen voor het onderwijs liggen?  Nu en toekomstgericht? </li>
                <li>Ziet u naast kansen en uitdagingen ook bedreigingen voor het onderwijs? </li>
                <li>Waar bestaat jullie samenwerking met onderwijs uit, welke concrete acties voeren jullie uit? </li>
                <li>Wat is jullie verwachting van een school wanneer er een samenwerking wordt aangegaan? </li>
                <li>Wat mag de school van jullie verwachten wanneer er een samenwerking wordt aangegaan? </li>
                <li>Kan het onderwijs jullie ook iets bieden?</li>
                <li>Wat is de expertise van jullie die wij kunnen gebruiken voor het onderwijs?</li>
                <li>Als u antwoord zou moeten geven op de vraag: “Welke rol kan een school (het onderwijs) hebben om ervoor te zorgen dat kansarme gezinnen zo optimaal mogelijk ondersteund worden waardoor het kind maximale ontwikkelingskansen krijgt.” en u bekijkt dit door de ogen van uw organisatie. Wat zou u daarop kunnen antwoorden? </li>
            </ul>
            </strong>

            <AccordeonHelpendeHanden />

        </div>
    )
}
