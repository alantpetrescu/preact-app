import {h, Component} from 'preact';
import {Link} from 'preact-router';

import style from './style';

export default class Header extends Component{
    render(){
        return (
            <header class={style.header}>
                <h1>My App!</h1>
                <nav>
                    <Link activeClassName={style.active} href="/home">Home</Link>
                    <Link activeClassName={style.active} href="/aboutus">About us</Link>
                    <Link activeClassName={style.active} href="/services">Services</Link>
                    <Link activeClassName={style.active} href="/sponsors">Sponsors</Link>
                    <Link activeClassName={style.active} href="/contactus">Contact us</Link>
                </nav>
            </header>
        );
    }
}