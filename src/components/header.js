import React from 'react'
import styled from 'styled-components'
import media from 'utils/media-queries'
import { color, fontSize } from 'styles/theme'

import Icon from 'components/icons'
import Menu from 'components/Menu'


const Div = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex: 0 0 auto;
  ${media.sm`
    display: ${props => (props.article ? 'flex' : 'block')};
  `};
  z-index: 10;
  height: ${props => (props.article ? '74px' : '')};
  ${media.xs`
    display: block;
    height: 112px;
  `}
`

const LogoWrapper = styled.div`
  padding: 24px 0 24px 24px;
  ${media.sm`
    padding: ${props => (props.article ? '24px 0 24px 24px' : '24px 0 0 0')};
  `};
  ${media.xs`
    padding: 24px 0 0 0;
  `}
`

const NameLink = styled.a`
  text-decoration: none;
`

const Name = styled.h1`
  white-space: nowrap;
  font-weight: 800;
  font-size: ${fontSize.f10};
  text-align: left;
  margin: 0;
  line-height: 1.2;
  ${media.sm`
    text-align: center;
    font-size: ${fontSize.f7};
  `};
`

const NameArticle = styled.div`
  white-space: nowrap;
  font-size: ${fontSize.f5};
  font-weight: 700;
  text-align: left;
  margin: 0;
  line-height: 1.2;
  color: ${color.grey900};
  ${media.xs`
    text-align: center;
  `};
`

const Role = styled.div`
  color: ${color.grey700};
  text-align: left;
  line-height: 1.4;
  font-size: ${fontSize.f4};
  ${media.sm`
    text-align: center;
    font-size: ${fontSize.f6};
  `};
`

const BLinks = styled.div`
  display: grid;
  grid-column-gap: 4px;
  grid-template-columns: auto auto auto;
  padding: 45px 24px 0 24px;
  font-size: ${fontSize.f6};
  font-weight: 700;
  ${media.sm`
    padding: ${props => (props.article ? '15px 12px 0 8px' : '4px 0 0 0')};
    grid-column-gap: 0;
  `}
  ${media.xs`
    padding: 0;
  `}
  justify-content: center;
`


const Blog = styled.a`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  padding: 0 5px 0 5px;
  color: ${color.grey900};
  transition: text-shadow .5s;
  &:hover {
    color: ${color.grey900}; 
    text-shadow: 0.05em 0.05em #f6f5f5,
      0.125em 0.125em #62bbc1,
      0.2em 0.2em #fe4a49,
      0.275em 0.275em #fcba04;
  }
  &:active {
    color: ${color.red};
  }
  &:visited {
    color: ${color.red};
  }
`

const About = styled.a`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  padding: 0 5px 0 5px;
  color: ${color.grey900};
  &:hover {
    color: #E25C48;
  }
  &:active {
    color: ${color.red};
  }
  &:visited {
    color: ${color.red};
  }
`
const NN = styled.a`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  padding: 0 5px 0 5px;
  color: ${color.grey900};
  &:hover {
    color: #76BAC8;
  }
  &:active {
    color: ${color.red};
  }
  &:visited {
    color: ${color.red};
  }
`

const SocialLinks = styled.div`
  display: grid;
  grid-column-gap: 4px;
  grid-template-columns: auto auto auto;
  padding: 15px 24px 0 24px;
  ${media.sm`
    padding: ${props => (props.article ? '15px 12px 0 8px' : '4px 0 0 0')};
    grid-column-gap: 0;
  `}
  ${media.xs`
    padding: 0;
  `}
  justify-content: center;
`

const SocialLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: white;
  border-radius: 20px;
  color: ${color.grey900};
  border: 1px solid white;
  &:hover {
    border: 1px solid ${color.grey150};
    background: ${color.grey150};
    color: ${color.grey900};
  }
  &:active {
    color: ${color.grey900};
  }
  &:visited {
    color: ${color.grey900};
  }
`

export const SvgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 24px;
  min-height: 24px;
  color: inherit;
  background: inherit;
`

export const InlineSvg = styled.svg`
  height: 24px;
  width: 24px;
  color: inherit;
  fill: currentColor;
`

const Tooltip = styled.div`
  padding: 2px 24px 0 24px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  opacity: ${props => (props.visible ? '1' : '0')};
  transition: opacity 300ms;
  ${media.sm`
    justify-content: center;
    padding-top: 6px;
  `}
`

const TooltipIcon = styled.div`
  transform: rotate(270deg);
  margin-left: 8px;
`

const TooltipText = styled.div``

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tooltipIsVisible: false,
      tooltipText: '',
    }
  }

  showTooltip = tooltipText => {
    this.setState({
      tooltipIsVisible: true,
      tooltipText: tooltipText,
    })
  }

  hideTooltip = () => {
    this.setState({
      tooltipIsVisible: false,
    })
  }
  render() {
    return (
      <Div article={this.props.article}>
        <LogoWrapper article={this.props.article}>
          {this.props.article && (
            <NameLink href="/">
              <NameArticle article={this.props.article}>
               Keira Zhu 
              </NameArticle>
            </NameLink>
          )}
          {!this.props.article && (
            <Name article={this.props.article}>Keira Zhu</Name>
          )}
          {!this.props.article && <Role>NN HE</Role>}
        </LogoWrapper>
        <div>
          <BLinks>
            <Blog href="https://blog.keiraz.com">BLOG</Blog>
          </BLinks>

        </div>
      </Div>
    )
  }
}

export default Header
