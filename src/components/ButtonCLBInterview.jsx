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
        <p><u>CLB Kempen- Maaike Van der Moeren – Sociaal Verpleegkundige </u></p>
        <p><strong>Contact via mail: 1ste gesprek over (kans) armoede en het CLB:</strong></p>
        <p>De focus ligt voor het CLB vooral op: Kansenbevordering. Dit is iets wat is opgenomen in de mission statement van vrij CLB. Op macro-niveau kunnen wij blijven signaleren, mee blijven duwen. Op micro en mesoniveau kunnen we wel een verschil mee maken. Kansenbevordering wordt zichtbaar gemaakt op alle niveaus van de organisatie: personeelsbeleid, leiderschap, verdeling van mensen/middelen, toegankelijkheid van het CLB, ... Elke CLB heeft een werkgroep kansenbevordering maar ten minste 1 lid van elk team aan deelneemt en dit mee uitdraagt binnen hun team. Deze wordt aangestuurd door een beleidsondersteuner binnen de organisatie die ook op beleidsniveau alle overlegstructuren mee opvolgt.  </p>
        <p>Per school wordt aan de hand van de schoolfoto's (= documenten, bepaald door de SES kenmerken) doelen bepaald en daaraan worden initiatieven gelinkt. Dit kan op een school zijn, maar zeker ook overkoepelend per regio. Daarnaast wordt er vooral vraag gestuurd gewerkt. Een school kan het CLB vragen om mee te ondersteunen in overlegmomenten, denktanken, ... dit is dus erg individueel verschillend en vaak ook vraag gestuurd. Scholen zijn vaak erg goed op de hoogte van hun eigen schoolfoto. De verwachting die daaraan gekoppeld wordt, is dat er rekening mee gehouden wordt. En dat bij het stoten op wederkerende uitdagingen, er acties aan gekoppeld worden. Omgekeerd zal het CLB ook melden als bepaalde problematieken in een regio of school meermaals worden gemeld. Samen nadenken, acties opvolgen en evalueren is een werk van individuele medewerkers, van teams, van beleid en dus van de hele organisatie binnen het onderwijs. Alle niveaus werken hier op elkaar in en versterken elkaar. </p>

        <p><strong>Bijkomende vragen die we gesteld hebben ter verduidelijking tijdens een 2de contactmoment:</strong></p>

        <p className='text-primary mb-0 mt-3'>Waar denkt u dat er kansen en uitdagingen voor het onderwijs liggen? Nu en toekomstgericht?   </p>
          <p className='ms-20px'>Vooral blijven samenwerken, op zoek gaan naar passende hulp, individueel gericht kijken en denken in mogelijkheden... </p>

          <p className='text-primary mb-0 mt-3'>Ziet u naast kansen en uitdagingen ook bedreigingen voor het onderwijs?  </p>
          <p className='ms-20px'>Persoonlijk zie en hoor ik dat het voor sommige leerkrachten lastig is om met een diverse klas om te gaan. Er wordt veel gevraagd van een leerkracht en ondersteuning kan niet altijd (meteen)  worden gegeven. </p>

          <p className='text-primary mb-0 mt-3'>Waar bestaat jullie samenwerking met onderwijs uit, welke concrete acties voeren jullie uit? </p>
          <p className='ms-20px'>Leerlingen, ouders, leerkrachten, en directie kunnen bij ons terecht voor hulp. Deze hulp is heel veelzijdig, zoals bijvoorbeeld achterhalen waarom een leerling niet goed mee kan komen in de klas of helpen van een leerling wanneer het gedrag van een leerling niet prettig is voor de klas/ leerkracht of zichzelf. Maar ook medische onderzoeken voert het CLB uit.  </p>

          <p className='text-primary mb-0 mt-3'>Wat is de expertise van jullie die wij kunnen gebruiken voor het onderwijs?  </p>
          <p className='ms-20px'>Verschillende disciplines zijn werkzaam binnen het CLB. Veel kennis in huis, we gaan mee met de tijd dus altijd up-to-date informatie overdracht. Daarbij kennen wij de sociale kaart goed met daarbij ook andere organisaties / initiatieven om waar nodig te kunnen doorverwijzen  </p>


          <p className='text-primary mb-0 mt-3'>Als u antwoord zou moeten geven op de vraag: “Welke rol kan een school (het onderwijs) hebben om ervoor te zorgen dat kansarme gezinnen zo optimaal mogelijk ondersteund worden waardoor het kind maximale ontwikkelingskansen krijgt.” en u bekijkt dit door de ogen van uw organisatie. Wat zou u daarop kunnen antwoorden?  </p>
          <p className='ms-20px'>Signalen niet wegwuiven. Maak bespreekbaar wanneer er vermoedens zijn van kansarmoede. Het CLB heeft zoveel in huis, dat passende hulp altijd geboden kan worden. Laat ouders ook weten wat het CLB allemaal kan en doet. En dat het CLB altijd handelt vanuit het kind. We willen het goed doen voor het kind om kansen voor iedereen te creëren.   </p>
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