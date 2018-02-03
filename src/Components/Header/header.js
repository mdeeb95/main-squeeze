import React, { Component } from 'react'
import './header.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

const shirts = require('../../Data/featured.js')
const socials = require('../../Data/socials.js')

export default class Header extends Component {

    constructor(props) {
        super(props)
        this.state = {
            feat_items: [],
            feat_title_1: '',
            feat_pic_1: '',
            feat_title_2: '',
            feat_pic_2: '',
            feat_title_3: '',
            feat_pic_3: '',
            facebook: '',
            twitter: '',
            tumblr: '',
            instagram: ''
        }
    }

    componentDidMount() {
        this.setState({
            feat_title_1: shirts.data[0][1], feat_title_2: shirts.data[1][1], feat_title_3: shirts.data[2][1]})
        this.changePic()
        this.setState({
            facebook: socials.data[0][1], twitter: socials.data[0][2],
            tumblr: socials.data[0][3], instagram: socials.data[0][4]
        })
    }

    changePic() {
        const featPic1 = document.getElementById('feat-pic-1')
        const featPic2 = document.getElementById('feat-pic-2')
        const featPic3 = document.getElementById('feat-pic-3')
        featPic1.style = `background-image: url(${shirts.data[0][3]})`
        featPic2.style = `background-image: url(${shirts.data[1][3]})`
        featPic3.style = `background-image: url(${shirts.data[2][3]})`
    }

    facebook(link) {
        window.location = link
    }

    twitter(link) {
        window.location = link
    }

    tumblr(link) {
        window.location = link
    }

    instagram(link) {
        window.location = "/"
    }

    hoverItem1() {
        const featItem1 = document.getElementById('feat-title-1')
        featItem1.style = "text-decoration: underline"
    }

    hoverItem2() {
        const featItem1 = document.getElementById('feat-title-2')
        featItem1.style = "text-decoration: underline"
    }

    hoverItem3() {
        const featItem1 = document.getElementById('feat-title-3')
        featItem1.style = "text-decoration: underline"
    }

    leaveItem1() {
        const featItem1 = document.getElementById('feat-title-1')
        featItem1.style = "text-decoration: none"
    }

    leaveItem2() {
        const featItem1 = document.getElementById('feat-title-2')
        featItem1.style = "text-decoration: none"
    }

    leaveItem3() {
        const featItem1 = document.getElementById('feat-title-3')
        featItem1.style = "text-decoration: none"
    }

    render() {
        return (
            <div>
                <div className="header-container">
                    <div className="header-bar">
                        <div className="left-header-tab" />
                        <div className="website-title">
                            <div className="website-title-font">Vintage Marilyn Manson Shop</div>
                        </div>
                        <div className="header-left-container">
                            <div className="social-bar">
                                <div className="facebook-icon" id="facebook" onClick={() => this.facebook(this.state.facebook)} />
                                <div className="twitter-icon" id="twitter" onClick={() => this.twitter(this.state.twitter)} />
                                <div className="tumblr-icon" id="tumblr" onClick={() => this.tumblr(this.state.tumblr)} />
                                <div className="instagram-icon" id="instagram" onClick={() => this.instagram(this.state.instagram)} />
                            </div>
                        </div>
                    </div>
                    <div className="header-pic-container">
                        <div className="featured-items-container">
                            <div className="featured-items-title">
                                <div className="featured-items-tab">• Featured Items •</div>
                            </div>
                            <div className="featured-items-box">
                                <div className="featured-item-1" onMouseEnter={() => this.hoverItem1()} onMouseLeave={() => this.leaveItem1()}>
                                    <Link to="/featured-item">
                                        <div className="featured-item-1-pic" id="feat-pic-1">
                                        </div>
                                        <div className="featured-item-1-text" id="feat-title-1">
                                            <div>{this.state.feat_title_1}</div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="featured-item-2" onMouseEnter={() => this.hoverItem2()} onMouseLeave={() => this.leaveItem2()}>
                                    <Link to="/featured-item-2">
                                        <div className="featured-item-2-text" id="feat-title-2">
                                            <div>{this.state.feat_title_2}</div>
                                        </div>
                                        <div className="featured-item-2-pic" id="feat-pic-2">
                                        </div>
                                    </Link>
                                </div>
                                <div className="featured-item-3" onMouseEnter={() => this.hoverItem3()} onMouseLeave={() => this.leaveItem3()}>
                                    <Link to="/featured-item-3">
                                        <div className="featured-item-3-pic" id="feat-pic-3">
                                        </div>
                                        <div className="featured-item-3-text" id="feat-title-3">
                                            <div>{this.state.feat_title_3}</div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}