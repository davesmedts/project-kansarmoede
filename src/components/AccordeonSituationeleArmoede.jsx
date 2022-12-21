import React, {useState} from 'react'
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
  } from 'reactstrap';

export default function AccordeonGeneratieArmoede() {
    const [open, setOpen] = useState();
    const toggle = (id) => {
      if (open === id) {
        setOpen();
      } else {
        setOpen(id);
      }
    };
  
    return (
      <div className='mb-4'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ut aliquid veritatis, laborum dignissimos quisquam quas corrupti tempore unde exercitationem nobis praesentium! Magni quod minus inventore earum asperiores incidunt deserunt?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur mollitia unde inventore fuga, officiis voluptatum labore esse possimus error dicta eveniet aspernatur, iure, deserunt excepturi quibusdam vel veniam nam nobis.</p>

        <Accordion open={open} toggle={toggle}>
          <AccordionItem>
            <AccordionHeader targetId="1">Lees meer over situatinele armoede </AccordionHeader>
            <AccordionBody accordionId="1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum eum perferendis veritatis exercitationem voluptatibus dicta laudantium accusantium officiis sapiente repellendus. Facilis assumenda excepturi reiciendis. Commodi placeat praesentium nihil facilis pariatur!
            </AccordionBody>
          </AccordionItem>
        </Accordion>
      </div>
    );}
