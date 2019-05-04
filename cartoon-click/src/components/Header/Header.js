import React from "react";
import "./Header.css";

const Header = props => ( 
    <div className = "header">
    <div className = "title"> {props.children} </div> 
    <div className = "scores">
        Score: {props.score} Highscore: {props.highscore} 
        </div> 
    </div>
);

export default Header;









// import React, {
//     Component
// } from "react";
// import "./Navbar.css";

// class Navbar extends Component {
//     render() {
//         return ( 
//         <nav className = "navbar navbar-default navbar-fixed-top">
//             <ul>
//             <li className = "itemLeft" > Test Your Memory </li> 
//             <li className = "itemCenter" > </li> 
//             <li className = "itemRight" > Score: {this.props.score} 
//             </li> 
//             </ul> 
//         </nav>
//         );
//     }
// }

// export default Navbar;