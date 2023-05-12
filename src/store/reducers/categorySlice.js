import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	loadingCategories: false,
	categories: [],
}

export const categorySlice = createSlice({
	name: 'categories',
	initialState,
	reducers: {
		fetchingCategories: state => {
			state.loadingCategories = true
		},
		fetchedCategories: (state, action) => {
			state.categories = action.payload
			state.loadingCategories = false
		},
		fetchingErrorCategories: state => {
			state.loadingCategories = false
		},
	},
})

export const {
	fetchedCategories,
	fetchingCategories,
	fetchingErrorCategories,
} = categorySlice.actions

export default categorySlice.reducer
