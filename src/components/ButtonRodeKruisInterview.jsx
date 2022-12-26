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
          <h6>Rode kruis Ravels- Jaqueline Snijders- sociale hulpverlener (brugfiguur) </h6>
          <p className='text-primary mb-0 mt-3'>Wat is jullie visie op onderwijs en kansarme gezinnen?  </p>
          <p className='ms-20px'>We willen elk kind de kans geven om te ontwikkelen.  </p>

          <p className='text-primary mb-0 mt-3'>Waar denkt u dat er kansen en uitdagingen voor het onderwijs liggen?  Nu en toekomstgericht? </p>
          <p className='ms-20px'>Een kans is om te zien welke gezinnen er extra ondersteuning nodig hebben. En contact te leggen met deze gezinnen. Het is een uitdaging om deze gezinnen ook te kunnen bereiken. </p>

          <p className='text-primary mb-0 mt-3'>Ziet u naast kansen en uitdagingen ook bedreigingen voor het onderwijs? </p>
          <p className='ms-20px'>Er zijn steeds meer gezinnen die hulp nodig hebben. En ik zie dat er steeds minder hulp geboden kan worden door scholen/ onderwijs. Dit door het groeiend aantal te kort aan personeel, en de groeiende hulpvraag. </p>

          <p className='text-primary mb-0 mt-3'>Waar bestaat jullie samenwerking met onderwijs uit, welke concrete acties voeren jullie uit? </p>
          <p className='ms-20px'>Wij werken met brugfiguren. Deze kunnen ingezet worden op school bij kinderen die extra ondersteuning nodig hebben. Dit kan bij hen individueel, maar we kunnen ook bij hen thuis ondersteunen. Denk hierbij aan hulp bij het maken van huiswerk, lezen, enz. </p>
          <p className='ms-20px'>Wij hebben ook een taalhuis op de school. Hier komen volwassene anderstalige naar toe en krijgen hulp bij “hun Nederlandse taal” </p>

          <p className='text-primary mb-0 mt-3'>Wat is jullie verwachting van een school wanneer er een samenwerking wordt aangegaan? </p>
          <p className='ms-20px'>Transparantie en openheid.<br></br>
            Dat men ons mee zichtbaar maakt bij gezinnen die onze hulp zouden kunnen gebruiken.  <br></br>
            Samenwerken, meedenken.
          </p>

          <p className='text-primary mb-0 mt-3'>Wat mag de school van jullie verwachten wanneer er een samenwerking wordt aangegaan? </p>
          <p className='ms-20px'>X</p>

          <p className='text-primary mb-0 mt-3'>Kan het onderwijs jullie ook iets bieden? </p>
          <p className='ms-20px'>X</p>

          <p className='text-primary mb-0 mt-3'>Wat is de expertise van jullie die wij kunnen gebruiken voor het onderwijs?</p>
          <p className='ms-20px'>X</p>

          <p className='text-primary mb-0 mt-3'>Als u antwoord zou moeten geven op de vraag: “Welke rol kan een school (het onderwijs) hebben om ervoor te zorgen dat kansarme gezinnen zo optimaal mogelijk ondersteund worden waardoor het kind maximale ontwikkelingskansen krijgt.” en u bekijkt dit door de ogen van uw organisatie. Wat zou u daarop kunnen antwoorden? </p>
          <p className='ms-20px'>Het signaleren van mogelijke kansen bij gezinnen. Het actief willen werken aan gelijke kansen voor iedereen. Breed denken, oplossend denken. </p>

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