import React,{Component} from "react";
import './header.css';

class Header extends Component {

    render(){
        return(
            <header>
            <div id="brand">
                  Developer Funnel
            </div>
            <div id="social">
                <a href= "www.facebook.com">
                    <img src="https://i.ibb.co/MRF9S4x/facebook.png" alt="fb" className="socialImg"/>
                </a>
                <a href= "www.facebook.com">
                    <img src="https://i.ibb.co/0s2pbyh/instagram.jpg" alt="fb" className="socialImg"/>
                </a>
                <a href= "www.facebook.com">
                    <img src="https://i.ibb.co/TTB6FRR/youtube.png" alt="fb" className="socialImg"/>
                </a>
            </div>
        </header>
        )
    }

}

export default Header;