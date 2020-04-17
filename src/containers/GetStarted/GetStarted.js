import React, { Component } from 'react';
import HeaderTitle from '../../components/HeaderTitle/HeaderTitle';
import QuizHeader from '../../components/QuizHeader/QuizHeader';
import facemask_BLACK from '../../assets/facemask_BLACK.png'
import SquareButton from '../../components/Buttons/SquareButton/SquareButton';
import PurpleButton from '../../components/Buttons/PurpleButton/PurpleButton';
import Igor_face from '../../assets/Igor_face.png'
import './GetStarted.css'
import SignUp from '../SignUp/SignUp';
import Fold_1 from '../../components/GetStartedFolds/Fold_1/Fold_1';
import Fold_2 from '../../components/GetStartedFolds/Fold_2/Fold_2';
import Fold_3 from '../../components/GetStartedFolds/Fold_3/Fold_3';
import Fold_4 from '../../components/GetStartedFolds/Fold_4/Fold_4';

class GetStarted extends Component {
    state = { 
        part4: 'none',
        part5: 'none',
        part6: 'none',
        image: null
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

        {/* <div style={{display: this.state.part4}} className="part4">
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
        </div> */}
        
        {/* CONTAINER 5 */}

        <div style={{marginTop: '10rem'}} className="part5">
            <h5>CREATE YOUR ACCOUNT.</h5>
            <h6>So you can manage you shipments</h6>

            <SignUp />

            <p style={{color: '#e58439'}}>By creating an account you agree to our Terms.</p>
            <PurpleButton name="Continue" />
            <br></br>
            <p>OR</p>
            <PurpleButton name="Log in with Goggle." color="#1aae9e" />
            <p>Already a member? Log in.</p>
            <SquareButton fx={this.showDiv6}/>
        </div>

        {/* CONTAINER 6 */}

        <div style={{display: this.state.part6, marginTop: '5rem'}} className="part6">
            <p style={{marginTop: '2rem', color: '#e58439'}}>You're logged in. (Log out)</p>
            <p style={{color: '#e58439'}}>iggsloop@gmail.com<br></br>WHERE SHOULD WE SHIP</p>

            <form style={{width: '60%', display: 'inline-block'}}>
                <div class="form-row">
                    <div class="form-group col-md-6">
                    <input type="email" class="form-control" id="inputEmail4" placeholder="Email" />
                    </div>
                    <div class="form-group col-md-6">
                    <input type="password" class="form-control" id="inputPassword4" placeholder="Password" />
                    </div>
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" id="inputAddress" placeholder="Address Line 1" />
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" id="inputAddress2" placeholder="Address Line 2 (Optional)" />
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                    <input type="text" class="form-control" id="inputCity" placeholder="City"/>
                    </div>
                    <div class="form-group col-md-4">
                    <select id="inputState" class="form-control">
                        <option selected>Select State</option>
                        <option>...</option>
                    </select>
                    </div>
                    <div class="form-group col-md-2">
                    <input type="text" class="form-control" id="inputZip" placeholder="Zip" />
                    </div>
                </div>
                <div class="form-group">
                    <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck" />
                    <label class="form-check-label" for="gridCheck">
                        Billing address same as shipping address
                    </label>
                    </div>
                </div>
            </form>


            <div>
                <PurpleButton name="Continue" />
            </div>
            <div style={{marginTop: '1rem', border: '1px solid gray', width: '50%', display: 'inline-block', padding: '1rem'}}>
                <p>Thanks for your interest in our product.<br></br>
                We will notify you when we are ready to process your order and ship your package.
                </p>
            </div>

            
        </div>


        </>);
    }
}
 
export default GetStarted;