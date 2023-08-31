// import React, { Fragment } from "react"
// import Home from './pages/Home'
// const App = () =>{

//     <Fragment>
//       {Home}
//     </Fragment>
//   }
//   export default App
import React, { Fragment } from "react";
import Home from './pages/Home';
import Login from './pages/Login1'
const App = () => {
  let isHome = true
  console.log(isHome ? "Ya home page ha" : "Ya nhi ha"); // ternary operator
  return (
    <Fragment>
      {/* Usage */}
      {isHome ?
        <Home />
        :
        <Login />
      }
    </Fragment>
  )
};

export default App;