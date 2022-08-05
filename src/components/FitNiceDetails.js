import React,{  useState,useEffect} from 'react'
import {useParams,useHistory} from 'react-router-dom'
import Moment from 'react-moment'
import { getFitNice } from "../services/fitniceServices"
import {Button, FitNiceBody} from './Styled/Styled'
import {useGlobalState} from '../utils/stateContext'
import {deleteFitNice} from '../services/fitniceServices'

export default function FitNiceDetails() {
	const [fitnice,setFitNice] = useState(null)
	const {id} = useParams()
	let history = useHistory()
	const {store,dispatch} = useGlobalState()
	const {loggedInUser} = store
	useEffect(() => {
		getFitNice(id)
		.then((fitnice) => setFitNice(fitnice))
		.catch((error) => console.log(error))
	},[id])

	if (!fitnice) return null
	function handleDelete() {
		deleteFitNice(id)
		.then(() => {
			dispatch({type: 'deleteFitNice', data: id})
			history.push('/fitnices')
		})
	}
	return (
		<div>
			<FitNiceBody>
			<p>Written by: {fitnice.author}</p>			
			<p>Posted on: 
				<Moment format=' D MMM YYYY '>{fitnice.posted}</Moment>
			</p>			
			<p>Category: {fitnice.category}</p>
			<p>Target Muscle Category: {fitnice.targetmusclecategory}</p>
			<p>Exercise: {fitnice.exercise}</p>
			<p>Notes: {fitnice.body}</p>
			{loggedInUser === fitnice.author &&
				<>
					<Button onClick={() => history.push(`/fitnices/update/${id}`)}>Update</Button>
					<Button onClick={handleDelete}>Delete</Button>
					<Button onClick={() => history.push('/fitnices') }>Save & Exit</Button>	
				</>
			}
			</FitNiceBody>
		</div>
	)
}
