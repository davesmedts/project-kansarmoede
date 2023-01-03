import React, { useState } from 'react'
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';
import logoWelzijnszorg from '../afbeeldingen/logoWelzijnszorg.png'
import jordy from '../afbeeldingen/jordy.png'
import logoCLB from '../afbeeldingen/logoCLB.png'
import logoRodeKruis from '../afbeeldingen/logoRodeKruis.svg'
import pdf from '../data/WelzijnszorgMail.pdf'
import ButtonCLBInterview from './ButtonCLBInterview'
import ButtonRodeKruisInterview from './ButtonRodeKruisInterview'
import ButtonOCMWInterview from './ButtonOCMWInterview'
import logoOCMW from '../afbeeldingen/logoOCMW.png'


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
      <h5>Onze Partners:</h5>

      <Accordion open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId="1">Welzijnszorg</AccordionHeader>
          <AccordionBody accordionId="1">
            <a href="https://welzijnszorg.be/onderwijs" target="_blank" rel="noopener noreferrer">
              <img id='logoWelzijnszorg' className='imgCentered' src={logoWelzijnszorg}></img>
            </a>
            <p>Van alle partners die wij hebben gevonden via de Sociale Kaart en vervolgens hebben gecontacteerd, kunnen wij concluderen dat ‘Welzijnszorg’ een onmisbare sociale partner voor leerkrachten is. Zij bieden educatieve materialen aan die de leerkrachten kunnen gebruiken om kansarmoede bespreekbaar te maken in de klas.  </p>
            <p>Welzijnszorg is een VZW die zich inzet in België. We hebben contact gehad met Kusum Mertens. Helaas was afspreken erg lastig dus heeft ze ons doorverwezen naar de website waar veel informatie te vinden was. Deze informatie hebben we uitgespit en hier is het volgende uitgekomen.</p>
            <p>Welzijnszorg is een organisatie die ernaar ijvert zich krachtig in te zetten zodat iedereen zijn basisrechten kan uitvoeren, dat middelen eerlijk worden verdeeld en iedereen (dezelfde) kansen krijgt.  </p>
            <p>Ze zetten in op verschillende gebieden, en bieden zo ook ondersteuning aan scholen. Ze bieden materialen aan die men als school kan bestellen. Deze materialen helpen om leerlingen en studenten bewust te maken van armoede.</p>
            <p>Hun campagnes zijn gericht op kleuters, lagere school en het secundair. Speciaal voor kleuters hebben ze een campagne met Jordy. Jordy is een jongetje dat symbool staat voor alle kleuters in armoede. De verhalen van Jordy geven je een kijkje in zijn dagelijkse leven. Jordy groeit op in een kwetsbaar gezin. </p>
            <p>De kleuterschool is een eerste moment om armoede te doorbreken. Het is belangrijk dat kleuters al vroeg leren wat armoede betekent en hoe armoede voor uitsluiting kan zorgen. Zich inleven in een wereld die voor hun wellicht nog onbekend is, is niet makkelijk maar hier liggen wel kansen voor leerkrachten. </p>
            <p>Doordat dit zeer interessante materialen zijn, zullen Steffi en Silvie dit in januari voorstellen aan Sint-Eduardus Merksem, de school waar zij werken aangezien hier veel kinderen les volgen die in kansarmoede leven. </p>

            <a href={pdf} target='_blank'>
              <button className='btn btn-primary mb-3'>klik hier voor de mailwisseling (bestand)</button>
            </a>

            <p>Benieuwd naar Jordy? <a href='https://welzijnszorg.be/jordy' target='_blank'>Klik hier</a>.</p>


            <a href='https://welzijnszorg.be/jordy' target='_blank'>
              <img className='imgCentered mb-5' id='jordy' src={jordy} alt="" />
            </a>
            <p>Jordy zoekt geld. (2021). Welzijnszorg. https://welzijnszorg.be/jordy</p>

            <p>In dit filmpje wordt duidelijk wat Welzijnszorg is en doet: </p>
            <div className='d-flex mb-3 justify-content-center'>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/qOxzXjY62I0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="2">CLB</AccordionHeader>
          <AccordionBody accordionId="2">
            <a href="https://onderwijs.vlaanderen.be/nl/ouders/ondersteuning-en-begeleiding/leerlingenbegeleiding/centrum-voor-leerlingenbegeleiding-clb" target="_blank" rel="noopener noreferrer">
              <img id='logoCLB' className='imgCentered mb-2' src={logoCLB} ></img>
            </a>
            <p>De focus ligt voor het CLB vooral op kansenbevordering. Dit is iets wat is opgenomen in de <a href="http://www.vclbdewisselantwerpen.be/pdf/Mission%20Statement.pdf" target="_blank" rel="noopener noreferrer">
              mission statement
            </a> van vrij CLB. Op macroniveau willen ze blijven signaleren. Kansenbevordering wordt zichtbaar gemaakt op alle niveaus van de organisatie: personeelsbeleid, leiderschap, verdeling van mensen/middelen, toegankelijkheid van het CLB.</p>
            <p>Elk CLB heeft een werkgroep kansenbevordering waar ten minste 1 lid van elk team aan deelneemt en dit mee uitdraagt binnen hun team. Deze wordt aangestuurd door een beleidsondersteuner binnen de organisatie die ook op beleidsniveau alle overlegstructuren mee opvolgt.  </p>
            <p>Kansenbevordering is een erg complex begrip. Er zijn erg veel mechanismen die armoede en ongelijke kansen veroorzaken en bestendigen, die buiten ons bereik liggen. Vooral dan de factoren op macroniveau. </p>

            <p>Per school wordt door de SES kenmerken, doelen bepaald en daaraan worden initiatieven gelinkt. Dit kan op een school zijn, maar zeker ook overkoepelend per regio. Daarnaast wordt er vooral vraag gestuurd gewerkt. Een school kan het CLB vragen om mee te ondersteunen in overlegmomenten. Dit is individueel verschillend en vaak ook vraag gestuurd. Scholen zijn vaak erg goed op de hoogte van de doelen van het CLB. De verwachting die CLB naar school toe heeft is niet meer dan dat de school rekening houdt met de doelen van het CLB. Bij het stoten op wederkerende uitdagingen, worden er acties aan gekoppeld. Omgekeerd zal het CLB ook melden als bepaalde problematieken in een regio of school meermaals worden gemeld. Samen nadenken, acties opvolgen en evalueren is het werk van individuele medewerkers, van teams, van beleid en dus van de hele organisatie binnen het onderwijs. Alle niveaus werken hier op elkaar in en versterken elkaar.</p>
            <ButtonCLBInterview />
            
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="3">Rode kruis Vlaanderen: Brugfiguren project</AccordionHeader>
          <AccordionBody accordionId="3">
            <a href="https://www.rodekruis.be/" target="_blank" rel="noopener noreferrer">
              <img id='logoCLB' className='imgCentered mb-2' src={logoRodeKruis} ></img>
            </a>

            <p>Vaak hebben kinderen uit kwetsbare of allochtone gezinnen het moeilijk op school en hebben ze nood aan extra begeleiding. </p>
            <p>Om kinderen te ondersteunen in hun schoolsituatie heeft het Rode kruis Vlaanderen het brugfigurenproject opgericht. Wij spraken hierover met Jaqueline Snijders- sociale hulpverlener (Brugfiguur). </p>
            <p>Aangezien zij ons niet op alle vragen van antwoord kon voorzien, hebben we de website zelf grondig uitgespit.</p>
            <p>Het Brugfiguren project is extra begeleiding die scholen gratis kunnen aanvragen. Het zijn vrijwilligers die helpen een brug te vormen tussen school en thuis. Ze helpen bij huiswerk, klasactiviteiten, lezen, rekenen, … Dit doen ze voor maatschappelijk kwetsbare kinderen, bijvoorbeeld kinderen van wie ouders gescheiden zijn, overleden zijn maar ook bijvoorbeeld aan kinderen met een handicap, anderstalige nieuwkomers of kinderen bij wie de Nederlandse taal in het gezin nog niet/ onvoldoende machtig is. </p>
            <p>De Brugfiguren willen met dit project kwetsbare gezinnen ondersteunen door de kloof tussen het gezin en de school te verkleinen.  Zij bieden hun hulp individueel of in groep aan, thuis of op school. Zij bieden gezinnen meer kansen. Het is voor een school de uitdaging om gezinnen te ‘herkennen’ en te bereiken die te maken hebben met kansarmoede. Zij verwachten van school openheid en transparantie met daarbij bekendheid geven aan het project. Als een school actief werkt aan gelijke kansen voor iedereen (door breed te denken en oplossingsgericht bezig te zijn) denken zij dat kansarme gezinnen zo optimaal mogelijk worden geholpen.</p>
            <p>Ook hier wordt aangegeven dat een bedreiging echt het te kort aan onderwijspersoneel is. En de vraag naar hulp voor kansarme gezinnen groeit.</p>

            <ButtonRodeKruisInterview />


            <p>
              Wil je ook ondersteuning op jouw school? 
              <a href="https://www.rodekruis.be/wat-doen-we/sociale-activiteiten/ondersteuning-schoolsituatie/op-jouw-school/" target="_blank" rel="noopener noreferrer"> Ondersteuning op jouw school. (z.d.). </a>
            </p>



            <p>
              Volg een dagje mee met een brugfiguur: 
              <a href="https://www.2doc.nl/documentaires/2017/10/je-mag-altijd-bij-me-komen.html" target="_blank" rel="noopener noreferrer"> Documentaire, Je mag altijd bij me komen. (2017, 3 oktober).</a>
            </p>

          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="4">OCMW: Sociale dienst</AccordionHeader>
          <AccordionBody accordionId="4">
            <a href="https://www.ravels.be/huis-van-het-kind-ravels" target="_blank" rel="noopener noreferrer">
              <img id='logoOCMW' className='imgCentered mb-2' src={logoOCMW} ></img>
            </a>

            <p>In elke gemeente kan men terecht bij het OCMW voor ondersteuning. In elke gemeente is dit iets anders georganiseerd. Meestal bij de sociale dienst. </p>
            <p>Wij zijn in gesprek gegaan met Anita Nooyens. Zij werkt bij het OCMW van de gemeente Ravels als hoofd van de sociale dienst. Ze is betrokken bij verschillende projecten in de gemeente. Met name het netwerk armoede.</p>
            <p>Deze projecten komen er omdat de visie van OCMW is, dat elk kind in de mogelijkheid gesteld moet worden om op een kwaliteitsvolle manier toegang te krijgen tot onderwijs, dit met de nodige zorg en ondersteuning.</p>
            <p>Door het tekort aan onderwijzend personeel dreigt de nodige aandacht voor de meest kwetsbare kinderen te vergroten. Door de ene crisis na de andere, dreigen steeds meer mensen in de armoede te geraken. Schoolrekeningen blijven onbetaald, kinderen in armoede nemen minder deel aan betaalde activiteiten. Het is een uitdaging voor scholen om toch iedereen mee te krijgen. </p>
            <p>Ook de zorgprofielen nemen toe. Is het haalbaar voor scholen om de nodige zorg en ondersteuning te blijven geven? Dit is iets wat het OCMW als bedreiging ziet.</p>
            <p>(Zorg)leerkrachten zijn vaak de eerste die iets merken van mogelijke problemen thuis. (Lege brooddozen, kinderen met concentratieproblemen na een stressvol weekend, onverzorgde kinderen, stille teruggetrokken kinderen etc.) </p>
            <p>Het doel om het OCMW te betrekken in het onderwijs is om ouders zich te laten helpen via het OCMW, hopen wij dat ze gemakkelijker uit de financiële vicieuze cirkel geraken waardoor dit ook een positief effect zal hebben op de schoolresultaten van de kinderen. Ouders hebben hierdoor minder geldzorgen waardoor ze de kinderen optimaler kunnen ondersteunen.</p>
            <p>De organisatie hoopt dat als de scholen bepaalde signalen krijgen, zij de ouders actief stimuleren om de stap naar het OCMW te zetten. </p>
            <p>Een onderwijsprofessional van de school kan als vertrouwenspersoon, samen met de ouders naar het OCMW komen, aangezien het voor velen jammer genoeg nog steeds een hoge drempel is, om de hulp in te schakelen van het OCMW. Leerkrachten en school kunnen deze drempel verkleinen. </p>
            <p>Ook kan het OCMW bijvoorbeeld aanwezig zijn tijdens infomomenten voor ouders op school, waarbij de organisatie kan uitleggen wat ze doen, hulpvragen beantwoorden etc.</p>

            <ButtonOCMWInterview />

          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="5">Partnerschap met OUDERS</AccordionHeader>
          <AccordionBody accordionId="5">

            <p>Deze partner staat niet op de sociale kaart maar vinden we minstens zo belangrijk. We hebben doorheen ons project steeds gemerkt dat kansarmoede een grote impact heeft op de schoolresultaten van kinderen. Daarom is het zo belangrijk een samenwerking aan te gaan met ouders. Ze blijven de eerste opvoeders en zijn een brug tussen thuissituatie en de schoolomgeving. U kunt lezen in de verschillende onderdelen signaleren, ondersteunen en stimuleren waarom deze partner zo belangrijk is.</p>
            <p>Hoe kunnen wij werken aan een rijk partnerschap met ouders? En waarom is dat zo belangrijk voor de kinderen? Prof. Onderwijskunde Ruben Vanderlinde en Katrien Van Laere keken mee in de kleuterklas en school van juf Jelke. Bekijk hieronder de video: "Betrokken ouders, vanaf de kleuterklas: zo lukt het wel". <a href="https://www.klasse.be/134979/hoe-bouw-je-rijke-relatie-met-ouders/" target="_blank" rel="noopener noreferrer">Het artikel kan je hier lezen.</a>
            </p>
            <div className='d-flex mb-3 justify-content-center'>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/eO4Alwe6HEc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <p>Benieuwd hoe jij scoort op je relaties met ouders? <a href="https://cdn.klasse.be/wp/wp-content/uploads/2018/08/KenP_Zelfscan4_ouderbetrokkenheid-1.pdf?utm_source=Klasse+-+Nieuwsbrieven&utm_campaign=359deba612-nieuwsbrief+Gelijke+Kansen+2018_09_19_COPY_01&utm_medium=email&utm_term=0_b661ff641f-359deba612-418309833" target="_blank" rel="noopener noreferrer">Doe de zelfscan</a></p>


          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
