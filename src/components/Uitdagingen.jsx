import React from 'react'
import ArmoedeOnderwijsTabs from './ArmoedeOnderwijsTabs'
import werkwijzenPerCategorie from './werkwijzenPerCategorie.png'

export default function Uitdagingen(props) {
  return (
    <div className='container'>


      <h3>Kansarmoede in het onderwijs</h3>
      <p>Vanuit ons onderzoek naar kansarmoede binnen de evolutie van sociale ongelijkheid zijn we op zoek gegaan naar de kansen, bedreigingen en uitdagingen die een rol spelen en belangrijk zijn in het onderwijs. De kansen, bedreigingen en uitdagingen die we zijn tegengekomen tijdens ons onderzoek hebben we opgedeeld in 3 categorieën: signaleren, ondersteunen, stimuleren.</p>
      <p>In de vroege kinderjaren, voordat kinderen naar school gaan, worden de hersenstructuren al gevormd. De hersenstructuren leggen de basis voor een goede ontwikkeling op lange termijn en ook de kansen die iemand heeft op volwassen leeftijd. De hersenstructuren van kinderen die leven in kansarmoede zijn minder goed ontwikkeld, dan deze van kinderen uit een kansrijk milieu. Stressvolle situaties hebben een negatieve invloed op het brein (Duurzame aanpak van kinderarmoede, 2022).  </p>
      <p>Het is dan ook van groot belang dat kansarmoede in gezinnen vroeg wordt gesignaleerd en opgepakt. Maar hoe doen we dat en welke rol heeft het onderwijs hierin? Dat willen we graag in onderstaande tekst verduidelijken.</p>

      <img  src={werkwijzenPerCategorie} alt='overzicht werkwijzen per categorie' className='mx-auto d-block mb-4' width={600}></img>
      <p>Ministerie van Onderwijs, Cultuur en Wetenschap. (2022, 3 november). Handreiking Omgaan met armoede op scholen. Publicatie | Gelijke kansen. </p>


      <ArmoedeOnderwijsTabs />



    </div>
  )
}
