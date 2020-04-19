import React from 'react';
import { connect } from 'react-redux'
import SquareButton from '../../Buttons/SquareButton/SquareButton'
// import PurpleButton from '../../Buttons/PurpleButton/PurpleButton'
import Cropper from '../../Cropper/Cropper'

const Fold_3_Custom = (props) => {
    return (<>
        <div style={{display: props.display}} className="part3">
            <p style={{marginTop: '10rem', marginBottom: '2rem'}}>Upload an image</p>
            <div style={{width: 'auto', height: '250px', display: 'inline-block'}}>
                <Cropper />            
            </div>

            <p>Looks good. Now select the outline.</p>
            <div style={{marginTop: '2rem'}}>
                <SquareButton fx={props.showFold_4} />
            </div>
        </div>
    </>);
}

const mapStateToProps = (state) => {
    return {
        display: state.foldReducer.Fold_3,
    }
}

const mapDispatchToProps = dispatch => {
    return {
      // dispatching plain actions
      showFold_4: () => dispatch({type: 'SHOW_FOLD_4'}),
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Fold_3_Custom);