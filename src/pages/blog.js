import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import injectSheet from 'react-jss'
import SimpleLayout from "../components/SimpleLayout/SimpleLayout"
import { Link } from 'gatsby'

import 'typeface-playfair-display'
import 'typeface-montserrat'
import 'typeface-cormorant-garamond'

import Card from "@material-ui/core/Card/Card"
import Typography from "@material-ui/core/Typography/Typography"
import CardContent from "@material-ui/core/CardContent/CardContent"
import CardMedia from "@material-ui/core/CardMedia/CardMedia"

const styles = {
  container: {
    columnCount: 2,
    columnGap: "3%",
    columnWidth: "30%"
  },
  blogPostCard: {
    width: "100%",
    breakInside: "avoid",
    padding: '20px',
    marginBottom: '35px',
  },
  title: {
    margin: '0.5rem 0.0rem',
    font: '200 22px montserrat, sans-serif',
  },
  titleContainer: {
    display: "flex",
    alignItems: "baseline",
    justifyContent: "space-between",
  },
  excerpt: {
    font: '400 18px cormorant garamond, sans-serif',
  },
  date: {
    font: '200 12px montserrat, sans-serif',
  },
  media: {
    height: 140,
  },
}

class Blog extends React.Component {
  render() {
    const { classes } = this.props
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')
    console.log(posts)
    return (
      <SimpleLayout>
        <Helmet title={siteTitle} />
        <div className={classes.container}>
          {posts.map(({ node }) => {
            const title = get(node, 'frontmatter.title') || node.fields.slug
            const date = new Date(get(node, 'frontmatter.date'))
            const link = `${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()}${node.fields.slug}`
            const excerpt = node.excerpt
            console.log(node.frontmatter.image? node.frontmatter.image.childImageSharp.fluid.src: "no image")
            return (
              <Card key={title} className={classes.blogPostCard}>
                <Link to={link}>
                  { node.frontmatter.image?
                    <CardMedia
                      className={classes.media}
                      image={node.frontmatter.image.childImageSharp.fluid.src}
                      title={title}
                    /> : null
                  }
                  <CardContent>
                    <div className={classes.titleContainer}>
                      <Typography variant="h5" component="h2" className={classes.title}>
                        {title}
                      </Typography>
                      <Typography component="p" className={classes.date}>
                        {node.frontmatter.date}
                      </Typography>
                    </div>
                    <Typography component="p" className={classes.excerpt}>
                      {excerpt}
                    </Typography>
                  </CardContent>
                </Link>
              </Card>
            )
          })}
        </div>
      </SimpleLayout>
    )
  }
}

const styledBlogRoll = injectSheet(styles)(Blog)
export default styledBlogRoll

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          fields {
            slug
          }
          frontmatter {
            title
            date
            image {
              childImageSharp {
                fluid(maxWidth: 800, maxHeight: 600) {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`
