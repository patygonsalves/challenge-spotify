import React from 'react'
import '@testing-library/jest-dom/extend-expect'

import { render, screen } from '@testing-library/react'

import ListTrack from '.'

describe('<ListTrack />', () => {
  test('should render SearchField', () => {
    const { container } = render(
      <ListTrack
        number={1}
        name={'folklore'}
        time={'3:50'}
      />
    )

    expect(screen.getByText(/folklore/i)).toBeInTheDocument()
    expect(screen.getByText(/1/i)).toBeInTheDocument()
    expect(screen.getByText(/3:50/i)).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

})
