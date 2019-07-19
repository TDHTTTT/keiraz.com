import React, { Fragment } from 'react'
import styled from 'styled-components'
import media from 'utils/media-queries'

import { color, fontSize } from 'styles/theme'

import TwoColumns from 'components/twoColumns'
import SectionHeading from 'components/sectionHeading'

const Big = styled.span`
  font-size: ${fontSize.f6};
  color: ${color.grey900};
  font-weight: 700;
  ${media.sm`
    font-size: ${fontSize.f5};
  `}
`

function Writing() {
  return (
    <TwoColumns
      leftColumn={<SectionHeading>Writing</SectionHeading>}
      rightColumn={
        <Fragment>
          <Big> 
            Daomi HE Shiji
          </Big>
          <p style={{ marginBottom: 0 }}>
            Daomi xiaohe's shi, published by xiaohe chubanshe
          </p>
        </Fragment>
      }
    />
  )
}

export default Writing
