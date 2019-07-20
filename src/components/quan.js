import React, { Fragment } from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import media from 'utils/media-queries'

import { color, fontSize } from 'styles/theme'

import TwoColumns from 'components/twoColumns'
import SectionHeading from 'components/sectionHeading'
// import WhenInView from 'components/wheninView'

// const Reveal = styled.div`
//   opacity: ${props => (props.visible ? '1' : '0')};
//   transform: translateY(${props => (props.visible ? '0px' : '30px')});
//   transition: all 1s;
// `

const Big = styled.span`
  font-size: ${fontSize.f6};
  color: ${color.grey900};
  font-weight: 700;
  ${media.sm`
    font-size: ${fontSize.f5};
  `}
`

function Quan() {
  return (
    <TwoColumns
      leftColumn={<SectionHeading>Quan</SectionHeading>}
      rightColumn={
        <Fragment>
          <Big>
            LuJi ChiFan * 500 !!!!!!!! 
          </Big>
          <p style={{ marginBottom: 0 }}>
            LuJi ChiFan * 500 !!!!!!!! 
          </p>
          <p style={{ marginBottom: 0 }}>
            WU t la !!!!!!!! 
          </p>
        </Fragment>
      }
    />
  )
}

export default Quan 
