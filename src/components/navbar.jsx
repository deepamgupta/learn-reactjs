import React from "react";

// Stateless Functional Component: When you just have a
//  single function in a class w/o any property,
//  you could just make the class as a single function.

// const Navbar = (props) => {
const Navbar = ({ totalCounters }) => {
  // React will pass the 'props' at runtime automatically
  // if we are using stateless functional component.

  console.log("Navbar -- Render"); // we can't use life cycle methods in Stateless Functional Components

  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
        <span className="badge badge-pill badge-secondary m-2">
          {/* {props.totalCounters} */}
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

// class Navbar extends Component {
//   render() {
//     return (
//       <nav className="navbar navbar-light bg-light">
//         <a className="navbar-brand" href="#">
//           Navbar
//           <span className="badge badge-pill badge-secondary m-2">
//             {this.props.totalCounters}
//           </span>
//         </a>
//       </nav>
//     );
//   }
// }

export default Navbar;
