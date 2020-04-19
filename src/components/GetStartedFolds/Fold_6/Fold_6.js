import React from 'react';
import PurpleButton from '../../Buttons/PurpleButton/PurpleButton'
import { connect } from 'react-redux'
import Shipping from '../../../containers/Shipping/Shipping'

const Fold_6 = (props) => {
    return (<>
            <div style={{display: 'contents', marginTop: '5rem'}} className="part6">
            <p style={{marginTop: '2rem'}}>You're logged in. (Log out)<br />iggsloop@gmail.com</p>
            <p>WHERE SHOULD WE SHIP</p>
            <Shipping />

            {/* <form style={{width: '60%', display: 'inline-block'}}>
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
            </form> */}

            <div style={{marginTop: '1rem', border: '1px solid gray', width: '50%', display: 'inline-block', padding: '1rem'}}>
                <p>Thanks for your interest in our product.<br></br>
                We will notify you when we are ready to process your order and ship your package.
                </p>
            </div>

        </div>
    </>);
}

const mapStateToProps = (state) => {
    return {
        display: state.foldReducer.Fold_6,
    }
}

const mapDispatchToProps = dispatch => {
    return {
      // dispatching plain actions
      showFold_6: () => dispatch({type: 'SHOW_FOLD_6'}),
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Fold_6);