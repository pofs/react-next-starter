import React from 'react'
import styled from 'styled-components';

const Title = styled.div`
  font-size: 48px;
  ${props => (props.modifier === 'section' && `
    font-size: 40px; 
    padding-bottom: 60px;
    font-weight: 700;
    
     @media (max-width: 767px) {
      padding-bottom: 25px;
      font-size: 35px;
    }
    
    @media (max-width: 500px) {
      font-size: 25px;
    }
  `)}
`;

export default (props) => (
  <Title as={props.type ? props.type : 'div'} modifier={props.modifier}>
    { props.title }
  </Title>
)


