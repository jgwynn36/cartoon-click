import React from "react";
import "./Card.css";

const Card = props => (
    <div className="card">
        <div className="img-container">
            <img className="img-thumbnail img-responsive" alt={props.name} src={props.image} onClick={() => props.clickCartoon(props.id)}/>
        </div>
    </div>
); 

export default Card;


// const Card = props => ( 
//     <div className = "card" onClick = { () => props.clickCount(props.id)}>
//         <div className = "img-container" >
//             <img alt = {props.name} src = {props.image}/> 
//         </div> 
//     </div>
// );






// import React from "react"; 
// import "./CartoonCard.css"; 

// function CartoonCard(props) {
//     return (
//         <div className="card" onClick={ props.imageClick } >
//             <div className = "img-container">
//             <img alt = { props.image.replace(".jpg", "")} src={ requestAnimationFrame ("../../images/" + props.image)} >
//             </img>
//             </div>
//         </div>
//     )
// }; 

// const CartoonCard = props => {
//     <div className="card" onClick={props.imageClick} >
//     <div className="img-container">
//     <img alt={props.image.replace(".jpg","")} src={requestAnimationFrame("../../images/" + props.image)} /> 
//     </div>
//     </div>
// };

// export default CartoonCard; 