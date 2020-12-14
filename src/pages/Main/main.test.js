import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

// utils
import { renderWithRedux } from '../../utils/reduxTest'

import Main from '.'

describe('<Main />', () => {
  test('should render Main', () => {
    const { container } = render(
      renderWithRedux(
        <Main
          searchAlbums={[]}
          searchArtists={[]}
          searchActions={{}}
        />
      )
    )

    expect(screen.getByText(/busque por artistas, álbuns ou músicas/i)).toBeInTheDocument()
    expect(screen.getByText(/álbuns buscados recentemente/i)).toBeInTheDocument()
    expect(screen.getByText(/artistas buscados recentemente/i)).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
