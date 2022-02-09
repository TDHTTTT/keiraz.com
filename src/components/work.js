import React, { Fragment } from 'react'
import Link from 'gatsby-link'
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

function Work() {
  return (
    <TwoColumns
      leftColumn={<SectionHeading>Work</SectionHeading>}
      rightColumn={
        <Fragment>
          <Big>
            I am a Data Scientist with a Business Vision.
          </Big>
          <p style={{ marginBottom: 0 }}>
          💻 SQL Queries | Machine learning | Data Visualization | Python | R | Tableau
      
          </p>
        </Fragment>
      }
    />
  )
}

export default Work
