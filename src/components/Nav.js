import React from 'react'
import {useHistory} from 'react-router-dom'
import {Button, Container, Span} from './Styled/Styled'
import {useGlobalState} from '../utils/stateContext'
import {signOut} from '../services/authServices'
// import { ThemeProvider } from 'styled-components'


// export nav from nav file and inserting this into App.js
// nav is displayed as <Nav />

export default function Nav() {
	// use history for navigation
	let history = useHistory()
	//setting store and dispatch for global state
	const {store,dispatch} = useGlobalState()
	const {loggedInUser} = store 

	//function for handling sing out 
	function handleSignOut(event) {
		event.preventDefault()
		//signing out the current logged in user
		signOut(loggedInUser)
		.then(() => {
			//setting data to null once the user is signed out 
			dispatch({type: 'setLoggedInUser', data: null})
			dispatch({type: 'setToken', data: null})
		})
	}

	return (
			<Container>
			<Button onClick={() => history.push('/fitnices')}>Current FitNices</Button>
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