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
import { Link } from "react-router-dom";
import SimpleSelect from '../../components/Select/Select'
import firebase from '../../firebase/fbConfig'

import './Shipping.css'
import store from '../../store/store';

let db = firebase.firestore();

class Shipping extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    AddressLine1: '',
    AddressLine2: '',
    ZipCode: '',
    City: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const ref =  db.collection("users").doc(this.props.auth.uid).collection("customers");
    ref.add({
      First_Name: this.state.firstName,
      Last_Name: this.state.lastName,
      Address_Line_1: this.state.AddressLine1,
      Address_Line_2: this.state.AddressLine2,
      Zip_Code: this.state.ZipCode,
      City: this.state.City,
      State: store.getState().selectedReducer.selected_state
    })
  }

  render() {
    console.log(this.props)
    const { auth, authError } = this.props
    console.log(this.props.auth.email)
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
                fullWidth
                id="AddressLine2"
                label="Address Line 2 (Optional)"
                name="AddressLine2"
                autoComplete="AddressLine2"
              />
            </Grid>

            <Grid item xs={12}>
                <SimpleSelect />
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
              <TextField
                onChange={this.handleChange}
                margin="dense"
                autoComplete="City"
                name="City"
                variant="outlined"
                required
                fullWidth
                id="City"
                label="City"
              />
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
    auth: state.firebase.auth,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // signUp: (newUser) => dispatch(signUp(newUser))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Shipping);