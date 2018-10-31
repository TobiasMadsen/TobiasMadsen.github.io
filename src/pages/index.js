import React from 'react'
import 'typeface-playfair-display'
import 'typeface-montserrat'
import 'typeface-cormorant-garamond'
import {graphql} from "gatsby"
import BlogPostTemplate from "../templates/blog-post"

class Home extends React.Component {
  render() {
    console.log(this.props)
    const data = {
      site: this.props.data.site,
      markdownRemark: this.props.data.allMarkdownRemark.edges[0].node
    }
    return (<BlogPostTemplate data={data}/>)
  }
}

export default Home

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 1) {
      edges {
        node {
          id
          excerpt
          html
          frontmatter {
            title
          }
        }
      }
    }
  }
`
