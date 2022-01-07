import React, { lazy, Suspense, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './home/Home'

export default function Navigation() {
	useEffect(() => {
		// console.log('accessToken:', accessToken)
	}, [])
	return (
		<>
			<Router>
				<Suspense fallback={<div>loading...</div>}>
					<Switch>
						<Route path={'/'} exact component={Home} />
					</Switch>
				</Suspense>
			</Router>
		</>
	)
}
