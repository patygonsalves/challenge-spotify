import React from 'react'
import '@testing-library/jest-dom/extend-expect'

import { render, screen } from '@testing-library/react'

import SpotifyIcon from './Spotify'

describe('<SpotifyIcon />', () => {
  test('should render SpotifyIcon', () => {
    const { container } = render(<SpotifyIcon />)

    expect(screen.getByLabelText(/spotify icon/i)).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

})
