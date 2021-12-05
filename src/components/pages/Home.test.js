import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import Home from './Home'
import { Wrapper } from '../../services/testUtils'

describe('Home component', () => {
  it('render welcome', () => {
    const { getByTestId } = Wrapper(<Home />)
    expect(getByTestId('welcome')).toBeInTheDocument()
  })
  
  it('render categories', () => {
    const { getByTestId } = Wrapper(<Home />)
    expect(getByTestId('categories')).toBeInTheDocument()
  })
  
  it('render about us', () => {
    const { getByTestId } = Wrapper(<Home />)
    expect(getByTestId('about')).toBeInTheDocument()
  })
  
  it('render contact', () => {
    const { getByTestId } = Wrapper(<Home />)
    expect(getByTestId('contact')).toBeInTheDocument()
  })
})
