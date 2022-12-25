import React, { useState } from 'react'
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';
import logoWelzijnszorg from '../afbeeldingen/logoWelzijnszorg.png'
import jordy from '../afbeeldingen/jordy.png'
import logoCLB from '../afbeeldingen/logoCLB.png'


export default function AccordeonGeneratieArmoede() {
  const [open, setOpen] = useState();
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  return (
    <div className='mb-4'>
      <h5>Onze Partners:</h5>

      <Accordion open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId="1">Welzijnszorg</AccordionHeader>
          <AccordionBody accordionId="1">
            <img className='partnersLogo' src={logoWelzijnszorg}></img>
            <p>Van alle partners die wij hebben gevonden via de Sociale Kaart en vervolgens hebben gecontacteerd, kunnen wij concluderen dat ‘Welzijnszorg’ op nummer 1 staat. Zij bieden educatieve materialen aan die de leerkrachten kunnen gebruiken om kansarmoede bespreekbaar te maken in de klas.  </p>
            <p>Welzijnszorg is een VZW die zich inzet in België. We hebben contact gehad met Kusum Mertens. <strong>(klik hier voor de mailwisseling (bestand))</strong> Helaas was afspreken erg lastig dus heeft ze ons doorverwezen naar de website waar veel informatie te vinden was. Deze informatie hebben we uitgespit en hier is het volgende uitgekomen.</p>
            <p>Welzijnszorg is een organisatie die ernaar ijveren zich krachtig in te zetten zodat iedereen zijn basisrechten kan uitvoeren, dat middelen eerlijk worden verdeeld en iedereen (dezelfde) kansen krijgt.  </p>
            <p>Ze zetten in op verschillende gebieden, en bieden zo ook ondersteuning aan scholen. Ze bieden materialen aan die men als school kan bestellen. Deze materialen helpen om leerlingen en studenten bewust te maken van armoede.</p>
            <p>Hun campagnes zijn gericht op kleuters, lagere school en het secundair. Speciaal voor kleuters hebben ze een campagne met Jordy. Jordy is een jongetje dat symbool staat voor alle kleuters in armoede. De verhalen van Jordy geven je een kijkje in zijn dagelijkse leven. Jordy groeit op in een kwetsbaar gezin. </p>
            <p>De kleuterschool is een eerste moment om armoede te doorbreken. Het is belangrijk dat kleuters al vroeg leren wat armoede betekent en hoe armoede voor uitsluiting kan zorgen. Zich inleven in een wereld die voor hun wellicht nog onbekend is, is niet makkelijk maar hier liggen wel kansen voor leerkrachten. </p>
            <p>Doordat dit zeer interessante materialen zijn, zullen Steffi en Silvie dit in Januari voorstellen aan Sint-Eduardus Merksem, de school waar zij werken aangezien hier veel kinderen les volgen die in kansarmoede leven. </p>
            <p>Benieuwd naar Jordy? <a href='https://welzijnszorg.be/jordy' target='_blank'>Klik hier</a>.</p>
            <a href='https://welzijnszorg.be/jordy' target='_blank'><img id='jordy' src={jordy} alt="" /></a>
            <p>In dit filmpje wordt duidelijk wat Welzijnszorg is en doet: </p>
            <div>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/qOxzXjY62I0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <p>Onderwijs tegen armoede. (z.d.). Welzijnszorg. https://welzijnszorg.be/onderwijs</p>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="2">CLB</AccordionHeader>
          <AccordionBody accordionId="2">
            <img className='partnersLogo' src={logoCLB}></img>
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
