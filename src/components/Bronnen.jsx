import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default function Bronnen(args) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="secondary mt-2 me-2" onClick={toggle}>
        Bronnen
      </Button>
      <Modal className='modal-xl' isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>Bronnen</ModalHeader>
        <ModalBody>
          <ul>
            <li className='mt-2'>
              <p className='mb-0'>Armoedebestrijding in België in 6 vragen. (2022, 25 april). Federale Overheidsdienst - 	Sociale Zekerheid</p>
              <a className='ms-3' href="https://socialsecurity.belgium.be/nl/sociale-rechten-toekennen/armoedebestrijding-belgie-6-vragen" target="_blank" rel="noopener noreferrer">https://socialsecurity.belgium.be/nl/sociale-rechten-toekennen/armoedebestrijding-belgie-6-vragen</a>
            </li>
            <li className='mt-2'>
              <p className='mb-0'>Armoede en Sociale Uitsluiting. (2022, 14 december). Kenniscentrum WWZ</p>
              <a className='ms-3' href="https://www.kenniscentrumwwz.be/armoede-en-sociale-uitsluiting" target="_blank" rel="noopener noreferrer">https://www.kenniscentrumwwz.be/armoede-en-sociale-uitsluiting</a>
            </li>
            <li className='mt-2'>
              <p className='mb-0'>Beleid. (2019, 15 juni). CLB Kempen. Geraadpleegd op 24 december 2022 </p>
              <a className='ms-3' href="https://www.clb-kempen.be/wp-content/uploads/2020/04/CLBK-MissieEnVisie.pdf" target="_blank" rel="noopener noreferrer">https://www.clb-kempen.be/wp-content/uploads/2020/04/CLBK-MissieEnVisie.pdf</a>
            </li>
            <li className='mt-2'>
              <p className='mb-0'>Crowds, Y. (z.d.). Aan de slag met Armoede</p>
              <a className='ms-3' href="https://www.aandeslagmetarmoede.nl/leerkrachten" target="_blank" rel="noopener noreferrer">https://www.aandeslagmetarmoede.nl/leerkrachten</a>
            </li>
            <li className='mt-2'>
              <p className='mb-0'>Defesche, N. (2022, 5 december). Armoede. Gelijke kansen in de klas</p>
              <a className='ms-3' href=" https://gelijkekansenindeklas.nl/hoofdstuk/armoede/" target="_blank" rel="noopener noreferrer"> https://gelijkekansenindeklas.nl/hoofdstuk/armoede/</a>
            </li>
            <li className='mt-2'>
              <p className='mb-0'>Dierickx, E. & Koelman, A. (2021d). Kleuterleerkracht: Het naslagwerk voor kwaliteitsvol 	kleuteronderwijs (2de editie). Amsterdam University Press.</p>
            </li>
            <li className='mt-2'>
              <p className='mb-0'>Duurzame aanpak van kinderarmoede. (2022, 23 februari). Verwey-Jonker Instituut</p>
              <a className='ms-3' href="https://www.verwey-jonker.nl/publicatie/duurzame-aanpak-van-kinderarmoede/" target="_blank" rel="noopener noreferrer">https://www.verwey-jonker.nl/publicatie/duurzame-aanpak-van-kinderarmoede/</a>
            </li>
            <li className='mt-2'>
              <p className='mb-0'>Elanhr, E. (2021, 6 januari). Self fulfilling prophecy, pygmalion effect, een zichzelf		 vervullende voorspelling. Elan HR | Human Relations</p>
              <a className='ms-3' href="https://elanhr.nl/selffulfilling-prophecy/" target="_blank" rel="noopener noreferrer">https://elanhr.nl/selffulfilling-prophecy/</a>
            </li>
            <li className='mt-2'>
              <p className='mb-0'>Gezinsinkomen en kansarmoede. (z.d.). Opgroeien</p>
              <a className='ms-3' href="https://www.opgroeien.be/" target="_blank" rel="noopener noreferrer">https://www.opgroeien.be/</a>
            </li>
            <li className='mt-2'>
              <p className='mb-0'>Biesta, G. (2012). Goed onderwijs en de cultuur van het meten: ethiek, politiek en democratie (1ste 	editie). Boom Lemma.</p>
            </li>
            <li className='mt-2'>
              <p className='mb-0'>GO! Pro. (z.d.)</p>
              <a className='ms-3' href="https://pro.g-o.be/zoek/?q=gelijke+onderwijskansen" target="_blank" rel="noopener noreferrer">https://pro.g-o.be/zoek/?q=gelijke+onderwijskansen</a>
            </li>
            <li className='mt-2'>
              <p className='mb-0'>Help ons kinderarmoede bestrijden - Stichting Pelicano. (z.d.)</p>
              <a className='ms-3' href="https://www.pelicano.be/nl/kinderarmoede-bestrijden/" target="_blank" rel="noopener noreferrer">https://www.pelicano.be/nl/kinderarmoede-bestrijden/</a>
            </li>
            <li className='mt-2'>
              <p className='mb-0'>Heselmans, N. (2022, 9 juni). Kansarmoede bij jonge kinderen in Vlaanderen blijft dalen.		 Opgroeien</p>
              <a className='ms-3' href="https://pers.opgroeien.be/kansarmoede-bij-jonge-kinderen-in-vlaanderen-blijft-dalen" target="_blank" rel="noopener noreferrer">https://pers.opgroeien.be/kansarmoede-bij-jonge-kinderen-in-vlaanderen-blijft-dalen</a>
            </li>
            <li className='mt-2'>
              <p className='mb-0'>Het perspectief van maatschappelijk kwetsbare kinderen en jongeren in het onderwijsdebat: What do you think? (2012). In Iedereen gelijke kansen op school? Dat denken zij ervan. Drukkerij Vaes.</p>
              <a className='d-block ms-3' href="Het perspectief van maatschappelijk kwetsbare kinderen en jongeren in het onderwijsdebat: What do you think? (2012). In Iedereen gelijke kansen op school? Dat denken zij ervan. Drukkerij Vaes." target="_blank" rel="noopener noreferrer">Het perspectief van maatschappelijk kwetsbare kinderen en jongeren in het onderwijsdebat: What do you think? (2012). In Iedereen gelijke kansen op school? Dat denken zij ervan. Drukkerij Vaes.</a>
            </li>
            <li className='mt-2'>
              <p className='mb-0'>Home. (z.d.-b). Opgroeien</p>
              <a className='ms-3' href="https://www.opgroeien.be/" target="_blank" rel="noopener noreferrer">https://www.opgroeien.be/</a>
            </li>
            <li className='mt-2'>
              <p className='mb-0'>Individuele hulp – Steunpunt tot bestrijding van armoede. (z.d.)</p>
              <a className='ms-3' href="https://www.armoedebestrijding.be/vliegend/individuele-hulp/" target="_blank" rel="noopener noreferrer">https://www.armoedebestrijding.be/vliegend/individuele-hulp/</a>
            </li>
            <li className='mt-2'>
              <p className='mb-0'>Kansarme kinderen hun talenten laten ontplooien door hen een hobby aan te bieden. (z.d.)</p>
            </li>
            <li className='mt-2'>
              <p className='mb-0'>Koning Boudewijnstichting</p>
              <a className='d-block ms-3' href="https://kbs-frb.be/nl/kansarme-kinderen-hun-talenten-laten-ontplooien-door-hen-een-hobby-aan-te-bieden" target="_blank" rel="noopener noreferrer">https://kbs-frb.be/nl/kansarme-kinderen-hun-talenten-laten-ontplooien-door-hen-een-hobby-aan-te-bieden</a>
            </li>
            <li className='mt-2'>
              <p className='mb-0'>Klasse. (2011, 12 oktober). Kansarmoede? Chantal vertelt hoe het is / De Eerste Lijn afl. 5. YouTube</p>
              <a className='ms-3' href="https://www.youtube.com/watch?v=VPx9MN3rQxQ" target="_blank" rel="noopener noreferrer">https://www.youtube.com/watch?v=VPx9MN3rQxQ</a>
            </li>
            <li className='mt-2'>
              <p className='mb-0'>Kleuteronderwijs. (z.d.). Welzijnszorg</p>
              <a className='ms-3' href="https://welzijnszorg.be/jordy" target="_blank" rel="noopener noreferrer">https://welzijnszorg.be/jordy</a>
            </li>
            <li className='mt-2'>
              <p className='mb-0'>Laere, M. van. (2022, 21 november). Armoede op school herkennen en aanpakken. Klasse.</p>
              <a className='ms-3' href="url" target="_blank" rel="noopener noreferrer">https://www.klasse.be/6821/armoede-school-herkennen-aanpakken/</a>
            </li>
            <li className='mt-2'>
              <p className='mb-0'>Lancering handreiking ‘Omgaan met kinderarmoede in het sociaal domein’. (2021, 13 december). Divosa. </p>
              <a className='ms-3' href="https://www.divosa.nl/lancering-handreiking-omgaan-met-kinderarmoede-het-sociaal-domein" target="_blank" rel="noopener noreferrer">https://www.divosa.nl/lancering-handreiking-omgaan-met-kinderarmoede-het-sociaal-domein</a>
            </li>
            <li className='mt-2'>
              <p className='mb-0'>Maak je sterk tegen armoede op school | Netwerk tegen Armoede. (2019, 19 december). </p>
              <a className='ms-3' href="https://www.netwerktegenarmoede.be/nl/nieuws/2019/maak-je-sterk-tegen-armoede-op-school" target="_blank" rel="noopener noreferrer">https://www.netwerktegenarmoede.be/nl/nieuws/2019/maak-je-sterk-tegen-armoede-op-school</a>
            </li>
            <li className='mt-2'>
              <p className='mb-0'>Maeght, C. de. (2022, 22 november). Zo ga je het gesprek met ouders in kansarmoede aan. Klasse.</p>
              <a className='ms-3' href="https://www.klasse.be/611298/gesprekstips-ouders-in-kansarmoede/?utm_medium=referral" target="_blank" rel="noopener noreferrer">https://www.klasse.be/611298/gesprekstips-ouders-in-kansarmoede/?utm_medium=referral</a>
            </li>
            <li className='mt-2'>
              <p className='mb-0'>Lusse M. & Kassenberg, A. (2021). Omgaan met kinderarmoede in het sociaal domein. Handreiking		 voor professionals. Hogeschool Rotterdam en Hanzehogeschool Groningen.</p>
            </li>
            <li className='mt-2'>
              <p className='mb-0'>Lusse M. & Kassenberg, A. (2020). Omgaan met armoede op scholen. Handreiking voor po en vo.
                Hogeschool Rotterdam en Hanzehogeschool Groningen.
              </p>
            </li>
            <li className='mt-2'>
              <p className='mb-0'>Mattheuseffect in de kijker. (z.d.). EXPOO. </p>
              <a className='ms-3' href="https://www.expoo.be/mattheuseffect-in-de-kijker" target="_blank" rel="noopener noreferrer">https://www.expoo.be/mattheuseffect-in-de-kijker</a>
            </li>
            <li className='mt-2'>
              <p className='mb-0'>Mission Statement. (z.d.). vclb de wissel Antwerpen. Geraadpleegd op 24 december 2022</p>
              <a className='ms-3' href="http://www.vclbdewisselantwerpen.be/pdf/Mission%20Statement.pdf" target="_blank" rel="noopener noreferrer">http://www.vclbdewisselantwerpen.be/pdf/Mission%20Statement.pdf</a>
            </li>
            <li className='mt-2'>
              <p className='mb-0'>Omgaan met ouders. (z.d.). Geraadpleegd op 16 december 2022</p>
              <a className='ms-3' href="https://docplayer.nl/2934817-Omgaan-met-ouders-omgaan-ouders.html" target="_blank" rel="noopener noreferrer">https://docplayer.nl/2934817-Omgaan-met-ouders-omgaan-ouders.html</a>
            </li>
            <li className='mt-2'>
              <p className='mb-0'>Omroep Gelderland. (2022, 7 oktober). Toenemende armoede geeft basisscholen kopzorgen [Video]. YouTube. </p>
              <a className='ms-3' href="https://www.youtube.com/watch?v=72XZggeE5eY" target="_blank" rel="noopener noreferrer">https://www.youtube.com/watch?v=72XZggeE5eY</a>
            </li>
            <li className='mt-2'>
              <p className='mb-0'>PISA Nederland – “Programme for International Student Assessment”. (z.d.)</p>
              <a className='ms-3' href="https://www.pisa-nederland.nl/" target="_blank" rel="noopener noreferrer">https://www.pisa-nederland.nl/</a>
            </li>
            <li className='mt-2'>
              <p className='mb-0'>PROPORTIONEEL UNIVERSALISME IN DE PRAKTIJK ELK GEZIN TELT - PDF Gratis download. (z.d.)</p>
              <a className='ms-3' href="https://docplayer.nl/113349423-Proportioneel-universalisme-in-de-praktijk-elk-gezin-telt.html" target="_blank" rel="noopener noreferrer">https://docplayer.nl/113349423-Proportioneel-universalisme-in-de-praktijk-elk-gezin-telt.html</a>
            </li>
            <li className='mt-2'>
              <p className='mb-0'>Ryckaert, L. (2022). Omgaan met ouders: Hoe het gesprek voeren? Een gids voor leraren 		(1ste editie). Lannoo.</p>
            </li>
            <li className='mt-2'>
              <p className='mb-0'>Ryckaert, L. (2005). Omgaan met ouders: een praktische handleiding in gespreks-en		 communicatie technieken voor leerkrachten (1ste editie). Lannoo.</p>
            </li>
            <li className='mt-2'>
              <p className='mb-0'>Sociaal werk voor een sterke sociale basis. (z.d.). Sociaal Werk Nederland</p>
              <a className='d-block ms-3' href="https://www.sociaalwerknederland.nl/thema/sociaalwerkalgemeen/nieuws/6049sociaalwerkvooreensterkesocialebasis" target="_blank" rel="noopener noreferrer">https://www.sociaalwerknederland.nl/thema/sociaalwerkalgemeen/nieuws/6049sociaalwerkvooreensterkesocialebasis</a>
            </li>
            <li className='mt-2'>
              <p className='mb-0'>Sociale Kaart. (z.d.)</p>
              <a className='ms-3' href="https://www.desocialekaart.be/" target="_blank" rel="noopener noreferrer">https://www.desocialekaart.be/</a>
            </li>
            <li className='mt-2'>
              <p className='mb-0'>Steunpunt Diversiteit & Leren | Armoede & sociale ongelijkheid. (z.d.)</p>
              <a className='ms-3' href="https://diversiteitenleren.be/themas/armoede-sociale-ongelijkheid" target="_blank" rel="noopener noreferrer">https://diversiteitenleren.be/themas/armoede-sociale-ongelijkheid</a>
            </li>
            <li className='mt-2'>
              <p className='mb-0'>Stichting - Fondation Pelicano. (2022, 10 oktober). Week Tegen Kinderarmoede - een leeg 		bord, dat is pas echt schrikken (30s) [Video]. YouTube.	</p>
              <a className='ms-3' href="https://www.youtube.com/watch?v=EcJKwrRYinU" target="_blank" rel="noopener noreferrer">https://www.youtube.com/watch?v=EcJKwrRYinU</a>
            </li>
            <li className='mt-2'>
              <p className='mb-0'>witte, de & Maldonado. (2022). moeten ouders huiswerk krijgen? Ouderbetrokkenheid in het 	onderwijs. Geraadpleegd op 16 december 2022</p>
              <a className='ms-3' href="https://feb.kuleuven.be/research/les/pdf/LES 2022 - 193 Ouderbetrokkenheid.pdf" target="_blank" rel="noopener noreferrer">https://feb.kuleuven.be/research/les/pdf/LES 2022 - 193 Ouderbetrokkenheid.pdf</a>
            </li>
          </ul>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Sluiten
          </Button>{' '}
        </ModalFooter>
      </Modal>
    </div>
  );
}