import { Switch, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from './components/nav';
import Home from './pages/home';
import Dashboard from './pages/dashboard';
import About from './pages/about';
import Register from './pages/register';
import Signin from './pages/signin';

import './App.css';

const App = () => {
  return (
    <div>
      <Nav />
      <Container>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/dashboard' component={Dashboard} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Signin} />
        </Switch>
      </Container>
    </div>
  );
};

export default App;
