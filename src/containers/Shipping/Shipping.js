import React, { Component } from 'react'

import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { signUp } from '../../store/actions/actions'
// import Header from '../../components/Header/Header'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

import { Link } from "react-router-dom";

import './Shipping.css'

class Shipping extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.signUp(this.state)
  }

  render() {
    // const { auth, authError } = this.props
    // if (auth.uid) return <Redirect to="Feed" />
    return (<>
      {/* <Header /> */}
      <div className="container">
        <form onSubmit={this.handleSubmit} className="Shipping">

          <Grid container spacing={2}>

            <Grid item xs={12} sm={6}>
              <TextField
                onChange={this.handleChange}
                margin="dense"
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                onChange={this.handleChange}
                margin="dense"
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                onChange={this.handleChange}
                margin="dense"
                variant="outlined"
                required
                fullWidth
                id="AddressLine1"
                label="Address Line 1"
                name="AddressLine1"
                autoComplete="AddressLine1"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                onChange={this.handleChange}
                margin="dense"
                variant="outlined"
                required
                fullWidth
                id="AddressLine2"
                label="Address Line 2 (Optional)"
                name="AddressLine2"
                autoComplete="AddressLine2"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                onChange={this.handleChange}
                margin="dense"
                autoComplete="ZipCode"
                name="ZipCode"
                variant="outlined"
                required
                fullWidth
                id="ZipCode"
                label="Zip Code"
              />
            </Grid>

            <Grid item xs={12} sm={6}>

            <FormControl style={{width: '100%', display: 'inline-block'}} variant="outlined" >
            {/* <InputLabel id="demo-simple-select-outlined-label">Select State</InputLabel> */}
                <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                margin="dense"
                value="age"
                onChange={this.handleChange}
                label="Select State"
                fullWidth
                >
                <MenuItem value="Select State">
                    Select State
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>

            </Grid>

          </Grid>
          <br />
          <Button
            style={{backgroundColor: '#6658f5'}}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Continue
          </Button>

          {/* <div className="error">
            {authError ? <p>{authError}</p> : null}
          </div> */}
        </form>
      </div>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Shipping);