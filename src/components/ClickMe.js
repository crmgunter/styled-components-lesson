import React, { Component } from 'react'
import styled from 'styled-components'

const Button = styled.a`
  border-radius: 5px;
  padding: 15px 25px;
  font-size: 22px;
  text-decoration: none;
  margin: 20px;
  color: #fff;
  position: relative;
  display: inline-block;
  background-color: #55acee;
  box-shadow: 0px 5px 0px 0px #3C93D5;
  &:hover{
    background-color: #6FC6FF
  }
`

const ErrorButton = styled(Button)`
  background-color: #e74c3c;
  box-shadow: 0px 5px 0px 0px #CE3323;
  &:hover{
    background-color: #FF6656;
  }
`;

const SuccessButton = styled(Button)`
  background-color: #2ecc71;
  box-shadow: 0px 5px 0px 0px #15B358;
  &:hover{
    background-color: #48E68B;
  }
`;

const InfoButton = styled(Button)`
  background-color: #f1c40f;
  box-shadow: 0px 5px 0px 0px #D8AB00;
  &:hover{
    background-color: #FFDE29;
  }
`



class ClickMe extends Component {
    render() {

        return (
            <div>
                <Button>Click me!</Button>
                <ErrorButton>Error</ErrorButton>
                <SuccessButton>Success</SuccessButton>
                <InfoButton>Info</InfoButton>
            </div>
        )
    }
}

export default ClickMe;;