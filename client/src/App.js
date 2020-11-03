import React, { Component } from 'react';
// import store from "./store";
// import { Provider } from "react-redux";
import { Switch, Route } from "react-router-dom";
import Header from '../src/components/layouts/header/header'
import About from './components/pages/About';
import Lookbook from './components/pages/Lookbook';
import Contact from './components/pages/Contact';
import Faq from './components/pages/Faq';
import Products from './components/pages/Products';
import Nav from './components/layouts/Navigation/NavigationItems'
import Footer from './components/layouts/footer/Footer';

class App extends Component {
    render() {
        return (
                    <div className="grid-container">
                            <Header />
                            <Nav />
                            <Switch>
                                <Route path='/About' exact component={About} />
                                <Route path='/Lookbook' exact component={Lookbook} />
                                <Route path='/Faq' exact component={Faq} />
                                <Route path='/Contact' exact component={Contact} />
                                <Route path='/Products' exact component={Products} />
                           </Switch>
                            <Footer />
                    </div>    
        )
    }
}


export default App;

