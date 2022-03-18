import './App.css';
import * as React from 'react';
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import ResponsiveAppBar from "./ResponsiveAppBar";
import CustomizedTables from "./CustomizedTables";
function App() {
  return (
      <>
          <h1>Kalyog !!!</h1>
          <h1>O bhaaaaaiii !!!</h1>    
          <ResponsiveAppBar/>
          <SignUp/>
          <SignIn/>
          <CustomizedTables/>
      </>
  );
}

export default App;
