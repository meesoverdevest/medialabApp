import React, { Component } from 'react';
import { START_LOADING } from './action_types/loading'
import factory from './utils/store'
import reducers from './utils/reducers'
import {persistStore} from 'redux-persist'

import Loader from './components/Loader';
import Navigation from './containers/Navigation/Navigation'
// Project organization
// https://medium.com/the-react-native-log/organizing-a-react-native-project-9514dfadaa0#.7nazwy7kx

import { AsyncStorage } from 'react-native';

import { Provider, connect } from 'react-redux';

var store = factory(reducers);

const ConnectedRouter = connect()(Navigation)

class App extends Component{
  constructor() {
    super();
    this.state = { 
      rehydrated: false
    }
  }

  componentWillMount() {           
    persistStore(store, 
      {
        storage: AsyncStorage,
        blacklist: ['wijken','user']
      }, 
      () => {
        this.setState({ rehydrated: true })
    })

    store.dispatch({type: START_LOADING})
  }

  render() {
    if(!this.state.rehydrated){
      return (<Loader/>)
    }
  
    return (
      <Provider store={store}>
        <ConnectedRouter />
      </Provider>
    )
  }
}

export default App;