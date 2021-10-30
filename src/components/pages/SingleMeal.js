import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router"
import { getMealByIdAction } from "../../redux/actions"
import SimilarMeals from "./SimilarMeals"
import {
  StyledSingleMeal,
  Info,
  Recipe,
  Description,
} from "../styles/SingleMeal.styled"

function SingleMeal() {
  const singleMeal = useSelector((state) => state.getMealById)
  const dispatch = useDispatch()
  const { idMeal } = useParams()

  useEffect(() => {
    dispatch(getMealByIdAction(idMeal))
  }, [dispatch])

  const listOfIngredients = []
  const listOfMeasures = []
  // Filling arrays with ingredients and measures
  if (singleMeal) {
    // Filtering ingredients and measures properties
    const ingredientKeys = Object.keys(singleMeal.meals[0]).filter(
      (key) => key.indexOf("strIngredient") === 0
    )
    const measureKeys = Object.keys(singleMeal.meals[0]).filter(
      (key) => key.indexOf("strMeasure") === 0
    )

    for (let i = 0; i < ingredientKeys.length; i++) {
      const temp = singleMeal.meals[0][`${ingredientKeys[i]}`]
      if (temp !== "" && temp !== " " && temp !== null) {
        listOfIngredients.push(temp)
      }
    }

    for (let i = 0; i < measureKeys.length; i++) {
      const temp = singleMeal.meals[0][`${measureKeys[i]}`]
      if (temp !== "" && temp !== " " && temp !== null) {
        listOfMeasures.push(temp)
      }
    }
  }

  const singleMealJSX = singleMeal
    ? singleMeal.meals.map((meal) => {
        return
        <StyledSingleMeal key={meal.idMeal}>
          <Info>
            <h2>{meal.strMeal}</h2>
            <img src={meal.strMealThumb} alt="Single Meal" />
            <Recipe>
              <div>
                <p>
                  <b>Ingredients</b>
                </p>
                {listOfIngredients.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </div>
              <div>
                <p>
                  <b>Measures</b>
                </p>
                {listOfMeasures.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </div>
            </Recipe>
          </Info>
          <Description>
            <h3>
              {meal.strTags
                ? meal.strTags.split(",").map((tag) => `#${tag} `)
                : null}
            </h3>
            <p>
              <b>Category: </b>
              {meal.strCategory}
            </p>
            <p>
              <b>Country: </b>
              {meal.strArea}
            </p>
            <p>
              <b>Video: </b>
              {meal.strYoutube}
            </p>
            <br />
            <p>{meal.strInstructions}</p>
          </Description>
        </StyledSingleMeal>
      })
    : null

  return (
    <>
      {singleMealJSX}
      <SimilarMeals singleMeal={singleMeal} />
    </>
  )
}

export default SingleMeal
