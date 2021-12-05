import React from 'react'
import { useSelector } from 'react-redux'
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, screen } from '@testing-library/react'
import { Wrapper } from '../../services/testUtils'
import Categories from './Categories'

const { isOpen } = useSelector((state) => state.toggleCategories)

describe('Categories component', () => {
    it('is loaded', () => {
        const { getByTestId } = Wrapper(<Categories />)
        if(isOpen){
            expect(getByTestId('categories')).toBeInTheDocument()
        } else {
            expect(getByTestId('categories')).not.toBeInTheDocument()
        }
    })
})