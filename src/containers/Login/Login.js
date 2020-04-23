import React, { Component } from 'react';
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/actions'
import { Redirect } from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Link } from "react-router-dom";
// import Header from '../../components/Header/Header';
import { withStyles } from '@material-ui/core/styles';

import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";

import './Login.css'
import { red } from '@material-ui/core/colors';

class Login extends Component {
  state = {
    email: '',
    password: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state)
  }
  render() {

    const { authError, auth, classes } = this.props
    if (auth.uid) return <Redirect to='/box' />

    return (<>
      {/* <Header /> */}

      {/* ORANGE COLOR FOR BACKGROUND = #ffac33 */}
      <div style={{backgroundColor: 'white', height: '100vh'}} className="container">

        <form onSubmit={this.handleSubmit}>
      
          <div className="LogIn">

            <Typography component="h1" variant="h5">
              WELCOME BACK
            </Typography>
            <p>Please login to continue.</p>

            <TextField 
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={this.handleChange}
            />

          <br></br>
          <TextField 
            margin="normal"
            variant="outlined"
            required
            fullWidth
            id="password"
            label="Password"
            type="password"
            name="password"
            onChange={this.handleChange}
          />
          <div className="submit">
            <Button
              style={{marginTop: '1rem', color: 'white', backgroundColor: '#6658f5'}}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              Log In
            </Button>

            <p>OR</p>

            <Button
              style={{marginBottom: '2rem', color: 'white', backgroundColor: '#1aae9e'}}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              LOG IN WITH GOOGLE
            </Button>

            <p>
              <Link style={{textDecoration: 'none', color: '#0378d8'}} to="/join">Don't have an account? Sign Up</Link>
            </p>
            <div>
              { authError ? <p>{authError}</p> : null}
            </div>
          </div>
          </div>

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
    signIn: (creds) => dispatch(signIn(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)