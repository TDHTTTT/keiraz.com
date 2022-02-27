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

function Skill() {
  return (
    <TwoColumns
      leftColumn={<SectionHeading>Skill</SectionHeading>}
      rightColumn={
        <Fragment>
          

          <Big>
          📈 Data Visualization | Dashboard
          </Big>
          <p style={{ marginBottom: 20 }}>
          Python (ggolot, Plotply, seaborn, Matplotlib), R (ggplot2, autoplot), Tableau, SAS JMP Pro
          </p>

          <Big>
          🛠 Data Manipulation | Data Wrangling
          </Big>
          <p style={{ marginBottom: 20 }}>
          Python (pandas, Numpy), R (dqlyr, tidyr)
          </p>

          <Big>
          🤖 Machine Learning
          </Big>
          <p style={{ marginBottom: 20 }}>
          Python (Scikit-learn, TensorFlow), R (h2o, msts, snaive, Arima, etc.)
          </p>

          <Big>
          🥽 Models
          </Big>
          <p style={{ marginBottom: 20 }}>
          K-Nearest Neighbors, Logistic Regression, Decision Trees, Neural Networks, Clustering, etc.
          </p>          

          <Big>
          📊 Statistics
          </Big>
          <p style={{ marginBottom: 20 }}>
          Hypothesis testing, A/B testing, etc.
          </p>

          <Big>
          🔎 Databases 
          </Big>
          <p style={{ marginBottom: 20 }}>
          SQL, MapReduce (PySpark)
          </p>

        </Fragment>
      }
    />
  )
}

export default Skill
