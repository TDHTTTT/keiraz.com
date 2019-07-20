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
            LuJi ChiFan 
          </Big>
          <p>
            WU t la !!!!!!!! 
          </p>
          <p style={{ marginBottom: 0 }}>
            XiaoBB Zhe shi liang duan dui qi. Jiu shi ru guo ni xie de chang yi dian. Ta jiu ying gai zi dong dui qi le ba.
          </p>
        </Fragment>
      }
    />
  )
}

export default Quan 
