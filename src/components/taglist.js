import * as React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import kebabCase from "lodash/kebabCase"

export function TagList({tags, ...otherProps}) {
  if (!tags || tags.length === 0) {
    return null
  }

  return (
    <ul {...otherProps}>
      {tags.map(tag => (
        <li key={tag}>
          <Link to={`/tags/${kebabCase(tag)}/`}>
            {tag}
					</Link>
        </li>
      ))}
    </ul>
  )
}
