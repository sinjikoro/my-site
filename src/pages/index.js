import React from "react"
import { graphql } from "gatsby"
import Layout from "../layouts"
import { Title, Post, Posts } from "../components/Parts"

class Index extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
 
    return (
      <Layout location={this.props.location}>
        <div>
          <Title>blog</Title>
          <Posts>
            {posts.map(post => (
              <Post 
                slug={post.node.fields.slug}
                title={post.node.frontmatter.title}
                date={post.node.frontmatter.date}
              />
            ))}
          </Posts>
        </div>
      </Layout>
    )
  }
}

export default Index

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: ASC }
      filter: { frontmatter: { draft: { ne: true }, example: { ne: true } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
