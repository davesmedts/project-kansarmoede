import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default function Bronnen(args) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="primary" onClick={toggle}>
      Meer informatie over het proportioneel universalisme...
      </Button>
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>Proportioneel universalisme </ModalHeader>
        <ModalBody>
         <p>Proportioneel universalisme is een uitgangspunt van de universele dienstverlening dat steunt op de mensen- en kinderrechten. Het vertrekt vanuit de diversiteit in de samenleving en verschil aan noden. (Proportioneel universalisme in de praktijk elk gezin telt, z.d.)</p>
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