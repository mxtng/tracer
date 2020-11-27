import { Switch, Route } from 'react-router-dom';
import ProtectedRoute from './utils/ProtectedRoute';

import Home from './pages/home';
import Dashboard from './pages/dashboard';
import Register from './pages/register';
import Signin from './pages/signin';
import Checkin from './pages/checkin';

import './App.css';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <ProtectedRoute exact path='/dashboard' component={Dashboard} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Signin} />
        <Route exact path='/:checkin' component={Checkin} />
      </Switch>
    </div>
  );
};

export default App;
