import axios from 'axios';

export const fetchDictionaryRequest = () => {
    return{
        type:"FETCH_DICTIONARY_REQUEST"
    }
}

export const fetchDictionarySuccess = (words) => {
    return{
        type:"FETCH_DICTIONARY_SUCCESS",
        payload: words
    }
}

export const fetchDictionaryError = (error) => {
    return{
        type:"FETCH_DICTIONARY_FAIL",
        payload: error
    }
}

export const fetchDictionary = (word) => {
    return(dispatch) => {
        dispatch(fetchDictionaryRequest)
        axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
            .then(response => {
                const words = response.data
                dispatch(fetchDictionarySuccess(words))
            })
            dispatch(fetch)
            .catch (error => {
                dispatch(fetchDictionaryError(error.message))
            })
    }
}