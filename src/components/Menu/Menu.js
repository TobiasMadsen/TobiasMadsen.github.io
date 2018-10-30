import React, { Component } from "react"
import Link from 'gatsby-link'
import injectSheet from 'react-jss'
import 'typeface-open-sans'

const styles = {
  horizontalLine: {
    color: 'lightgray',
    backgroundColor: 'lightgray',
    height: '1px',
    marginTop: '20px',
  },
  linkContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  link: {
    font: '400 12px open sans,helvetica,arial',
    color: 'gray',
    fontFeatureSettings: 'normal',
    textDecoration: 'none',
    boxShadow: 'none',
    '&:hover': {
      color: 'black',
      textDecoration: 'inherit',
    }
  }
}

class Menu extends Component {
  render() {
    const { classes } = this.props

    return (
      <div>
        <div className={classes.linkContainer}>
          <Link to={'/'} className={classes.link}>
            HOME
          </Link>
          <Link to={'/blog'} className={classes.link}>
            BLOG
          </Link>
          <Link to={'/contact'} className={classes.link}>
            CONTACT
          </Link>
        </div>
        <hr className={classes.horizontalLine} />
      </div>
    )
  }
}

const StyledMenu = injectSheet(styles)(Menu)

export default StyledMenu