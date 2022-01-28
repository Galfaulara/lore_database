import './ChampionCardCSS.css'

import React from 'react'

function ToBackground() {
    console.log('clicking Div');


};

export const ChampionCard = ({ name, title, id }) => {
    return (


        <div className='Card' onClick={() => console.log('clicking Div', { name })} >

            <img className='ChampionCardBackground' alt='' src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${id}_0.jpg`} />
            <div className='CardText'>
                <h2>{name}</h2>
                <p>{title}</p>
            </div>

        </div>


    )
}    
