import React, { Component } from 'react'
//import Searchbar from '../searchbar/searchbar'
import Logo from '../../../assets/logo.png';
import './header.css'

class Header extends Component {
    render(){
        return(
            <div className="header-class"> 
                <div >
                  {/*  <Searchbar /> */ }
                </div>
                <div className="header-logo">
                    <p> <img src={Logo} alt=".title"/> </p>
                </div>
            </div> 
        )
    }
}
    export default Header;