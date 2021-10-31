import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import OurRecomendation from './OurRecomendation'
import Meals from './Meals'
import { searchDataThunk } from '../../redux/thunks/searchDataThunk'
import { listOfCategoriesThunk } from '../../redux/thunks/listOfCategoriesThunk'
import { getRandomMealThunk } from '../../redux/thunks/getRandomMealThunk'

function SearchPage() {
  const { searchTerm } = useParams()
  const { getRandomMeal } = useSelector((state) => state.getRandomMeal)
  const { searchData } = useSelector((state) => state.searchData)
  const dispatch = useDispatch()
  console.log(getRandomMeal)

  useEffect(() => {
    dispatch(getRandomMealThunk())
    dispatch(searchDataThunk(searchTerm))
    dispatch(listOfCategoriesThunk())
  }, [])

  return (
    <>
      <OurRecomendation recomendedMeal={getRandomMeal} /> */
      <Meals meals={searchData[0]} />
    </>
  )
}

export default SearchPage
