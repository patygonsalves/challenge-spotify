import React from 'react'
import PropTypes from 'prop-types'

import './styles.css'

const SearchField = ({
  name,
  value,
  placeholder,
  onChange,
}) => (
  <div className="inputX-field">
    <input
      spellCheck={false}
      className="inputX-input"
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      role='input'
    />
  </div>
)

SearchField.propTypes = {
  placeholder: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
}

export default SearchField
