import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import OurRecomendation from './OurRecomendation'
import Meals from './Meals'
import { selectedCategoryThunk } from '../../redux/thunks/selectedCategoryThunk'

function Category() {
  const { categoryName } = useParams()
  const dispatch = useDispatch()
  const { selectedCategory } = useSelector((state) => state.selectedCategory)

  useEffect(() => {
    dispatch(selectedCategoryThunk(categoryName))
  }, [dispatch])

  return (
    <div>
      <OurRecomendation recomendedMeal={selectedCategory} />
      <Meals meals={selectedCategory} />
    </div>
  )
}

export default Category
