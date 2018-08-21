import {h, Component} from "preact";

import style from "./style";

export default class Services extends Component{
    render(){
        return (
            <div class={style.service}>
                <h1>Services</h1>
                <p>We make a lot of things!</p>
            </div>
        );
    }
}