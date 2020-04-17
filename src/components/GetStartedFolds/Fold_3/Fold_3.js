import React from 'react';
import PurpleButton from '../../Buttons/PurpleButton/PurpleButton'
import SquareButton from '../../Buttons/SquareButton/SquareButton'
import { connect } from 'react-redux'
import './Fold_3.css'

const Fold_3 = (props) => {

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
          let reader = new FileReader();
        //   reader.onload = (e) => {
        //     this.setState({image: e.target.result});
        //   };
          reader.readAsDataURL(event.target.files[0]);
        }
      }

    return (<>        
    <div style={{display: props.display}} className="part3">
        <p style={{marginTop: '10rem'}}>Let's create your face screen</p>
        
        <label for="group_image">Browse...</label>
        <input style={{display: 'none'}} type="file" accept="image/gif, image/jpeg, image/png" onChange={onImageChange} className="filetype" id="group_image"/>

        <div>
            {/* <img id="target" style={{width: 'auto', height: '250px'}} src={this.state.image}/> */}
        </div>
        
        <p>Don't like your selfie?<br />Try again.</p>
        <div>
            {/* <img src={Igor_face} /> */}
        </div>
            <PurpleButton name="Click to add another member" />
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
      toggleClass1: () => dispatch({type: 'USE_FACE'}),
      toggleClass2: () => dispatch({type: 'UPLOAD_DESIGN'})
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Fold_3);