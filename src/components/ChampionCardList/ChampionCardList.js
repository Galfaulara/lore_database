import './ChampionCardCSS.css';

import ChampionCard from './ChampionCard';
import React from 'react'

const ChampionCardList = ({ Champions }) => {

    const ChampionArray = Champions.map((champion, i) => {
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
        <div className='ChampionCardStyle' id='hoverable' style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
            {ChampionArray}
        </div>
    )
}

export { ChampionCardList };
