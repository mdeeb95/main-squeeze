import React, { Component } from 'react'
import axios from 'axios'
import '../Shirts/shirts.css'
import { Link } from 'react-router-dom'

export default class FeaturedItem3 extends Component {

    constructor(props) {
        super(props)
        this.state = {
            feat_items: [],
            feat_name: '',
            feat_desc: '',
            feat_specs: '',
            feat_price: '',
            feat_link: '',
            feat_url: '',
            name_change: '',
            description_change: '',
            specs_change: '',
            price_change: '',
            picture_change: '',
            buy_change: '',
            edited_item_id: ''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3001/api/featureditem1')
            .then(response => {
                this.setState({
                    feat_items: response.data[2], feat_name: response.data[2].item_name,
                    feat_desc: response.data[2].item_description, feat_specs: response.data[2].specs,
                    feat_price: response.data[2].price, feat_link: response.data[2].link,
                    feat_url: response.data[2].item_url, edited_item_id: response.data[2].id})
                }).then( () =>
                    this.changePic(this.state.feat_url)
                )}

                
    nameChange(e) {
        this.setState({ name_change: e }, () => console.log(this.state.name_change))
    }

    descriptionChange(e) {
        this.setState({ description_change: e }, () => console.log(this.state.description_change))
    }

    specsChange(e) {
        this.setState({ specs_change: e }, () => console.log(this.state.specs_change))
    }

    priceChange(e) {
        this.setState({ price_change: e }, () => console.log(this.state.price_change))
    }

    pictureChange(e) {
        this.setState({ picture_change: e}, () => console.log(this.state.picture_change))
    }

    buyChange(e) {
        this.setState({ buy_change: e})
    }

    editSubmit(change_name, id, change_description, change_specs, change_price, change_picture, change_buy) {

        axios.put(`http://localhost:3001/api/featureditem1/`, {
            id,
            change_name,
            change_description,
            change_specs,
            change_price,
            change_picture,
            change_buy
        }
        )
        alert("Item changed. Refreshing now!")
        window.location.reload()
    }

    changePic(pic) {
        const chosenItem = document.getElementById("chosen-item")
        chosenItem.style = `background-image: url(${pic})`
    }

    buyClick() {
        window.location = this.state.feat_link
    }

    cartOn() {
        const cart = document.getElementById("shopping-cart")
        cart.className = "shopping-cart-on"
    }

    cartOff() {
        const cart = document.getElementById("shopping-cart")
        cart.className = "shopping-cart-off"
    }

    render() {
        return (
            <div>
                <div className="vinyl-home-container" id="home-container">
                    <div className="left-bar" id="left-bar">
                    </div>
                    <div className="left-container" id="left-container">
                        <Link to="/">
                            <div className="shirts-tab-off" id="shirts-tab">
                                <h1>Shirts</h1>
                            </div>
                        </Link>
                        <Link to="/vinyl">
                            <div className="vinyl-tab" id="vinyl-tab">
                                <h1>Vinyl</h1>
                            </div>
                        </Link>
                        <Link to="/socks">
                            <div className="vinyl-tab" id="vinyl-tab">
                                <h1>Socks</h1>
                            </div>
                        </Link>
                        <Link to="/patches">
                            <div className="vinyl-tab" id="vinyl-tab">
                                <h1>Patches & Pins</h1>
                            </div>
                        </Link>
                        <Link to="/posters">
                            <div className="vinyl-tab" id="vinyl-tab">
                                <h1>Posters</h1>
                            </div>
                        </Link>
                    </div>
                    <div className="vinyl-right-container" id="right-container">
                        <Link to="/">
                            <div className="go-back-button-on" id="go-back-button">
                                <p>⇦ Go back</p>
                            </div>
                        </Link>
                        <div className="chosen-item-on" id="chosen-item" onClick={() => this.buyClick()} onMouseEnter={() => this.cartOn()} onMouseLeave={() => this.cartOff()}>
                            <div className="shopping-cart-off" id="shopping-cart" onClick={() => this.buyClick()}>
                                <img src="http://www.freeiconspng.com/uploads/basket-cart-icon-27.png" />
                            </div>
                        </div>
                        <div className="chosen-description-on" id="chosen-description">
                            <div className="chosen-header">
                                {this.state.feat_name}
                            </div>
                            <p>{this.state.feat_desc}</p>
                            <p>{this.state.feat_specs}</p>
                        </div>
                        <div className="chosen-buy-box-on" id="chosen-buy-box">
                            <div className="chosen-price-container">
                                <p>{this.state.feat_price}</p>
                            </div>
                            <div className="chosen-buy-button" onClick={() => this.buyClick()}>
                                <p>Buy Now</p>
                            </div>
                        </div>

                    </div>
                    <div className="right-bar">
                    </div>
                </div>
                <div className="editor-container">
                <div className="edit box">
                <input id="edit-name-input" placeholder="name" onChange={(e) => this.nameChange(e.target.value)}></input>
                        <input id="edit-description-input" placeholder="description" onChange={(e) => this.descriptionChange(e.target.value)}></input>
                        <input id="edit-specs-input" placeholder="specs" onChange={(e) => this.specsChange(e.target.value)}></input>
                        <input id="edit-price-input" placeholder="price" onChange={(e) => this.priceChange(e.target.value)}></input>
                        <input id="edit-picture-input" placeholder="image_url" onChange={(e) => this.pictureChange(e.target.value)}></input>
                        <input id="edit-buy-input" placeholder="buy-link" onChange={(e) => this.buyChange(e.target.value)}></input>
                        <button id="edit-item" onClick={() => this.editSubmit(this.state.name_change, this.state.edited_item_id, this.state.description_change, this.state.specs_change, this.state.price_change, this.state.picture_change, this.state.buy_change)}>Create new item</button>
                </div>
                </div>
            </div>
        )
    }
}