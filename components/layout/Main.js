import React from 'react'
import Section from '../elements/Section'
import Box from '../elements/Box'
import SvgIcon from '../elements/SvgIcon'

const Main = () => (
  <main>
    <Box>
      <Box />
      <Section title="Section1">
        content
        <SvgIcon width="50" height="50" name="social_vk" />
      </Section>
    </Box>
  </main>
)

export default Main
