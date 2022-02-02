import './BackgroundCSS.css'

import Banner from '../Banner'
import ChampionDetail from '../ChampionDetail'
import PropTypes from 'prop-types'
import React from 'react'

const Background = ({championPage, setSearchInitial}) => {
  return (
        championPage === 'home' ?
            (<Banner/>) :
            (<ChampionDetail/>)
  )
}

Background.propTypes = {
    championPage: PropTypes.string.isRequired,
    setSearchInitial: PropTypes.func.isRequired,
}

export default Background
