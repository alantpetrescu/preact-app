import {h, Component} from 'preact';
import {Router} from 'preact-router/match';

import Header from './header';

import Home from '../routes/home';
import AboutUs from '../routes/about';
import Services from '../routes/services';
import Sponsors from '../routes/sponsors';
import ContactUs from '../routes/contact';

export default class App extends Component{
    handleRoute(e){
        this.currentUrl = e.url;
    }

    render(){
        return(
            <div id = "app">
                <Header />
                <Router onChange = {this.handleRoute}>
                    <Home path="/home" />
                    <AboutUs path="/aboutus" />
                    <Services path="/services" />
                    <Sponsors path="/sponsors" />
                    <ContactUs path="/contactus" />
                </Router>
            </div>
        );
    }
}