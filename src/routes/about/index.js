import {h, Component} from 'preact';

import style from './style';

export default class AboutUs extends Component{
    render(){
        return (
            <div class={style.about}>
                <h1>About Us</h1>
                <p>We are here for you, mate!</p>
            </div>
        );
    }
}