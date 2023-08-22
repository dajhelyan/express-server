import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider } from '@emotion/react';
import { grey, indigo } from '@mui/material/colors';
import { createTheme } from '@mui/material';
import { CssBaseline } from '@mui/material/';
import './index.css'

const theme= createTheme({
  palette: {
    primary:{
      main: indigo[500]
    },
    background: {
      default: grey[100]
    }
  }
}) 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <CssBaseline  />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
