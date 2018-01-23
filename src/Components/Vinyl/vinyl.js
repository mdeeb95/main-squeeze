import React, { Component } from 'react'
import axios from 'axios'
import '../Shirts/shirts.css'
import {Link} from 'react-router-dom'

export default class Vinyl extends Component {

    constructor(props) {
        super(props)
        this.state = {
            items: [],
            temp_item_name: '',
            temp_item_description: '',
            temp_item_url: '',
            temp_price: 0,
            name_input: '',
            description_input: '',
            price_input: '',
            url_input: '',
            link_input: '',
            specs_input: '',
            reload: 0,
            chosen_name: '',
            chosen_description: '',
            chosen_price: '',
            chosen_link: '',
            chosen_specs: ''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3001/api/vinyl')
            .then(response => {
                this.setState({ items: response.data }, () =>
                    console.log(this.state))
            })
    }

    nameInput(e) {
        this.setState({ name_input: e }, () => console.log(this.state.name_input))
    }

    descriptionInput(e) {
        this.setState({ description_input: e }, () => console.log(this.state.description_input))
    }
    priceInput(e) {
        this.setState({ price_input: e }, () => console.log(this.state.price_input))
    }
    urlInput(e) {
        this.setState({ url_input: e }, () => console.log(this.state.url_input))
    }
    linkInput(e) {
        this.setState({ link_input: e }, () => console.log(this.state.link_input))
    }
    specsInput(e) {
        this.setState({ specs_input: e }, () => console.log(this.state.specs_input))
    }
    submit() {
        const name = this.state.name_input
        const description = this.state.description_input
        const price = this.state.price_input
        const url = this.state.url_input
        const link = this.state.link_input
        const specs = this.state.specs_input

        axios.post("http://localhost:3001/api/vinyl/", {
            name,
            description,
            price,
            url,
            link,
            specs
        }
        )
        alert('Item uploaded and live! Refresh to see it.')
    }

    itemHover(e) {
        const title = document.getElementById("title" + e)
        const price = document.getElementById("price" + e)
        title.className = "title-container-on"
        price.className = "price-container-on"
    }

    itemHoverOff(e) {
        const title = document.getElementById("title" + e)
        const price = document.getElementById("price" + e)
        title.className = "title-container-off"
        price.className = "price-container-off"
    }

    itemChosen(item_url, item_name, item_description, item_price, item_link, item_specs) {
        const items = document.getElementsByName("item-tag")
        const chosenItem = document.getElementById("chosen-item")
        const chosenDescription = document.getElementById("chosen-description")
        const chosenBuyBox = document.getElementById("chosen-buy-box")
        const goBackButton = document.getElementById('go-back-button')
        for (var i = 0; i < items.length; i++) {
            items[i].className = "item-off"
        }
        chosenItem.className = "chosen-item-on"
        chosenItem.style = `background-image: url(${item_url})`
        chosenDescription.className = "chosen-description-on"
        chosenBuyBox.className = "chosen-buy-box-on"
        this.setState({ chosen_name: item_name, chosen_description: item_description, chosen_price: item_price, chosen_link: item_link, chosen_specs: item_specs}, () => {
            console.log(this.state)
        })
        goBackButton.className = "go-back-button-on"
    }

    buyClick() {
        window.location = this.state.chosen_link
    }

    goBack() {
        const chosenItem = document.getElementById("chosen-item")
        const chosenDescription = document.getElementById("chosen-description")
        const chosenBuyBox = document.getElementById("chosen-buy-box")
        const goBackButton = document.getElementById('go-back-button')
        const items = document.getElementsByName("item-tag")

        chosenItem.className = "chosen-item-off"
        chosenDescription.className = "chosen-description-off"
        chosenBuyBox.className = "chosen-buy-box-off"
        goBackButton.className = "go-back-button-off"
        for (var i = 0; i < items.length; i++) {
            items[i].className = "item-1"
        }
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
                <div className="vinyl-home-container">
                    <div className="left-container">
                    <Link to="/shirts">
                    <div className="shirts-tab-off" id="shirts-tab">
                    <h1>Shirts</h1>
                    </div>
                    </Link>
                    <Link to ="/vinyl">
                    <div className="vinyl-tab-on" id="vinyl-tab">
                    <h1>Vinyl</h1>
                    </div>
                    </Link>
                    </div>
                    <div className="vinyl-right-container">
                    <div className="go-back-button-off" id="go-back-button" onClick={() => this.goBack()}>
                        <p>🡸Go back</p>
                        </div>
                        <div className="chosen-item" id="chosen-item" onClick={() => this.buyClick()} onMouseEnter={() => this.cartOn()} onMouseLeave={() => this.cartOff()}>
                        <div className="shopping-cart-off" id="shopping-cart" onClick={() => this.buyClick()}>
                        <img src="http://www.freeiconspng.com/uploads/basket-cart-icon-27.png" />
                        </div>
                        </div>
                        <div className="chosen-description-off" id="chosen-description">
                            <div className="chosen-header">
                                {this.state.chosen_name}
                            </div>
                            <p>{this.state.chosen_description}</p>
                            <p>{this.state.chosen_specs}</p>
                        </div>
                        <div className="chosen-buy-box-off" id="chosen-buy-box">
                        <div className="chosen-price-container">
                        <p>{this.state.chosen_price}</p>
                        </div>
                        <div className="chosen-buy-button" onClick={() => this.buyClick()}>
                        <p>Buy Now</p>
                        </div>
                        </div>
                        {this.state.items.map(item => {
                            console.log(item)
                            return (
                                <div className="item-1" name="item-tag" id={item.id} key={item.id} style={{ backgroundImage: `url(${item.item_url})` }}
                                    onMouseOver={() => this.itemHover(item.id)} onMouseLeave={() => this.itemHoverOff(item.id)} onClick={() => this.itemChosen(item.item_url, item.item_name, item.item_description, item.price, item.link, item.specs)}>
                                    <div className="title-container-off" id={"title" + item.id}>
                                        <p>{item.item_name}</p>
                                    </div>
                                    <div className="price-container-off" id={"price" + item.id}>
                                        <p>{item.price}</p>
                                        <div className="check-out-box">
                                            <p>Buy</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="right-bar">
                    </div>
                </div>
                <div className="editor-container">
                    <input placeholder="name" onChange={(e) => this.nameInput(e.target.value)}></input>
                    <input placeholder="description" onChange={(e) => this.descriptionInput(e.target.value)}></input>
                    <input placeholder="item specs, ect." onChange={(e) => this.specsInput(e.target.value)}></input>
                    <input placeholder="price" onChange={(e) => this.priceInput(e.target.value)}></input>
                    <input placeholder="picture url" onChange={(e) => this.urlInput(e.target.value)}></input>
                    <input placeholder="buy link url" onChange={(e) => this.linkInput(e.target.value)}></input>
                    <button onClick={() => this.submit()}>Create new item</button>
                </div>
            </div>
        )
    }
}