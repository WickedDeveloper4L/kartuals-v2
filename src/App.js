import './App.css';
import Header from './components/header/Header';
import {Switch, Route} from 'react-router-dom'
import Homepage from './pages/hompage/Homepage';
import Shop from './pages/shop/Shop';
import Hats from './pages/hats/Hats';
import Jackets from './pages/jackets/Jackets';
import Mens from './pages/mens/Mens';
import Women from './pages/womens/Women';
import Shoes from './pages/shoes/Shoes';
import UserAuth from './pages/userAuthentication/UserAuth';
import SignUp from './components/signUp/SignUp';
import SignIn from './components/signIn/SignIn';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
      <Route exact path='/' component={Homepage}/>
      <Route path='/userauth' component={UserAuth}/>
      <Route path='/shop' component={Shop}/>
      <Route path='/hats' component={Hats} />
      <Route path='/jackets' component={Jackets}/>
      <Route path='/mens' component={Mens}/>
      <Route path='/womens' component={Women} />
      <Route path='/shoes' component={Shoes} />
      <Route path='/signup' component={SignUp} />
      </Switch>
    </div>
  );
}

export default App;
