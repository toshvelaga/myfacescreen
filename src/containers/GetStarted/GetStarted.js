import React, { Component } from 'react';
import HeaderTitle from '../../components/HeaderTitle/HeaderTitle';
import QuizHeader from '../../components/QuizHeader/QuizHeader';
import facemask_BLACK from '../../assets/facemask_BLACK.png'
import PurpleButton from '../../components/Buttons/PurpleButton/PurpleButton';

import './GetStarted.css'

class GetStarted extends Component {
    state = { 
        part2: 'none',
        part3: 'none'
    }

    showDiv2 = () => {
        this.setState({part2: 'contents'})
    }
    
    render() { 
        return (<>
        <HeaderTitle />
        <QuizHeader />
        <div className="part1">
            <p>Do you have a selfie ready?<br />This will help us get the right face measurement for your mask?</p>
            <img src={facemask_BLACK} style={{width: '20rem', height: '22rem'}} />
            <p>Let's get started.</p>
            <PurpleButton fx={this.showDiv2} />
        </div>

        <div style={{display: this.state.part2}} className="part2">
            <p>Choose your image.</p>
            <div className="part2card">Use my face.</div>
            <div className="part2card">Upload my own design.</div>
            <div className="part2card">Pick from Trending.</div>
            <div>
                <PurpleButton fx={() => alert('logic for div2')} />
            </div>
        </div>

        <div style={{display: this.state.part3}} className="part3">
            <p>Let's create your face screen</p>
            <div className="part2card">Use my face.</div>
            <div className="part2card">Upload my own design.</div>
            <div className="part2card">Pick from Trending.</div>
            <div>
                <PurpleButton fx={() => alert('logic for div2')} />
            </div>
        </div>
        

        </>);
    }
}
 
export default GetStarted;