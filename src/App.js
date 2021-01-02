import { Switch, Route } from 'react-router-dom';

import Home from './pages/home/Home';
import Article from './pages/article/Article';

import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/article/:id" component={Article} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
