import React, { Component } from "react";

class Card extends Component {
    state = {
        photo: "https://randomuser.me/api/portraits/women/16.jpg",
        name: "Aaron",
        email: "123@abc.com",
        birthday: "Feb. 30, 1991",
        address: "123 Farts Street",
        phone: "(913) 867-5309",
        password: "password"
    }
    async componentDidMount() {
        try {
            const response = await fetch('https://randomuser.me/api/?results=1')
            const data = await response.json();
            console.log(data.results[0]);
            this.setState({
                photo: data.results[0].picture.large
            })
        } catch (error) {
            console.log("error is ", error.message)
        }
    }
    render() {
        const { photo, name, email, birthday, address, phone, password } = this.state;
        return (
            <div className="card">
                <div className="image-holder">
                    <img alt="user-faceshot" src={photo}></img>
                </div>
                <div className="information-holder">
                    <p>Hello, my name is {name}!</p>
                    <p>My email is {email}.</p>
                    <p>{birthday} is my birthday!</p>
                    <p>You can find me at {address}.</p>
                    <p>Shoot me a ring at {phone}</p>
                    <p>{password} is totally not my password.</p>
                </div>
            </div>
        );
    }
}

export default Card;