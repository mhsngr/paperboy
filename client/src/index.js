import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from 'axios';
import { createMuiTheme } from "@material-ui/core";
import { ThemeSwitcherProvider } from "mui-theme-switcher";
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

const lightTheme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: '#2e7d59',
    },
  }
});
const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: '#2e7d59',
    },
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