import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { Header } from './components/header/Header';
import { auth } from './firebase/firebase.utils';
import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/ShopPage';
import { SignInSignUp } from './pages/sign-in-sign-up/SignInSignUp';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged( user => {
      this.setState({ currentUser: user});
      console.log(user);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser = {this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
