import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { store } from '../../store/store'
import Heading from '../../components/Heading/Heading'
import { Link } from 'react-router-dom'
import {
	fetchedMeals,
	fetchingErrorMeals,
	fetchingMeals,
} from '../../store/reducers/mealSlice'
import './Meals.scss'

const Meals = () => {
	const { meals, loadingMeals } = useSelector(store => store.meal)
	const dispatch = useDispatch()
	const params = useParams()

	useEffect(() => {
		dispatch(fetchingMeals())
		axios
			.get(
				`https://themealdb.com/api/json/v1/1/filter.php?c=${params.categoryName}`
			)
			.then(res => {
				dispatch(fetchedMeals(res.data.meals))
			})
			.catch(err => {
				dispatch(fetchingErrorMeals())
			})
	}, [])

	return (
		<div className='container mx-auto py-12'>
			<Heading>
				Meals of category{' '}
				<b className='text-orange-600'>{params.categoryName}</b>
			</Heading>

			<div className='row'>
				{meals.map(item => (
					<div key={item.strMeal} className='item relative'>
						<img className='rounded-md' src={item.strMealThumb} alt='' />
						<h1 className='text-center w-full '>{item.strMeal}</h1>
						<button className='absolute p-2 bg-orange-500 text-white text-3xl top-8 right-4 rounded-md shadow-md hover:bg-orange-600 active:opacity-75 transform active:scale-95'>
							<i className='bx bx-cart'></i>
						</button>
					</div>
				))}
			</div>

			<Link
				to={'/cart'}
				className='min-w-[70px] h-[70px] rounded-md shadow-md bg-orange-500 flex items-center justify-center fixed bottom-[100px] right-[5%] text-4xl text-white px-4'
			>
				<i className='bx bx-cart'></i>(0)
			</Link>
		</div>
	)
}

export default Meals
