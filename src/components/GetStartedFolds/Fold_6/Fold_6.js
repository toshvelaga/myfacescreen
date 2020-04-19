import React from 'react';
import PurpleButton from '../../Buttons/PurpleButton/PurpleButton'
import { connect } from 'react-redux'
import Shipping from '../../../containers/Shipping/Shipping'
import Select from '../../Select/Select'

const Fold_6 = (props) => {
    return (<>
        <div style={{display: 'contents', marginTop: '5rem'}} className="part6">
            <p style={{marginTop: '2rem'}}>You're logged in. (Log out)<br />iggsloop@gmail.com</p>
            <p>WHERE SHOULD WE SHIP</p>
            <Shipping />

            <div style={{marginTop: '1rem', border: '1px solid gray', width: '50%', display: 'inline-block', padding: '1rem'}}>
                <p>Thanks for your interest in our product.<br></br>
                We will notify you when we are ready to process your order and ship your package.
                </p>
            </div>
        </div>
    </>);
}

const mapStateToProps = (state) => {
    return {
        display: state.foldReducer.Fold_6,
    }
}

const mapDispatchToProps = dispatch => {
    return {
      // dispatching plain actions
      showFold_6: () => dispatch({type: 'SHOW_FOLD_6'}),
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Fold_6);