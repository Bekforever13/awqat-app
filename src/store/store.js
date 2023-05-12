import { configureStore } from '@reduxjs/toolkit'
import categoryReducer from './reducers/categorySlice'
import mealReducer from './reducers/mealSlice'

export const store = configureStore({
	reducer: {
		category: categoryReducer,
		meal: mealReducer,
	},
})
