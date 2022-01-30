import ChampionCard from './ChampionCard';
import React from 'react'

const ChampionCardList = ({ Champions }) => {

    const ChampionArray = Champions.map(({ name, title, image, id }) => {
        return (

            <ChampionCard
                key={id}
                name={name}
                title={title}
                image={image}
                id={id}
            />

        )


    });



    return (
        <div className='ChampionCardStyle' id='hoverable' >
            {ChampionArray}
        </div>
    )
}

export { ChampionCardList };
