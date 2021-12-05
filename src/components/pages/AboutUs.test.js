import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { screen } from '@testing-library/react'
import { Wrapper } from '../../services/testUtils'
import AboutUs from './AboutUs'

describe('About us component', () => {
    it('test', () => {
        Wrapper(<AboutUs />)
        expect(screen.getByText(/McClintock/i)).toBeInTheDocument()
    })
})