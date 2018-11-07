import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
import { pulse, slideInRight } from 'react-animations'

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

const rotate360 = keyframes`
  from {
      transform: rotate(0deg);
  }
  to {
      transform: rotate(360deg);
  }
`

const RotatingDiv = styled.div`
  animation: ${rotate360} 2s infinite;
`

const pulseAnimation = keyframes`${pulse}`

const PulsingDiv = styled.div`
  animation: ${pulseAnimation} 2s infinite;
`
const slideInRightAnimation = keyframes`${slideInRight}`

const RightSlideDiv = styled.div`
  animation: ${slideInRightAnimation} 2s infinite;
`

class ClickMe extends Component {
    render() {

        return (
            <div>
                <RotatingDiv><Button>Click me!</Button></RotatingDiv>
                <PulsingDiv><ErrorButton>Error</ErrorButton></PulsingDiv>
                <RightSlideDiv><SuccessButton>Success</SuccessButton></RightSlideDiv>
                <InfoButton>Info</InfoButton>
            </div>
        )
    }
}

export default ClickMe;;