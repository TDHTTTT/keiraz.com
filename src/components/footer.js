import React from 'react'
import styled from 'styled-components'
import media from 'utils/media-queries'

import { fontSize } from 'styles/theme'

import Section from 'components/section'

const FooterText = styled.div`
  text-align: center;
  font-size: ${fontSize.f2};
  ${media.sm`
    text-align: left;
    font-size: ${fontSize.f1};
  `}
`

function Footer() {
  return (
    <Section>
      <FooterText>
        This page is open source, Check it out on&nbsp;
        <a href="https://github.com/TDHTTTT/keiraz.com">Github</a>
        <br />© 2019 Keira&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </FooterText>
    </Section>
  )
}

export default Footer
