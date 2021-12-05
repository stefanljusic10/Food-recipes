import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, screen } from '@testing-library/react'
import Home from './Home'
import Welcome from './Welcome'
import Categories from './Categories'
import { headerInfo } from '../../assets/headerInfo'
import { Wrapper } from '../../services/testUtils'

describe('Welcome component', () => {
    it('render header', () => {
        const { getByRole } = Wrapper(<Welcome />)
        const header = headerInfo.head
        expect(getByRole('heading').textContent).toEqual(header)
    })

    it('toggle on button click', async () => {
        const { getByRole } = Wrapper(<Welcome />)
        const button = getByRole('button')
        await fireEvent.click(button)
        expect(screen.getByTestId('categories')).toBeInTheDocument()
    })
})