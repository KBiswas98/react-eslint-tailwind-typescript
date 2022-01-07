import React, { Suspense, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './home/Home'

export default function Navigation() {
	useEffect(() => {
		// console.log('accessToken:', accessToken)
	}, [])
	return (
		<>
			<Router>
				<Suspense fallback={<div>loading...</div>}>
					<Routes>
						<Route path={'/'} element={<Home />} />
					</Routes>
				</Suspense>
			</Router>
		</>
	)
}
