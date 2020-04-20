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
import SignUpWithGoogle from '../SignUpWithGoogle/SignUpWithGoogle';

import { Link } from "react-router-dom";

import './Signup.css'

class SignUp extends Component {
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
    const { auth, authError } = this.props
    // if (auth.uid) return <Redirect to="Feed" />
    return (<>
      {/* <Header /> */}
      <div className="container">
        <form onSubmit={this.handleSubmit} className="SignUp">
          <div style={{display: 'inline-block', marginTop: '2rem'}}>
            {/* <Avatar style={{backgroundColor: '#dd004f', fontSize: '2rem'}}>
              <LockOutlinedIcon />
            </Avatar> */}
          </div>

          <Typography style={{marginBottom: '1rem'}} component="h1" variant="h6">
            CREATE YOUR ACCOUNT
          </Typography>
          <p style={{marginBottom: '2rem'}}>So you can manage your shipments.</p>

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
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={this.handleChange}
                margin="dense"
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>

          </Grid>

          <Grid container justify="flex">
            <Grid item>
                <p>By creating an account you agree to our terms</p>
            </Grid>
          </Grid>

          <Button
            style={{backgroundColor: '#6658f5'}}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Continue
          </Button>

          <p>OR</p>

          <div className="error">
            {authError ? <p>{authError}</p> : null}
          </div>
        </form>
        
        {/* <div className="SignUp">
          <Button onClick={() => alert('hi')}
              style={{backgroundColor: '#1aae9e'}}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              Log in with Google
          </Button>
          <p>Already a member? Log in.</p>
        </div> */}

        <SignUpWithGoogle />

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

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);