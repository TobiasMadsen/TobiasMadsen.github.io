import React from 'react'
import Slider from '@material-ui/lab/Slider'
import injectSheet from "react-jss"
import TextField from "@material-ui/core/TextField/TextField"

const styles = {
  slider: {
    padding: '0px 0px',
  },
  sliderContainer: {
    width: '100%',
    alignItems: 'baseline',
    display: 'flex',
  },
  textField: {
    marginRight: '10px',
  },
  input: {
    width: '4em',
  }
};

class SliderWithText extends React.Component {
  render() {
    const { value, classes, min, max, step, label } = this.props

    return (
      <div className={classes.sliderContainer}>
        <TextField
          label={label}
          className={classes.textField}
          InputProps={{classes: { input: classes.input }}}
          value={value}
          onChange={this.handleChange}
          margin="normal"
          type="number"
        />
        <Slider
          classes={{ container: classes.slider }}
          value={value}
          min={min}
          max={max}
          step={step}
          onChange={this.handleSliderChange}
        />
      </div>
    )
  }

  handleSliderChange = (event, value) => {
    this.props.onChange(event, value)
  }

  handleChange = event => {
    this.props.onChange(event, event.target.value)
  }
}

const styledSlider = injectSheet(styles)(SliderWithText)
export default styledSlider
