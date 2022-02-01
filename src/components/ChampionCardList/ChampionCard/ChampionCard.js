import './ChampionCardCSS.css'

import {CHAMP_BCKGRND_URL} from '../../../constants'
import React from 'react'

export const ChampionCard = ({name, title, id, setPageChampion}) => {
    return (


        <div className='Card' onClick={() => setPageChampion({name})} >

            <img
            className='ChampionCardBackground' alt=''
            src={`${CHAMP_BCKGRND_URL}${id}_0.jpg`}
            />
            <div className='CardText'>
                <h2>{name}</h2>
                <p>{title}</p>
            </div>

        </div >


    )
}


  ChampionCard.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    setPageChampion: PropTypes.func.isRequired,
  }

export default ChampionCard

