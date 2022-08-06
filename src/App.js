import React,{ useReducer, useEffect} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {getFitNices} from './services/fitniceServices'
import { getCategories} from './services/categoryServices'
import { getExercises} from './services/exerciseServices'
import { getTargetMuscleCategories } from './services/targetmusclecategoryServices'
import stateReducer from './utils/stateReducer'
import {StateContext} from './utils/stateContext'
import FitNices from './components/FitNices'
// import FitNice from './components/FitNice'
import FitNiceDetails from './components/FitNiceDetails'
import Nav from './components/Nav'
import SignIn from './components/SignIn'
import NewFitNice from './components/NewFitNice'
import NewUser from './components/NewUser'
import {Header, FitNice, ContainerWrapper} from './components/Styled/Styled'
import { createGlobalStyle } from 'styled-components'


//global styling for whole page

const GlobalStyle = createGlobalStyle`
  body {
	font-family: Arial,sans-serif;
    background: #D3D3D3;
  }
`
// setting categores, exercises, targetmusclecategories and fitnices to an array
const App = () => {
	const initialState = {
		fitnices: [],
		targetmusclecategories: [],
		exercises: [],
		categories: [],
		// autherisation and logged in user is being set to session storage
		// if no user. then no session storage which results in null 
		loggedInUser: sessionStorage.getItem("user") || null,
		auth: {token:sessionStorage.getItem("token") || null}
	}
	const [store, dispatch] = useReducer(stateReducer,initialState)
	useEffect(() => {
		//returning the data for the currect function. if incorrect data then returns error.
		getFitNices()
		.then((fitnices) => dispatch({type: 'setFitNices', data: fitnices}))
		.catch((error) => console.log(error))
		getCategories()
		.then(categories => dispatch({type: 'setCategories', data: categories}))
		.catch(error => console.log(error))
		getTargetMuscleCategories()
		.then(targetmusclecategories => dispatch({type: 'setTargetMuscleCategories', data: targetmusclecategories}))
		.catch(error => console.log(error))
		getExercises()
		.then(exercises => dispatch({type: 'setExercises', data: exercises}))
		.catch(error => console.log(error))
	},[])

	return (
		<div>
			<GlobalStyle />
			<StateContext.Provider value={{store,dispatch}}>
				<ContainerWrapper>
				<Header> FitNices Library </Header>
					<Router>
					<Nav/>
					<FitNice>
							<Switch>
								<Route exact path='/fitnices' component={FitNices}/> 
								<Route exact path='/fitnices/new' component={NewFitNice} />
								<Route exact path='/fitnices/update/:id' component={NewFitNice} />
								<Route path='/fitnices/:id' component={FitNiceDetails}/>  
								<Route path='/sign_in' component={SignIn}></Route>
								<Route path='/register' component={NewUser}></Route>
							</Switch>
						</FitNice>
					</Router>
				</ContainerWrapper>
			</StateContext.Provider>

		</div>
	);
}

export default App
