import React from 'react';
import SquareButton from '../../Buttons/SquareButton/SquareButton'
import { connect } from 'react-redux'
import Typography from '@material-ui/core/Typography';

import './Fold_2.css'

const Fold_2 = (props) => {
    return (
    <div style={{display: props.display}} className="part2">
        <Typography style={{marginBottom: '1rem', marginTop: '4rem'}} component="h1" variant="h6">
            Choose your image.
        </Typography>
        {/* <p>Choose your image.</p> */}
        <div onClick={props.toggleClass1} className={!props.usedFace ? "part2card" : "part2card-selected"}><p>Use my face.</p></div>
        <div onClick={props.toggleClass2} className={!props.uploadedDesign ? "part2card" : "part2card-selected"}><p>Upload my own design.</p></div>
        <div>
            <SquareButton fx={() => { props.showFold_3(); props.segment() }} />
        </div>
    </div>
    );
}

const mapStateToProps = (state) => {
    return {
        display: state.foldReducer.Fold_2,
        usedFace: state.toggleboxReducer.use_face,
        uploadedDesign: state.toggleboxReducer.upload_design
    }
}

const mapDispatchToProps = dispatch => {
    return {
      // dispatching plain actions
      showFold_3: () => dispatch({type: 'SHOW_FOLD_3'}),
      segment: () => dispatch({type: 'SEGMENT_3'}),
      toggleClass1: () => dispatch({type: 'USE_FACE'}),
      toggleClass2: () => dispatch({type: 'UPLOAD_DESIGN'})
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Fold_2);