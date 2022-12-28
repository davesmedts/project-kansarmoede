import React, {useState} from 'react'
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
  } from 'reactstrap';
  import afbeeldingGezondheid from '../afbeeldingen/gezondheid.png'

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

        <p>Bij generatiearmoede zien we dat er verschillende mechanisme binnen de gezinnen en in de omgeving de armoede in stand houdt. Voorbeelden van mechanisme die binnen in een huishouden een rol kunnen spelen zijn: weinig opleiding, ongunstige familiestructuur, slechte gezondheid, stress en daardoor minder doordacht omgaan met situatie. Voorbeelden van mechanisme in de omgeving van de gezinnen die een rol kunnen spelen zijn: economische crisis, technologische verschuivingen, onvoldoende effectief beleid van overheden en instellingen, zwakke regio’s, klein homogeen sociaal netwerk. Hierbij zien we dat elke afzonderlijke mechanisme opgroeiende kinderen beperkt in hun ambities en mogelijkheden. De mechanismen in combinatie leiden tot een probleem dat moeilijk te bestrijden is.  </p>
        <p>Om generatiearmoede te doorbreken is het belangrijk om verschillende perspectieven optimaal te benutten en ervoor te zorgen dat het ene perspectief het andere niet uitsluit. Dit maakt het heel complex. Er kan nagedacht worden bij de generatieoverdracht wat passende interventies zijn om langdurige armoede te doorbreken (Duurzame aanpak van kinderarmoede, 2022). </p>

        <Accordion open={open} toggle={toggle}>
          <AccordionItem>
            <AccordionHeader targetId="1">Lees meer over generatiearmoede </AccordionHeader>
            <AccordionBody accordionId="1">
            <h4>Verschillende domeinen binnen generatiearmoede</h4>
            <p>Er zijn verschillende domeinen die volgens onderzoek hierbij van belang zijn, het privédomein, domein van werk en inkomen, ruimtelijk domein en het sociaal domein. </p>
            <ul>
                <li>Bij het privédomein gaat het om de overdracht van waarden, opvattingen en denkpatronen. Soms wordt het beeld van een gezinslid of familielid vertroebeld door overheersende geldzorgen. Je kan het gedachtenpatroon veranderen door kinderen, ouders en grootouders ervan bewust te maken van wat wel mogelijk is. Je kan hen samen begeleiden in deze keuzes. Zo krijgen nieuwe generaties de kans om werk en studie beter te benutten. De ondersteunende instanties moeten de focus leggen op mogelijkheden en kansen. </li>
                <li>Binnen het domein werk en inkomen moeten er haalbare mogelijkheden zijn voor gezinsleden om hun werk en inkomenssituatie te verbeteren. Voor jonge ouders moet de combinatie werken en gezin haalbaar zijn. Er moet stabiliteit zijn in het inkomen, zo kunnen gezinnen voorkomen dat ze in een neerwaartse spiraal terecht komen (Duurzame aanpak van kinderarmoede, 2022).</li>
                <li>Het ruimtelijk domein betreft het creëren van infrastructuur om de drempel richting de arbeidsmarkt te verlagen. Bijvoorbeeld OV, uitzendbureaus en opleidingen. </li>
                <li>Het sociaal domein (inclusief initiatieven van onderop): door interventies uit te voeren op sociaal gebied, kan de nadelige sociale omgeving die ontstaat wanneer mensen voor een langere periode in armoede leven, keren. Het is belangrijk dat er aandacht is voor gezondheid, empowerment en veerkracht. In de kinderopvangvoorzieningen en in het onderwijs kunnen jonge kinderen vaardigheden leren als focus op levensdoelen, planning en impulscontrole. Ze hebben een signalerende rol bij problemen. Er zijn initiatieven die helpen om inzicht te verkrijgen in wat er speelt in de samenleving omtrent regelgeving en dienstverlening. Initiatieven spelen een verbindende rol tussen doelgroepen van beleid en ondersteuning en formele organisaties. Opgeleide ervaringsdeskundigen helpen om te verduidelijken wat het is om arm te zijn en de kloof te overbruggen tussen systeemwereld en leefwereld. </li>
            </ul>
            <p>Door de combinatie van bovengenoemde domeinen met de mechanismen binnen het huishouden en in de omgeving komen we tot passende interventies (Duurzame aanpak van kinderarmoede, 2022). </p>
            
            <h4>Interventies</h4>
            <h5>Binnen in huishouden</h5>
            <p>Kinderen uit langdurige arme gezinnen met weinig opleiding, hangt samen in het domein privé met een geringe investering in kinderen, hun schoolcarrière en hun ontwikkeling. De ouders missen vaak de vaardigheden en hebben alsook zorgen en stress die komen kijken bij armoede. Ze hebben vaak ook een andere attitude t.o.v. de ontwikkeling en het belang van school is bij deze ouders vaak anders, hierdoor bemoeien ze zich minder met de opleiding van hun kinderen. Vervolgens leidt dit tot lagere schooladviezen. </p>
            <p>Door generatiearmoede duurzaam te doorbreken vormt de kern door in te zetten op een positieve ontwikkeling van kinderen. Hiermee stimuleren we de ontwikkeling van de cognitieve vaardigheden en de levensvaardigheden of ook wel de doen vaardigheden genoemd. (Zoals geheugen, concentratie, plannen, kunnen, zelfbeheersing, zelfvertrouwen, sociaal gedrag, probleemoplossend vermogen, emotieregulatie, hulp inschakelen…) Hierdoor kunnen mensen beter omgaan met moeilijke situaties zoals armoede en worden de sociaaleconomische kansen vergroot. De vroege kinderjaren zijn van groot belang. Voordat kinderen naar school gaan, worden de hersenstructuren gevormd. Deze leggen de basis voor de ontwikkeling op lange termijn alsook de kansen die iemand op volwassene leeftijd heeft. </p>
            <p>Opvoedingsondersteuningsinterventies helpen ouders met een lage opleiding om hun kinderen zoveel mogelijk vaardigheden bij te brengen en ze helpen de ouders om hun attitude te veranderen. Doordat de attitude van ouders verandert, kan het de kinderen meer vertrouwen geven en het vergroot de motivatie voor school. Hierdoor hebben ze meer kans op een hogere opleiding en naar de toekomst toe betere werkkansen dan hun ouders (Duurzame aanpak van kinderarmoede, 2022). </p>

            <h5>Familiestructuur</h5>
            <p>Er is ook op vlak van familiestructuur veel te veranderen. Eenoudergezinnen hebben vaak te maken met generatiearmoede. Je kan het aantal éénoudergezinnen beperken door mensen te sensibiliseren inzage scheidingen en tienermoederschappen. </p>
            <ul>
                <li>In het privédomein kan er gewerkt worden met omgaan met conflicten. Hoogoplopende ruzies kunnen voorkomen worden en de gevolgen die nadelig zijn zoals stress en trauma’s hebben invloed op het aangaan van relaties in de toekomst. Hierbij kunnen we denken aan liefdesrelaties maar ook aan werkrelaties die verbetert kunnen worden. Hier leert men conflictsituaties niet te ontlopen en ontslag te nemen maar ze leren ermee opgaan en deze te hanteren. Het vergemakkelijkt carrièrestappen te maken en door deze weg kan langdurige armoede doorbroken worden. </li>
                <li>Gewerkt worden aan preventie kan in het sociaal domein. Op scholen moet een goede voorlichting gegeven worden over liefde, relaties en seks. Tienerzwangerschappen kunnen hierdoor voorkomen worden. Professionals kunnen ook in het sociaal domein gesprekken aangaan met kinderen en hun ouders. Deze gesprekken kunnen gaan over de attitude van ouders en kinderen over ouderschap en zwangerschap. </li>
                <li>Domein werk en inkomen kan zich inzetten om het voor éénoudergezinnen gemakkelijker te maken om het werken te kunnen combineren met de zorg van hun kinderen. Er kunnen mogelijkheden gecreëerd worden om deeltijdsbanen met goede arbeidsvoorwaarden voor éénoudergezinnen. </li>
                <li>Goede opvangmogelijkheden hoort daar ook bij, bij de werkgever of in de buurt. Dit heeft te maken met de ruimtelijk domein, infrastructuur. Het is ook van belang dat er een goede reisverbinding is tussen woonwerk en opvangplekken (Duurzame aanpak van kinderarmoede, 2022). </li>
            </ul>

            <h5>gezondheid</h5>

            <img className='imgCentered' src={afbeeldingGezondheid} alt='samenhang armoede, schulden en gezondheid'></img>


            <p>Er is in de relatie tussen gezondheid en armoede een erfelijk component. Er worden bepaalde ziektebeelden doorgegeven van ouder op kind. Aanpakken van erfelijkheid kunnen we niet, we kunnen wel zaken als beweging en voeding van gezinnen in armoede verbeteren. We kunnen werken aan gezondsheidsvaardigheden. Het kan voor een deel worden voorkomen dat langdurige arme gezinnen ontstaan worden door gezondheidsproblemen bij kinderen. </p>
            <ul>
                <li>Er kan binnen het privédomein gewerkt worden aan het bewust worden van gezonde en ongezonde voeding maar ook dat beweging gezondheidsklachten kan voorkomen of beperken. In de eerste 1000 dagen van kinderen hun leven is het vanwege de kwetsbaarheid van belang dat gezinnen voor en tijdens de zwangerschap al bereikt zijn. Er kan gewerkt worden om de gezondheidsvaardigheden te versterken van ouders en kinderen. Zo weten ze beter waar ze informatie kunnen verkrijgen en tijdig in beeld kunnen komen van hulpverleningsorganisaties. </li>
                <li>Er kan getracht worden vanuit sociaal domein om gezondheidsproblemen te beperken en mensen met gezondheidsproblemen proberen om zo goed mogelijk te laten meedoen in de maatschappij. </li>
                <li>Het is belangrijk dat mensen met gezondheidsklachten niet gezien worden als zielige of als zwak, vanuit ruimtelijk domein en domein werk en inkomen moet er gewerkt worden aan het doorbreken van zulke stigma’s. Het helpt om mensen te begeleiden naar werk dat bij hun past. Het zorgt voor een hoger inkomen en gaan ze het gemakkelijker hebben om gezonde voeding te kopen. Op deze manier bewegen ze meer en hebben ze een functie in de maatschappij. Dit helpt ook voor het verminderen van de psychische klachten die we tegenkomen bij mensen in armoede en met gezondheidsklachten. Ze zijn een beter rolmodel voor hun kinderen. Voor kinderen met psychische of lichamelijke klachten en gezondheidsvaardigheden, is chronische stress voorkomen belangrijk. Het versterkt en veroorzaak andere psychische en lichamelijke klachten. Het is belangrijk om iets te doen aan het verlagen van stress. Het vergroot de kans op klachten die uitgroeien tot problemen, problemen die het dagelijks leven van kinderen ernstig kunnen belemmeren. Chronische stress kan je voorkomen door gezonde voeding, beweging, rust, waardoor je goed kan ontwikkelen in je stressnetwerk. Na de geboorte kan je zorgen voor een zorgzame en sensitieve omgeving, hierin kan een kind leren omgaan met stress. Je kan je kind helpen om frustraties en emoties te leren begrijpen en ze te helpen door gezonde coping strategieën te ontwikkelen met duurzaam resultaat. Interventies kunnen kinderen leren om met stress te leren omgaan, ze leren hun grenzen kennen zoals sociale vaardigheidstrainingen en weerbaarheidstrainingen. De interventies vergroten de weerbaarheid maar ook helpt het om gezond te leven om het weerstandsvermogen te vergroten en stress te reduceren: voldoende beweging, voldoende slaap, gezonde voeding, en voldoende ontspanning.  </li>
                <li>Bij het domein ruimtelijk is het belangrijk om een aantrekkelijke buitenruimte te creëren die uitnodigt tot spel en sport met leeftijdsgenoten. Ze maken vrienden en gaan bewegen. Dit voorkomt stress en gezondheidsklachten (Duurzame aanpak van kinderarmoede, 2022). </li>
            </ul>

            <h5>Stress en daardoor minder doordacht omgaan met situaties </h5>
            <p>Met geld omgaan kan voor gezinnen met generatiearmoede lastig zijn. Ze ervaren schaarste dat resulteert in een afname van de bandbreedte; het vermogen om beslissingen te nemen, aandacht op te brengen, vast te houden aan plannen en verleidingen te weerstaan (Duurzame aanpak van kinderarmoede, 2022). </p>
            <p>Er zijn heel wat strategieën die helpen om stress te verminderen, een andere naam hiervoor is coping (Duurzame aanpak van kinderarmoede, 2022):</p>
            <ul>
                <li>Probleemgerichte coping: haalt de bron van stress weg.  </li>
                <li>Emotiegerichte coping: reactie op de bron van stress wordt minder negatief. </li>
                <li>Proactieve coping: jezelf op een ander moment opladen, zodat je op latere stress, minder last hebt.  </li>
            </ul>

            <ul>
                <li>Het is wenselijk om vanuit het opzicht in domein werk en inkomen om te werken aan het beperken van schulden maar ook om ze te doen afnemen. Er kan gezocht worden naar inkomensondersteuning. Er kan vooral probleemgericht aan stressvermindering gewerkt worden. De oorzaak van stress moet zoveel mogelijk worden weggenomen. De stress van ouders naar kinderen moet via deze weg ook worden tegengegaan. </li>
                <li>Vanuit sociaal domein en privédomein wordt er aan emotiegericht coping gewerkt, wat wil zeggen dat je leert omgaan met de emoties die bij een bepaalde situatie komen kijken. Op deze manier leert men omgaan met stress. Via stress-sensitieve dienstverlening tracht men stress te verminderen. Men houdt rekening met het effect op de hersenen met betrekking tot de bezittingen van mensen.</li>
                <li>Stress door langdurige armoede en schulden geeft vaak chaos en onveiligheid in gezinnen. In het privédomein ouders in langdurige armoede bijstaan lijkt van belang om stress op tijd te signaleren. Je kan ouders helpen hiermee om te gaan. Je doet dit best op zo’n manier dat het weinig invloed heeft op de kinderen. Het helpt dat zij dan betere beslissingen kunnen maken op langere termijnen en het standpunt van hun kinderen. In het sociaal domein kan men beroep doen op allerlei opvoedingsondersteuningsprogramma’s die kunnen helpen. Bij oudere kinderen zijn er een aantal interventies die ook ingezet kunnen worden. Deze interventies kunnen de interactie tussen ouders en kinderen verbeteren. De ontwikkeling van de kinderen wordt gestimuleerd door hun beter te leren omgaan met stress. </li>
                <li>Belangrijk en wat speelt in het ruimtelijk domein is de rol bij proactieve coping om stress te vinden. Buiten zijn en frisse lucht hebben, genieten van de natuur is heel belangrijk. Langdurige arme families zijn leven vaak in een wijk of gebied van generatie op generatie. Dit zijn vaak wijken die minder groen zijn. Een natuurspeelplaats voor kinderen is dan belangrijk om stress kwijt te kunnen en daar kunnen ze goed spelen. Een park om tot rust te komen door te wandelen heeft ook een positief effect op ouders en kinderen en verlaagd het stressniveau. Het zijn gratis activiteiten (Duurzame aanpak van kinderarmoede, 2022). </li>
            </ul>

            <h5>In de omgeving</h5>
            <h6>Crises en technologische verschuivingen</h6>
            <p>Lager opgeleiden mensen, behoren veel tot langdurige arme families, worden vaak onevenredig hard getroffen door crises, dit geldt ook voor technologische verschuivingen. Robots vervangen bijvoorbeeld veel fabrieksarbeiders. Hierdoor vinden lager opgeleide mensen moeilijker werk en hebben ze geen stabiel inkomen. </p>
            <ul>
                <li>Het allereerste domein dat hier van belang is en waarvoor aandacht is, is het domein werk en inkomen. Het is van belang al voor dat mensen hun inkomen verliezen. We moeten opzoek gaan naar nieuwe mogelijkheden of er moet zeker een goed vangnet zijn. Ze mogen zeker niet direct in nieuwe of verdere financiële problemen komen. Ontslagen zouden ook voorkomen moeten worden. </li>
                <li>Het is bij het ruimtelijk domein vooral van belang dat er een alternatieve werkplek toegankelijk wordt gesteld. Ze kunnen nadenken over het organiseren van vervoer of ze kunnen vervoerskosten vergoeden. Door hierover na te denken kunnen ze hun werk blijven uitvoeren maar voor een andere organisatie wat verderop. Door technologische ontwikkeling, verliezen veel mensen hun werk en verdwijnen er heel wat beroepen. Het is van belang dat deze mensen kunnen omgeschoold worden. Voor mensen in langdurige armoede is het belangrijk dat dit gesubsidieerde trajecten zijn. Ze hebben niet zelf de middelen op een opleiding te betalen. Is er geen vervangend werk, dan zouden deze mensen snel passende financiële ondersteuning moeten krijgen. </li>
                <li>Vanuit sociaal domein is het belangrijk dat ervaringsdeskundigen proactief hulp bieden bij het bekomen van financiële ondersteuning. Ze kunnen helpen bij het invullen van formulieren en lezen van brieven waarop ze ook kunnen helpen met reageren. Dit kunnen brieven zijn van de gemeente of andere instanties. Ze kunnen een luisterend oor aanbieden voor mensen in een stressvol proces (Duurzame aanpak van kinderarmoede, 2022).</li>
            </ul>
            <h6>Klein homogeen sociaal netwerk </h6>
            <p>Langdurige arme families hebben dikwijls een sterke band met hun buurt of wijk. Zulke families komen heel weinig buiten hun buurt of wijk. Activiteiten doen buiten de buurt kosten geld. Je wereldje wordt wel heel klein als je niet deelneemt aan activiteiten buiten je buurt. Mensen uit dezelfde buurt hebben vaak dezelfde problemen. Dit maakt het lastig om uit armoede te komen.  </p>
            <ul>
                <li>Langdurige arme families hebben dikwijls een sterke band met hun buurt of wijk. Zulke families komen heel weinig buiten hun buurt of wijk. Activiteiten doen buiten de buurt kosten geld. Je wereldje wordt wel heel klein als je niet deelneemt aan activiteiten buiten je buurt. Mensen uit dezelfde buurt hebben vaak dezelfde problemen. Dit maakt het lastig om uit armoede te komen. </li>
                <li>Binnen het sociaal domein gaat het over de omgeving waarin kinderen opgroeien en de ontwikkelingsmogelijkheden binnen de omgeving. Het sociaal kapitaal van gezinnen hangt hier ook mee samen. Het biedt gezinnen in armoede de gelegenheid om anderen te ontmoeten in een verschillend netwerk in een dorp of wijk. Ze kunnen zich ontspannen en contact krijgen met soortgenoten maar ook met mensen met een andere achtergrond of organisaties voor ondersteuning. Sociaal werkers richten zich op het bevorderen van sociale verbindingen in een buurt, ze versterken het netwerk en ondersteunen buurtinitiatieven. Ze hebben ook een rol in het signaleren van armoede. Sociale contacten uitbreiden is van belang en ook het bevorderen van de maatschappelijke participatie. Bij kinderen gaat het om mogelijkheden scheppen om aan diverse vrijetijdsactiviteiten zoals sport, spel en kunst te kunnen deelnemen. De kinderen leren hierdoor praktische en sociale vaardigheden. Een zekere regelmaat in activiteiten, een prettige en veilige sfeer op een laagdrempelige locatie zijn belangrijke randvoorwoorden. Kinderen mogen ook niet het idee hebben dat deze activiteiten bedoeld zijn voor ‘arme’ kinderen. Kinderen kunnen hierdoor schaamte hebben en hen het gevoel geven dat ze zichzelf te schande maken. </li>
            </ul>
            <p>Het is belangrijk dat kinderen die doorbraak willen realiseren in de patronen van generatiearmoede dat ze contacten maken die gericht zijn op het maken van een goede studiekeuze, het vinden van een goede werkplekleren en naar later toe een passend werk bij hun eerder gekozen opleiding. Om de overgang van studiekeuze naar de arbeidsmarkt te vergemakkelijken zijn er interventies ontwikkelend. Naast het versterken van de ouderbetrokkenheid, wat vaak niet werkt bij deze doelgroep, door goede rolmodellen zorg te dragen, door jongeren werkervaring te laten opdoen binnen een bedrijf voor hun loopbaanontwikkeling, hierin is een rol van studiebegeleiding of mentor onmisbaar (Duurzame aanpak van kinderarmoede, 2022). </p>
            </AccordionBody>
          </AccordionItem>
        </Accordion>
      </div>
    );}
