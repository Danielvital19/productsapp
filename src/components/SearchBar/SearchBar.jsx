import './SearchBar.scss';
import React, { useState } from "react";
import { createSearchParams, useNavigate, Link } from "react-router-dom";


function SearchBar() {    
    let navigate = useNavigate();
    const [query, setQuery] = useState('')


    const handleSearch = () => {
        query && navigate({
            pathname: "items",
            search: createSearchParams({
                search: query
            }).toString()
        });
    }

    return (
        <div className="search-bar">
            <div className="search-bar__container">
                <Link to="/">
                    <img src={require('../../assets/Logo_ML@2x.png')} alt=""/>
                </Link>
                <input type="text" placeholder="Nunca dejes de buscar" onInput={(e) => {setQuery(e.target.value)}} onKeyPress={(e) => {e.key === 'Enter' && handleSearch()}} data-testid="search-input"></input>
                <button className="search-bar__container--search-button" onClick={() => {handleSearch()}} data-testid="search-button">
                    <img src={require('../../assets/ic_Search@2x.png')} alt=""/>
                </button>
            </div>
        </div>
    );
}

export default SearchBar;
