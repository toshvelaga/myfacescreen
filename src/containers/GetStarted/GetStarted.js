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
        part5: 'none',
        active1: false,
        active2: false,
        image: null
    }

    onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
          let reader = new FileReader();
          reader.onload = (e) => {
            this.setState({image: e.target.result});
          };
          reader.readAsDataURL(event.target.files[0]);
        }
      }

    toggleClass1 = () => {
        const currentState = this.state.active1;
        this.setState({ active1: !currentState });
        this.setState({active2: false})
    };

    toggleClass2 = () => {
        const currentState = this.state.active2;
        this.setState({ active2: !currentState });
        this.setState({active1: false})
    };

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
            <p>Do you have a selfie ready?<br />This will help us get the right face measurement for your mask.</p>
            <img src={facemask_BLACK} style={{width: '20rem', height: '22rem'}} />
            <p style={{marginTop: '1rem', marginBottom: '1rem'}}>Let's get started.</p>
            <SquareButton fx={this.showDiv2} />
        </div>

        {/* CONTAINER 2 */}

        <div style={{display: this.state.part2}} className="part2">
            <p>Choose your image.</p>
            <div onClick={this.toggleClass1} className={!this.state.active1 ? "part2card" : "part2card-selected"}><p>Use my face.</p></div>
            <div onClick={this.toggleClass2} className={!this.state.active2 ? "part2card" : "part2card-selected"}><p>Upload my own design.</p></div>
            <div>
                <SquareButton fx={this.showDiv3} />
            </div>
        </div>

        {/* CONTAINER 3 */}

        <div style={{display: this.state.part3}} className="part3">
            <p style={{marginTop: '20rem'}}>Let's create your face screen</p>
            

            <label for="group_image">Browse...</label>
            <input style={{display: 'none'}} type="file" accept="image/gif, image/jpeg, image/png" onChange={this.onImageChange} className="filetype" id="group_image"/>

            <div>
                <img id="target" style={{width: 'auto', height: '250px'}} src={this.state.image}/>
            </div>
            
            <p>Don't like your selfie?<br />Try again.</p>
            <div>
                {/* <img src={Igor_face} /> */}
            </div>
                <PurpleButton name="Click to add another member" />
            <div style={{marginTop: '2rem'}}>
                <SquareButton fx={this.showDiv4} />
            </div>
        </div>

        {/* CONTAINER 4 */}

        <div style={{display: this.state.part4}} className="part4">
            <div style={{marginTop: '10rem', display: 'inline-block'}}>
            <div style={{float: 'left', marginLeft: '5rem'}}>
                <div>
                    <img src={facemask_BLACK} style={{width: '20rem', height: '22rem'}} />
                </div>
                <PurpleButton name="GET THE STARTER PACK" />
            </div>

            <div style={{float: 'right', width: '33%', textAlign: 'left', marginRight: '3rem'}}>
                <div>
                    <h6 style={{color: '#6658f5'}}>Great choice, here's what your started set looks like.</h6>
                    <p>Get the perfect introduction of our most popular mask. We will follow that up with our restock box, so you never run out.</p>
                    <p>
                        <span style={{color: '#6658f5'}}><h6>Starter set ships today.</h6></span>
                        <span style={{float: 'right'}}>$29.99</span>
                    </p>
                    <p>Your masks are one time use and we will ship enough to last you a month. No hidden fees and free shipping.</p>
                    <h6 style={{color: '#6658f5'}}>This box ships every month.<br />Shipping is always free. <br />Cancel anytime.</h6>
                </div>
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

        <div style={{display: this.state.part6, marginTop: '5rem'}} className="part6">
            <p style={{marginTop: '2rem', color: 'orange'}}>You're logged in. (Log out)</p>
            <p style={{color: 'orange'}}>iggsloop@gmail.com</p>
            <p>WHERE SHOULD WE SHIP</p>
            <span>
                <input type="text" placeholder="Igor" />
                <input type="text" placeholder="Feerer" />
            </span>
            <br></br>
            <input type="text" placeholder="Address Line 1" />
            <br></br>
            <input type="text" placeholder="Address Line 2" />
            <br></br>
            <span>
                <input type="text" placeholder="Zip Code" />
                <select id="states">
                    <option value="CA">CA</option>
                    <option value="KY">KY</option>
                    <option value="TN">TN</option>
                </select>
            </span>
            <br></br>
            <input type="text" placeholder="City" />
            <div>
                <input type="checkbox" id="billing_address" name="billing_address" />
                <label for="scales">Billing address same as shipping address</label>
            </div>
            <div>
                <PurpleButton color="purple" name="Continue" />
            </div>
            <div style={{border: '1px solid gray', width: '50%', display: 'inline-block'}}>
                <p>Thanks for your interest in our product.<br></br>
                We will notify you when we are ready to process your order and ship your package.
                </p>
            </div>

            
        </div>


        </>);
    }
}
 
export default GetStarted;