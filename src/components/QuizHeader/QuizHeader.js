import React from 'react';
import medicalmask from '../../assets/medical-mask.svg'
import './QuizHeader.css'

const QuizHeader = () => {
    return (<>
        <div className="QuizHeader">
            <img src={ medicalmask } style={{width: '4rem', height: '4rem'}} />
            <hr />
        </div>
    </>);
}
 
export default QuizHeader;