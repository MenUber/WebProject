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
import Login from './component/Login'
import ForgotPassword from './component/ForgotPassword';
import Register from './component/Register';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
           <Route exact path="/" component={Login}/>
           <Route exact path="/register" component={Register}/>
           <Route exact path="/forgot-password" component={ForgotPassword} />
           {/* <Route component={NotFound}/> */}
        </Switch>
      </Router>
    );
  }
}

export default App;
