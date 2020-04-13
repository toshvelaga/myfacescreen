import React, { Component } from 'react';
import HeaderTitle from '../../components/HeaderTitle/HeaderTitle';
import QuizHeader from '../../components/QuizHeader/QuizHeader';

class GetStarted extends Component {
    state = {  }
    render() { 
        return (<>
        <HeaderTitle />
        <QuizHeader />
        </>);
    }
}
 
export default GetStarted;