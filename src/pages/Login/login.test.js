import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

// utils
import { renderWithRedux } from '../../utils/reduxTest'

import Login from '.'

describe('<Login />', () => {
  test('should render Login', () => {
    const { container } = render(
      renderWithRedux(
        <Login
          auth={{}}
          authActions={{}}
        />
      )
    )

    expect(screen.getByText(/spotify challenge/i)).toBeInTheDocument()
    expect(screen.getByText(/serviço de música digital que dá acesso a milhões de músicas/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
