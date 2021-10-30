import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCategoriesAction } from "../../redux/actions"
import { HomeItem } from "../styles/HomeItem.styled"
import {
  StyledCategories,
  CategoriesLink,
  Item,
  ItemImage,
  ItemHeader,
} from "../styles/Categories.styled"

function Categories() {
  const categories = useSelector((state) => state.categories)
  const toggleCategories = useSelector((state) => state.toggleCategories)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCategoriesAction())
  }, [])

  const listOfCategoriesJSX =
    categories && toggleCategories.isOpen
      ? categories.categories.map((category) => (
          <CategoriesLink
            to={`/category/c=${category.strCategory}`}
            key={category.idCategory}
          >
            <Item>
              <ItemImage src={category.strCategoryThumb} alt="Meal category" />
              <ItemHeader>{category.strCategory}</ItemHeader>
            </Item>
          </CategoriesLink>
        ))
      : null

  return (
    <HomeItem>
      <StyledCategories>{listOfCategoriesJSX}</StyledCategories>
    </HomeItem>
  )
}

export default Categories
