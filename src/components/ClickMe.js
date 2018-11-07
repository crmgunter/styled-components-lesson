import React, { Component } from 'react'

class ClickMe extends Component {
    render() {
        const buttonStyles = {
            borderRadius: "5px",
            padding: "15px 25px",
            fontSize: "22px",
            textDecoration: "none",
            margin: "20px",
            color: "#fff",
            position: "relative",
            display: "inline-block",
            backgroundColor: "#55acee",
            boxShadow: "0px 5px 0px 0px #3C93D5"
          };
        return (
            <div>
                <a href="#" style={buttonStyles}>Click me!</a>
            </div>
        )
    }
}

export default ClickMe;;