import authors from "../data";

import {ADD_AUTHOR, DELETE_AUTHOR} from './actions'

const initialState = {
	authors: authors
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_AUTHOR:
		const addedObj = action.payload
			return {
				...state,
				authors: state.authors.concat(addedObj) 
			};

		case DELETE_AUTHOR:
		const deletedObj = action.payload
		const newAuth = state.authors.filter((auth) => auth !== deletedObj)
			return {
				...state,
				authors: newAuth
			};

		default:
			return state;
	}
};

export default reducer;
