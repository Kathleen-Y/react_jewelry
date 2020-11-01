import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>Home</NavigationItem>
        <NavigationItem link="/about" exact>About</NavigationItem>
        <NavigationItem link="/lookbook" exact>Lookbook</NavigationItem>
        <NavigationItem link="/press" exact>Press</NavigationItem>
        <NavigationItem link="/faq" exact>Faq</NavigationItem>
        <NavigationItem link="/contact" exact>Contact</NavigationItem>
        <NavigationItem link="/orders">Orders</NavigationItem>
    </ul>
);

export default navigationItems;