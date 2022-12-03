import React, { useState, useRef } from 'react'
import { Card, CardHeader, CardBody, CardTitle, CardText, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import AntwoordButton from './AntwoordButton';

export default function Vraag(props) {
    const vraag = props.content.vraag;
    const antwoorden = props.content.antwoorden;

    const [modal, setModal] = useState(false);
    const [evaluation, setEvaluation] = useState(false);

    let resultaat = evaluation ? 'Juist!' : 'Dat is helaas fout!'

    const toggle = (isCorrect) => {
        setEvaluation(isCorrect)
        setModal(!modal);
    }
    const closeModal = (event) => {
        setModal(!modal);
    }

    let juistAntwoord;
    antwoorden.forEach(element => {
        if (element.isCorrect) {
            juistAntwoord = element.antwoord;
        }
    });

    return (
        <div className='d-flex justify-content-center'>
            <Card
                className="my-2 w-75"
                color="warning"
                outline
                style={{
                    // width: '18rem'
                }}
            >
                <CardHeader>
                    Trivia
                </CardHeader>
                <CardBody>
                    <CardTitle tag="p">
                        {vraag}
                    </CardTitle>
                    <CardText id='antwoorden' className='d-flex'>

                        {antwoorden.map((antwoord) => (
                            <AntwoordButton naam={antwoord.antwoord} isCorrect={antwoord.isCorrect} onClick={toggle} />
                        ))}

                        <Modal isOpen={modal} toggle={toggle} {...props}>
                            <ModalHeader toggle={toggle}>Antwoord</ModalHeader>
                            <ModalBody>
                                <p>{resultaat}</p>
                                <p>Het juiste antwoord is {juistAntwoord}</p>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={closeModal}>
                                    Sluiten
                                </Button>{' '}
                            </ModalFooter>
                        </Modal>

                    </CardText>
                </CardBody>
            </Card>
        </div>
    )
}
