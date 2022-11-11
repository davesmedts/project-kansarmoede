import React from 'react'
import { Button } from 'reactstrap'

export default function Footer() {
    return (
        <div className='position-relative bottom-0 start-0'>
            <div className='d-flex justify-content-between bg-primary'>
                <p>Auteurs: Silvie Devos</p>
                <Button
                    color="secondary"
                    size=""
                    className="align-self-end"
                >
                    Bronnen
                </Button>
            </div>
        </div>
    )
}
