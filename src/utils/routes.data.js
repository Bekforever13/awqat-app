import Home from '../screens/Home/Home'
import Meals from '../screens/Meals/Meals'
import NotFound from '../screens/NotFound/NotFound'

export const RoutesData = [
	{ path: '/', element: Home },
	{ path: '/category/:categoryName', element: Meals },
	{ path: '*', element: NotFound },
]
