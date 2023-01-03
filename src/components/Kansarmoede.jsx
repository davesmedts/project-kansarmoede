import React from 'react'
import AccordeionGeneratieArmoede from './AccordeonGeneratieArmoede'
import AccordeonMigratieArmoede from './AccordeonMigratieArmoede'
import AccordeonSituationeleArmoede from './AccordeonSituationeleArmoede'
import grafiek from './grafiekKansarmoede.png'
import ArmoedeTabs from './ArmoedeTabs'
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';



export default function Kansarmoede() {
    return (
        <div className='container'>

            <h3>Kansarmoede</h3>
            <p>Kansarmoede is een term die veel gelinkt wordt met kinderarmoede. Zowel de ‘Stichting Pelicano’ als ook ‘Het Agentschap Opgroeien’ beschrijft heel goed een aantal essentiële zaken als het om kansarmoede gaat. We hebben dit hieronder samengevat: </p>
            <p>Ze formuleren beiden dat kansarmoede meer is dan inkomensarmoede. We beschouwen de situatie op meerdere levensdomeinen.  Mensen in kansarmoede worden beperkt in hun kansen om deel te nemen aan maatschappelijke thema’s zoals onderwijs, huisvesting en armoede. Het is zowel een materieel aspect alsook een immaterieel aspect (Gezinsinkomen en kansarmoede, z.d.) (Help ons kinderarmoede bestrijden - Stichting Pelicano, z.d.).</p>
            <p>Het is gebleken dat kansarme kinderen het zwaarder hebben op school. Doordat hun thuissituatie veel van hen vraagt, presteren ze minder goed op school. Ze schamen zich en zijn onzeker waardoor ze zich afsluiten van de buitenwereld (Help ons kinderarmoede bestrijden - Stichting Pelicano, z.d.).</p>
            <p>In armoede leven is iets wat iedereen kan overkomen. Er zijn wel verschillende groepen huishoudens die hier meer risico op lopen. Deze huishoudens hebben een relatief laag inkomen. Voorbeelden hiervan zijn: éénoudergezinnen, huishoudens met een migratieachtergrond, een laag opleidingsniveau en weinig werkervaring. Kinderen van huishoudens met deze kenmerken hebben vervolgens ook een hogere kans op armoede (Duurzame aanpak van kinderarmoede, 2022).  </p>

            <p class="text-primary">In volgende podcast vertelt ‘Stichting Pelicano’ over het initiatief om elk kind een mooie en warme toekomst te kunnen geven.</p>
            <a href="https://ondermamas.be/podcast/kinderarmoede/" target='_blank'>
                <button className='btn btn-primary mb-4'>podcast 'Stichting Pelicano'</button>
            </a>

            <img className='imgCentered imgGrafiek' src={grafiek} alt='grafiekkansarmoede'></img>
            <p>Vlaanderen. (z.d.-a). Armoede indicatoren op kind niveau. https://www.opgroeien.be/cijfers-en-publicaties/gezinsinkomen-en-kansarmoede</p>

            <p>Diederik Vancoppenolle, wetenschappelijk adviseur bij ’Het Agentschap Opgroeien’ vertelt dat er sinds 2019 een daling is waarbij jonge gezinnen in gunstigere omstandigheden leven dan de voorgaande jaren. Deze positieve trend blijft zich verderzetten in 2021, maar toch willen we de nadruk leggen op het feit dat er nog steeds 1 op 8 kinderen opgroeien in kansarmoede. 6% van de minderjarigen bevindt zich zelfs in een situatie van ernstige armoede met betrekking tot sociale en materiële uitsluiting (Gezinsinkomen en kansarmoede, z.d.).</p>
            <p>Voor alle recente cijfers inzage kansarmoede kan u de website van ‘Het Agentschap Opgroeien’ raadplegen <a href="https://www.opgroeien.be/cijfers-en-publicaties/gezinsinkomen-en-kansarmoede" target="_blank">(klik hier).</a> </p>

            <h2>Verschillende soorten van armoede </h2>
            <p>Er zijn verschillende soorten van armoede. <strong>Generatiearmoede, migratiearmoede en situationele armoede.</strong> </p>
            <p>Bij <u>generatiearmoede</u> gaat het om families waarbinnen de armoede en daarmee gepaard gaande uitsluiting van generatie op generatie wordt doorgegeven. Hierbij spreken we over een langdurige armoede. Bij <u>migratiearmoede</u> zijn het gezinnen die in armoede leven. Hierbij vormt hun migratieachtergrond een belemmerende factor om uit armoede te geraken. <u>Situationele armoede</u> ontstaat bij een specifieke (levens)gebeurtenis (Duurzame aanpak van kinderarmoede, 2022). </p>


            <ArmoedeTabs />


            <div className='d-flex justify-content-center'>
                <iframe width="866" height="487" src="https://www.youtube.com/embed/EcJKwrRYinU" title="Week Tegen Kinderarmoede - een leeg bord, dat is pas echt schrikken (30s)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>





        </div>
    )
}
