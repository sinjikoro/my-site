import React from 'react'
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"
import styles from "../styles"
import { StaticQuery, graphql } from "gatsby"

export const HeadMenu = (props) => {
  return(
    <Link
    to="/"
    css={{
      display: `inline-block`,
      textDecoration: `none`,
    }}
    >
      <h1
        css={{
          ...scale(0),
          color: styles.colors.light,
          fontWeight: `normal`,
          lineHeight: 1,
          margin: 0,
        }}
      >
        {props.text}
      </h1>
  </Link>
  )
}

export const Title = (props) => {
  return(
    <h1
      css={{
        ...scale(4 / 5),
        fontWeight: `800`,
        marginBottom: rhythm(2),
      }}
    >
      {props.text}
    </h1>
  )
}

export const Footer = (props) => {
  return (
    <StaticQuery
      query={graphql`
      query {
        site {
          siteMetadata {
            author
            homepage
          }
        }
      }
    `}
    render={data => {
      const { author, homepage } = data.site.siteMetadata
      return(
        <div
        css={{
          ...scale(-0.5),
          color: styles.colors.light,
        }}
        >
          powered by
          {` `}
          <a target="_blank" rel="noopener noreferrer" href={homepage}>
            {author}
          </a>
        </div>
      )
    }}
    />
  )
}