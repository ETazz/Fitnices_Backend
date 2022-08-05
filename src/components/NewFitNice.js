import React, {useState, useEffect} from 'react'
import {useHistory, useParams} from 'react-router-dom'
import {Label, BigTextInput, Button, FormsContainer} from './Styled/Styled'
import {createFitNice, updateFitNice} from '../services/fitniceServices'
import { getFitNice } from "../services/fitniceServices"
import {useGlobalState} from '../utils/stateContext'
// import Multiselect from 'multiselect-react-dropdown'

// import Multiselect from 'multiselect-react-dropdown';

export default function NewFitNice() {
	const initialFormState = {
		category_id: 1,
		exercise_id: 1,
		targetmusclecategory_id: 1,
		body: ''
	}
	const [formState,setFormState] = useState(initialFormState)
	let history = useHistory()
	let {id} = useParams()
	const {dispatch, store} = useGlobalState()
	const {categories, targetmusclecategories, exercises} = store;

	useEffect(() => {
		if(id) {
			getFitNice(id)
			.then((fitnice) => {
				console.log(fitnice)
				const category = categories.find((category) => category.name.toLowerCase() === fitnice.category.toLowerCase());
				const exercise = exercises.find((exercise) => exercise.name.toLowerCase() === fitnice.exercise.toLowerCase());
				const targetmusclecategory = targetmusclecategories.find((targetmusclecategory) => targetmusclecategory.name.toLowerCase() === fitnice.targetmusclecategory.toLowerCase());
				setFormState({
					category_id: category.id,
					exercise_id: exercise.id,
					targetmusclecategory_id: targetmusclecategory.id,
					body: fitnice.body
				})
			})
		}
	},[id]);

	function handleChange(event) {
		setFormState({
			...formState,
			[event.target.name]: event.target.value
		})
		
	}
	function handleClick(event) {
		event.preventDefault()
		if(id) {
			updateFitNice( {id: id, ...formState})
			.then(() => {
				dispatch({type: 'updateFitNice', data: {id: id, ...formState}})
				history.push(`/fitnices/${id}`)
			})
		}
		else {
			createFitNice({...formState})
			.then((fitnice) => {
		
				dispatch({type: 'addFitNice', data: fitnice})
				history.push('/fitnices')
			})
			.catch((error) => console.log(error))
		}
	}

	return (
		<>
			<FormsContainer>
				<Label>Category:</Label>
				<select name='category_id' value={formState.category_id} onChange={handleChange}>
					{categories.map((category) => <option key={category.id} value={category.id}>{category.name}</option>)}
				</select>
				<Label>Target Muscle Category:</Label>
				<select name='targetmusclecategory_id' value={formState.targetmusclecategory_id} onChange={handleChange}>
					{targetmusclecategories.map((targetmusclecategory) => <option key={targetmusclecategory.id} value={targetmusclecategory.id}>{targetmusclecategory.name}</option>)}
				</select>
				<Label> Exercise:</Label>
				<select name='exercise_id' value={formState.exercise_id} onChange={handleChange}>
					{exercises.map((exercise) => <option key={exercise.id} value={exercise.id}>{exercise.name}</option>)}
				</select>
				<Label>FitNice:</Label>
				<BigTextInput type='text' name='body' value={formState.body} onChange={handleChange}></BigTextInput>
				<Button onClick={handleClick}>{id ? 'Update' : 'Create'}</Button>
			</FormsContainer>
		</>
	)
}
