import React from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import Home from './screens/Home';

const App = () => {
  return (
     <CssVarsProvider>
          <Home/>
    </CssVarsProvider>
  )
}

export default App;