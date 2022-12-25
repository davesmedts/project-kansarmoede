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
      <p>Dit is armoede ontstaan als gevolg van omstandigheden. Dat kan een scheiding zijn, verlies van een baan, overlijden etc. Het kan zich overal voordoen.</p>
      <p>Bij situationele armoede is het cruciaal om deze vorm van armoede zo snel mogelijk op te merken en in te grijpen. Hoe sneller je ingrijpt hoe gemakkelijker het is om tot een oplossing te komen. Hierdoor worden de kosten van de hulp minder (Duurzame aanpak van kinderarmoede, 2022).</p>

      <Accordion open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId="1">Lees meer over situatinele armoede </AccordionHeader>
          <AccordionBody accordionId="1">
            <h5>Wat werkt om situationele armoede te bestrijden?</h5>
            <p>Er zijn een aantal zaken die helpen om situationele armoede te bestrijden:</p>
            <ul>
              <li>Een sterke sociale basis</li>
              <li>Bewustwording, professionalisering en goede samenwerking;</li>
              <li>Kosten verlagen</li>
              <li>Inkomsten vergroten</li>
              <li>Meedoen makkelijker maken</li>
              <li>Stress verlagen en vooral geen stress toevoegen (Duurzame aanpak van kinderarmoede, 2022)</li>
            </ul>

            <h6>Een sterke sociale basis</h6>
            <p>Om deze vorm van kinderarmoede aan te pakken, dient er een goede samenwerking tussen gemeenten, onderwijsinstelling, jeugdgezondheidszorg en partners uit dorp (sport, cultuur en welzijnsorganisaties) of gemeente te zijn.</p>
            <p>Het is belangrijk om de schaamte te verbreken. Dit voorkomt sociale uitsluiting en het verergeren van problemen. Hierbij is het cruciaal dat er een goed contact blijft bestaan met kinderdagverblijven, onderwijsinstellingen, jeugdgezondheidszorg, welzijnsorganisaties en gelijkaardige mensen in de buurt.</p>
            <p>Een sterke sociale basis is enorm belangrijk in de gemeente. De contacten die de familie heeft kunnen vragen stellen over de gezinssituatie. Op deze manier kan situationele armoede gedetecteerd worden.</p>
            <p>Het gebeurt ook vaak dat mensen hulp zoeken voor bepaalde vragen of problemen. De professionals waarbij ze terecht komen, kunnen dus ook situationele armoede opmerken. Denk hierbij aan een huisarts, een verloskundige als gezinsuitbreiding voor financiële onstabiliteit zorgt, de notaris als bijvoorbeeld het overlijden van een familielid voor financiële problemen zorgt.</p>
            <p>Hierbij is het van belang dat deze professionals kennis hebben van armoede en deze mensen bevragen zonder oordeel. Alleen zo zullen deze mensen over hun armoede vertellen (Duurzame aanpak van kinderarmoede, 2022).</p>


            <h6>Bewustwording, professionalisering en goede samenwerking;</h6>
            <p>De plek bij uitstek om armoede op te merken zijn scholen. Er werd een handleiding geschreven over omgaan met armoede, en dit voor het primair en het voorgezet onderwijs (Nederland). </p>
            <p> In deze handleiding staan een aantal nuttige zaken:</p>
            <ul>
              <li>Het is van belang dat een schoolteam zich bewust is van de invloed van armoede op de ontwikkelingskansen, het welbevinden en het ontwikkelen van het kind. De directie heeft dus de belangrijke taak om dit thema aan te kaarten in het team. Een schoolbestuur kan de directie hierin ondersteunen door het onderwerp armoede aan te brengen tijdens haar bezoek aan de verschillende onderwijsinstellingen, door middel van gesprekken met de directies en door school overstijgende uitwisselingen en interventies te stimuleren en te vergemakkelijken. Ze kunnen hierbij nog een stap verder gaan door middel van een beleidsmedewerker inzage armoede aan te stellen en door scholen te helpen door snel benaderbare noodfondsen op te richten. Deze noodfondsen zijn minder toepasselijk voor kinderen die in situationele armoede zitten. Het is wel een feit dat de schoolprestaties en welbevinden kunnen verminderen door de thuiscontext.</li>
              <li>Verder is professionalisering rond armoede cruciaal en dit zowel op school als school doorbrekend. Men dient kinderarmoede op te merken en bespreekbaar te maken, en deze gezinnen over te brengen naar professionals op sociaal gebied of het gebied van werk en inkomen.</li>
              <li>De onderwijsinstelling zelf kan ook de kosten voor gezinnen in situationele armoede verlagen door bijvoorbeeld ouderbijdragen niet aan te rekenen, waardoor uitstapjes dichter bij de school dienen te worden georganiseerd. Ook kunnen gezinnen een bijslag of vrijstelling van de kosten voor school verkrijgen. Vaak zijn de ouders hier niet van op de hoogte. Het helpt als de onderwijsinstelling de gezinnen hierop kan wijzen. Scholen kunnen gezinnen stimuleren elkaar te helpen of kunnen zelf ook materialen aanreiken aan ouders in armoede. Denk bijvoorbeeld aan het gratis aanbieden van fruit en menstruatieproducten. Ook het stimuleren van oude turnkleding hoort hierbij, zodat ouders in armoede hun kinderen gratis kunnen voorzien van turnkledij. Let hierbij wel op stigmatisering, omdat bepaalde kinderen altijd in oude turnkledij van klasgenoten turnen.</li>
              <li>Scholen dienen ook in te zetten op het bestrijden van armoede op lange termijn. Zo kunnen ze de leerlingen financiële-, en leefstijleducatie aanbieden. Ook het inzetten op veerkracht bij leerlingen en ouders helpt hierbij.</li>
            </ul>

            <p>Bewustwording, professionalisering en een goede samenwerking rond de problematiek van armoede geldt niet enkel voor scholen, maar ook voor andere instanties (Duurzame aanpak van kinderarmoede, 2022).</p>


            <h6>Kosten verlagen</h6>
            <p>Als men weet wie er in (beginnende) situationele armoede leeft, dan is de beste manier om deze mensen uit de armoede te helpen door hun kosten te verlagen. Dit kan door bijvoorbeeld energielasten te verlagen of door als gemeente in te zetten op duurzaam wonen. Vaak helpt het om samen met het gezin alle kosten en inkomsten op te lijsten en zo na te gaan waar mogelijkheden zijn om kosten tijdelijk te verlagen door middel van uitkeringen of noodfondsen. Het probleem hierbij is dat niet alle gezinnen in armoede even goed bereikt worden, om te genieten van deze uitkeringen of fondsen (Duurzame aanpak van kinderarmoede, 2022).</p>

            <h6>Inkomsten vergroten</h6>
            <p>Om ervoor te zorgen dat armoede niet langdurig voorkomt of om grotere schulden te vermijden, moet er naar de langere termijn gekeken worden. De kosten en inkomsten dienen opnieuw in balans te komen. Mensen die last hebben van stress kunnen moeilijk vooruitkijken en hebben hiervoor hulp nodig. Een goede oplossing is het vinden van een job en dit kunnen mensen in situationele armoede vrij goed, het kost enkel tijd. Er zijn ook mensen die hier wel hulp bij nodig hebben. Gemeenten kunnen mensen begeleiden naar werk. Vaak willen mensen wel werken, maar komen ze met een aantal obstakels in aanraking zoals psychische en fysische klachten. Deze kan je beter eerst aanpakken voordat er naar nieuw werk gezocht wordt.</p>
            <p>De mensen in armoede zijn vaak op hun hoede tijdens het zoeken naar werk. Ze zijn bang om een job aan te nemen, als het niet gaat om een langdurige betrekking zoals een vast contract, om zo hun schuldregeling in gevaar te brengen. Een oplossing hierbij is dat de gemeente voor een bepaalde periode het inkomen garandeert, bij het starten van een nieuwe loopbaan.</p>
            <p>Het is ook een optie dat schuldhulpverleners de schuldregeling tijdelijk stopzetten, bij het starten van een nieuwe loopbaan. Bij sommige mensen is het onmogelijk om de balans tussen inkomen en uitgaven binnen een bepaalde tijd te verkrijgen. De ondersteuning en financiële regelingen stoppen na verloop van tijd, waardoor de problemen enkel maar groter worden. Het enige wat hierbij nog kan helpen is het (tijdelijk) leven aan een aangepaste levensstandaard. Dit is enorm ingrijpend voor gezinnen, zelfs als mensen een sociaal netwerk hebben met mensen die hen helpen en waarmee ze kunnen praten zodat de stress vermindert. Ook kinderen uit deze gezinnen dienen om te leren gaan met de emoties en stress die deze situatie teweegbrengt. Denk bijvoorbeeld aan het verkopen van je huis, merkkleding die plots niet meer kan worden aangekocht, sporten die niet meer kunnen betaald worden en het voelen van stress van je ouders (Duurzame aanpak van kinderarmoede, 2022).</p>


            <h6>Meedoen makkelijker maken</h6>
            <p>Armoede zorgt ervoor dat mensen en voornamelijk kinderen niet vaak mee kunnen doen bij alledaagse activiteiten. Dit kan opgelost worden door een vrijetijdspas aan te bieden, waarbij kinderen goedkoper kunnen deelnemen aan allerlei culturele-, jeugd-, sport-, -vormings-, en andere activiteiten. Als mensen kunnen deelnemen, zorgt dit ervoor dat ze niet (meer) worden uitgesloten en kunnen ze het sociaal contact onderhouden. Net deze sociale contacten doen mensen goed. Ook zorgen deze activiteiten er net voor dat de kansen op werk worden vergroot, denk aan het volgen van een cursus of stress verminderen door te sporten. Verder zorgt dit voor een positief effect op de thuissfeer en de hoeveelheid aandacht voor de ontwikkeling van de kinderen. Door stress te verminderen, stelt dit mensen in staat om weer vooruit te kijken en betere beslissingen te nemen (Duurzame aanpak van kinderarmoede, 2022). </p>

            <h6>Stress verlagen en vooral geen stress toevoegen (Duurzame aanpak van kinderarmoede, 2022)</h6>
            <p>Financiële onrust zorgt voor stress binnen een gezin. Deze stress kan chronisch worden en net daarom is het zo belangrijk om deze stress te voorkomen en te verminderen. Bij situationele armoede is ‘Mobility Mentorin’ een goede aanpak. Dit is namelijk een methode die gericht is op het bestrijden van armoede. Het is namelijk wetenschappelijk aangetoond dat de hersenen van mensen die in financiële stress verkeren, minder goed gaan functioneren.</p>
            <p>Het onrecht doordat de armoede is ontstaan door een situatie waarop zijzelf weinig invloed hadden, speelt hen parten zoals ziek worden en je werk hierdoor verliezen. Dit kan uiteraard iedereen voorkomen. Daarom dat het belangrijk is om deze mensen duidelijk te maken dat ze er niet alleen voor staan en dat er ook uitwegen zijn uit deze situatie. Een ervaringsdeskundige inzetten als coach van het gezin kan hierbij helpen.</p>
            <p>Ervaringsdeskundigen dienen stress te verminderen en niet toe te voegen. Ze mogen dus geen oordeel vellen en en geen ‘waarom’ vragen stellen. Je wilt de stress binnen dit gezin niet chronisch maken (Duurzame aanpak van kinderarmoede, 2022).</p>



          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
