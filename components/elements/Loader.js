import React from 'react'
import styled from 'styled-components'
import animation from '@/assets/stylesheets/application/animation.scss'

export default props => (
  <Loader bgColor={props.bgColor} position={props.position}>
    <Btn color={props.color} />
  </Loader>
)

const Loader = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => (props.bgColor ? props.bgColor : 'transparent')};
  position: ${props => (props.position ? props.position : 'fixed')};
`
const Btn = styled.div`
  width: 30px;
  height: 30px;
  border: 2px solid transparent;
  border-bottom-color: ${props => (props.color ? props.color : '#7c9533')};
  border-top-color: ${props => (props.color ? props.color : '#7c9533')};
  border-radius: 50%;
  animation: ${animation.spin} 1s infinite linear;
  transition: 0.3s;
`
