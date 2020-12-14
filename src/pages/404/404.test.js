import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import PageNotFound from '.'

describe('<PageNotFound />', () => {
  test('should render PageNotFound', () => {
    const { container } = render(
      <PageNotFound />
    )

    expect(screen.getByText(/ops, parece que esta página não foi encontrada!/i)).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
