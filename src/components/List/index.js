import React from 'react'
import PropTypes from 'prop-types'

import './styles.css'

const ListItem = ({
  title,
  description,
  image,
  onClick,
}) => (
  <li onClick={onClick}>
    <div className="listX-content">
      {image && <img src={image} alt={`Image by ${title}`} width={145} height={145} />}
      <span className='listX-title'>{title}</span>
      <span className='listX-description'>{description}</span>
    </div>
  </li>
)

ListItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  onClick: PropTypes.func,
}

export default ListItem
