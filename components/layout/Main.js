import React from 'react'
import Section from '../elements/Section';
import Box from '../elements/Box';
import SvgIcon from '../elements/SvgIcon';

const Main = () => (
  <main>
    <Box>
      <Box/>
      <Section title='Section1'>
        content
        <SvgIcon name='logo'/>
      </Section>
    </Box>
  </main>
)

export default Main
