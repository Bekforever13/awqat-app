import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	meals: [],
	loadingMeals: false,
}

export const mealSlice = createSlice({
	name: 'meal',
	initialState,
	reducers: {
		fetchingMeals: state => {
			state.loadingMeals = true
		},
		fetchedMeals: (state, action) => {
			state.meals = action.payload
			state.loadingMeals = false
		},
		fetchingErrorMeals: state => {
			state.loadingMeals = false
		},
	},
})

export const { fetchingMeals, fetchingErrorMeals, fetchedMeals } =
	mealSlice.actions

export default mealSlice.reducer
