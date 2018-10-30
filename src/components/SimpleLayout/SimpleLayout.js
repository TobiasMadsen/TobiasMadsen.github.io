import React, { Component }  from 'react'
import Menu from "../Menu/Menu"
import injectSheet from 'react-jss'
import { rhythm } from '../../utils/typography'

const styles = {
  container: {
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: rhythm(44),
    padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
  }
}

class SimpleLayout extends Component {
  render() {
    const { classes } = this.props

    return (
      <div className={classes.container}>
        <Menu />
        <div className="content">
          {this.props.children}
        </div>
      </div>
    )
  }
}

const styledSimpleLayout = injectSheet(styles)(SimpleLayout)

export default styledSimpleLayout