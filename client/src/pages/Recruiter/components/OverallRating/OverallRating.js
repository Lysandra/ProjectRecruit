import React from "react";
import { Link } from 'react-router-dom';
import "./OverallRating.css";

// The Thumbnail component renders a div that uses some CSS to render a background image
// It will always keep square proportions at any size without the image warping
// The "role" and "aria label" are there to identify the element's purpose as an image for accessibility purposes
const OverallRating = () => (
  <div className="overallrating-container">
  <h5>Candidate's overall average rating:</h5>
  </div>
);

export default OverallRating;

// import React from "react";

// const name = "Ahmed";
// const num1 = 1;
// const num2 = 2;

// const JSXVariables = () => (
//   <div className="main-container">
//     <div className="container">
//       <div className="jumbotron">
//         {/* JavaScript expressions can be escaped inside of curly braces */}

//         <h2>My name is {name}. But you can call me...</h2>
//         <h1>The JSX Boss!</h1>
//         <hr />
//         <h2>I can do math: {num1 + num2}.</h2>
//         <h2>
//           I can generate random numbers:
//           {Math.floor(Math.random() * 10) + 1},
//           {Math.floor(Math.random() * 10) + 1},
//           {Math.floor(Math.random() * 10) + 1}.
//         </h2>
//         <h2>I can even reverse my name: {name.split("").reverse()}</h2>
//       </div>
//     </div>
//   </div>
// );

// export default JSXVariables;
