import './ChampionCardCSS.css'

import React from 'react'

export const ChampionCard = ({ name, title, id, setPageChampion, championPage }) => {
    return (


        <div className='Card' onClick={() => setPageChampion({ name })} >

            <img className='ChampionCardBackground' alt='' src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${id}_0.jpg`} />
            <div className='CardText'>
                <h2>{name}</h2>
                <p>{title}</p>
            </div>

        </div >


    )
}

export default ChampionCard

