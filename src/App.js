import React, { Component } from 'react';

/*
    Import React Router
*/
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

/*
  Import components
*/
import Login from './component/auth/Login'
import ForgotPassword from './component/auth/ForgotPassword';
import Register from './component/auth/Register';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
           <Route exact path="/" component={Login}/>
           <Route exact path="/register" component={Register}/>
           <Route exact path="/forgot-password" component={ForgotPassword} />
        </Switch>
      </Router>
    );
  }
}

export default App;
