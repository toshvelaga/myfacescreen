import React from 'react';
import PurpleButton from '../../Buttons/PurpleButton/PurpleButton'
import SquareButton from '../../Buttons/SquareButton/SquareButton'
import SignUp from '../../../containers/SignUp/SignUp'
import { connect } from 'react-redux'

// NOTE: SignUP is imported from containers

const Fold_5 = (props) => {
    return (<>
        <div style={{marginTop: '10rem', display: props.display}} className="part5">
            <SignUp />
            <br></br>
            <SquareButton disabled={props.disable} title={'Enter in your info'} fx={() => { props.showFold_6(); props.segment() }}/>
            {console.log(props)}
        </div>
    </>);
}

const mapStateToProps = (state) => {
    return {
        display: state.foldReducer.Fold_5,
        disable: state.disabledReducer.Fold_5_SqBtn,
    }
}

const mapDispatchToProps = dispatch => {
    return {
      // dispatching plain actions
      showFold_6: () => dispatch({type: 'SHOW_FOLD_6'}),
      segment: () => dispatch({type: 'SEGMENT_6'}),
    }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(Fold_5);