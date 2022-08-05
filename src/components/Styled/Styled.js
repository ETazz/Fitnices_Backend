import styled from 'styled-components' 

export const Logo = styled.logo



export const ContainerWrapper = styled.div `
	align-items: center;
	justify-content: center;
	padding: 10px;
	background-color: grey;
	border: 2px solid #333333;
	max-width: 700px;
	margin: auto;
`

// styling for the header

export const Header = styled.div `
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 10px;
	color: #fff;
	border: 2px solid #333333;
	width: 50%;
	margin: auto;
`
// forms container for registering and sign in

export const FormsContainer = styled.div `
	display: flex;
	align-items: center;
	justify-content: flex;
	flex-direction: column;
	padding: auto;
	padding: 10px 10px;
`
// styling for the container that the nav is in

export const Container = styled.div `
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 10px;
	background-color: #333333;
	border: 1px solid white;
`
// Styling for logged in user and buttons

export const Span = styled.span`
	background-color: #fff;
	border-radius: 5px;
	border: none;
	box-shadow: 0 0 10px( 0, 0, 0, 0.15);
	font-size: 12px;
	font-weight: 700;
	padding: 10px 10px;
`
// styling for box around the fitnices exercises on home page

export const FitNice = styled.div `
	background-color: #333333;
	border: 1px solid white;
`
// fitnices body // CHANGE THIS TO CHANGE FITNICES STYLING

export const FitNiceBody = styled.div `
	margin: auto;
	display: flex;
	align-items: center;
	justify-content: flex;
	flex-direction: column;
	padding: 10px 10px;
	background-color: #333333;
	border: 1px solid white;
	color: #fff;
	font-size: 1.5em;
`


// styling for the buttons 

export const Button = styled.button`
	margin: 10px;
	border-radius: 50px;
	border: none;
	box-shadow: 0 0 10px rgba( 0, 0, 0, 0.15);
	cursor: pointer;
	font-size: 16px;
	font-weight: 700;
	padding: 10px 30px;
	background-color: ${({bg}) => bg || 'fff'};
	color: ${({color}) =>  color || '#333'};

		&:hover {
		opacity: 0.9;
		transform: scale(0.98);
	}
`
//styling for input fields 
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
	color: #fff;
`
