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
      <h2>Herkennen van kansarmoede</h2>
      <h3>Rol van de onderwijsinstelling</h3>
      <p>Het is van belang dat een schoolteam zich bewust is van de invloed van armoede op de ontwikkelingskansen, het welbevinden en het ontwikkelen van het kind. De directie heeft de belangrijke taak om dit thema aan te kaarten in het team. Een schoolbestuur kan de directie hierin ondersteunen door het onderwerp armoede aan te brengen tijdens haar bezoek aan verschillende onderwijsinstellingen, door middel van gesprekken met de directies en door school overstijgende uitwisseling en interventies te stimuleren en te vergemakkelijken. Ze kunnen hierbij nog een stap verder gaan door middel van een beleidsmedewerker inzage armoede aan te stellen. Ook kunnen ze scholen helpen door snel benaderbare noodfondsen op te richten. Deze noodfondsen zijn minder toepasselijk voor kinderen die in situationele armoede zitten. Het is wel een feit dat de schoolprestaties en welbevinden kunnen verminderen door de thuiscontext (Duurzame aanpak van kinderarmoede, 2022).</p>

      <h3>Kinderen inschrijven op de basisschool</h3>
      <p>Het begint allemaal al bij de inschrijving van een kind op de basisschool (Laere, 2022). </p>
      <p>Zorg er als school voor dat er een sterk inschrijfteam aanwezig is, een persoon dat (kans)armoede snel zal herkennen. Zorg dat wanneer een ouder zijn/haar kind komt aanmelden, je een warm onthaal verzorgt. Geef ouders het gevoel welkom te zijn. Dan zal er de meeste kans bestaan dat ouders eerlijk zijn en ook durven aan te geven dat ze het thuis (om welke reden dan ook) niet makkelijk hebben. Als school krijg je SES-uren. Die uren krijg je op basis van 3 criteria: thuistaal, schooltoelage en het diploma van de moeder. Dat wordt allemaal gevraagd tijdens de inschrijving. Sommige ouders schamen zich hiervoor, waardoor ze niet altijd eerlijk antwoorden. Als ouders zich welkom en gehoord voelen bij dit eerste contact, is de kans het grootst dat zij naar waarheid zullen antwoorden. Blijf die warme school! Je kunt alleen een open communicatie wensen, wanneer er vertrouwen is. Zorg er dus voor dat ouders zich welkom voelen op school. Praat met ze aan de schoolpoort op een luchtige manier, zonder vooroordelen. Bouw aan een goede relatie. Wanneer die basis er zal zijn, is het makkelijker om eventuele zorgen te bespreken, zowel van de kant van leerkracht naar ouder als van ouder naar leerkracht (Laere, 2022).</p>
      <p>Plan aan het begin van het schooljaar een gesprekje in met alle ouders en hun kind. Zo leer je elkaar kennen, wat erg nuttig kan zijn om vroegtijdig (kans) armoede te herkennen (Laere, 2022).</p>
      <p>Klasfactoren hebben een grote impact op de leerwinst, prestaties en welbevinden van kinderen. De rol van de leerkracht en school is dus van groot belang! Klasklimaat heeft een grote impact op het welbevinden van kinderen. Houdt rekening met individuele (cultuur) verschillen.  Cultuur sensitief handelen is hierin belangrijk. Gebruik ervaringen en perspectieven van kinderen en hun families als een instrument om effectief te ondersteunen. Speel in op de noden van het kind. Zo kun je zorgen en stress bij kinderen (en bij ouders) onder controle houden. (Dierickx & Koelman, 2021) </p>

      <h3>Rol van de leerkracht:</h3>
      <p>Als leerkrachten signalen opmerken van kansarmoede, moeten leerkrachten zich inlezen over wat kansarmoede inhoudt. Worden ze ongerust en hebben ze twijfels over de thuissituatie van de kinderen, heeft de leerkracht een signalerende rol. Ze moeten weten wat de gevolgen kunnen zijn van armoede.  Armoede is niet weg te denken uit onze maatschappij. Als leerkracht moet je daarvan op de hoogte zijn. Het is vaak voor een leerkracht een situatie waar hij of zij zelf niet mee te maken heeft.  Begrijpen wat in armoede opgroeien betekent en inhoudt zal niet vanzelf komen. Je zal daar informatie over moeten vinden, jezelf inlezen (Maak je sterk tegen armoede op school | Netwerk tegen Armoede, 2019). </p>

      <h3>Communicatie met ouders: </h3>
      <p>Er is werk aan communicatie met ouders in armoede. Scholen hebben vaak moeite om ouders in armoede werkelijk te bereiken. Er wordt snel gezegd dat ze een gebrek aan betrokkenheid van deze (kwetsbare) ouders missen. In het secundair onderwijs is dit meer dan in het basisonderwijs. Goed communiceren is niet gemakkelijk, maar wel heel belangrijk, aangezien de leerkracht dankzij communicatie met de ouders heel wat over de thuissituatie te weten kan komen. Verder gaat het tenslotte ook om de relatie tussen de school en het gezin van het kind. Werken aan ouderbetrokkenheid en een goede communicatie is een proces dat nooit ‘af’ is! Bekend is dat inzicht in en kennis over armoede de communicatie al heel wat kan verbeteren (Maak je sterk tegen armoede op school | Netwerk tegen Armoede, 2019). </p>
      <p>Bij moeilijke gesprekken verwacht de leerkracht allerlei emoties en weerstand van de ouders zoals verdriet, kwaadheid en schaamte (Omgaan met ouders, z.d.).</p>

      <ul>
        <p>Onderwerpen die een gesprek tussen leerkracht en ouders moeilijk maken (Omgaan met ouders, z.d.):</p>
        <li>Tegenstrijdigheid van de visie van de ouders en de leerkracht. </li>
        <li>Een leerkracht die moet ingaan tegen het verwachtingspatroon van de ouders met betrekking tot wat ze willen bereiken met hun kind. </li>
        <li>Bespreking van ernstige sociale en/of emotionele problemen die de leerkracht moet melden aan de ouders. Bijvoorbeeld: gedragsproblemen, factoren in het gezin die weerslag hebben op de prestaties op school. </li>
        <li>Een leerkracht die informatie moet doorgeven aan de ouders wat beledigend kan overkomen zoals een gesprek over een onverzorgd kind (Omgaan met ouders, z.d.). </li>
      </ul>

      <p>Wat verder belangrijke zaken zijn rondom het in gesprek gaan met kind en ouders valt bijvoorbeeld te lezen in de handreiking ‘omgaan met kinderarmoede in het sociaal domein’, Juni 2021. Hier spreken ze onder andere over de volgende twee belangrijke punten: (Lancering handreiking ‘Omgaan met kinderarmoede in het sociaal domein’, 2021):als we hier een opsomming van maken, hoeft de bron er alleen in de inleiding bij volgens mij. Dus alleen in bovenstaand stuk. Daarna punt voor punt de opsomming</p>

      <li>"Ontschuldigen"</li>
      <p>Kinderen hebben zelf geen schuld aan armoede. Maar reken ook de ouder(s) hun situatie niet af. Niet oordelen, dat doen ouders vaak al over zichzelf. Empathisch reageren is belangrijk en erken naar ouders toe dat hun armoedesituatie vaak het gevolg is van omstandigheden. Stress zal het ouders moeilijk maken om uit de situatie te komen (Lancering handreiking ‘Omgaan met kinderarmoede in het sociaal domein’, 2021). </p>

      <li>Oprecht en optimistisch zijn </li>

      <p>Handel als leerkracht vanuit authenticiteit, oprechte belangstelling. Toon respect en neem de tijd voor het kind en zijn ouder(s). Het is immers vaak zo dat gezinnen die in armoede leven wantrouwens kunnen zijn naar professionals, dus ook naar goed bedoelt advies van een leerkracht (Lancering handreiking ‘Omgaan met kinderarmoede in het sociaal domein’, 2021). </p>
      <p>Daarbij hoort ook zeer zeker ‘optimistisch zijn’. In gezinnen waar veel zorgen zijn, hebben ouders en kinderen optimisme nodig. Op die manier helpt het ze om zicht te krijgen op mogelijke oplossingen. Het biedt perspectief en hoop voor de toekomst! Besteed dus veel aandacht aan wat er juist GOED gaat (Lancering handreiking ‘Omgaan met kinderarmoede in het sociaal domein’, 2021). </p>
      <p>Je kunt armoede vaak niet meteen zien aan kinderen of hun ouders. Schaamte hangt vaak rond dit onderwerp. Leerkrachten en schoolleiders hebben de kans om kinderen dagelijks te zien en te observeren en hebben kans op het spreken met hun ouders. Hierdoor valt armoede wellicht eerder te signaleren. (Bron: op den Kamp, van Gyes & Desmedt, 2007) </p>
      <p>Zichtbare zaken zoals niet passende of kapotte kleding, een lege brooddoos etc zijn zaken die opvallen. Maar er zijn ook kenmerken die je makkelijk kunt aanzien voor iets anders. Een kind wat zich slecht kan concentreren of zich lastig gedraagt zou kunnen wijzen op ADHD. Maar dit kan ook zeer zeker te wijten zijn aan kopzorgen die het kind heeft rondom zijn thuissituatie. Lichamelijke klachten moet men ook niet onderschatten en kunnen wijze op armoede. Denk aan bleek zien, vaak klagen over hoofdpijn etc (Defesche, 2022). </p>

      <h3>Leerkrachten maken het verschil</h3>
      <p>Self fulfilling prophecies
        De leerkracht maakt het verschil. Het gaat vooral om een positieve houding en/of een bewuste aanpak. Zet hoog in, zeker ook met kinderen met een lage SES en lagere aanvangsprestaties.  Voor deze kinderen zijn selffulfilling prophecies eigenlijk altijd aanwezig. Dit heeft een grote invloed op hun prestaties. Self fulfilling prophecies zijn zichzelf waarmakende voorspellingen. Toekomstige ontwikkelingen worden vaak bepaald door de verwachtingen die we van iemand hebben. Door een kind te stimuleren in zijn ontwikkeling en te geloven in wat hij kan zal het kind dit overnemen. Hij zal meer moeite doen om zijn doelen en idealen te bereiken (Elanhr, 2021)!
        Een bekend onderzoek naar self fulfilling prophecy is het onderzoek van prof. Robert Rosenthal. Het onderzoek staat bekend onder het ‘Rosenthal effect” (Elanhr, 2021). (KLIK HIER VOOR UITLEG ONDERZOEK en dan de onderstaande tekst daaronder zetten)
      </p>
      <p>Vanuit onze eigen visie vinden we het belangrijk om als leerkracht hoge verwachtingen te hebben naar ALLE kinderen in de klas. </p>

      <h3>VervolgStappen</h3>
      <p>Na het signaleren kunnen er vervolgstappen gezet worden (Defesche, 2022). (Zoals bespreekbaar maken en andere organisaties erbij betrekken.)</p>
      <p>Het bespreekbaar maken van kansarmoede is essentieel. Er is geen gouden regel hoe je dit bespreekbaar moet maken. Daarom is dit een lastig iets, vooral omdat niet elke ouder of kind dit op dezelfde manier prettig vindt. Maar de manier waarop het bespreekbaar gemaakt wordt is allesbepalend voor het effect... Het is zeker niet wenselijk voor deze kinderen en/of hun ouders wanneer het onderwerp armoede op een negatieve manier wordt aangehaald. De kans is dan zeer groot dat ze zich in een hokje gestopt voelen en besluiten er niet meer over te praten (Defesche, 2022).</p>
      <p>Bespreekbaar maken is iets wat bij elk kind en bij elke ouder anders zal moeten gaan. Armoede is immers een persoonlijk iets. Zo heeft elke ouder of kind zijn eigen verhaal met ervaringen. En kan het snel zo zijn dat ouders zich blootgesteld voelen aan stigmatisering en vernedering. Dit is iets waar je als leerkracht voor moet waken. Het gesprek aan gaan, hoe doe je dat? Het is goed om je eigen gevoel te tonen; erkennen dat het lastig is om erover te praten, ook voor jou als leerkracht. Vertel wat je ziet, zonder er een oordeel aan te vellen. Daarbij is het goed om feiten paraat te hebben om je verhaal te verduidelijken (Defesche, 2022). </p>





      {/* <Accordion open={open} toggle={toggle}>
          <AccordionItem>
            <AccordionHeader targetId="1">Lees meer over migratiearmoede </AccordionHeader>
            <AccordionBody accordionId="1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum eum perferendis veritatis exercitationem voluptatibus dicta laudantium accusantium officiis sapiente repellendus. Facilis assumenda excepturi reiciendis. Commodi placeat praesentium nihil facilis pariatur!
            </AccordionBody>
          </AccordionItem>
        </Accordion> */}
    </div>
  );
}
