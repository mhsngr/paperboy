import React, { useState } from 'react';
import '@fontsource/roboto';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Route, Redirect } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Reader from './components/Reader';
import Feed from './components/Feed';

function App(props) {
  const [user, setUser] = useState(props.user);

  return (
    <>
      <CssBaseline/>
      <Route
        path='/'
        render={props => {
          if (user) {
            return <Reader setUser={setUser} user={user} {...props} />
          } else return <Redirect to='/signin' />
        }}
      />
      <Route
        exact path="/signin"
        render={props => <SignIn setUser={setUser} {...props} />}
      />
      <Route
        exact path="/signup"
        render={props => <SignUp setUser={setUser} {...props} />}
      />
    </>
  );
}

export default App;