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
        {/* Made with ❤️ by &nbsp;
        <a href="https://github.com/TDHTTTT/">TDHTTTT</a> using 
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a> */}
        <br /> © {new Date().getFullYear()} Haochen (Keira) Zhu
      </FooterText>
    </Section>
  )
}

export default Footer
