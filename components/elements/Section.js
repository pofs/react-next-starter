import React from 'react'
import styled from 'styled-components';

const Section = styled.section`
  padding: 100px;
  background: red;
`;

const SectionWrapp = styled.div``;

const SectionData = styled.div``;

const Title = styled.h2`
  font-size: 30px;
`;

export default (props) => (
  <Section>
    <SectionWrapp>
      <Title>
        { props.title }
      </Title>
      <SectionData>
        { props.children }
      </SectionData>
    </SectionWrapp>
  </Section>
)


