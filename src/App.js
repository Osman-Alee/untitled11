import './App.css';
import * as React from 'react';
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import ResponsiveAppBar from "./ResponsiveAppBar";
import CustomizedTables from "./CustomizedTables";
function App() {
  return (
      <>
          <ResponsiveAppBar/>
          <SignUp/>
          <SignIn/>
          <CustomizedTables/>
      </>
  );
}

export default App;
