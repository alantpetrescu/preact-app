import {h, Component} from 'preact';

import style from './style';

export default class ContactUs extends Component{
    render(){
        return (
            <div class={style.contact}>
                <h1>Contact Us</h1>
                <p>Here are our ways of contacting us</p>
            </div>
        );
    }
}