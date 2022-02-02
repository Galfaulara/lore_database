import './BackgroundCSS.css'

import Banner from '../Banner'
import ChampionPageSection from '../ChampionPageSection'
import PropTypes from 'prop-types'
import React from 'react'

const Background = ({championPage, setSearchInitial}) => {
  return (
        championPage === 'home' ?
            (<Banner/>) :
            (<ChampionPageSection/>)
  )
}

Background.propTypes = {
    championPage: PropTypes.string.isRequired,
    setSearchInitial: PropTypes.func.isRequired,
}

export default Background
