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
        part3: 'none',
        part4: 'none',
        part5: 'none'
    }

    showDiv2 = () => {
        this.setState({part2: 'contents'})
    }

    showDiv3 = () => {
        this.setState({part3: 'contents'})
    }

    showDiv4 = () => {
        this.setState({part4: 'contents'})
    }

    showDiv5 = () => {
        this.setState({part5: 'contents'})
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
                <SquareButton fx={this.showDiv4} />
            </div>
        </div>

        {/* CONTAINER 4 */}

        <div style={{display: this.state.part4}} className="part4">
            <div style={{float: 'left'}}>
                <div>
                    <img src={facemask_BLACK} style={{width: '20rem', height: '22rem'}} />
                </div>
                <PurpleButton color="purple" name="GET THE STARTER PACK" />
            </div>

            <div style={{float: 'right', width: '33%', textAlign: 'left'}}>
                <div>
                    <p style={{color: 'purple'}}>Great choice, heres' what your started set looks like.</p>
                    <p>Get the perfect introduction of our most popular mask. We will follow that up with our restock box, so you never run out.</p>
                    <p>
                        <span style={{color: 'purple'}}>Starter set ships today.</span>
                        <span style={{float: 'right'}}>$29.99</span>
                    </p>
                    <p>Your masks are one time use and we will ship enough to last you a month. No hidden fees and free shipping.</p>
                    <p style={{color: 'purple'}}>This box ships every month.<br />Shipping is always free. <br />Cancel anytime.</p>
                </div>
            </div>
        </div>
        
        {/* CONTAINER 5 */}

        <div style={{marginTop: '40rem'}} className="part5">
            <h1>CREATE YOUR ACCOUNT.</h1>
            <p>So you can manage you shipments</p>
            <span>
                <input type="text" id="firstname" name="firstname" placeholder="First Name" />
                <input type="text" id="lastname" name="lastname" placeholder="Last Name" />
            </span>
            <br></br>
            <br></br>
            <input type="email" id="email" name="email" placeholder="Email" />
            <br></br>
            <br></br>
            <input type="password" id="password" name="password" placeholder="Password" />
            <p style={{color: 'orange'}}>By creating an account you agree to our Terms.</p>
            <PurpleButton name="Continue" color="purple" />
            <p>OR</p>
            <PurpleButton name="Log in with Goggle." color="green" />
            <p>Already a member? Log in.</p>
            <SquareButton fx={this.showDiv6}/>
        </div>

        {/* CONTAINER 6 */}

        <div style={{display: this.state.part6}} className="part6">
            <p style={{marginTop: '2rem', color: 'orange'}}>You're logged in. (Log out)</p>
            <p style={{color: 'orange'}}>iggsloop@gmail.com</p>
            <p>WHERE SHOULD WE SHIP</p>
            <PurpleButton color="purple" name="Upload my face" />
            <span></span>
        </div>


        </>);
    }
}
 
export default GetStarted;