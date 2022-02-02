import './BackgroundCSS.css'

import ChampionPageSection from '../ChampionPageSection'
import PropTypes from 'prop-types'
import React from 'react'

const Background = ({championPage, setSearchInitial}) => {
  return (
        championPage === 'home' ?
            (<img
                className='BackgroundImg'
                alt='Background'
                src='./assets/images/Noxus_Landscape2.jpg'
                onLoad={setSearchInitial}
            />) :
            (<ChampionPageSection/>)
  )
}

Background.propTypes = {
    championPage: PropTypes.string.isRequired,
    setSearchInitial: PropTypes.func.isRequired,
}

export default Background
