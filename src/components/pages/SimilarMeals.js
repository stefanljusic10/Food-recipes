import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectedCategoryThunk } from '../../redux/thunks/selectedCategoryThunk'
import { getMealByIdThunk } from '../../redux/thunks/getMealByIdThunk'
import { StyledSimilar, SimilarLink, Item } from '../../styles/SimilarMeals.styled'

function SimilarMeals({ singleMeal }) {
  const { selectedCategory } = useSelector((state) => state.selectedCategory)
  const dispatch = useDispatch()

  useEffect(() => {
    if (singleMeal) {
      dispatch(selectedCategoryThunk(singleMeal.meals[0].strCategory))
    }
  }, [singleMeal])

  // Getting random meals without single selected meal
  // No repetition

  function listOfMealsFunc(numOfMeals) {
    const randomMeals = []
    let listOfSimilarMeals = []
    let randomIndex
    let numOfMealsCopy = numOfMeals

    if (selectedCategory && singleMeal) {
      listOfSimilarMeals = selectedCategory.meals.filter(
        (meal) => meal.idMeal !== singleMeal.meals[0].idMeal,
      )

      while (numOfMealsCopy > 0) {
        randomIndex = Math.floor(Math.random() * listOfSimilarMeals.length)
        randomMeals.push(listOfSimilarMeals[randomIndex])
        listOfSimilarMeals.splice(randomIndex, 1)
        --numOfMealsCopy
      }
      return randomMeals
    }
    return null
  }

  const similarMealsList = listOfMealsFunc(3)

  const similarMealsJSX = similarMealsList
    ? similarMealsList.map((meal) => (
      <SimilarLink
        onClick={() => dispatch(getMealByIdThunk(meal.idMeal))}
        to={`/single-meal/id=${meal.idMeal}`}
        key={meal.idMeal}
      >
        <Item id={meal.idMeal}>
          <img src={meal.strMealThumb} alt='Meal' />
          <h3>{meal.strMeal}</h3>
        </Item>
      </SimilarLink>
    ))
    : null

  return (
    <StyledSimilar>
      <h1>Similar meals</h1>
      <div className='similarMeals'>{similarMealsJSX}</div>
    </StyledSimilar>
  )
}

export default SimilarMeals
