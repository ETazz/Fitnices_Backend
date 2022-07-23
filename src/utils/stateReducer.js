export default function reducer (state, action) {
	switch(action.type) {
		case 'setFitNice':{
			return {
				...state,
				fitnices: action.data
			}
		}
		case 'addFitNice': {
			return {
				...state,
				fitnices: [action.data, ...state.fitnices]
			}
		}
		case 'deleteFitNice': {
			const updatedFitNices = state.fitnices.filter((fitnice) => {
				return fitnice.id !== parseInt(action.data)
			})
			return {
				...state,
					fitnices: updatedFitNices
			}
		}
		case 'updateFitNice': {
			const fitnice = state.fitnices.find((fitnice) => fitnice.id == action.data.id)
			const theRest = state.fitnices.filter((fitnice) => fitnice.id != action.data.id)
			const updatedFitNice = Object.assign(fitnice, action.data)
			return {
				...state,
				fitnices: [updatedFitNice, ...theRest]
			}

		}
		case 'setLoggedInUser': {
			return {
				...state,
				loggedInUser: action.data
			}
		}
		case 'setToken': {
			return {
				...state,
				auth: {
					...state.auth,
					token: action.data
				}
			}
		}
		case 'setCategories': {
			return{
				...state,
				categories: action.data
			}
		}
		default: return state
	}
}
