import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Login from "./pages/Login/Login.jsx";
import SignUp from "./pages/SignUp/SignUp.jsx";
// import Entry from "./pages/Entry/Entry.jsx";


const App=()=>{

  const routes=(
    <Router>
      <Routes>
        {/* <Route path="/" exact element={<Entry/>}/> */}
        <Route path="/" exact element={<Home></Home>}></Route>
        <Route path="/login" exact element={<Login></Login>}></Route>
        <Route path="/signup" exact element={<SignUp></SignUp>}></Route>
      </Routes>
    </Router>
  )

  return(
    <div>
    {routes}
    </div>
  )
}
export default App;