import React from 'react';
import medicalmask from '../../assets/medical-mask.svg'
import './QuizHeader.css'

const QuizHeader = () => {
    return (<>
        <div className="QuizHeader">
            <img src={ medicalmask } style={{width: '4rem', height: '4rem'}} />
            <hr style={{width: '100%', height: '1px', border: '0', backgroundColor: '#eeeae6'}}/>
        </div>
    </>);
}
 
export default QuizHeader;