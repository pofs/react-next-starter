import React from 'react'
import styled from 'styled-components';

const SvgIcon = styled.div`
  background: green;
`;

export default (props) => (
  <SvgIcon>
    {props.name}
    <svg>
      <use xlinkHref={`/static/sprite.svg#${props.name}`} />
    </svg>
  </SvgIcon>
)
