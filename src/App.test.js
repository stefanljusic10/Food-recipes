import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import App from './App'

it('render header', () => {
  const { getByTestId } = render(<App />)
  expect(getByTestId('header')).toBeInTheDocument()
})

it('render homepage', () => {
  const { getByTestId } = render(<App />)
  expect(getByTestId('homepage')).toBeInTheDocument()
})

it('render footer', () => {
  const { getByTestId } = render(<App />)
  expect(getByTestId('footer')).toBeInTheDocument()
})
