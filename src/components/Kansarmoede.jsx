import React from 'react'
import AccordeionGeneratieArmoede from './AccordeonGeneratieArmoede'
import AccordeonMigratieArmoede from './AccordeonMigratieArmoede'
import AccordeonSituationeleArmoede from './AccordeonSituationeleArmoede'
import grafiek from './grafiekKansarmoede.png'


export default function Kansarmoede() {
    return (
        <div className='container'>

            <h1>Kansarmoede</h1>
            <p>Kansarmoede is een term die veel gelinkt wordt met kinderarmoede. Zowel de ‘Stichting Pelicano’ als ook ‘Het Agentschap Opgroeien’ beschrijft heel goed een aantal essentiële zaken als het om kansarmoede gaat. We hebben dit hieronder samengevat: </p>
            <p>Ze formuleren beide dat kansarmoede meer is dan inkomensarmoede. We beschouwen de situatie op meerdere levensdomeinen.  Mensen in kansarmoede worden beperkt in hun kansen om deel te nemen aan maatschappelijke thema’s zoals onderwijs, huisvesting en armoede. Het is zowel een materieel aspect alsook een immaterieel aspect (Gezinsinkomen en kansarmoede, z.d.) (Help ons kinderarmoede bestrijden - Stichting Pelicano, z.d.).</p>
            <p>Het is gebleken dat kansarme kinderen het zwaarder hebben op school. Doordat hun thuissituatie veel van hen vraagt, presteren ze minder goed op school. Ze schamen zich en zijn onzeker waardoor ze zich afsluiten van de buitenwereld (Help ons kinderarmoede bestrijden - Stichting Pelicano, z.d.).</p>
            <p>In armoede leven is iets wat iedereen kan overkomen. Er zijn wel verschillende groepen huishoudens die hier meer risico op lopen. Deze huishoudens hebben een relatief laag inkomen. Voorbeelden hiervan zijn: éénoudergezinnen, huishoudens met een migratieachtergrond, een laag opleidingsniveau en weinig werkervaring. Kinderen van huishoudens met deze kenmerken hebben vervolgens ook een hogere kans op armoede (Duurzame aanpak van kinderarmoede, 2022).  </p>

            <p class="text-danger">In deze podcast <a href="https://ondermamas.be/podcast/kinderarmoede/">(Klik hier)</a> vertelt ‘Stichting Pelicano’ over het initiatief om elk kind een mooie en warme toekomst te kunnen geven.</p>

            <img src={grafiek} alt='grafiekkansarmoede'></img>

            <p>Diederik Vancoppenolle, wetenschappelijk adviseur bij ’Het Agentschap Opgroeien’ vertelt dat er sinds 2019 een daling is waarbij jonge gezinnen in gunstigere omstandigheden leven dan de voorgaande jaren. Deze positieve trend blijft zich verderzetten in 2021, maar toch willen we de nadruk leggen op het feit dat er nog steeds 1 op 8 kinderen opgroeien in kansarmoede. 6% van de minderjarigen bevindt zich zelfs in een situatie van ernstige armoede met betrekking tot sociale en materiële uitsluiting (Gezinsinkomen en kansarmoede, z.d.).</p>
            <p>Voor alle recente cijfers inzage kansarmoede kan u de website van ‘Het Agentschap Opgroeien’ raadplegen <a href="https://www.opgroeien.be/cijfers-en-publicaties/gezinsinkomen-en-kansarmoede">(klik hier).</a> </p>

            <AccordeionGeneratieArmoede />
            <AccordeonMigratieArmoede />
            <AccordeonSituationeleArmoede />

            <div className='d-flex justify-content-center'>
            <iframe width="866" height="487" src="https://www.youtube.com/embed/EcJKwrRYinU" title="Week Tegen Kinderarmoede - een leeg bord, dat is pas echt schrikken (30s)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>





        </div>
    )
}
