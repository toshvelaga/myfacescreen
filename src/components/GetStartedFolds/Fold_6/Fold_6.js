import React from 'react';
import PurpleButton from '../../Buttons/PurpleButton/PurpleButton'
import { connect } from 'react-redux'
import Shipping from '../../../containers/Shipping/Shipping'
import Select from '../../Select/Select'
import SquareButton from '../../Buttons/SquareButton/SquareButton';

const Fold_6 = (props) => {
    return (<>
        <div style={{display: props.display, marginTop: '5rem'}} className="part6">
            <p style={{marginTop: '2rem'}}>You're logged in as {props.auth.email}</p>
            <p>WHERE SHOULD WE SHIP?</p>
            <Shipping />
            <div style={{marginTop: '2rem'}}>
                <SquareButton fx={props.showFold_7}/>
            </div>
        </div>
    </>);
}

const mapStateToProps = (state) => {
    return {
        display: state.foldReducer.Fold_6,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
      // dispatching plain actions
      showFold_7: () => dispatch({type: 'SHOW_FOLD_7'}),
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Fold_6);