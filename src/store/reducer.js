const initialState = {
    words:[],
    error: ''
};
const dictionaryData = (state = initialState, action) => {
    switch(action.type) {
        case "FETCH_DICTIONARY_REQUEST":
            return{ 
                ...state,
            }
        case "FETCH_DICTIONARY_SUCCESS":
            return{ 
                words: action.payload,
                error: ''
            }
        case "FETCH_DICTIONARY_FAIL":
            return{ 
                words: [],
                error: action.payload
            }
        default: return state
    }
}

export default dictionaryData;