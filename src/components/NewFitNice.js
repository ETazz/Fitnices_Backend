import React, {useState, useEffect} from 'react'
import {useHistory, useParams} from 'react-router-dom'
import {Label, BigTextInput, Button} from './Styled'
import {createFitNice, getFitNice, updateFitNice} from '../services/fitniceServices'
// import {categories} from '../utils/categories'
import {useGlobalState} from '../utils/stateContext'

export default function NewFitNice() {
	const initialFormState = {
		category_id: 1,
		body: ''
	}
	const [formState,setFormState] = useState(initialFormState)
	let history = useHistory()
	let {id} = useParams()
	const {dispatch, store} = useGlobalState()
	const {fitnices, categories} = store;

	useEffect(() => {
		if(id) {
			getFitNice(id)
			.then((fitnice) => {
				console.log(fitnice)
				const category = categories.find((category) => category.name.toLowerCase() === fitnice.category.toLowerCase())
				setFormState({
					category_id: category.id,
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
		<div>
			<Label>Category:</Label>
			<select name='category_id' value={formState.category_id} onChange={handleChange}>
				{categories.map((category) => <option key={category.id} value={category.id}>{category.name}</option>)}
			</select>
			<Label>FitNice:</Label>
			<BigTextInput type='text' name='body' value={formState.body} onChange={handleChange}></BigTextInput>
			<Button onClick={handleClick}>{id ? 'Update' : 'Create'}</Button>
		</div>
	)
}
