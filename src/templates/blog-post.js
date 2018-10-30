import React from 'react'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import get from 'lodash/get'
import injectSheet from 'react-jss'
import { DiscussionEmbed } from "disqus-react"

import { rhythm } from '../utils/typography'

import 'typeface-playfair-display'
import 'typeface-montserrat'
import 'typeface-cormorant-garamond'
import "prismjs/themes/prism.css"
import "katex/dist/katex.min.css"
import SimpleLayout from "../components/SimpleLayout/SimpleLayout"
import profilePic from '../pages/profil.png'

const styles = {
  title: {
    margin: '2.0rem, 2.0rem',
    font: '200 80px playfair display,helvetica,arial',
  },
  subtitle: {
    margin: '2.0rem, 2.0rem',
    font: '200 22px montserrat, sans-serif'
  },
  content: {
    width: '70%',
    font: '400 20px cormorant garamond, sans-serif',
    "& .katex": {
      fontSize: '0.85em !important',
    },
    "& .katex-display": {
      margin: '0.5em 0',
    },
    "& p": {
      margin: "0.0em",
    }
  },
  contentContainer: {
    display: 'flex'
  },
  leftSideContent: {
    //display: 'flex',
    //justifyContent: 'center',
    width: '15%',
  },
  rightSideContent: {
    width: '15%',
  },
  postContainer: {
    "& h1" : {
      margin: "0.3em 0em"
    },
    "& h2" : {
      margin: "0.3em 0em 1.5em 0em"
    },
    "& h4" : {
      margin: "1.5em 0.0em 0.5em 0em"
    },
    "& blockquote": {
      display: "block",
      borderWidth: "2px 0",
      borderStyle: "solid",
      borderColor: "#eee",
      padding: "1.5em 0 0.5em",
      margin: "1.5em 0",
      position: "relative",
    },
    "& blockquote:before" : {
      content: '"\u201c"',
      position: "absolute",
      top: "0em",
      left: "50%",
      transform: "translate(-50%, -50%)",
      background: "#fff",
      width: "3rem",
      height: "2rem",
      font: "6em/1.08em 'PT Sans', sans-serif",
      color: "#666",
      textAlign: "center",
    }
  },
  nextPrevPost: {
    font: '400 20px cormorant garamond, sans-serif',
    marginTop: '20px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    listStyle: 'none',
    padding: 0,
  }
}

class BlogPostTemplate extends React.Component {
  render() {
    const { classes } = this.props
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const siteDescription = post.excerpt
    const { previous, next } = this.props.pageContext
    console.log(previous)
    const disqusShortname = "tobiasmadsen";
    const disqusConfig = {
      identifier: post.frontmatter.title,
      title: post.frontmatter.title,
    };

    return (
      <SimpleLayout>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${post.frontmatter.title} | ${siteTitle}`}
        />
        <div className={classes.postContainer}>
          <h1 className={classes.title}>{post.frontmatter.title}</h1>
          <h2 className={classes.subtitle}>{post.frontmatter.subtitle}</h2>
          <div className={classes.contentContainer}>
            <div className={classes.leftSideContent}>
              <img
                src={profilePic}
                alt={`Tobias Madsen`}
                style={{
                  marginRight: rhythm(1 / 2),
                  marginBottom: 0,
                  width: '80%',
                }}
              />
            </div>
            <div className={classes.content}>
              <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
            <div className={classes.rightSideContent} />
          </div>

          <ul className={classes.nextPrevPost}>
            {previous && (
            <li>
            <Link to={`${previous.frontmatter.date}${previous.fields.slug}`} rel="prev">
            ← {previous.frontmatter.title}
            </Link>
            </li>
            )}
            {next && (
            <li>
            <Link to={`${next.frontmatter.date}${next.fields.slug}`} rel="next">
            {next.frontmatter.title} →
            </Link>
            </li>
            )}
          </ul>
          <hr
            style={{
              marginTop: rhythm(1),
              marginBottom: rhythm(1),
            }}
          />
          <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
        </div>
      </SimpleLayout>
    )
  }
}

const styledBlogPostTemplate = injectSheet(styles)(BlogPostTemplate)
export default styledBlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        title
      }
    }
  }
`
