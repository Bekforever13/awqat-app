import Cart from '../screens/Cart/Cart'
import FilterArea from '../screens/FilterArea/FilterArea'
import Home from '../screens/Home/Home'
import Meals from '../screens/Meals/Meals'
import NotFound from '../screens/NotFound/NotFound'

export const RoutesData = [
	{ path: '/', element: Home },
	{ path: '/category/:categoryName', element: Meals },
	{ path: '/cart', element: Cart },
	{ path: '/area/:areaName', element: FilterArea },
	{ path: '*', element: NotFound },
]
