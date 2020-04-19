import React, { Component } from 'react';
import HeaderTitle from '../../components/HeaderTitle/HeaderTitle';
import QuizHeader from '../../components/QuizHeader/QuizHeader';

import Fold_1 from '../../components/GetStartedFolds/Fold_1/Fold_1';
import Fold_2 from '../../components/GetStartedFolds/Fold_2/Fold_2';
import Fold_3 from '../../components/GetStartedFolds/Fold_3_Selfie/Fold_3_Selfie';
import Fold_4 from '../../components/GetStartedFolds/Fold_4/Fold_4';
import Fold_5 from '../../components/GetStartedFolds/Fold_5/Fold_5';
import Fold_6 from '../../components/GetStartedFolds/Fold_6/Fold_6';
import Fold_7 from '../../components/GetStartedFolds/Fold_7/Fold_7'; 

import './GetStarted.css'

class GetStarted extends Component {
    state = { 
    }

    render() { 
        return (<>
        <HeaderTitle />
        <QuizHeader />

        {/* FOLD 1 */}
        <Fold_1 />

        {/* FOLD 2 */}

        <Fold_2 />

        {/* FOLD 3 */}

        <Fold_3 />

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
 
export default GetStarted;