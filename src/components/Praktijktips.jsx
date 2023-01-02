import React from 'react'
// import img1 from '../afbeeldingen/praktijktipsAfbeeldingen/1.png'
// import img2 from '../afbeeldingen/praktijktipsAfbeeldingen/2.png'
// import img3 from '../afbeeldingen/praktijktipsAfbeeldingen/3.png'
// import img4 from '../afbeeldingen/praktijktipsAfbeeldingen/4.png'
// import img5 from '../afbeeldingen/praktijktipsAfbeeldingen/5.png'
// import img6 from '../afbeeldingen/praktijktipsAfbeeldingen/6.png'
// import img7 from '../afbeeldingen/praktijktipsAfbeeldingen/7.png'
// import img8 from '../afbeeldingen/praktijktipsAfbeeldingen/8.png'
// import img9 from '../afbeeldingen/praktijktipsAfbeeldingen/9.png'
// import img10 from '../afbeeldingen/praktijktipsAfbeeldingen/10.png'
// import img11 from '../afbeeldingen/praktijktipsAfbeeldingen/11.png'

export default function Home() {
    return (
        <div className='container'>
            <h3>…En nu concreet in de praktijk</h3>

            <h6>Tips voor goede gesprekken met ouders: </h6>
            {/* <img className='imgGesprek mb-0 imgCentered' src={img1} alt="" />
            <img className='imgGesprek mb-0 imgCentered' src={img2} alt="" />
            <img className='imgGesprek mb-0 imgCentered' src={img3} alt="" />
            <img className='imgGesprek mb-0 imgCentered' src={img4} alt="" /> */}

            <p>Bent u opzoek naar concrete praktijktips om goede gesprekken aan te gaan met ouders? Dan kan u het onderstaande artikel raadplegen. In dit artikel van 'Klasse' wordt uitgelegd hoe je op een correcte en respectvolle manier gesprekken kan voeren (Maeght, 2022). </p>
            <a href="https://www.klasse.be/611298/gesprekstips-ouders-in-kansarmoede/?utm_medium=referral" target="_blank" rel="noopener noreferrer"><button className='btn btn-primary mb-4'>Artikel: Zo ga je het gesprek met ouders in kansarmoede aan </button></a>


            <h6>Hoe pakken we een gesprek aan rond financiën: </h6>
            <p>Een gesprek aangaan met ouders over onbetaalde schoolfacturen is een moeilijk gesprek om te voeren. In het onderstaande artikel van 'Klasse' vind je richtlijnen om een moeilijk onderwerp bespreekbaar te maken zonder ouders te kwetsen, maar eerder om ze het gevoel te geven dat ze bij de school terecht kunnen (Goossens, 2022). </p>
            <a href="https://www.klasse.be/237640/armoedebeleid-school-dialoog-schoolboeken/?utm_medium=referral&utm_source=smartschool_be&utm_campaign=wel_dure_sneakers_geen_schoolboeken&utm_term=smartschool" target="_blank" rel="noopener noreferrer"><button className='btn btn-primary mb-4'>Artikel: Armoedebeleid: wel dure sneakers, geen geld voor schoolboeken? </button></a>

            <h6>Tools om rond kansarmoede te werken in de klas:</h6>
            <p>In de klas kan je armoede bespreekbaar maken met Jordy. Welzijnszorg biedt educatieve materialen aan om te werken in de klas rond kansarmoede. Je vindt er zowel educatieve als gratis materialen. Hieronder de link naar de website van Welzijnszorg, meer bepaald naar Jordy (kleuteronderwijs,z.d.).</p>
            <a href="https://welzijnszorg.be/jordy" target="_blank" rel="noopener noreferrer"><button className='btn btn-primary mb-4'>Jordy: Samen tegen armoede </button></a>


            
            
        </div>
    )
}
