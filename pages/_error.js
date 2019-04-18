import React from 'react';
import Template from '@/components/layout/Template'
import Box from '@/components/elements/Box'
import styled from 'styled-components'

class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode };
  }

  render() {
    return (
      <Template header='no-fixed'>
        <Wrap>
          <Data>
            <TitleNumber>
              404
            </TitleNumber>
            <Title>
              {this.props.statusCode
                ? `Страница не найдена `
                : 'An error occurred on client'}
            </Title>
          </Data>
        </Wrap>
      </Template>
    );
  }
}

export default Error;

const Wrap = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding-top: 120px;
  
  
`;
const Data = styled(Box)`
  
`;
const Title = styled.h1`
  font-size: 25px;
  font-weight: 700;
`;
const TitleNumber = styled.div`
  font-size: 75px;
  font-weight: 700;
`;