/**
 * @jest-environment jsdom
 */
import React from 'react'
import {render} from '@testing-library/react'

import Home from '../pages/index'

describe('Home page', () => {
  test('Home page renders', () => {
    const { container } = render(<Home />)
  
    expect(container).toMatchSnapshot()
  })
  test('Heading renders on page', () => {
    const { queryByText } = render(<Home />)
    
    expect(queryByText(/Welcome/)).toBeTruthy()
  })
})