import './App.css';
import * as React from 'react';
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import ResponsiveAppBar from "./ResponsiveAppBar";

function App() {
  return (
      <>
          <ResponsiveAppBar/>
          <SignUp/>
          <SignIn/>
      </>
  );
}

export default App;
