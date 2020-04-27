import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import firebase from '../../firebase/fbConfig'
import { connect } from 'react-redux'

var provider = new firebase.auth.GoogleAuthProvider();

class SignUpWithGoogle extends Component {
    state = {  }

    SignUpWithGoogle = () => {
        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            console.log(user)
            // ...
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
          this.props.enable_5_Btn()
    }

    render() { 
        return (<>
            <div className="SignUp">
                <Button onClick={this.SignUpWithGoogle}
                    style={{backgroundColor: '#1aae9e'}}
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    >
                    Log in with Google
                </Button>
                <p>Already a member? Log in.</p>
            </div>
        </>);
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      enable_5_Btn: () => dispatch({type: 'ENABLE_FOLD_5'}),
    //   enableBtn: () => dispatch({type: 'ENABLE_FOLD_3'}),
    }
  }
 
export default connect(null, mapDispatchToProps)(SignUpWithGoogle);