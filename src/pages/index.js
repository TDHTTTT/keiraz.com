import React from 'react'
import Breakpoints from 'utils/breakpoints'

import GlobalWrapper from 'components/global-wrapper'
import Hero from 'components/hero'
import Section from 'components/section'
import About from 'components/about'
import Work from 'components/work'
import Writing from 'components/writing'
import Quan from 'components/quan'
import Footer from 'components/footer'

export default class App extends React.Component {
  render() {
    return (
      <GlobalWrapper>
        {/* <Breakpoints /> */}
        <Hero />
        <Section id={'about'}>
          <About />
        </Section>
        <Section id={'projects'}>
          <Work />
        </Section>
        <Section id={'writing'}>
          <Writing />
        </Section>
        <Section>
          <Quan id={'quan'}/>
        </Section>
        <Footer />
      </GlobalWrapper>
    )
  }
}
