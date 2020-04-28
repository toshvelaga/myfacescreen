// import React from 'react';
// import PurpleButton from '../../Buttons/PurpleButton/PurpleButton'
// import { connect } from 'react-redux'
// import SquareButton from '../../Buttons/SquareButton/SquareButton'

// import whitefacemask from '../../../assets/GetStarted/whitefacemask.jpg'

// const Fold_4_Mask = (props) => {
//     return (        
    
//     <div style={{display: props.display}} className="part4">
//         <div style={{marginTop: '10rem', display: 'inline-block'}}>
//             <div>
//                 <div>
//                     <img src={whitefacemask} />
//                 </div>
//                 <span onClick={() => props.showFold_5}>
//                     <PurpleButton name="GET THE STARTER PACK" />
//                 </span>
//             </div>

//         </div>

//         <div style={{marginTop: '5rem'}}>
//             <SquareButton fx={() => { props.showFold_5(); props.segment() }} />
//         </div>
//     </div>

//     );
// }

// const mapStateToProps = (state) => {
//     return {
//         display: state.foldReducer.Fold_4,
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//       // dispatching plain actions
//       showFold_5: () => dispatch({type: 'SHOW_FOLD_5'}),
//       segment: () => dispatch({type: 'SEGMENT_5'}),
//     }
// }
 
// export default connect(mapStateToProps, mapDispatchToProps)(Fold_4_Mask);