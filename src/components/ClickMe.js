import React, { Component } from 'react'

class ClickMe extends Component {
    state = {
        hover: false
    }

    hoverEnter = () => {
        this.setState({hover: true})
    }

    hoverLeave = () => {
        this.setState({hover: false})
    }

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
            backgroundColor: this.state.hover ? "#6FC6FF" : "#55acee",
            boxShadow: "0px 5px 0px 0px #3C93D5"
          };
        return (
            <div>
                <a href="#" onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave} style={buttonStyles}>Click me!</a>
            </div>
        )
    }
}

export default ClickMe;;