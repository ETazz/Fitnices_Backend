import React from 'react'
import {useHistory} from 'react-router-dom'
import {Button, Container, Span} from './Styled/Styled'
import {useGlobalState} from '../utils/stateContext'
import {signOut} from '../services/authServices'
// import { ThemeProvider } from 'styled-components'
import { theme } from './Styled/Styled'

// export nav from nav file and inserting this into App.js
// nav is displayed as <Nav />

export default function Nav() {
	let history = useHistory()

	const {store,dispatch} = useGlobalState()
	const {loggedInUser} = store

	// function fetchRandomFitNice(event) {
	// 	event.preventDefault()
	// 	getRandomFitNice()
	// 	.then((fitnice) => {
	// 		setRandomFitNice(fitnice)
	// 		history.push('/random')
	// 	})
	// 	.catch((error) => console.log(error))
	// }

	function handleSignOut(event) {
		event.preventDefault()
		signOut(loggedInUser)
		.then(() => {
			dispatch({type: 'setLoggedInUser', data: null})
			dispatch({type: 'setToken', data: null})
		})
	}

	return (
		// <ThemeProvider theme = {theme}>
		
			<Container>
			<Button onClick={() => history.push('/fitnices')}>Home</Button>
			{loggedInUser ?
				<>
				<Button onClick={handleSignOut}>Sign Out</Button>	
				<Button onClick={() => history.push('/fitnices/new') }>Add FitNice</Button>	
				<Span>{loggedInUser.toUpperCase()}</Span>
				</>
			:
				<>
				<Button onClick={() => history.push('/register')}>Register</Button>
				<Button onClick={() => history.push('/sign_in')}>Sign In</Button>
				</>
			}
			</Container>
		// </ThemeProvider>
	)

		}