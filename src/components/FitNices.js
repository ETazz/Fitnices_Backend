import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import FitNice from './FitNice'
import {useGlobalState} from '../utils/stateContext'
import SearchBar from './Search';

const StyledLink = styled(Link) `
	text-decoration: none;
`
export default function FitNices() {
	const {store} = useGlobalState()
	const {fitnices} = store
	if(!fitnices) return null

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
