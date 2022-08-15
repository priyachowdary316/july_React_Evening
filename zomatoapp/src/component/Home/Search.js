import React,{Component} from "react";
import './Search.css';

const lurl = "https://zomatoajulypi.herokuapp.com/location";
const restUrl = "https://zomatoajulypi.herokuapp.com/restaurant?stateId=1";

class Search extends Component {

    render(){
        return(
            <div id="search">
            <div className="logo">
                <span>D!</span>
            </div>
            <div id="heading">
                Find Best Place Near You
            </div>
            <div id="dropdown">
            <select>
                    <option>---SELECT LOCATION---</option>
                    <option>Hyderabad</option>
                    <option>AndhraPradesh</option>
                </select>
                <select id="restSelect">
                    <option>---SELECT RESTAURANT---</option>
                    <option>KFC</option>
                    <option>Bawarchi</option>
                </select>
            </div>
        </div>
        )
    }

}

export default Search;