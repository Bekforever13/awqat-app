import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import NotFound from './screens/NotFound/NotFound'
import { RoutesData } from './utils/Routes.data'

function App() {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				{RoutesData.map((item, index) => (
					<Route key={index} path={item.path} element={<item.element />} />
				))}
			</Route>
		</Routes>
	)
}

export default App
