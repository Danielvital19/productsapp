import { useState } from "react";
import { change } from "../store/search/action";
import { connect } from "react-redux";
import { useNavigate, Link } from "react-router-dom";


const mapStateToProps = (state) => {
    return {
        text: state.searchReducer.text
    }
}

function SearchBar({text, change}) {    
    let navigate = useNavigate();
    const [searchText, setSearchText] = useState('')


    const changeText = () => {
        change(searchText);
        navigate(`/items`);
    }

    return (
        <div className="search-bar">
            <div className="search-bar__container">
                <Link to="/">
                    <img src={require('../assets/Logo_ML@2x.png')} />
                </Link>
                <input type="text" placeholder="Nunca dejes de buscar" onChange={(e) => {setSearchText(e.target.value)}} onKeyPress={(e) => {e.key === 'Enter' && changeText()}}></input>
                <button className="search-bar__container--search-button" onClick={() => {changeText()}}>
                    <img src={require('../assets/ic_Search@2x.png')} />
                </button>
            </div>
        </div>
    );
}

export default connect(mapStateToProps,{change})(SearchBar);;
