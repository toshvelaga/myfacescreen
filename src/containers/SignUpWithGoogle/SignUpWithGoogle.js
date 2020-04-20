import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class SignUpWithGoogle extends Component {
    state = {  }
    render() { 
        return (<>
            <div className="SignUp">
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
            </div>
        </>);
    }
}
 
export default SignUpWithGoogle;