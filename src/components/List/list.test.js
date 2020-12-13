import React from 'react'
import '@testing-library/jest-dom/extend-expect'

import { render, screen } from '@testing-library/react'

import List from '.'

describe('<List />', () => {
  test('should render SearchField', () => {
    const { container } = render(
      <List
        title={'Taylor Swift'}
        description={'folklore'}
        image={'http://imagetaylor'}
      />
    )

    expect(screen.getByText(/taylor swift/i)).toBeInTheDocument()
    expect(screen.getByText(/folklore/i)).toBeInTheDocument()
    expect(screen.getByAltText(/Image by taylor swift/i)).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })


})
