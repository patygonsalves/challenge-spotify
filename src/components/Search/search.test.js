import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'

import { render, screen } from '@testing-library/react'

import SearchField from '.'

describe('<SearchField />', () => {
  test('should render SearchField', () => {
    const { container } = render(
      <SearchField
        name={'search'}
        value={''}
        placeholder={'busque seu artista...'}
        onChange={jest.fn()}
      />
    )

    expect(screen.getByPlaceholderText(/busque seu artista.../i)).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  test('calls change handler for an input', () => {
    const handleChange = jest.fn()
    const { getByRole } = render(
      <SearchField
        name={'search'}
        value={''}
        placeholder={'busque seu artista...'}
        onChange={handleChange}
      />
    )
    const input = getByRole('input')
    userEvent.type(input, 'taylor swift')
    expect(handleChange).toHaveBeenCalled()
  })
})
