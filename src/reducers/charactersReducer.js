

const initialState = {
    loading: true,
    characters: []
}





export default (state=initialState, action) => {
    switch(action.type){
        case "LOADING":
            return {...state, loading: true }
        case "LOAD_CHARACTERS":
            return {...state, loading: false, characters: action.characters}
        default: 
            return state;
    }

}


