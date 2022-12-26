import React, { useState } from 'react'
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
            <p>Inleidende tekst?</p>

      <Accordion open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId="1">Het verschil in startpositie terugdringen</AccordionHeader>
          <AccordionBody accordionId="1">
            <p>Vanuit onderzoek wordt aangetoond dat kinderen uit allochtone en kansarme gezinnen regelmatig geconfronteerd worden met een ongelijke startpositie. Deze blijft doorwegen op hun onderwijstraject. Het schoolsysteem kan de ongelijke startpositie niet opvangen waardoor we niet kunnen werken naar gelijke kansen om de eindstreep te behalen. Het verstrekt de sociale ongelijkheden. Maatschappelijk kwetsbaarheid bij kinderen en jongeren bevestigen dit. Voor veel kinderen en jongeren is de school een moeilijk parcours vol hindernissen dat uitsluit en kwetst. Het is net het tegenovergestelde van wat er bedoeld is (Het perspectief van maatschappelijke kwetsbare kinderen en jongeren in het onderwijsdebat: What do you think?, 2012).</p>
            <p>Het opleidingsniveau van de ouders is een sterke voorspeller van onderwijssucces en kan een bedreiging vormen voor de toekomst van hun kinderen. Armoede heeft ook een sterke invloed op de onderwijskansen van een kind. Een kenmerk om onderwijsachterstanden van een kind te voorspellen, zijn gezinnen die gebruik maken van schuldhulpbemiddeling. Als er thuis geen educatieve materialen en boeken aanwezig zijn, heeft dit invloed op de kansen van het kind, in het onderwijs. Ook de lockdowns inzage Covid19 lieten zien dat de aanwezige materialen in de thuissituatie een grote rol spelen, kijkend naar onderwijskansen. Gezinnen met een lager inkomen hadden veel meer moeite met het volgen van online lessen, aangezien ze vaak geen laptop, internet of een rustige werkplek ter beschikking hadden. Ook het niet hebben van financiële middelen om bijvoorbeeld bijles te voorzien, is een materiele factor. </p>
            <p>Verder zijn er nog andere factoren binnen het gezin, die invloed hebben op de onderwijskansen van kinderen en alsook een bedreiging vormen. Denk bijvoorbeeld aan het taalgebruik binnen het gezin dat weinig of veel aansluit bij de schooltaal. Ook de hoeveelheid aan taal en voorlezen is essentieel. Het al dan niet aanbieden van educatieve uitstappen en de mate van betrokkenheid van ouders of verzorgers bij het onderwijs hebben ook een enorme invloed.</p>
            <p>De hierboven genoemde bedreigingen zorgen er mede voor dat deze kinderen die in het onderwijs starten, met een verschillende startpositie en ongelijke kansen te maken krijgen. (PISA Nederland – “Programme for International Student Assessment”, z.d.). </p>
            <p>Om ook deze kinderen een eerlijke en gelijke startpositie te geven, zullen we oog moeten hebben voor de bedreigingen die hierboven genoemd zijn en in oplossingen moeten denken. Hoe kunnen we deze kinderen en hun ouders helpen? Een juiste stimulans zal nodig zijn. Denk bijvoorbeeld aan financiële educatie van ouders/kinderen of aan het helpen en motiveren van ouders om de juiste instanties te vinden en deze vooral te durven/kunnen benaderen. </p>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="2">Ouderbetrokkenheid</AccordionHeader>
          <AccordionBody accordionId="2">
            <p>Doordat ouders hun kinderen motiveren, kennis aanleren of gedrag beïnvloeden kan ouderbetrokkenheid een positief effect hebben op de prestaties op school. Ouders kunnen ook leerstof meepikken die ze samen zien met hun kind. Deze leerstof kan ook een gespreksonderwerp worden thuis. </p>
            <p>Er zijn ook wat nadelen verbonden aan ouderbetrokkenheid. De ongelijke thuissituaties van leerlingen kunnen niet gecompenseerd worden in het onderwijs. Kansarme leerlingen hebben geen plek om in alle rust te werken of kunnen geen beroep doen op de begeleiding van ouders aangezien zij bezig zijn met overleven of zelf over onvoldoende kennis beschikken. </p>
            <p>Ouderbetrokkenheid kan de verschillen tussen leerlingen op basis van hun familiale achtergrond versterken. (K. De Witte, 2022) Het blijkt vanuit de observationele data dat ouderbetrokkenheid positief in onderling verband staat met de sociaaleconomische status. Het geeft aan dat het bevorderen van ouderbetrokkenheid voor kansarme kinderen grote voordelen kan opbrengen dan voor kansrijke kinderen. Kansarme kinderen vertrekken van een lager basisniveau van ouderbetrokkenheid. De hoge opportuniteitskosten is een ander nadeel van ouderbetrokkenheid, dit in de vorm van tijdsinvestering. Het is tijd die niet voor andere doeleinden kan gebruikt worden (Witte & Maldonado, 2022).</p>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="3">Ontwikkeling stimuleren</AccordionHeader>
          <AccordionBody accordionId="3">
            <p>Het inzetten op een positieve ontwikkeling bij kinderen is van groot belang in het onderwijs. Hiermee kunnen we de ontwikkeling stimuleren van de cognitieve vaardigheden en de levensvaardigheden of ook wel de ‘doe vaardigheden’ genoemd. (Zoals geheugen, concentratie, plannen, kunnen, zelfbeheersing, zelfvertrouwen, sociaal gedrag, probleemoplossend vermogen, emotieregulatie, hulp inschakelen…) Hierdoor kunnen mensen beter omgaan met moeilijke situaties zoals armoede en worden de sociaaleconomische kansen vergroot (Duurzame aanpak van kinderarmoede, 2022). </p>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="4">Financiële voorlichting</AccordionHeader>
          <AccordionBody accordionId="4">
            <p>Helaas is armoede vaak een intergenerationeel probleem (generatiearmoede). Vaak is het moeilijk om wanneer je opgroeit in armoede er later ‘als je groot bent’ uit zien te komen. Het is daarom belangrijk om op school aandacht te hebben voor financiële voorlichting (educatie). Zo worden de leerlingen bekender met waarde van geld. Daarbij wordt het hen duidelijk dat wat je verdiend (inkomsten) in verhouding moet staan tot wat je uitgeeft. Financiële educatie kan een inleiding zijn tot het bespreekbaar maken van kansengelijkheid, armoede, gelijkheid etc. Vanuit het Mattheus effect willen we kinderen ervan bewust maken dat ze opzoek kunnen gaan naar ondersteuning. Als ze hiervan bewust zijn, is het naar later toe gemakkelijker om hun weg naar ondersteuning te vinden. Als leerkracht hierover in gesprek gaat in de klas, wil het niet zeggen dat een leerkracht op zoek moet gaan naar leerlingen die in armoede leven. Het is de bedoeling dat door er over te praten met elkaar de leerkracht kan laten merken aan de leerlingen die er wel mee te maken hebben, dat ze niet alleen zijn. Het is voor deze leerlingen fijn dat er een sfeer gecreëerd wordt waarin ze merken dat ze niet alleen zijn. Ze voelen ze veilig genoeg om over hun eigen situatie te praten (Crowds, z.d.). </p>
            <p>Er komen steeds meer projecten die gebaseerd zijn op armoede en financiële educatie. Deze projecten zijn er niet alleen voor kinderen die hiermee te maken hebben maar ook juist voor de welgestelde gezinnen. Zij weten vaak niet wat armoede is en weten niet veel over sparen of over hoe je een budget moet beheren.  De projecten zijn veel gebaseerd op het bewustmaken van (kans)armoede en de waarden van geld leren kennen (Defesche, 2022). Een goed project van één van onze partners is het project van Welzijnszorg, genaamd ‘Jordy’, waar de leerkrachten in de klas rond kunnen werken.  Dit project kan klasdoorbrekend gebruikt worden. Dit laat kleuters kennismaken met het jongetje Jordy. Jordy groeit op in een kwetsbaar gezin. Zijn belevenissen geven kleuters meer inzichten in armoede en de kans op sociale uitsluiting. (Kleuteronderwijs, z.d.-b). </p>
            <p>Maar ook financiële educatie voor ouders is belangrijk. Verwijs ouder(s) door naar juiste instanties die gericht zijn op het helpen bij financiën. Op de website van armoedebestrijding kunnen ouders terecht voor individuele hulpvragen. Hier staan veel partners (helpende handen) beschreven waar je voor uiteenlopende zaken terecht kunt (Individuele hulp – Steunpunt tot bestrijding van armoede, z.d.). </p>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="5">Stress vermindering</AccordionHeader>
          <AccordionBody accordionId="5">
            <p>Een kans in het onderwijs is om een natuurspeelplaats voor kinderen te integreren op school. Promoot en stimuleer dit als school.  Door buiten te spelen kunnen kinderen stress kwijtraken. Ze kunnen daar spelen, ontmoeten, ontladen. Een park om tot rust te komen door te wandelen heeft ook een positief effect op ouders en kinderen en verlaagd het stressniveau. Het zijn gratis activiteiten (Duurzame aanpak van kinderarmoede, 2022)</p>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="6">Meedoen makkelijker maken</AccordionHeader>
          <AccordionBody accordionId="6">
            <p>Een belangrijke democratische uitdaging is armoedebestrijding (Armoedebestrijding in België in 6 vragen, 2022).  We wensen dat kansarme mensen meer zeggenschap hebben in onze maatschappij. Maatschappelijke participatie is iets wat ouders (en kinderen) wel willen maar vaak niet kunnen of durven. Dit vanwege bijvoorbeeld schaamte, de drang naar overleven...</p>
            <p> Een onderwijsinstelling is een kleine maatschappij op zich. Vanuit het democratische principe is het de verantwoordelijkheid van de leerkracht en andere onderwijsprofessionals om ervoor te zorgen dat ook kansarme kinderen en ouders mee kunnen participeren aan, en hun steentje kunnen bijdragen tot, het vormen van de school.   </p>
            <p>Armoede zorgt ervoor dat mensen en voornamelijk kinderen niet vaak mee kunnen doen bij alledaagse activiteiten. Dit kan opgelost worden door een vrijetijdspas aan te bieden en dit te stimuleren om te gebruiken. Zo kunnen kinderen goedkoper of gratis deelnemen aan allerlei culturele-, jeugd-, sport-, -vormings-, en andere activiteiten. Als mensen kunnen deelnemen, zorgt dit ervoor dat ze niet (meer) worden uitgesloten en kunnen ze het sociaal contact onderhouden. Net deze sociale contacten doen mensen goed. Ook zorgen deze activiteiten er net voor dat de kansen op het werk worden vergroot, denk aan het volgen van een cursus of stress verminderen door te sporten. Verder zorgt dit voor een positief effect op de thuissfeer en de hoeveelheid aandacht voor de ontwikkeling van de kinderen. Door stress te verminderen, stelt dit mensen in staat om weer vooruit te kijken en betere beslissingen te nemen.</p>
            <p>Om situationele kansarmoede aan te pakken, armoede die ontstond bij een specifieke (levens)gebeurtenis, dient er een goede samenwerking te zijn tussen gemeenten, de onderwijsinstelling, jeugdgezondheidszorg en partners uit het dorp of gemeente zoals sport, cultuur en welzijnsorganisaties.</p>
            <p>Ook is het heel belangrijk om de schaamte te verbreken. Dit voorkomt sociale uitsluiting en het verergeren van problemen. Hierbij is het cruciaal dat er een goed contact is met kinderdagverblijven, onderwijsinstellingen, jeugdgezondheidszorg, welzijnsorganisaties en gelijkaardige mensen in de buurt (Duurzame aanpak van kinderarmoede, 2022).</p>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="7">Ervaringsverhalen</AccordionHeader>
          <AccordionBody accordionId="7">
            <p>In het onderstaande filmpje kun je luisteren naar het verhaal van Chantal. Zij vertelt hoe onderwijs haar geholpen heeft in haar strijd tegen kansarmoede. Het filmpje is al van wat jaren geleden maar nog altijd staat als een paal boven water dat onderwijs helpt in de strijd tegen (kans)armoede (Klasse, 2011).</p>

            <div className='d-flex justify-content-center mb-4'>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/VPx9MN3rQxQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

            <p>Inleidende tekst over onderstaand filmpje?</p>

            <div className='d-flex justify-content-center'>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/72XZggeE5eY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
