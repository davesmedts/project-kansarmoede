import React from 'react'
import AccordeonKansen from './AccordeonKansen'

export default function Kansen() {
    return (
        <div className='container'>

            <h1>Kansen</h1>
            <p>In armoede leven is iets wat iedereen kan overkomen. Er zijn wel verschillende groepen huishoudens die hier meer risico op lopen. Deze huishoudens hebben een relatief laag inkomen. Voorbeelden hiervan zijn: éénoudergezinnen, huishoudens met een migratieachtergrond, een laag opleidingsniveau en weinig werkervaring. Kinderen van huishoudens met deze kenmerken hebben vervolgens ook een hogere kans op armoede.  </p>

            <h2>Verschillende soorten van armoede</h2>
            <p>Er zijn verschillende soorten van armoede. Generatiearmoede, migratiearmoede en situationele armoede.
                Bij generatiearmoede gaat het om families waarbinnen de armoede en daarmee gepaard gaande uitsluiting van generatie op generatie wordt doorgegeven. Hierbij spreken we over een langdurige armoede. Migratiearmoede zijn het gezinnen die in armoede leven. Hierbij vormt hun migratieachtergrond een belemmerende factor om uit armoede te geraken. Situationele armoede ontstaat bij een specifieke (levens)gebeurtenis.
            </p>

            <AccordeonKansen />

        </div>
    )
}
