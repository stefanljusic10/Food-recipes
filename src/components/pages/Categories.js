import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategoriesThunk } from '../../redux/thunks/getCategoriesThunk'
import { HomeItem } from '../../styles/HomeItem.styled'
import {
  StyledCategories, CategoriesLink, Item, ItemImage, ItemHeader,
} from '../../styles/Categories.styled'

function Categories() {
  const dispatch = useDispatch()
  const { isOpen } = useSelector((state) => state.toggleCategories)
  const { categories, loading } = useSelector((state) => state.getCategories)

  useEffect(() => {
    dispatch(getCategoriesThunk())
  }, [])

  const listOfCategoriesJSX = loading && isOpen
    ? categories.categories.map((category) => (
      <CategoriesLink
        to={`/category/c=${category.strCategory}`}
        key={category.idCategory}
      >
        <Item>
          <ItemImage src={category.strCategoryThumb} alt='Meal category' />
          <ItemHeader>{category.strCategory}</ItemHeader>
        </Item>
      </CategoriesLink>
    ))
    : null

  return (
    <HomeItem data-testId='categories'>
      <StyledCategories>{listOfCategoriesJSX}</StyledCategories>
    </HomeItem>
  )
}

export default Categories
