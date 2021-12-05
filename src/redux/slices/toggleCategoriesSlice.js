import { createSlice } from '@reduxjs/toolkit'

export const toggleCategoriesSlice = createSlice({
  name: 'toggleCategories',
  initialState: {
    isOpen: true,
  },
  reducers: {
    toggleCategories: (state) => {
      state.isOpen = !state.isOpen
    },
  },
})

export const { toggleCategories } = toggleCategoriesSlice.actions

export default toggleCategoriesSlice.reducer
