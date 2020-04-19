import React from 'react';
import { connect } from 'react-redux'

const Fold_7 = (props) => {
    return (<>
        <div style={{display: props.display}}>
            <div style={{marginTop: '2rem', border: '2px solid gray', borderRadius: '5px', width: '45%', display: 'inline-block', padding: '1rem'}}>
                <p>Thanks for your interest in our product.<br></br>
                We will notify you when we are ready to process your order and ship your package.
                </p>
            </div>
        </div>
    </>);
}

const mapStateToProps = (state) => {
    return {
        display: state.foldReducer.Fold_7,
    }
}
 
export default connect(mapStateToProps, null)(Fold_7);