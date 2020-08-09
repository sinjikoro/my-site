import React from 'react'
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"
import styles from "../styles"
import { StaticQuery, graphql } from "gatsby"
import presets from "../utils/presets"

export const HeadMenu = (props) => {
  return(
    <Link
    to={props.link}
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
          margin: 5,
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
      {props.children}
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
          created by
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

export const Posts = (props) => {
  return (
    <ul
      css={{
        marginBottom: rhythm(2),
        marginTop: rhythm(2),
        marginLeft: 0,
        listStyle: `none`,
      }}
    >
      {props.children}
    </ul>
  )
}

export const Post = (props) => {
  const slug = props.slug
  const date = props.date
  const title = props.title

  return(
    <li key={slug}>
      <span
        css={{
          color: styles.colors.light,
          display: `block`,
          [presets.Tablet]: {
            float: `right`,
            marginLeft: `1rem`,
          },
        }}
      >
        {date}
      </span>
      <Link to={slug} className="link-underline">
        {title}
      </Link>
    </li>
  )
}

export const Section = (props) => {
  return(
    <>
      <h2
      css={{
        ...scale(1 / 2),
        fontWeight: `800`,
        marginBottom: rhythm(0),
      }}
      >
        { props.title }
      </h2>
      { props.children }
    </>
  )
}

export const SubSection = (props) => {
  return(
    <>
      <p
      css={{
        ...scale(1 / 2),
        margin: [rhythm(2), 0, rhythm(1 / 2), rhythm(1 / 2)],
      }}
      >
        { props.title }
      </p>
      <p
      css={{
        marginLeft: rhythm(1 / 2)
      }}
      >
        { props.children }
      </p>
    </>
  )
}