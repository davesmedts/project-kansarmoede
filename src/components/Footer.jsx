import React from 'react'
import { Button } from 'reactstrap'

export default function Footer() {
    return (
        <div className='fixed-bottom'>
            <div>
                <Button
                    color="warning"
                    size=""
                    className="align-self-end"
                >
                    Bronnen
                </Button>
            </div>
        </div>
    )
}
