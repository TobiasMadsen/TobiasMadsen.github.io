import React from 'react'
import SliderWithText from '../../components/Slider/SliderWithText'
import injectSheet from "react-jss"
import TextField from "@material-ui/core/TextField/TextField"
import Typography from "@material-ui/core/Typography/Typography"
import Table from "@material-ui/core/Table/Table"
import TableRow from "@material-ui/core/TableRow/TableRow"
import TableCell from "@material-ui/core/TableCell/TableCell"
import TableBody from "@material-ui/core/TableBody/TableBody"
import TableHead from "@material-ui/core/TableHead/TableHead"
import SimpleLayout from "../../components/SimpleLayout/SimpleLayout"
import {laanBeregner, toLagsLaan} from "./calculator"

const styles = {
  root: {
  },
  parameters: {
    background: 'whitesmoke',
    padding: '20px',
    borderRadius: '20px',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: 'lightgray',
  },
  sliderContainer: {
    alignItems: 'flex-end',
    display: 'flex',
  },
  bothLoans: {
    display: 'flex',
  },
  loanContainer: {
    marginRight: '50px',
    '&:last-child': {
      marginRight: '0px',
    },
    width: '100%',
    margin: '0px',
    display: 'flex',
    flexDirection: 'column',
  },
  proportion: {
    width: '50%',
  },
  input: {
    width: '4em',
  },
  paper: {
    margin: '20px',
  },
  table: {

  },
  tableContainer: {
    padding: '20px 20px 0px 20px',
  }
};

class LaanBeregner extends React.Component {
  state = {
    proportion: 75,
    laanebeloeb: 2000000,
    rente1: 1,
    kurs1: 97.00,
    loebetid1: 30,
    afdragsfri1: 10,
    kurs2: 99.00,
    rente2: 1,
    loebetid2: 30,
    afdragsfri2: 0,
  }

  render() {
    const { classes } = this.props;

    // Beregn laan
    const laan1 = {
            rente: this.state.rente1 / 100,
            kurs: this.state.kurs1,
            terminer: this.state.loebetid1 * 4,
            afdragsfri: this.state.afdragsfri1 * 4,
        }

    const laan2 = {
            rente: this.state.rente2 / 100,
            kurs: this.state.kurs2,
            terminer: this.state.loebetid2 * 4,
            afdragsfri: this.state.afdragsfri2 * 4,
        }

    const toLagsLaanResult = toLagsLaan(laan1, laan2, this.state.laanebeloeb, this.state.proportion)
    console.log("toLagsLaanResult", toLagsLaanResult)
    return (
      <SimpleLayout>
      <div className={classes.root}>
        <div className={classes.parameters}>
          <TextField
            label={'Beløb til udbetaling'}
            onChange={null}
            type='number'
            variant="outlined"
            value={this.state.laanebeloeb}
            onChange={this.handleChange('laanebeloeb')}
          />
          <SliderWithText
            label={'Deling'}
            onChange={this.onSliderChange('proportion')}
            min={0}
            max={100}
            step={1}
            value={this.state.proportion}
            className={classes.proportion}
          />
          <div className={classes.bothLoans}>
            <div className={classes.loanContainer}>
              <Typography>Lån 1</Typography>
              <TextField
                id="rente1"
                label="Rente"
                fullWidth={false}
                value={this.state.rente1}
                onChange={this.handleChange('rente1')}
                inputProps={{step: 0.5}}
                margin="normal"
                type="number"
              />
              <TextField
                id="kurs1"
                label="Kurs"
                fullWidth={false}
                value={this.state.kurs1}
                onChange={this.handleChange('kurs1')}
                margin="normal"
                type="number"
              />
              <SliderWithText
                label={'Løbetid'}
                onChange={this.onSliderChange('loebetid1')}
                min={0}
                max={30}
                step={10}
                value={this.state.loebetid1}
              />
              <SliderWithText
                label={'Afdragsfrihed'}
                onChange={this.onSliderChange('afdragsfri1')}
                min={0}
                max={10}
                step={1}
                value={this.state.afdragsfri1}
              />
            </div>
            <div className={classes.loanContainer}>
              <Typography>Lån 2</Typography>
              <TextField
                id="rente2"
                label="Rente"
                fullWidth={false}
                value={this.state.rente2}
                onChange={this.handleChange('rente2')}
                inputProps={{step: 0.5}}
                margin="normal"
                type="number"
              />
              <TextField
                id="kurs2"
                label="Kurs"
                value={this.state.kurs2}
                onChange={this.handleChange('kurs2')}
                margin="normal"
                type="number"
              />
              <SliderWithText
                label={'Løbetid'}
                onChange={this.onSliderChange('loebetid2')}
                min={0}
                max={30}
                step={10}
                value={this.state.loebetid2}
              />
            </div>
          </div>
        </div>
        <div className={classes.tableContainer}>
          <Typography variant={'h5'}>Nøgletal</Typography>
          <Table className={classes.table}>
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">
                  Hovedstol
                </TableCell>
                <TableCell numeric>{ Math.round(toLagsLaanResult.hovedstol) } kr.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Ydelse pr. måned før skat
                </TableCell>
                <TableCell numeric>{ Math.round(toLagsLaanResult.tkYdelse) } kr.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Ydelse pr. måned efter skat
                </TableCell>
                <TableCell numeric>{ Math.round(toLagsLaanResult.tkYdelseEfterSkat) } kr.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Første måneds afdrag
                </TableCell>
                <TableCell numeric>{ Math.round(toLagsLaanResult.tkAfdrag) } kr.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Rente og bidrag i lånets løbetid
                </TableCell>
                <TableCell numeric> { Math.round(toLagsLaanResult.tkRenteOgBidragTotal) } kr.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Samlet beløb, der skal betales i lånets løbetid
                </TableCell>
                <TableCell numeric> { Math.round(toLagsLaanResult.tkSamletBeloeb)} kr.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Bidragssats pr. år
                </TableCell>
                <TableCell numeric> { Math.round(toLagsLaanResult.bidragsSats * 100) / 100 } % </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
      <div className={classes.tableContainer}>
        <Typography variant={'h5'}>Annuitets Tabel</Typography>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Kvartal</TableCell>
              <TableCell align="right">Afdrag</TableCell>
              <TableCell align="right">Restgæld</TableCell>
              <TableCell align="right">Ydelse</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{ toLagsLaanResult.afdrag.map( (e,i) =>
              <TableRow>
                <TableCell component="th" scope="row">
                  {i+1}.
                </TableCell>
                <TableCell align="right">
                  { Math.round(toLagsLaanResult.afdrag[i])} kr.
                </TableCell>
                <TableCell align="right">
                  { Math.round(toLagsLaanResult.restgaeld[i])} kr.
                </TableCell>
                <TableCell align="right">
                  { Math.round(toLagsLaanResult.ydelse[i])} kr.
                </TableCell>
              </TableRow>
          )}
          </TableBody>
        </Table>
      </div>
      </SimpleLayout>
    )
  }

  onSliderChange = name => (event, value) => {
    this.setState({
      [name]: value
    });
  }

  handleChange = name => event => {
    this.setState({
      [name]: parseFloat(event.target.value),
    });
  };
}

const styledLaanBeregner = injectSheet(styles)(LaanBeregner)
export default styledLaanBeregner
