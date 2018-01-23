import React, { Component } from 'react'
import './header.css'

export default class Header extends Component {

    componentDidMount() {
        console.log('here is the session' + this.req)
    }

    render() {
        return (
            <div>
            <div className="login-box">
            <input placeholder="username"></input>
            <input placeholder="password"></input>
            <button>Log in</button>
            </div>
            <div className="header-container">
            <div className="header-bar">
            <h1>Vintage Marilyn Manson Shop</h1>
            <h1>About</h1>
            </div>
            <div className="header-pic-container">
            {/* <div className="antichrist-symbol">
            </div>
            <div className="mechanical-symbol">
            </div>
            <div className="holywood-symbol">
            </div>
            <div className="golden-symbol">
            </div> */}
            </div>
            </div>
            </div>
        )
    }
}