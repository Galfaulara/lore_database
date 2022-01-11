import React from 'react'
import './ChampionCardCSS.css'

export const ChampionCard = ({name, title, image, id}) =>
{
        return(
    <div className='Card'>
        <img className='ChampionCardBackground' alt='' src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${id}_0.jpg`}/>
            <div className='CardText'>
                <h2>{name}</h2>
                <p>{title}</p>     
            </div>
                   
    </div>
    

)
    }    
