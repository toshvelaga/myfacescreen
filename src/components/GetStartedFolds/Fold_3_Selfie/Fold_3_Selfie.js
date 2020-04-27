import React from 'react';
import PurpleButton from '../../Buttons/PurpleButton/PurpleButton'
import SquareButton from '../../Buttons/SquareButton/SquareButton'
import { connect } from 'react-redux'
import './Fold_3_Selfie.css'
import Cropper from '../../Cropper/Cropper';
import Typography from '@material-ui/core/Typography';

const Fold_3_Selfie = (props) => {

    return (<>        
    <div style={{display: props.display}} className="part3">

        <Typography style={{marginTop: '10rem', marginBottom: '2rem'}} component="h1" variant="h6">Let's create your face screen</Typography>
        <div style={{width: '60%', height: 'auto', display: 'inline-block'}}>
            <Cropper label="Upload my face" />            
        </div>

        <div style={{marginTop: '16rem'}}>
            <p>Don't like your selfie? Try again.</p>
            {/* <PurpleButton name="Click to add another member" /> */}
            <div style={{marginTop: '2rem'}}>
                <SquareButton disabled={props.disable} title={'Upload an image'} fx={() => { props.showFold_4(); props.segment()}} />
            </div>
        </div>
        {console.log(props)}
    </div>
    </>);
}

const mapStateToProps = (state) => {
    return {
        display: state.foldReducer.Fold_3,
        disable: state.disabledReducer.Fold_3_SqBtn,
    }
}

const mapDispatchToProps = dispatch => {
    return {
      // dispatching plain actions
      showFold_4: () => dispatch({type: 'SHOW_FOLD_4'}),
      segment: () => dispatch({type: 'SEGMENT_4'}),
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Fold_3_Selfie);