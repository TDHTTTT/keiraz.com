import * as React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import kebabCase from "lodash/kebabCase"

const Ul = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

const Li = styled.li`
  display: inline-block;
  margin: 0;
  font-size: 16px;

  :before {
    content: ', ';
  }
  :first-child:before {
    display: none;
  }
`
export function TagList({tags, ...otherProps}) {
  if (!tags || tags.length === 0) {
    return null
  }

  return (
    <Ul {...otherProps}>
      {tags.map(tag => (
        <Li key={tag}>
          <Link to={`/tags/${kebabCase(tag)}/`}>
            {tag}
					</Link>
        </Li>
      ))}
    </Ul>
  )
}
