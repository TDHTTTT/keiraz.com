import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import GlobalStyle from 'styles/global-style'

class GlobalWrapper extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      displayOutlines: false,
    }
  }
  componentDidMount() {
    window.addEventListener('keydown', e => this.handleKeyboardInput(e))
  }

  handleKeyboardInput(e) {
    const key = e.keyCode || e.charCode
    // Tab
    if (key === 9) {
      this.setState({ displayOutlines: true })
    }
  }

  render() {
    return (
      <Fragment>
        <Helmet>
          <html lang="en" />
          <title>Keira Zhu</title>
          <meta name="description" content="Keira Zhu's Personal Blog" />
          <meta
            name="keywords"
            content="design, art, economics, business"
          />
          <meta
            property="og:image"
            content="/land_kz_light_copy.png"
          />
          <meta property="og:description" content="Keira Zhu's Personal Blog" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://keiraz.com" />
          <meta property="og:title" content="Keira Zhu" />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/manifest.json" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="theme-color" content="#ffffff" />
        </Helmet>
        <GlobalStyle displayOutlines={this.state.displayOutlines} />
        {this.props.children}
      </Fragment>
    )
  }
}

export default GlobalWrapper
