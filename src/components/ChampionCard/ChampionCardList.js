import React from 'react'
import { ChampionCard } from './ChampionCard';
import './ChampionCardListCSS.css';

const ChampionCardList = ({ Champions }) =>{

    const ChampionArray = Champions.map((Champion, i) =>{
        return (

            <ChampionCard 
            key={i} 
            name={Champions[i].name} 
            title={Champions[i].title}
            image={Champions[i].image}
            id={Champions[i].id}
            />
            
            )


    });


    
    return (
        <div className='ChampionCardStyle' style={{display: 'flex', flexDirection:'row', flexWrap:'wrap'}}>
           {ChampionArray}
        </div>
    )
}

export {ChampionCardList};
