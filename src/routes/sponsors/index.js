import {h, Component} from 'preact';

import style from './style';

export default class Sponsors extends Component{
    render(){
        return (
            <div class={style.sponsor}>
                <h1>Sponsor</h1>
                <p>Here is a list with all out sponsors: </p>
            </div>
        );
    }
}