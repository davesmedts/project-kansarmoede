import React, { useState } from 'react'
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';
import ButtonProportioneelUniversalisme from './ButtonProportioneelUniversalisme'

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
    <div className='mt-3 mb-4'>

      <Accordion open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId="1">Kansenongelijkheid</AccordionHeader>
          <AccordionBody accordionId="1">
            <p>Op dit moment wordt de meeste aandacht gegeven aan kansenongelijkheid in het onderwijs. Het onderwijs zou namelijk de kans hebben om ongelijke kansen gelijk te maken. </p>
            <p>Alle leerlingen starten op school met een verschil van kennis en vaardigheden. Eén van de redenen is dat ze binnen hun gezin en sociale context, niet op dezelfde manier, in hun ontwikkeling, gestimuleerd worden.</p>
            <p>De school dient alle kinderen de kans te geven om helemaal tot ontwikkeling te komen, aansluitend bij hun context en kunnen. Maar laat dit nu net het probleem zijn. Er wordt namelijk onvoldoende aangesloten bij de behoeften van kinderen. Denk hierbij aan leerlingen summatief (= slagen of zakken bij een test) of net formatief (leerling gaat verder met de feedback die hij/zij heeft verkregen) evalueren. Ook de mate van inclusiviteit van het onderwijs en nascholing van leerkrachten in het kader van cultuursensitief werken zorgt ervoor dat er te weinig wordt aangesloten bij de nood van de kinderen (= bedreiging). Door in te zetten op een multidimensionale aanpak en een samenwerking tussen school, organisaties in de gemeente en het gezin zelf, worden gelijke kansen gestimuleerd in en door het onderwijs (= kans) (Maak je sterk tegen armoede op school | Netwerk tegen Armoede, 2019).</p>
          </AccordionBody>
        </AccordionItem>

        <AccordionItem>
          <AccordionHeader targetId="2">Opvoedingsondersteuning interventies</AccordionHeader>
          <AccordionBody accordionId="2">
            <p>Opvoedingsondersteuning interventies helpen ouders met een lage opleiding om hun kinderen zoveel mogelijk vaardigheden bij te brengen en ze helpen de ouders om hun attitude te veranderen. Doordat de attitude van ouders verandert, kan het de kinderen meer vertrouwen geven en het vergroot de motivatie voor school. Hierdoor hebben ze meer kans op een hogere opleiding en naar de toekomst toe betere werkkansen dan hun ouders. </p>
            <p>Het is belangrijk dat kinderen die doorbraak willen realiseren, goede contacten maken die gericht zijn op het maken van goede studiekeuzes, het vinden van een goede stageplaats en naar later toe een passend werk bij hun eerder gekozen opleiding. Om de overgang van studiekeuze naar de arbeidsmarkt te vergemakkelijken zijn er interventies ontwikkelend. Naast het versterken van de ouderbetrokkenheid, wat helaas vaak niet werkt bij deze doelgroep, door goede rolmodellen zorg te dragen, door jongeren werkervaring te laten opdoen binnen een bedrijf of voor hun loopbaanontwikkeling. Hierin is een rol van studiebegeleiding of mentor onmisbaar (Duurzame aanpak van kinderarmoede, 2022). </p>
            <p>Een uitdaging voor scholen is om hierop in te spelen door voorschoolse opvoeding en naschoolse activiteiten aan te bieden, die de startpositie en de ongelijke kansen van kinderen in armoede verbeteren (PISA Nederland – “Programme for International Student Assessment”, z.d.). </p>
          </AccordionBody>
        </AccordionItem>

        <AccordionItem>
          <AccordionHeader targetId="3">Ondersteuning aanbieden</AccordionHeader>
          <AccordionBody accordionId="3">
            <h6>Van school naar ouders</h6>
            <p>Nu armoede bespreekbaar is gemaakt, is het van belang dat ouders en kinderen passende hulp krijgen aangeboden. De leerkracht is immers geen hulpverlener, dus is het van belang de juiste organisaties erbij te betrekken. Maar er zijn inmiddels behoorlijk wat organisaties die zich richten op armoedebestrijding. Fijn natuurlijk, maar dat zorgt er ook voor dat je door de bomen het bos niet meer ziet. Het doorverwijzen is geen taak voor een leerkracht alleen, maar moet door het hele schoolteam opgepakt worden. Wie kan (en wil) dit oppakken. Denk aan een goed armoedebeleid op school waarbij samenwerken met de juiste partners van groot belang is. Want als jij als leerkracht veel tijd hebt geïnvesteerd en moeite hebt gedaan om een goede band met het kind en ouder(s) op te bouwen kan het ook spannend zijn iemand door te verwijzen naar een externe organisatie.  Je wilt niet dat ze in aanraking komen met niet goed functionerende organisaties. Het is daarom voor scholen belangrijk een goed netwerk van fijne en betrouwbare partners te creëren (Defesche, 2022).</p>
            <h6>Van ouders naar kinderen</h6>
            <p>Als we kijken naar de schoolprestaties bij kinderen merken we op dat het voor kansarme gezinnen een bedreiging is dat de ouders vaak de vaardigheden missen. De oorzaak is dat ze zelf heel wat zorgen en stress hebben dat komt kijken bij armoede. Ze hebben vaak een andere attitude t.o.v. de ontwikkeling van hun kind en het belang van school is voor hun vaak anders. De ouders bemoeien zich minder met de opleiding van hun kinderen. Vervolgens leidt dit tot lagere schooladviezen.</p>
            <p>Doordat ouders vaak geldzorgen hebben, bieden ze vaak minder ondersteuning aan hun kinderen om hen de schoolse vaardigheden bij te brengen. Ze hebben hierdoor vaak stress en andere zorgen. Het is van belang om te proberen het gedachtenpatroon van kinderen, ouders en grootouders te veranderen naar wat wel mogelijk is. Het is een kans en uitdaging om hen samen te begeleiden in hun keuzes zodat deze nieuwe generatie ook de kans krijgt om werk en studie beter te benutten (Duurzame aanpak van kinderarmoede, 2022). </p>
          </AccordionBody>
        </AccordionItem>

        <AccordionItem>
          <AccordionHeader targetId="4">Bijdrage aan gelijk ontwikkelpotentieel </AccordionHeader>
          <AccordionBody accordionId="4">
            <p>Binnen het onderwijs zelf zijn er ook bepaalde factoren die ervoor zorgen dat sommige kinderen meer kansen krijgen om volop tot ontwikkeling te komen, dan andere leerlingen.</p>
            <p>Zo geeft het 3-jaarlijks Pisa-onderzoek, dat 15-jarigen uit verschillende landen met elkaar vergelijkt inzage schoolprestaties, aan dat kinderen met een migratieachtergrond niet dezelfde onderwijskansen krijgen dan andere kinderen.</p>
            <p>Het onderwijs kan ongelijke onderwijskansen tegengaan. Er zijn een aantal factoren die dit verschil in schoolprestaties bevorderen:</p>
            <ul>
              <li>Als ouders kies je zelf de onderwijsinstelling van je kind (Grondwet van vrije schoolkeuze). Dit zorgt voor een ongelijke verdeeldheid van kinderen uit verschillende bevolkingsgroepen en dus een bedreiging doordat ouders uit de middenklasse en de hogere klassen beschikken over meer informatie en een betere aanpak, zodat ze hun kind naar een bevoorrechte school kunnen sturen, waar meer kansrijke kinderen gaan.</li>
              <li>Scholen die meer aanmeldingen dan plekken krijgen, kiezen meestal voor een autochtoon kind uit de hogere middenklasse. Op deze manier ontstaan er concentratiescholen (= zijn scholen waar de problemen zich concentreren) (vaak zwarte scholen), waar het merendeel van de kinderen een migratieachtergrond hebben en in armoede leven.</li>
              <li>De Grondwet van vrije schoolkeuze legt ook gelijke en publieke bekostiging van scholen vast. Het is een kans voor scholen dat ze meer geld krijgen voor kinderen met een allochtone afkomst, wat het verschil tussen scholen verkleint en ongelijke kansen tegengaat.</li>
            </ul>
            <p>Deze tegemoetkoming staat onder druk. OESO geeft namelijk aan dat een vroege selectie van kinderen voor het voortgezet onderwijs (Nederland) een grotere ongelijkheid in de hand werkt en niet voor hogere resultaten zorgen. Ook in België volgen kinderen al vanaf hun 12 jaar les in het middelbaar onderwijs. Dat onderwijs is onderverdeeld in verschillende leerwegen die elk een eigen curriculum hebben. Dit zorgt ervoor dat een deel van de leerlingen al vanaf deze jonge leeftijd, niet meer in aanraking komen met bepaalde leerstof, wat op zijn beurt zorgt voor ongelijke kansen. </p>
            <p>Dit zorgt er ook voor dat wanneer leerlingen van het ene niveau naar het andere niveau dienen over te stappen, ze telkens een jaar verliezen. Dit zorgt voor een verminderen van heterogene klassen en het vermeerderen van categorale scholen. (Dit zijn scholen die leerlingen sorteren in homogene groepen). Zo is er een stijging van TSO-, en BSO-scholen, wat ervoor zorgt dat minder leerlingen meerdere diploma’s behalen, en neemt de tussentijdse op- en afstroom af (Nederland, aangezien er in België geen opstroom mogelijk is). In België dien je pas te kiezen vanaf het 3de middelbaar (verbetering op gebied van het bieden van gelijke kansen) (Duurzame aanpak van kinderarmoede, 2022).</p>
            <p>Wij zijn ervan overtuigd dat de meritocratische maatschappijvisie, die nog steeds aanwezig is in het Vlaamse onderwijssysteem, ervoor zorgt dat kansarme kinderen nog meer naar de achtergrond worden geduwd. Er wordt meer ingezet op kinderen met meer talent, aangezien zij later meer zullen bijdragen tot de sociale welvaart. Jammer genoeg is talent niet enkel biologisch bepaald, maar heeft ook de omgeving een sterke invloed op de ontwikkeling van talenten. Ook is er de stroom van kansarme leerlingen naar het buitengewoon onderwijs. Wij stellen onszelf de vraag “wat als deze kinderen in een andere omgeving opgroeiden, zouden zij dan ook nog naar het buitengewoon onderwijs worden doorgestuurd?” (GO! Pro, z.d.).</p>
          </AccordionBody>
        </AccordionItem>

        <AccordionItem>
          <AccordionHeader targetId="5">Kansen als leerkracht om in te zetten op gelijke kansen in het onderwijs </AccordionHeader>
          <AccordionBody accordionId="5">
            <p>Om als leerkracht het verschil te maken voor kinderen in kansarmoede, dien je met een juiste bril naar hen te kijken. Zo zijn er 5 sleutelcompetenties, die het steunpunt Diversiteit en Leren van de Ugent in 2014 naar boven bracht, tijdens een actieonderzoek. Als leerkracht kan je deze hanteren om kansarmoede te verminderen:</p>
            <ul>
              <li>Zo dien je diversiteit positief te benaderen en armoede te zien.</li>
              <li>Je dient te werken aan kwaliteitsvolle interacties met ouders en kinderen.</li>
              <li>Je hoort kinderen te begeleiden tot kwaliteitsvolle interacties.</li>
              <li>Als leerkracht moet je diversiteit in het totale ontwikkelingsproces begeleiden.</li>
              <li>Ook behoor je te zien en te handelen naar maatschappelijke verantwoordelijkheid (Steunpunt Diversiteit & Leren | Armoede & sociale ongelijkheid, z.d.).</li>
            </ul>
          </AccordionBody>

        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="6">Inzetten op communicatie tussen leerkracht en ouders om gelijke kansen in het onderwijs te garanderen.</AccordionHeader>
          <AccordionBody accordionId="6">
            <p>Ouderbetrokkenheid houdt niet alleen maar ‘goede communicatie’ in. Er zijn veel acties die de school kan inzetten om ouderbetrokkenheid te verhogen en als partners een duurzame relatie aan te gaan. Ouders zijn immers de belangrijkste partners in onderwijs, en dat mogen we niet uit het oog verliezen  (Ryckaert, 2005)!</p>
            <p>Ga zeer zeker met ouders in gesprek. Praat over wat zij belangrijk vinden in de ondersteuning, luister aandachtig. Houd daarbij rekening dat je in begrijpelijke taal spreekt en ‘vertaal’ de wensen en behoeften naar eventuele collega's of partners(Lusse & Kassenberg, 2021).</p>
          </AccordionBody>

        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="7">Hoe kan de school ouders ondersteunen?</AccordionHeader>
          <AccordionBody accordionId="7">
            <h6>De schoolkosten terugdringen om gelijkheid te verkrijgen</h6>
            <p>School brengt helaas altijd wel kosten met zich mee. Die kosten kunnen bij ouders die het niet breed hebben stress veroorzaken. Een gevolg hiervan kan zijn dat ze hun kind ziek melden bij een schoolreis, ze melden hun kind niet aan voor extra activiteiten etc. School helemaal kostenvrij maken lukt helaas niet, maar je kunt als school wel in kaart brengen wat de kosten precies zijn. Denk dan vooral ook aan verborgen kosten zoals een surprise maken in december, een laptop voor huiswerk, fruit etc. De taak voor een school is om schoolkosten beheersbaar te houden voor mensen die het niet zo breed hebben. Ouders moeten op de hoogte zijn van waar ze kunnen aankloppen voor hulp, de ouderbijdrage moet passend zijn en er moet eigenlijk een garantie zijn dat alle kinderen altijd kunnen deelnemen aan schoolactiviteiten. Denk aan inkomensafhankelijke ouderbijdrage zodat ouders naar draagkracht laten betalen (Defesche, 2022). Dit laatste voorbeeld is een vorm van proportioneel universalisme. Dit houdt in dat het zich richt op het beleid en acties voor alle burgers. Maar, de intensiteit hiervan verschilt voor verschillende doelgroepen. Zo krijgt een doelgroep die daar behoefte aan heeft hetzelfde aangereikt als alle andere burgers, maar net wat meer of intensiever. Je geeft extra aandacht aan wie extra aandacht nodig heeft.  Je biedt zorg aan allen, in functie van behoefte. </p>
            <ButtonProportioneelUniversalisme />
            <p>Vanuit het opzet van de dienstverlening van de universele benadering met de kijk op het verwerkelijken van sociale rechten biedt geen zekerheid dat deze worden beantwoord aan de verschillende noden en condities waarin en waarmee mensen leven. Men gaat er vaak verkeerd vanuit dat in een universele benadering er voor iedereen een gelijke dienstverlening is, het ook een gelijke impact voor iedereen heeft. Je werkt niet vanuit de meest kwetsbare maar vanuit wat mensen elkaar verbindt. Het is een aanpak waarbij afwisselend werkt met het oog op ongelijkheid tussen mensen en diversiteit.</p>
            <p>Dit is een vaak voorkomende uitdaging van een universele benadering bij het Mattheuseffect aangezien de hogere-inkomensgroepen meer voordeel halen uit de sociale voorzieningen dan de inkomensgroepen die lager zijn.</p>
            <p>Het Mattheuseffect wil zeggen dat de rijker steeds rijker worden en de armen steeds armen. Het treft helaas vaak de arme gezinnen. Er zijn heel veel instanties die helpen om kansarmoede te bestrijden, maar door verschillende redenen bereikt dit niet altijd de juiste doelgroep. Het zijn net de mensen uit de hogere sociale klassen die eerder gebruik maken van deze maatregelen, dan mensen uit de lagere sociale klassen, waar deze acties net voor bedoeld zijn. (Mattheuseffect in de kijker, z.d.)</p>

            <h6>Handleiding van kansen om kansarmoede in het onderwijs te bestrijden</h6>
            <p>De plek bij uitstek om armoede op te merken zijn scholen. Er werd een handleiding geschreven over omgaan met armoede, en dit voor het primair en het voorgezet onderwijs (Nederland) (Omgaan met armoede op scholen – handreiking voor po en vo, 2020).</p>
            <p> In deze handleiding staan een aantal kansen om kansarmoede in het onderwijs te bestrijden:</p>
            <ul>
              <li>Professionalisering rond armoede is cruciaal, en dit zowel op school als school overstijgend. Men dient kinderarmoede op te merken en bespreekbaar te maken, en deze gezinnen over te brengen naar professionals op sociaal gebied of op het gebied van werk en inkomen. </li>
              <li>De onderwijsinstelling zelf kan ook de kosten voor gezinnen in situationele armoede verlagen, door bijvoorbeeld ouderbijdragen niet aan te rekenen, of door uitstappen dichter bij school te voorzien. Ook kunnen gezinnen een bijslag of vrijstelling van de kosten voor school verkrijgen. Vaak zijn de ouders hier niet van op de hoogte. Het helpt als de onderwijsinstelling de gezinnen hierop kan wijzen. Ook kunnen scholen gezinnen stimuleren om elkaar te helpen of kunnen ze zelf ook materialen aanreiken aan ouders in armoede. Denk bijvoorbeeld aan het gratis aanbieden van fruit en menstruatieproducten. Ook het stimuleren van oude gymkleding hoort hierbij, zodat ouders in armoede hun kinderen gratis kunnen voorzien van turnkledij. Let hierbij wel op stigmatisering zoals bepaalde kinderen die altijd in de oude turnkledij van klasgenoten turnen.</li>
              <li>Scholen dienen ook in te zetten op het bestrijden van armoede op lange termijn. Zo kunnen ze de leerlingen financiële-, en leefstijleducatie aanbieden. Ook het inzetten op veerkracht bij leerlingen en ouders helpt hierbij.</li>
            </ul>

            <h6>Partners</h6>
            <p>Bewustwording, professionalisering en een goede samenwerking rond de problematiek van armoede geldt niet enkel voor scholen, maar ook voor andere instanties. (Duurzame aanpak van kinderarmoede, 2022).</p>
            <p>Volgens Prof. Em. Jan Vranken is armoede “een netwerk van sociale uitsluitingen dat zich uitstrekt over meerdere gebieden van het individuele en collectieve bestaan. Het scheidt de armen van de algemeen aanvaarde leefpatronen van de samenleving. Deze kloof kunnen ze niet op eigen kracht overbruggen.” Armoede en sociale uitsluiting kan zorgen voor een tekort aan loon, job, opleiding, welzijn, woongelegenheid en maatschappelijke deelname (Armoede en Sociale Uitsluiting, 2022).  </p>
            <p>Door sociale uitsluiting tegen te gaan, wordt iedereen sociaal rechtvaardig behandeld.</p>
            <p>Wij streven voor gelijke kansen (egalitarisme) voor elk kind, ongeacht de context waarin ze opgroeien door hen (financiële) kansen te geven om hun talenten te ontwikkelen. Zo geeft bijvoorbeeld 'Het Fonds Vrienden van Sint-Vincentius Limburg' kansarme kinderen financiële steun, zodat zij lid kunnen worden van een sportclub of een jeugdbeweging, een muziekinstrument kunnen leren bespelen of een andere hobby binnen hun talenten kunnen uitvoeren (Kansarme kinderen hun talenten laten ontplooien door hen een hobby aan te bieden, z.d.). </p>
            <p>Om kansarmoede aan te pakken, dienen er vele factoren en mechanismen gelijktijdig te worden aangepakt. Onderzoek naar kansenongelijkheid in het onderwijs, geeft namelijk aan dat er op verschillende niveaus allerlei strategieën en elementen zijn die ongelijke kansen versterken. Deze strategieën en elementen komen niet enkel voor op niveau van familie, kind en school maar ook op het niveau van gemeente en samenleving (Maak je sterk tegen armoede op school | Netwerk tegen Armoede, 2019).</p>
            <p>Begin 2022 werd er een wijziging doorgevoerd om kinderen en gezinnen beter te ondersteunen en te detecteren. Kind en Gezin kreeg sinds kort de mogelijkheid om contactgegevens van kwetsbare gezinnen onder bepaalde voorwaarden te delen met het OCMW. Gezinnen worden sneller gedetecteerd en kunnen beroep doen op ondersteuning waar ze recht op hebben.  Kind en Gezin en het OCMW hebben een versterkte samenwerking en kunnen het risico op gezinnen en kinderen in armoede verkleinen (Heselmans, 2022). </p>

            <p>Wij vonden volgende partners (Helpende handen):</p>
            <ul>
              <li>CLB</li>
              <li>OCMW</li>
              <li>Rode Kruis</li>
              <li>Welzijnszorg</li>
            </ul>

          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
