import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import { ThemeSwitcherProvider } from "mui-theme-switcher";
import { createMuiTheme } from "@material-ui/core";

const lightTheme = createMuiTheme();
const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
    // primary: {
    //   main: '#000000',
    //   // background: {
    //   //   default: '#000000',
    //   //   paper: '#000000',
    //   // },
    // },
  }
});

axios.get('/api/auth/loggedin')
  .then(response => {
    const user = response.data;
    ReactDOM.render(
      <ThemeSwitcherProvider
        lightTheme={lightTheme}
        darkTheme={darkTheme}
        followSystem="true"
        persist="true"
        appId="paperboy"
      >     
        <BrowserRouter>
          <App id="paperboy" user={user} />
        </BrowserRouter>
      </ThemeSwitcherProvider>,
      document.getElementById('root')
    );
  })
  .catch(err => {
    console.log(err)
  })

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
