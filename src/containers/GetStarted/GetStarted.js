import React, { Component } from 'react';
import HeaderTitle from '../../components/HeaderTitle/HeaderTitle';
import QuizHeader from '../../components/QuizHeader/QuizHeader';
import facemask_BLACK from '../../assets/facemask_BLACK.png'
import SquareButton from '../../components/Buttons/SquareButton/SquareButton';
import PurpleButton from '../../components/Buttons/PurpleButton/PurpleButton';
import Igor_face from '../../assets/Igor_face.png'
import './GetStarted.css'

class GetStarted extends Component {
    state = { 
        part2: 'none',
        part3: 'none'
    }

    showDiv2 = () => {
        this.setState({part2: 'contents'})
    }

    showDiv3 = () => {
        this.setState({part3: 'contents'})
    }
    
    render() { 
        return (<>
        <HeaderTitle />
        <QuizHeader />

        {/* CONTAINER 1 */}

        <div className="part1">
            <p>Do you have a selfie ready?<br />This will help us get the right face measurement for your mask?</p>
            <img src={facemask_BLACK} style={{width: '20rem', height: '22rem'}} />
            <p>Let's get started.</p>
            <SquareButton fx={this.showDiv2} />
        </div>

        {/* CONTAINER 2 */}

        <div style={{display: this.state.part2}} className="part2">
            <p>Choose your image.</p>
            <div className="part2card">Use my face.</div>
            <div className="part2card">Upload my own design.</div>
            <div className="part2card">Pick from Trending.</div>
            <div>
                <SquareButton fx={this.showDiv3} />
            </div>
        </div>

        {/* CONTAINER 3 */}

        <div style={{display: this.state.part3}} className="part3">
            <p style={{marginTop: '2rem'}}>Let's create your face screen</p>
            <PurpleButton color="purple" name="Upload my face" />
            <div>
                <img src={Igor_face} />
            </div>
                <PurpleButton color="purple" name="Click to add another member" />
            <div style={{marginTop: '2rem'}}>
                <SquareButton fx={() => alert('logic for div2')} />
            </div>
        </div>
        
        {/* CONTAINER 4 */}

        </>);
    }
}
 
export default GetStarted;