import React from 'react';
import facemask_BLACK from '../../../assets/facemask_BLACK.png'
import SquareButton from '../../../components/Buttons/SquareButton/SquareButton'


const Fold_1 = () => {
    return (
        <div>
            <p>Do you have a selfie ready?<br />This will help us get the right face measurement for your mask.</p>
            <img src={facemask_BLACK} style={{width: '20rem', height: '22rem'}} />
            <p style={{marginTop: '1rem', marginBottom: '1rem'}}>Let's get started.</p>
            <SquareButton fx={() => alert("Show div2")} />
        </div>
    );
}
 
export default Fold_1;