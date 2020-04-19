import React, { Component } from 'react';
import HeaderTitle from '../../components/HeaderTitle/HeaderTitle';
import QuizHeader from '../../components/QuizHeader/QuizHeader';

import Fold_1 from '../../components/GetStartedFolds/Fold_1/Fold_1';
import Fold_2 from '../../components/GetStartedFolds/Fold_2/Fold_2';
import Fold_3_Custom from '../../components/GetStartedFolds/Fold_3_Custom/Fold_3_Custom';
import Fold_3_Selfie from '../../components/GetStartedFolds/Fold_3_Selfie/Fold_3_Selfie';
import Fold_4 from '../../components/GetStartedFolds/Fold_4/Fold_4';
import Fold_5 from '../../components/GetStartedFolds/Fold_5/Fold_5';
import Fold_6 from '../../components/GetStartedFolds/Fold_6/Fold_6';
import Fold_7 from '../../components/GetStartedFolds/Fold_7/Fold_7'; 

import { connect } from 'react-redux'

import './GetStarted.css'

class GetStarted extends Component {
    state = {
        
    };
   
    render() { 
        return (<>
        <HeaderTitle />
        <QuizHeader />

        {/* FOLD 1 */}
        <Fold_1 />

        {/* FOLD 2 */}

        <Fold_2 />

        {/* FOLD 3 */}

        {this.props.USE_FACE ?  <Fold_3_Selfie /> : <Fold_3_Custom />}

        {/* FOLD 4 */}

        <Fold_4 />
        
        {/* FOLD 5 */}

        <Fold_5 />

        {/* CONTAINER 6 */}

        <Fold_6 />

        {/* CONTAINER 7 */}

        <Fold_7 />

        </>);
    }
}

const mapStateToProps = (state) => {
    return {
        USE_FACE: state.toggleboxReducer.use_face
    }
}
 
export default connect(mapStateToProps, null)(GetStarted);