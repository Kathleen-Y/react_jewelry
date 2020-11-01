import React, { Component } from 'react';
// import store from "./store";
// import { Provider } from "react-redux";
import { Router, Switch, BrowserRouter, Route } from "react-router-dom";
// import Header from '../src/components/layouts/header/header'
import About from './components/pages/About';
import Press from './components/pages/Press';
import Lookbook from './components/pages/Lookbook';
import Contact from './components/layouts/contact/contact';
import Faq from './components/pages/Faq';
import App1 from './App1';
import Nav from './components/layouts/Navigation/NavigationItems/NavigationItem/NavigationItem'
import Footer from './components/layouts/footer/Footer';

class App extends Component {
    render() {
        return (
            // <Provider store={store}>
                <BrowserRouter>
                    <div className="grid-container">
                        <Router>
                            {/* <Header /> */}
                            <Nav />
                            <Switch>
                                <Route path='/About' exact component={About} />
                                <Route path='/Press' exact component={Press} />
                                <Route path='/Lookbook' exact component={Lookbook} />
                                <Route path='/Faq' exact component={Faq} />
                                <Route path='/Contact' exact component={Contact} />
                                <Route path='/App1' exact component={App1} />
                           </Switch>
                            <Footer />
                        </Router>
                    </div>   
                </BrowserRouter>
            // </Provider >  
        )
    }
}


export default App;

