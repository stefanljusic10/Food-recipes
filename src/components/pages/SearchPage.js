import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import {
  listOfCategoriesAction,
  getRandomMealAction,
  searchNameAction,
} from "../../redux/actions"
import OurRecomendation from "./OurRecomendation"
import Meals from "./Meals"

function SearchPage() {
  const { searchTerm } = useParams()
  const randomMeal = useSelector((state) => state.randomMeal)
  const searchData = useSelector((state) => state.search)
  // const listOfCategories = useSelector((state) => state.listOfCategories[0]);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getRandomMealAction())
    dispatch(searchNameAction(searchTerm))
    dispatch(listOfCategoriesAction())
  }, [])

  return (
    <>
      <OurRecomendation recomendedMeal={randomMeal} />
      <Meals meals={searchData[0]} />
    </>
  )
}

export default SearchPage
