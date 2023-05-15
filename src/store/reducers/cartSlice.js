import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	cartMeals: [],
}

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action) => {
			if (
				state.cartMeals.findIndex(
					item => item.idMeal === action.payload.idMeal
				) === -1
			) {
				state.cartMeals = [action.payload, ...state.cartMeals]
			}
		},
		removeFromCart: (state, action) => {
			state.cartMeals = state.cartMeals.filter(
				item => item.idMeal !== action.payload
			)
		},
	},
})

export const { addToCart, removeFromCart } = cartSlice.actions
export default cartSlice.reducer
