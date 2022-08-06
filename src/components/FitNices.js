import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import FitNice from './FitNice'
import {useGlobalState} from '../utils/stateContext'

const StyledLink = styled(Link) `
	text-decoration: none;
`

//export function fitnices

export default function FitNices() {
	const {store} = useGlobalState()
	const {fitnices} = store
	if(!fitnices) return null
// maps over all the fitnices and displays them on the current fitnice page
	return  (
		<div>
			{fitnices.map((fitnice,index) => {
				return (
					<StyledLink key={fitnice.id} to={`/fitnices/${fitnice.id}`}>
						<FitNice index={index} fitnice={fitnice} />
					</StyledLink>
				)
			})}
		</div>
	)
}
