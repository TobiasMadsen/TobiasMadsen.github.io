import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import injectSheet from 'react-jss'
import { rhythm } from '../utils/typography'
import SimpleLayout from "../components/SimpleLayout/SimpleLayout"
import 'typeface-playfair-display'
import 'typeface-montserrat'
import 'typeface-cormorant-garamond'
import profilePic from './profil.png'

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
    font: '400 20px cormorant garamond, sans-serif'
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
  horizontalLine: {
    color: 'lightgray',
    backgroundColor: 'lightgray',
    height: '1px',
    width: '70%',
    //marginTop: '20px',
  },
  hlContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  }
}

class Home extends React.Component {
  render() {
    const { classes } = this.props
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')

    return (
      <SimpleLayout>
        <Helmet title={siteTitle} />
        <div>
          <h1 className={classes.title}>
            Whatever People Say I Am, That's What I'm Not
          </h1>
          <h2 className={classes.subtitle}>
            My name is <span className={classes.emphasize}>Tobias Madsen</span>.
            I'm a statistician and software-developer based in Aarhus, Denmark.
            In my blog I will write about topics such as data analysis, statistics, software development and music.
          </h2>
          {/*<div className={classes.hlContainer}>*/}
          {/*<hr className={classes.horizontalLine} />*/}
          {/*</div>*/}
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br/>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
            </div>
            <div className={classes.rightSideContent}>

            </div>
          </div>
        </div>
      </SimpleLayout>
    )
  }
}

const styledHome = injectSheet(styles)(Home)
export default styledHome

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
