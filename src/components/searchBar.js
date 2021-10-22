import React, {useState} from 'react';
import {fetchDictionary} from '../store/action'
import {useDispatch} from 'react-redux';
import './searchBar.css';

const SearchBar = () => {
    const [word, setWord] = useState('');
    const dispatch = useDispatch() 

    const handleSearch = (e) => {
        setWord(e.target.value)
    }

    const onSearchClick = (e) => {
        e.preventDefault() 
        dispatch(fetchDictionary(word))
    }

    return(
        <div>
            <div>
                <input className= 'input' placeholder="enter the word" onChange={handleSearch}/>
                <button className= 'button' type='submit' onClick={onSearchClick}> Search </button>
            </div>
        </div>
    )
}

export default SearchBar;