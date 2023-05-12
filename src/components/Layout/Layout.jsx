import React from 'react'
import './Layout.scss'
import Header from '../Header/Header.jsx'
import { Outlet } from 'react-router-dom'

const Layout = () => {
	return (
		<div>
			<Header />
			<Outlet />
		</div>
	)
}

export default Layout
