import React, { Component } from 'react'
import { Link} from 'react-router-dom'

class Nav extends Component {
  render(){
    return(
      <div>
    
  <nav>
    <div className="nav-wrapper">
      <a href="/home" className="brand-logo">Logo</a>
      <a href="/" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
      <ul className="right hide-on-med-and-down">
        <li><a href="/home" >HOME</a></li>
        <li><a href="/shop" >SHOP</a></li>
        <li><a href="/about"  >ABOUT</a></li>
        <li><a href="/press"  >PRESS</a></li>
        <li><a href="/lookbook"  >LOOKBOOK</a></li>
        <li><a href="/contact"  >CONTACT</a></li>
        <li><a href="/faq"  >FAQ</a></li>
        <li><a href="mobile.html" >Mobile</a></li>
      </ul>
    </div>
  </nav>

  <ul className="sidenav" id="mobile-demo">
    <li><a href="sass.html" className="black">Sass</a></li>
    <li><a href="badges.html" className="black">Components</a></li>
    <li><a href="collapsible.html" className="black">Javascript</a></li>
    <li><a href="mobile.html" >Mobile</a></li>
  </ul>

      </div>
    )
  }
}
  
  export default Nav;
<<<<<<< HEAD:client/src/components/layouts/nav.js
  


//   <nav>
//   <div class="nav-wrapper">
//     <a href="#!" class="brand-logo">Logo</a>
//     <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
//     <ul class="right hide-on-med-and-down">
//       <li><a href="sass.html">Sass</a></li>
//       <li><a href="badges.html">Components</a></li>
//       <li><a href="collapsible.html">Javascript</a></li>
//       <li><a href="mobile.html">Mobile</a></li>
//     </ul>
//   </div>
// </nav>

// <ul class="sidenav" id="mobile-demo">
//   <li><a href="sass.html">Sass</a></li>
//   <li><a href="badges.html">Components</a></li>
//   <li><a href="collapsible.html">Javascript</a></li>
//   <li><a href="mobile.html">Mobile</a></li>
// </ul>
// const Nav = () => {
//   return (
//       `{
//     <div className="#">
//         <a href="/" className="home">
//         HomePage
//         </a>
//         <a href="/account" className="account">
//         Account
//         </a>
//         <a href="/contact" className="contact">
//         Contact
//         </a>
//         <a href="/faq" className="faq">
//         Faq
//         </a>
//     </div>
//   }`
// )

// export default Nav;

=======
 
>>>>>>> 8fe4f48ec36c65f7c7ebe678a080fe42674fc9ca:client/src/components/layouts/nav/nav.jsx
