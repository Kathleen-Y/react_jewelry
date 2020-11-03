import React, { Component } from 'react';
import {  BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from '../src/components/layouts/header/header';
import About from '../pages/About';
import Lookbook from './components/pages/Lookbook';
import Faq from './components/pages/Faq';
import Contact from './components/pages/Contact';
import Store from '../pages/store';
import Cart from "../pages/cart";
import NotFound from '../pages/NotFound';
import Footer from './components/layouts/footer/Footer';

class App extends Component {
    render() {
        return (
            <Router>
                <Header />
                    <Switch>
                        <Route path='/about' exact component={About} />
                        <Route path='/lookbook' exact component={Lookbook} />
                        <Route path='/faq' exact component={Faq} />
                        <Route path='/contact' exact component={Contact} />
                        <Route exact path="/" component={Store} />
                        <Route path="/cart" component={Cart} />
                        <Route path="*" component={NotFound} />
                    </Switch>
            </Router>
                <Footer />    
        );
    }
}


export default App;

