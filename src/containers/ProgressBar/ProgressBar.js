import React, { Component } from 'react';
import './ProgressBar.css'
import { connect } from 'react-redux'

class ProgressBar extends Component {
    state = {  }
    render() { 
        return (<>
        <div style={{width: this.props.width}} className="ProgressBar"></div>
        <div className="ProgressBar-Background"></div>
        </>);
    }
}

const mapStateToProps = (state) => {
    return {
        width: state.progressbarReducer.width
    }
}
 
export default connect(mapStateToProps, null)(ProgressBar);