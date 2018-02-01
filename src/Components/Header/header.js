import React, { Component } from 'react'
import './header.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

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
        axios.get('http://localhost:3001/api/featureditem1')
            .then(response => {
                this.setState({
                    feat_items: response.data[0]
                }, () => this.setState({feat_title_1: response.data[0].item_name,
                feat_pic_1: response.data[0].item_url, feat_title_2: response.data[1].item_name,
                feat_pic_2: response.data[1].item_url, feat_title_3: response.data[2].item_name,
                feat_pic_3: response.data[2].item_url
            }))
            }
            ).then(
                () => {
                this.changePic(this.state.feat_pic_1, this.state.feat_pic_2, this.state.feat_pic_3)
                }
            )
        axios.get('http://localhost:3001/api/socials')
            .then(response => {
                this.setState({facebook: response.data[0].facebook, twitter: response.data[0].twitter,
                tumblr: response.data[0].tumblr, instagram: response.data[0].instagram})
            })
    }

    changePic(pic1, pic2, pic3) {
        const featPic1 = document.getElementById('feat-pic-1')
        const featPic2 = document.getElementById('feat-pic-2')
        const featPic3 = document.getElementById('feat-pic-3')
        featPic1.style = `background-image: url(${pic1})`
        featPic2.style = `background-image: url(${pic2})`
        featPic3.style = `background-image: url(${pic3})`
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

    leaveItem1() {
        const featItem1 = document.getElementById('feat-title-1')
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
                                <div className="twitter-icon" id="twitter" onClick={() => this.twitter(this.state.twitter)}/>
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
                                <div className="featured-item-2" onMouseEnter={() => this.hoverItem1()} onMouseLeave={() => this.leaveItem1()}>
                                    <Link to="/featured-item-2">
                                        <div className="featured-item-2-text" id="feat-title-2">
                                        <div>{this.state.feat_title_2}</div>
                                        </div>
                                        <div className="featured-item-2-pic" id="feat-pic-2">
                                        </div>
                                    </Link>
                                </div>
                                <div className="featured-item-3" onMouseEnter={() => this.hoverItem1()} onMouseLeave={() => this.leaveItem1()}>
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