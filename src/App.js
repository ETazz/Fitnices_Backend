import React,{ useReducer, useEffect} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {getFitNices} from './services/fitniceServices'
import { getCategories } from './services/categoryServices'
import stateReducer from './utils/stateReducer'
import {StateContext} from './utils/stateContext'
import FitNices from './components/FitNices'
// import FitNice from './components/FitNice'
import FitNiceDetails from './components/FitNiceDetails'
import Nav from './components/Nav'
import SignIn from './components/SignIn'
import NewFitNice from './components/NewFitNice'
import NewUser from './components/NewUser'
import {Header, FitNice, Container} from './components/Styled/Styled'
import { createGlobalStyle } from 'styled-components'

//global styling for whole page

const GlobalStyle = createGlobalStyle`
  body {
	font-family: Arial,sans-serif;
    background: #D3D3D3;
  }
`


const App = () => {
	const initialState = {
		fitnices: [],
		categories: [],
		loggedInUser: sessionStorage.getItem("user") || null,
		auth: {token:sessionStorage.getItem("token") || null}
	}
	const [store, dispatch] = useReducer(stateReducer,initialState)
	useEffect(() => {
		getFitNices()
		.then((fitnices) => dispatch({type: 'setFitNices', data: fitnices}))
		.catch((error) => console.log(error))
		getCategories()
		.then(categories => dispatch({type: 'setCategories', data: categories}))
		.catch(error => console.log(error))
	},[])

	return (
		<div>
			<GlobalStyle />
			<StateContext.Provider value={{store,dispatch}}>
				<FitNice>
				<Header> FitNices Library </Header>
					<Router>
					<Nav/>
						<Switch>
							<Route exact path='/fitnices' component={FitNices}/> 
							<Route exact path='/fitnices/new' component={NewFitNice} />
							<Route exact path='/fitnices/update/:id' component={NewFitNice} />
							<Route path='/fitnices/:id' component={FitNiceDetails}/>  
							<Route path='/sign_in' component={SignIn}></Route>
							<Route path='/register' component={NewUser}></Route>
						</Switch>
				</Router>
				</FitNice>
			</StateContext.Provider>

		</div>
	);
}

export default App
