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
      <p>Onder migratie verstaan we mensen die zich verplaatsen van de ene plaats (land) naar het andere. Mensen migreren bijvoorbeeld om in een ander land te gaan werken of omdat zij hun land ontvluchten door oorlog. </p>
      <p>Gezinnen met een migratieachtergrond lopen een grotere kans om in armoede te belanden en er ook in te blijven. Armoede heeft vaak een geografische achtergrond, vandaar dat het belangrijk is om kwetsbare wijken te ondersteunen en in te zetten op de specifieke behoeften van mensen met een migratieachtergrond.  Zo kan een monitor aangeven in welke gemeente of wijk de nood het hoogst is. Inzetten op netwerken is cruciaal, het onderwijs kan het netwerk vergroten qua studie- of beroepskeuze. Diverse buurten zorgen voor diverse netwerken.</p>
      <p>We willen langdurige migratiearmoede of generatiearmoede voorkomen door aan de slag te gaan met verschillende zaken die dit soort armoede in stand houden. Een bemiddelaar zal trachten het bereik van de doelgroep te vergroten en ervoor te zorgen dat het aanbod beter aansluit. Ook dient men discriminatie tegen te gaan, en dient men in te zetten op inclusie, deelname en het krijgen van gelijke kansen en dit zowel op de arbeidsmarkt als in het onderwijs (Duurzame aanpak van kinderarmoede, 2022).</p>
      <Accordion open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId="1">Lees meer over migratiearmoede </AccordionHeader>
          <AccordionBody accordionId="1">
            <h5>Bereik van mensen met migratieachtergrond vergroten.</h5>
            <p>Hulp inzage schulden en een dreigende armoede, dient zo snel mogelijk ingeschakeld te worden, zodat het effect op de opgroeiende kinderen gering blijft. Jammer genoeg is het zoeken van hulp bij gezinnen met een migratieachtergrond moeilijker dan voor mensen zonder deze achtergrond. Het bereik voor hulp is hierdoor laag. Wel zijn er een aantal zaken die ervoor kunnen zorgen dat het bereik voor mensen met een migratieachtergrond, vergroot wordt (Duurzame aanpak van kinderarmoede, 2022):</p>

            <h6>Diversiteit sensitieve hulpverlening bij betalingsachterstanden en schulden </h6>
            <p>Zo zijn er heel wat gemeenten die experimenteren met aanpak op maat, als het gaat om schulden. Deze aanpak kan nog inclusiever gemaakt worden, door te verbeteren in het voorzien van informatie voor mensen met een migratieachtergrond. Verder dient er te worden ingezet in het professionaliseren van hulpverleners (Duurzame aanpak van kinderarmoede, 2022). Voorbeelden daarbij zijn: </p>
            <ul>
              <li>Om hulpverleners te professionaliseren dient men het inzicht te verbeteren in de relatie van inwoners met een migratieachtergrond tot de verschillende voorzieningen die gemeentes voorzien, en de kennis van netwerken van migrantengemeenschappen of sleutelfiguren. </li>
              <li>Het wijkteam, de sociale dienst of het UWV dienen goed samen te werken, zodat zij ervoor kunnen zorgen dat de re-integratie naar werk makkelijker wordt voor mensen met een migratieachtergrond.</li>
              <li>Uit onderzoek is gebleken dat als de hulpverlener werkt aan een vertrouwensband met mensen met een migratieachtergrond, dat de hulpverlening dan beter verloopt.</li>
            </ul>

            <h6>Hulpverleners met diverse achtergronden </h6>
            <p>Hulpverleners die zelf een migratieachtergrond hebben, kunnen de barrière inzage het zoeken en aanvaarden van hulp verlagen.</p>
            <p>Diversiteit tussen de hulpverlening is voor de bewoners herkenbaarheid. Hierdoor kunnen ze zorgen voor kennisontwikkeling en werken ze aan de verbinding met cliënten waar cultuurverschillen en taal een rol spelen (Duurzame aanpak van kinderarmoede, 2022).</p>

            <h6>Inzet van sleutelpersonen </h6>
            <p>Mensen in armoede hebben vaak een enorm gevoel van schaamte. Dit geldt ook voor mensen in armoede met een migratieachtergrond. Sterker nog, vaak is deze schaamte nog harder aanwezig. Vandaar dat het enorm belangrijk is om armoede, schulden en betalingsachterstanden bespreekbaar te maken. Dit is namelijk de eerste stap in het vinden van mogelijke oplossingen (Duurzame aanpak van kinderarmoede, 2022).</p>
            <p>Bij mensen met een migratieachtergrond zijn de mogelijkheden naar hulp minder goed bekend. Het bereik dient verbetert te worden, dit kan door gemeenten en hulpinstanties samen te laten werken met sleutelfiguren uit diverse gemeenschappen. Zij kunnen mensen met een migratieachtergrond vaak laagdrempelig bereiken, kennen de taal en de culturele context. Dit neemt ook het wantrouwen qua hulpverlening weg. Sleutelpersonen kunnen ingezet worden inzage thuisadministratie. Men kan ook jongerencoaches opleiden inzage armoede en schulden (Duurzame aanpak van kinderarmoede, 2022).</p>

            <h6>Aansluiten bij veilige omgeving die er al is </h6>
            <p>Kinderen die opgroeien in een éénoudergezin lopen meer risico op verschillende problemen zoals armoede. Distelbrink en Ponzoni ontwikkelde in 2012 een handleiding met aanbevelingen om deze doelgroep te ondersteunen. Er worden adviezen gegeven rond het bereiken van moeders met een migratieachtergrond. Zo luidt één van de adviezen om oplettend om te gaan bij het kiezen van de titel van een ondersteuning. Gebruik niet ‘opvoeden in je eentje’, aangezien dit Turkse en Marokkaanse vrouwen enorm kan afschrikken, doordat de klemtoon te veel op het alleenstaand zijn gelegd wordt. Via een vrouwen- of migrantenorganisatie, zal je deze vrouwen veel makkelijker bereiken (Duurzame aanpak van kinderarmoede, 2022).</p>

            <h6>Aanpakken van arbeidsmarktdiscriminatie </h6>
            <p>Er is nog steeds sprake van discriminatie bij het wervings- en selectieproces, op basis van afkomst. Zo speelt iemands migratieachtergrond, gender, religie, huidskleur, leeftijd en afkomst een grote rol. Discriminatie speelt vaak minder of net meer een rol, afhankelijk van de sector van de arbeidsmarkt.</p>
            <ul>
              <p>6 aanpakken bij arbeidsmarktdiscriminatie:</p>
              <li>Richt je beleid op de sociale norm. Als het niet aanvaard wordt om mensen te discrimineren, en de norm is om mensen gelijk te behandelen, dan zal dit discriminatie tegengaan.</li>
              <li>Naming and shaming, waarbij een bedrijf openlijk kritiek krijgt doordat ze mensen discrimineren. De tegenhanger hiervan is naming and faming, waarbij werkgevers positief genoemd worden, als zij actief werken aan een discriminatiebeleid in hun bedrijf.</li>
              <li>Gemeenten hebben ook een groot aandeel in het aanpakken van discriminatie, aangezien het bewust of onbewust, consequent of af en toe, individueel of institutioneel (= heeft te maken met meer organisaties). Gemeenten dienen dus in te zeten op een sterk antidiscriminatiebeleid.</li>
              <li>‘Open hiring’ Doordat discriminatie bij de wervings- en selectieprocedure zo ingebakken zit in onze maatschappij, kan dit ervoor zorgen dat mensen de hoop op werk verliezen. ‘Open hiring’ is mogelijks een oplossing, aangezien iemand zich dient aan te melden voor een job, maar waarbij er geen sollicitatieprocedure plaatsvindt. Verder zorgt het voor een duurzame en stabiele arbeidsrelatie en krijgen asielzoekers de kans om werkervaring op te doen.</li>
              <li>Beter begeleiden van uitkeringsgerechtigden met een migratieachtergrond naar werk. Er werd een inspiratiegids voor professionals opgesteld door Andriessen, Stavenuiter en Sikkema (2021), zodat er een positief verschil gemaakt kan worden bij het op weg helpen naar een job, van mensen met een migratieachtergrond. Professionals en leidinggevenden kunnen hier allerlei tips, voorbeelden en inzichten vinden.</li>
              <li>Bevorderen van arbeidsparticipatie van statushouders. Het is heel moeilijk om asielzoekers te integreren op de arbeidsmarkt. Wat hierbij kan helpen zijn werkervaringsplekken voor deze doelgroep. Dit kan vervolgens gecombineerd worden met (taal)onderwijs of een opleiding. Verder dient er aan deze groep mensen werk op maat te worden aangeboden. Iedereen telt, en iedereen kan meedoen. Ook dient met het risico op financiële problemen in het oog te houden, bij deze doelgroep. Net deze problemen kunnen deelname aan werkervaringsplekken in de weg staan, waardoor de problematiek net versterkt wordt (Duurzame aanpak van kinderarmoede, 2022).</li>
            </ul>

            <h5>Bevorderen van kansengelijkheid in het onderwijs </h5>
            <p>Het onderwijs kan ongelijke onderwijskansen tegengaan</p>
            <h6>Verschil in startpositie terugdringen</h6>
            <p>Het opleidingsniveau van de ouders is een sterke voorspeller inzage onderwijssucces. Armoede heeft een sterke invloed op de onderwijskansen van een kind. Een kenmerk om onderwijsachterstanden van een kind te voorspellen, zijn gezinnen die gebruik maken van schuldhulpbemiddeling. Als er thuis geen educatieve materialen en boeken aanwezig zijn, heeft dit invloed op de kansen van het kind, in het onderwijs. Ook de lockdowns inzage Covid19 lieten zien dat de aanwezige materialen in de thuissituatie een grote rol spelen, inzage onderwijskansen. Gezinnen met een lager inkomen hadden veel meer moeite met het volgen van online lessen, aangezien ze vaak geen laptop, internet of een rustige werkplek ter beschikking hadden. Ook het niet hebben van financiële middelen om bijvoorbeeld bijles te voorzien, is een materiele factor. </p>
            <p>Verder zijn er nog andere factoren binnen het gezin, die invloed hebben op de onderwijskansen van kinderen. Denk bijvoorbeeld aan het taalgebruik binnen het gezin dat weinig of veel aansluit bij de schooltaal. Ook de hoeveelheid aan taal en voorlezen is essentieel. Het al dan niet aanbieden van educatieve uitstappen en de mate van betrokkenheid van ouders of verzorgers bij het onderwijs hebben ook een enorme invloed.</p>
            <p>De hierboven genoemde zaken zorgen er mee voor dat kinderen in het onderwijs starten, met een verschillende startplaats en ongelijke kansen. </p>
            <p>Scholen kunnen hierop inspelen door voorschoolse opvoeding en naschoolse activiteiten aan te bieden, die de startpositie en de ongelijke kansen van kinderen in migratiearmoede verbeteren (Duurzame aanpak van kinderarmoede, 2022).</p>

            <h6>Bijdragen aan gelijk ontwikkelpotentieel </h6>
            <p>Binnen het onderwijs zelf zijn er ook bepaalde factoren die ervoor zorgen dat sommige kinderen meer kansen krijgen om volop tot ontwikkeling te komen, dan andere leerlingen.</p>
            <p>Het 3-jaarlijks Pisa-onderzoek, dat 15-jarigen uit verschillende landen met elkaar vergelijkt inzage schoolprestaties, geeft aan dat kinderen met een migratieachtergrond niet dezelfde onderwijskansen krijgen dan andere kinderen (Duurzame aanpak van kinderarmoede, 2022).</p>
            <p>Voor meer informatie betreffende de resultaten van het 3-jaarlijke Pisa-onderzoek, verwijzen we u graag door naar volgende <a href='https://www.pisa-nederland.nl/' target='_blank'>website (PISA Nederland – “Programme for International Student Assessment”. )</a> </p>

            <p>Er zijn een aantal factoren die dit verschil in schoolprestaties bevorderen:</p>
            <ul>
              <li>Als ouders kies je zelf de onderwijsinstelling van je kind (Grondwet van vrije schoolkeuze). Dit zorgt voor een ongelijke verdeeldheid van kinderen uit verschillende bevolkingsgroepen. Ouders uit de middenklasse en de hogere klassen beschikken over meer informatie en een betere aanpak, zodat ze hun kind naar een bevoorrechte school kunnen sturen, waar meer kansrijke kinderen gaan.</li>
              <li>Scholen die meer aanmeldingen dan plekken krijgen, kiezen meestal voor een autochtoon kind uit de hogere middenklasse. Op deze manier ontstaan er concentratiescholen (= zijn scholen waar de problemen zich concentreren) (vaak zwarte scholen), waar het merendeel van de kinderen een migratieachtergrond hebben en in armoede leven.</li>
              <li>De Grondwet van vrije schoolkeuze legt ook gelijke en publieke bekostiging van scholen vast. Zo krijgen scholen meer geld voor kinderen met een allochtone afkomst, wat het verschil tussen scholen verkleint en ongelijke kansen tegengaat.</li>
            </ul>

            <p>Deze tegemoetkoming staat onder druk. OESO geeft namelijk aan dat een vroege selectie van kinderen voor het voortgezet onderwijs (Nederland) een grotere ongelijkheid in de hand werkt en niet voor hogere resultaten zorgen. Ook in België volgen kinderen al vanaf hun 12 jaar les in het middelbaar onderwijs. Dat onderwijs is onderverdeeld in verschillende leerwegen die elks een eigen curriculum hebben. Dit zorgt ervoor dat een deel van de leerlingen al vanaf deze jonge leeftijd, niet meer in aanraking komen met bepaalde leerstof, wat op zijn beurt zorgt voor ongelijke kansen.</p>
            <p>Dit zorgt er ook voor dat wanneer leerlingen van het ene niveau naar het andere niveau dienen over te stappen, ze telkens een jaar verliezen. Dit zorgt voor het verminderen van heterogene klassen en het vermeerderen van categorale scholen. Dit zijn scholen die leerlingen sorteren in homogene groepen. Zo is er een stijging van TSO- en BSO-scholen, wat ervoor zorgt dat minder leerlingen meerdere diploma’s behalen en neemt de tussentijdse op- en afstroom af (Nederland, aangezien er in België geen opstroom mogelijk is). In België dien je pas te kiezen vanaf het 3de middelbaar (verbetering op gebied van het bieden van gelijke kansen) (Duurzame aanpak van kinderarmoede, 2022).</p>
            
            <h6>Vele factoren en mechanismen gelijktijdig aanpakken </h6>
            <p>Onderzoek naar kansenongelijkheid in het onderwijs, geeft aan dat er op verschillende niveaus allerlei strategieën en elementen zijn die ongelijke kansen versterken. Deze strategieën en elementen komen niet enkel voor op niveau van familie, kind en school maar op het niveau van gemeente en samenleving.</p>
            <p>Op dit moment gaat het meeste aandacht uit naar kansenongelijkheid in het onderwijs. Men ziet het onderwijs vaak als de gelijkmaker van ongelijke kansen. Men denkt vaak dat kinderen hun prestaties afhankelijk zijn van hun inzet. Hoe harder ze hun best doen, hoe meer ze bereiken, wat ervoor zorgt dat ze maximale kansen benutten in het onderwijs. Dit heeft op zijn beurt weer een positieve invloed op de kansen op de arbeidsmarkt en op het inkomen.</p>
            <p>Maar het is net zo dat binnen het onderwijs, op verschillende niveaus, verschillende elementen een rol spelen die zorgen voor ongelijke onderwijskansen van kinderen. De onderwijsinstelling stimuleert hierbij de ongelijke kansen.</p>
            <p>Leerlingen starten op school met een verschil in kennis en vaardigheden doordat ze binnen hun gezin en sociale context, niet op dezelfde manier, in hun ontwikkeling gestimuleerd worden.</p>
            <p>De school dient net alle kinderen de kans te geven om helemaal tot ontwikkeling te komen, aansluitend bij hun context en kunnen. Het probleem is dat er onvoldoende wordt aangesloten bij de behoeften van de kinderen. Denk hierbij aan leerlingen summatief (= slagen of zakken bij een test) of net formatief (leerling gaat verder met de feedback die hij/zij heeft verkregen) evalueren. Ook de mate van inclusiviteit van het onderwijs en nascholing van leerkrachten in het kader van cultuursensitief werken.</p>
            <p>Kansengelijkheid wordt niet enkel beïnvloed door onderwijs maar ook door kind- en gezinsfactoren, wijkfactoren (bijvoorbeeld sociale veiligheid) alsook de factoren in de samenleving als geheel (bijvoorbeeld racisme die bepaalde bevolkingsgroepen uitsluit). </p>
            <p>We kunnen hierbij concluderen dat het stimuleren van gelijke kansen in en door onderwijs, vraagt om een multidimensionale aanpak en een samenwerking tussen school, organisaties in de gemeente en het gezin zelf (Duurzame aanpak van kinderarmoede, 2022).</p>




          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
