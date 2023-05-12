import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Home.scss'
import {
	fetchingCategories,
	fetchingErrorCategories,
	fetchedCategories,
} from '../../store/reducers/categorySlice'
import axios from 'axios'
import { Spin } from 'antd'
import Heading from '../../components/Heading/Heading'
import { Link } from 'react-router-dom'

const Home = () => {
	const { loadingCategories, categories } = useSelector(store => store.category)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchingCategories())
		axios
			.get('https://www.themealdb.com/api/json/v1/1/categories.php')
			.then(res => {
				dispatch(fetchedCategories(res.data.categories))
			})
			.catch(err => dispatch(fetchingErrorCategories()))
	}, [])

	return (
		<div className='container mx-auto py-12'>
			<Heading>asd</Heading>
			<Spin spinning={loadingCategories}>
				<div className='row'>
					{categories?.map(item => (
						<Link key={item.idCategory} to={`/category/${item.strCategory}`}>
							<div className='item'>
								<img src={item.strCategoryThumb} />
								<h1>{item.strCategory}</h1>
							</div>
						</Link>
					))}
				</div>
			</Spin>
		</div>
	)
}

export default Home
