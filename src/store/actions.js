export const ADD_AUTHOR = "ADD_AUTHOR"

export const DELETE_AUTHOR = "DELETE_AUTHOR"


// the action to be dispatched to add a new author 
// (look at the data.js file to see what an author object looks like. 
// It creates a new author object. 
// This new object is then sent to the reducer as a payload
export const addAuthor = (auth) => {
	return {
		type: ADD_AUTHOR,

		// the new auth obj will be sent as a payload
		payload: auth
	}
}


// the action to be dispatched to delete a certain author. 
// This action accepts an author object as a parameter. 
// It then sends the author object to the reducer as a payload.
export const deleteAuthor = (auth) => {
	return {
		type: DELETE_AUTHOR,
		payload: auth
	}
}