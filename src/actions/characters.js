const BASE_URL = "http://localhost:3001"


const LOADING = {type: "LOADING"}


export const fetchCharacters = () => {
    return dispatch => {
        dispatch(LOADING)

        fetch(BASE_URL + '/characters') 
        .then(resp => resp.json())
        .then(characters => {
            dispatch({type: "LOAD_CHARACTERS", characters})
        })
    }

}