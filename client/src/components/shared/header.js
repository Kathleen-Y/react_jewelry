import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { CartContext } from '../../contexts/CartContext';
import {CartIcon} from '../icons';
import Logo from '../../../assets/logo.png';
import styles from './header.module.css';

const Header = () => {

    const {itemCount} = useContext(CartContext);

    return ( 
        <header className={styles.header}>
            <img src={Logo} alt=".title"/>
            <Link to='/'>Store</Link>
            <Link to='/about'>About</Link>
            <Link to='/cart'> <CartIcon/> Cart ({itemCount})</Link>
        </header>
     );
}
 
export default Header;