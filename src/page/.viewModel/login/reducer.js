import * as actionCreator from './action' 

export function login(state = {}, action) {
    switch (action.type) {
		case actionCreator.REQUEST: 
		case actionCreator.RECIEVE: 	
			return Object.assign({}, state,action);
		
        default:
			return state;
    }
}