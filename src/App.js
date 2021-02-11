import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import Trending from './pages/trending';
import Subscription from './pages/subscription';
import Library from './pages/library';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} />
        <Route path='/trending' component={Trending} />
        <Route path='/subscription' component={Subscription} />
        <Route path='/library' component={Library} />
      </Switch>
    </Router>
  );
}

export default App;
