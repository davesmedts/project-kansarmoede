import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default function Bronnen(args) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="primary" onClick={toggle}>
      Meer informatie over het onderzoek...
      </Button>
      <Modal className='modal-lg' isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>Het ‘Rosenthal effect” </ModalHeader>
        <ModalBody>
          <p>Rosenthal nam intelligentietesten af bij leerlingen van een basisschool en vertelde de leerkrachten dat iemands intellectuele vermogen aan de hand van deze test kon worden voorspeld. Hij wees willekeurig 20% van de leerlingen aan als leerlingen van de toekomst en gaf deze namen door aan de leerkrachten. Hij vertelde de leerkrachten dat zij van deze leerlingen opmerkelijke prestaties konden verwachten. In werkelijkheid was dit helemaal niet zo. De leerkrachten echter, leefden wel in deze veronderstelling. Heel wat maanden verder werd de test nogmaals afgenomen.</p>
          <p>En wat bleek: Het IQ van de zogeheten veelbelovende leerlingen van de testgroep was opmerkelijk toegenomen ten opzichte van de anderen leerlingen. Deze veelbelovende leerlingen boekten ook in vergelijking met zijn klas meer vooruitgang.</p>
          <p>De resultaten van zijn onderzoek waren onder andere dat mensen die positieve verwachtingen hebben van hun kinderen, cliënten of leerlingen het leek dat:</p>
          <ul>
            <li>om deze groep een warmer sociaal emotioneel klimaat werd gecreëerd,</li>
            <li>de groep meer feedback kreeg over hun eigen prestatie,</li>
            <li>de groep meer informatie gaf en een hogere eis aan hen werd gesteld,</li>
            <li>de groep meer gelegenheid gaf tot het vragen stellen en antwoorden krijgen.
              De leerkrachten gaven dus in het onderzoek de leerlingen waarvan zij een hogere verwachting hadden, letterlijk onbewust meer onderwijs!
            </li>
          </ul>
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