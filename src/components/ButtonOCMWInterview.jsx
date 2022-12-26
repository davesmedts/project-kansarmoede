import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default function Bronnen(args) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button className='mb-3' color="primary" onClick={toggle}>
        Klik hier voor het volledige interview
      </Button>
      <Modal className='modal-lg' isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>Interview </ModalHeader>
        <ModalBody>
          <p className='text-primary mb-0 mt-3'>Wat is jullie visie op onderwijs en kansarme gezinnen?  </p>
          <p className='ms-20px'>Elk kind moet in de mogelijkheid gesteld worden om op een kwaliteitsvolle manier toegang te krijgen tot onderwijs en dit met de nodige zorg en ondersteuning.</p>

          <p className='text-primary mb-0 mt-3'>Waar denkt u dat er kansen en uitdagingen voor het onderwijs liggen?  Nu en toekomstgericht? </p>
          <p className='ms-20px'>X</p>

          <p className='text-primary mb-0 mt-3'>Ziet u naast kansen en uitdagingen ook bedreigingen voor het onderwijs? </p>
          <p className='ms-20px'>Door het tekort aan onderwijzend personeel dreigt de nodige aandacht voor de meest kwetsbare kinderen nog te vergroten.   Door de ene crisis na de andere, dreigen steeds meer mensen in de armoede te geraken. Schoolrekeningen blijven onbetaald, kinderen in armoede nemen minder deel aan betalende activiteiten ….. Het is een uitdaging voor scholen om toch iedereen mee te krijgen.   Ook de zorgprofielen nemen toe,  haalbaar voor scholen om de nodige zorg en ondersteuning te blijven geven?  </p>

          <p className='text-primary mb-0 mt-3'>Waar bestaat jullie samenwerking met onderwijs uit, welke concrete acties voeren jullie uit? </p>
          <ul>
            <li>2 keer per jaar organiseert het OCMW het netwerk kinderarmoede. Alle scholen, instanties, organisaties  die op één of andere manier betrokken zijn bij kinderen, nemen deel; o.a.  afvaardiging van alle Ravelse scholen (zorgleerkrachten), de brugfiguren van Rode Kruis, de huiswerkbegeleiders,  verpleegkundige van Kind en gezin, sociale dienst OCWM, afvaardiging lokaal bestuur, de dienst jeugd en vrije tijd ……. De bedoeling is mekaar beter te leren kennen (werkt drempelverlagend om contact met elkaar op te nemen), elkaars werking beter te leren kennen, te onderzoeken waar zijn raakvlakken en kunnen we elkaar versterken, waar zijn leemtes en op welke manier kunnen we daar mee om gaan……… </li>
            <li>Samen met de scholen zijn de onderwijscheques tot stand gekomen en dit om de betaalbaarheid van het onderwijs voor iedereen te garanderen. </li>
            <li>•	Het OCMW beschikt over een participatiefonds inzake kinderarmoede. Dit is een subsidie die kan aangewend worden om iedereen te mogelijkheid te geven om te participeren.  Bijv. het lidgeld van jeugdverenigingen  kan hiervan betaald worden maar ook een uitstap met het gezin, of een tussenkomst voor bos of zeeklassen, de logopedist, een uitstap met school, ...   </li>
            <li>•	Om elk kind de mogelijkheid te geven om digitaal mee te zijn, krijgen alle leerlingen van het 5de leerjaar van het lokaal bestuur, een laptop die zowel in de klas als thuis mag gebruikt worden.  </li>
          </ul>


          <p className='text-primary mb-0 mt-3'>Wat is jullie verwachting van een school wanneer er een samenwerking wordt aangegaan? </p>
          <p>(zorg)Leerkrachten zijn vaak de eersten die iets merken van mogelijke problemen thuis. (lege brooddozen, kinderen met concentratieproblemen na een stressvol weekend … )   Bovendien is de school vaak een veilige en toegankelijke plek om hulpvragen te stellen.  (Voor velen is het jammer genoeg nog steeds een hoge drempel om naar het OCMW te gaan.)  Wij hopen dat als de scholen bepaalde signalen krijgen, zij de ouders actief stimuleren om de stap naar het OCMW te zetten. Zij kunnen zelfs als vertrouwenspersoon, samen met de ouders naar het OCMW komen.  </p>

          <p className='text-primary mb-0 mt-3'>Wat mag de school van jullie verwachten wanneer er een samenwerking wordt aangegaan? </p>
          <ul>
            <li>In het netwerk armoede worden bepaalde problemen aangekaart (bijv. nood aan vorming rond een bepaald thema) Vanuit het lokaal bestuur wordt dan onderzocht op welke manier dit kan aangeboden worden. </li>
            <li>Bij doorverwijzing of melding van probleemsituaties gaan we samen met de school op zoek naar de meest gepaste oplossing.  </li>
            <li>•	Tijdens infomomenten van de school kan er steeds gevraagd worden dat een maatschappelijk assistente van het OCMW aanwezig is en dit om de algemene werking van het OCMW toe te lichten, om de onderwijscheques, participatiefonds, …. meer kenbaar te maken, om de ouders de gelegenheid te geven een hulpvraag te stellen. </li>
          </ul>

          <p className='text-primary mb-0 mt-3'>Kan het onderwijs jullie ook iets bieden? </p>
          <p className='ms-20px'>Wij hopen steeds op een actieve en constructieve samenwerking.  </p>

          <p className='text-primary mb-0 mt-3'>Wat is de expertise van jullie die wij kunnen gebruiken voor het onderwijs?</p>
          <p className='ms-20px'>X</p>

          <p className='text-primary mb-0 mt-3'>Als u antwoord zou moeten geven op de vraag: “Welke rol kan een school (het onderwijs) hebben om ervoor te zorgen dat kansarme gezinnen zo optimaal mogelijk ondersteund worden waardoor het kind maximale ontwikkelingskansen krijgt.” en u bekijkt dit door de ogen van uw organisatie. Wat zou u daarop kunnen antwoorden? </p>
          <p>Elke kind is een uniek persoon met sterktes en beperkingen. Een kind zou deze in een schoolomgeving optimaal moeten kunnen ontwikkelen. Dit is een belangrijke taak voor de school.  Maar veel kinderen hebben een rugzak waarmee de school rekening kan houden, maar niet altijd een oplossing aan kan bieden. Hier heeft de school een sterke en actieve signaal- en doorverwijsfunctie te vervullen. </p>

        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Sluiten
          </Button>{' '}
        </ModalFooter>
      </Modal>
    </div>
  );
}