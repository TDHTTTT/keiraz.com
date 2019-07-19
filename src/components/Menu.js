import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { slide as Menu } from 'react-burger-menu'

import { FiHome, FiBook, FiUser } from 'react-icons/fi'

import { color, fontSize } from 'styles/theme'

const SideMenu = styled.nav`
  display: none;
  @media screen and (min-width: 52em) {
    display: block;
  }
`

const SideMenuLink = styled(Link)`
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  position: relative;
  display: block;
  margin: 0;
  padding: 0.6em 0 0.5em;
  color: var(--color-base) !important;
  text-shadow: 0.125em 0.125em var(--color-secondary) !important;
  &:hover {
    text-shadow: 0.125em 0.125em var(--color-secondary),
      0.25em 0.25em var(--color-tertiary),
      0.375em 0.375em var(--color-highlight), 0.5em 0.5em var(--color-accent) !important;
  }
  @media screen and (min-width: 52em) {
    padding: 0.5em 0;
    color: var(--color-accent);
    text-align: left;
  }
`
const MenuToggle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${color.grey900};
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    color: red;
  }
`

export const BottomNavBar = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background: var(--color-base);
  border-top: 3px solid var(--color-secondary);
  overflow: hidden;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 100;
  a {
    margin: 0;
    text-align: center;
    padding: 0.618rem 0 0;
    border-right: 3px solid var(--color-secondary);
    &:last-child {
      border-right: 0px solid var(--color-secondary);
    }
  }
  @media screen and (min-width: 52em) {
    display: none;
  }
`
const Port = styled.a`
  text-decoration: none;
  display: flex;
  justify-content: right;
  align-items: right;
  background: white;
  padding: 30px 5px 0 5px;
  color: ${color.grey900};
  &:hover {
    color: #F5BB40;
  }
  &:active {
    color: ${color.red};
  }
  &:visited {
    color: ${color.red};
  }
`
const Cont = styled.a`
  text-decoration: none;
  display: flex;
  justify-content: right;
  align-items: right;
  background: white;
  padding: 0 5px 0 5px;
  color: ${color.grey900};
  &:hover {
    color: #F5BB40;
  }
  &:active {
    color: ${color.red};
  }
  &:visited {
    color: ${color.red};
  }
`

class Navigation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false,
    }
  }
  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen })
  }
  closeMenu() {
    this.setState({ menuOpen: false })
  }
  toggleMenu() {
    this.setState({ menuOpen: !this.state.menuOpen })
  }

  render() {
    return (
      <>
        <SideMenu>
          <MenuToggle onClick={() => this.toggleMenu()}>MORE</MenuToggle>
          <Menu
            right
            isOpen={this.state.menuOpen}
            pageWrapId={'page-wrap'}
            outerContainerId={'outer-container'}
            noOverlay
            customBurgerIcon={false}
          >
            <SideMenuLink
              className="linkAccentReset scopedLinkAccent"
              alt="Portfolio"
            >
              <Port>Portfolio</Port>
            </SideMenuLink>
            <SideMenuLink
              className="linkAccentReset scopedLinkAccent"
              alt="Contact Page"
            >
              <Cont>Contact</Cont>
            </SideMenuLink>

          </Menu>
        </SideMenu>
      </>
    )
  }
}

export default Navigation
