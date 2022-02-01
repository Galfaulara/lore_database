import './BackgroundCSS.css'

import {CHAMP_BCKGRND_URL} from '../../constants'
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
            (<div className='ChampPageContent'>
                <img
                    className='ChampBackgroundImg'
                    alt='ChampBackground'
                    src={`${CHAMP_BCKGRND_URL}${championPage}_0.jpg`}
                    />
            </div>)
  )
}

Background.propTypes = {
    championPage: PropTypes.string.isRequired,
    setSearchInitial: PropTypes.func.isRequired,
}

export default Background
