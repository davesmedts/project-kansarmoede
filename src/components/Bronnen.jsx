import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default function Bronnen(args) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="secondary" onClick={toggle}>
        Bronnen
      </Button>
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>Bronnen</ModalHeader>
        <ModalBody>
          <ul>
            <li>Bron 1</li>
            <li>Bron 2</li>
            <li>Bron 3</li>
            <li>Bron 4</li>
            <li>Bron 5</li>
            <li>...</li>
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