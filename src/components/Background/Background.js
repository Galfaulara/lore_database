import './BackgroundCSS.css'

import PropTypes from 'prop-types'
import React from 'react'

const Background = ({championPage, setSearchInitial}) => {
  const URL_XD = 'https://ddragon.leagueoflegends.com/cdn/img/champion/loading/'
  return (
        championPage === 'home' ?
            (<img
                className='BackgroundImg'
                alt='Background'
                src='./assets/images/Noxus_Landscape2.jpg'
                onLoad={setSearchInitial}
            />) :
            (<div className='ChampPageContent'>
                <img
                    className='ChampBackgroundImg'
                    alt='ChampBackground'
                    src={`${URL_XD}${championPage}_0.jpg`}
                    />
            </div>)
  )
}

Background.propTypes = {
    championPage: PropTypes.string.isRequired,
    setSearchInitial: PropTypes.func.isRequired,
}

export default Background
