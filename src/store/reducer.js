import authors from "../data";

const initialState = {
	authors: authors
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_AUTHOR':
		const addedObj = action.payload
			return {
				authors: state.authors.concat(addedObj) 
			};

		case 'DELETE_AUTHOR':
		const deletedObj = action.payload
		const newAuth = state.authors.filter((auth) => auth !== deletedObj)
			return {
				authors: newAuth
			};

		default:
			return state;
	}
};

export default reducer;
