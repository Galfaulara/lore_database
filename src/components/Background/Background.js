import './BackgroundCSS.css'

import React from 'react'
import load from './BackgroundCSS.css'

const Background = ({ championPage, setSearchInitial }) => {
    return (
        championPage === 'home' ?
            (<img className='BackgroundImg' alt='Background' src='./assets/images/Noxus_Landscape2.jpg' onLoad={setSearchInitial} />) :
            (

                <div className='ChampPageContent' id='ChampPageContent' >

                    <img className='ChampBackgroundImg' alt='ChampBackground' src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${championPage}_0.jpg`} />

                </div >


            )


    )
};

export default Background