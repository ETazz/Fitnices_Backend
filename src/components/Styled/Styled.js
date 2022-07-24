import styled from 'styled-components' 

export const Logo = styled.logo

export const FitNice = styled.div `
	background-color: #5d5d5d;
`

export const Header = styled.h1 `
	font-family: Arial,sans-serif;
	color: white;

`
// Container is around the navbar, change this to change navbar

export const FormsContainer = styled.div `
	display: flex;
	align-items: center;
	justify-content: flex;
	margin-bottom: 10px;
	flex-direction: column;
`


export const Container = styled.div `
	display: flex;
	align-items: center;
	justify-content: flex;
	margin-bottom: 10px;
`
// style for navbar items

export const Span = styled.span`
	padding: .5em;
	margin: 1em;
	font-family: Arial, sans-serif;
	
`
// Styling for buttons 

export const Button = styled(Span) `
	border-radius: 50px;
	border: none;
	box-shadow: 0 0 10px rgba( 0, 0, 0, 0.15);
	cursor: pointer;
	font-size: 16px;
	font-weight: 700;
	padding: 15px 60px;
	background-color: ${({bg}) => bg || 'fff'};
	color: ${({color}) =>  color || '#333'};

		&:hover {
		opacity: 0.9;
		transform: scale(0.98);
	}
`

export const Input = styled.input `
	height: 1em;
	margin: .3em;
`

// style components for box of fitnice information

export const BigTextInput = styled(Input) `

`

// text for forms

export const Label = styled.span `
font-family: Arial,sans-serif;
color: #000000;
`
// fitnices body
export const FitNiceBody = styled.div `
background-color: white;
font-size: 1.5em;
font-family: Arial,sans-serif;
padding: .5em;
`

