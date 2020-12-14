import React from 'react'
import PropTypes from 'prop-types'

import './styles.css'

const ListTrack = ({
  number,
  name,
  time,
}) => (
  <li className='listTrackX-container'>
    <span className='listTrackX-text'>{number}.</span>
    <span className='listTrackX-description'>{name}</span>
    <span className='listTrackX-text'>{time}</span>
  </li>
)

ListTrack.propTypes = {
  number: PropTypes.number,
  name: PropTypes.string,
  time: PropTypes.string,
}

export default ListTrack
