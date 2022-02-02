import './ChampionCardCSS.css'

import {Link, BrowserRouter as Router} from 'react-router-dom'

import {CHAMP_BCKGRND_URL} from '../../../constants'
import PropTypes from 'prop-types'
import React from 'react'

export const ChampionCard = ({name, title, id, setPageChampion}) => {
    return (
<Router>
<Link to={`${name}`} style={{ textDecoration: 'none', outline:'none'}}>
<div  className='Card' onClick={() => setPageChampion({name})} >

    <img
    className='ChampionCardBackground' alt=''
    src={`${CHAMP_BCKGRND_URL}${id}_0.jpg`}
    />
    <div className='CardText'>
        <h2>{name}</h2>
        <p>{title}</p>
    </div>

 </div >
</Link>
</Router>
      


        


    )
}


  ChampionCard.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    setPageChampion: PropTypes.func.isRequired,
  }

export default ChampionCard

