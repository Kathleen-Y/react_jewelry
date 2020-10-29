import React, { Component } from 'react';
import store from "./store";
import { Provider } from "react-redux";
import { Router, Switch, BrowserRouter, Route, Link } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import AdminScreen from "./screens/AdminScreen";
import Shop from './pages/Shop';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Press from './components/pages/Press';
import Lookbook from './components/pages/Lookbook';
import Header from './components/pages/layouts/header/header';
import Contact from './components/pages/layouts/contact/contact'
import Faq from './components/pages/Faq';
//import Account from './pages/Account';
import Nav from './components/pages/layouts/navbar/Nav'
import Footer from './components/pages/layouts/footer/Footer';


class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div className="grid-container">
                        <Router>
                            <Header />
                            <Nav />
                            <Switch>
                                <Route path="/admin" component={AdminScreen} />
                                <Route path="/" component={HomeScreen} exact />
                                <Route path='/About' exact component={About} />
                                <Route path='/Press' exact component={Press} />
                                <Route path='/Lookbook' exact component={Lookbook} />
                                <Route path='/Contact' exact component={Contact} />
                                <Route path='/Faq' exact component={Faq} />
                                {/* <Route path='/Products/:id' component={shop} /> */}
                                {/* <Route path='/Account' exact component={Account} /> */}
                            </Switch>
                            <Footer />
                        </Router>
                    </div>   
                </BrowserRouter>
            </Provider >  
        )
    }
}


export default App;

