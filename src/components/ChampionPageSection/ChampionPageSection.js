import {CHAMP_BCKGRND_URL} from '../../constants'
import React from 'react';

function ChampionDetail({championPage, setSearchInitial}) {
  return <div className='ChampPageContent'>
  <img
      className='ChampBackgroundImg'
      alt='ChampBackground'
      src={`${CHAMP_BCKGRND_URL}${championPage}_0.jpg`}
      />

  </div>;
}

export default ChampionDetail;