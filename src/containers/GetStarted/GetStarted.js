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
import Fold_5 from '../../components/GetStartedFolds/Fold_5/Fold_5';

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
        
        {/* FOLD 5 */}

        <Fold_5 />

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