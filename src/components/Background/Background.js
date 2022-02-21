import './BackgroundCSS.css'

import Banner from '../Banner'
import ChampionDetail from '../ChampionDetail'
import PropTypes from 'prop-types'
import React from 'react'
import { SliderData } from '../Banner/SliderData'

const Background = ({championPage, setSearchInitial}) => {
  return (
        championPage === 'home' ?
            (<Banner slides={SliderData}/>) :
            (<ChampionDetail/>)
  )
}

Background.propTypes = {
    championPage: PropTypes.string.isRequired,
    setSearchInitial: PropTypes.func.isRequired,
}

export default Background
