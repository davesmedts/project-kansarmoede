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
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>Interview </ModalHeader>
        <ModalBody>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id veniam inventore at debitis perspiciatis corrupti dolores eius quam, veritatis hic ipsum alias dolorum. Quos quam perspiciatis blanditiis natus dolorem dolores. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores dolores obcaecati aliquam doloremque officia assumenda neque ab, iure consequuntur ratione nihil praesentium ipsam facilis? Quasi nihil cupiditate dolor facilis deleniti.
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