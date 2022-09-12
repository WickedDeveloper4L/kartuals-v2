import React, { Component } from 'react'
import './App.css';
import Header from './components/header/Header';
import {Switch, Route, Redirect} from 'react-router-dom'
import Homepage from './pages/hompage/Homepage';
import Shop from './pages/shop/Shop';
import Hats from './pages/hats/Hats';
import Jackets from './pages/jackets/Jackets';
import Mens from './pages/mens/Mens';
import Women from './pages/womens/Women';
import Shoes from './pages/shoes/Shoes';
import UserAuth from './pages/userAuthentication/UserAuth';
import SignUp from './components/signUp/SignUp';
import { auth, createUserProfileDocument } from './components/firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';





class App extends Component {
  unSubscribeFromAuth = null;

  componentDidMount(){
    const {setCurrentUser} = this.props
   this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    if(userAuth){
      const userRef = await createUserProfileDocument(userAuth);

      userRef.onSnapshot(snapShot => {
        
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
      })
      
    }
    setCurrentUser(userAuth); 
    })
  }

  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
      <Header/>
      <Switch>
      <Route exact path='/' component={Homepage}/>
      <Route exact path='/userauth' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<UserAuth/>)}/>
      <Route path='/shop' component={Shop}/>
      <Route path='/hats' component={Hats} />
      <Route path='/jackets' component={Jackets}/>
      <Route path='/mens' component={Mens}/>
      <Route path='/womens' component={Women} />
      <Route path='/shoes' component={Shoes} />
      <Route path='/signup' component={SignUp} />
      </Switch>
    </div>
    )
  }
}

const mapStateToProps =({user})=>({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch =>({
  setCurrentUser: user=>dispatch(setCurrentUser(user))
})

export default  connect(mapStateToProps, mapDispatchToProps )(App)