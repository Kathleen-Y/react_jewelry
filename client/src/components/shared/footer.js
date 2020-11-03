import React from 'react';
import styles from './footer.module.css';

const Footer = () => {
    return ( 
        <footer className={`${styles.footer}  mt-5 p-3`}>
         &copy; 2020 Mona Assemi Jewelry, Inc | All Rights Reserved
        </footer>
     );
}
 
export default Footer;