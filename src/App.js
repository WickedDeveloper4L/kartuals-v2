import './App.css';
import Header from './components/header/Header';
import {Switch, Route} from 'react-router-dom'
import Homepage from './pages/hompage/Homepage';
import Shop from './pages/shop/Shop';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
      <Route exact path='/' component={Homepage}/>
      <Route path='/shop' component={Shop}/>
      </Switch>
    </div>
  );
}

export default App;
