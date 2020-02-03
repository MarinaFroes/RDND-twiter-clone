import React, { Component } from 'react'
import { connect } from 'react-redux'

import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <div>
        <Dashboard />
      </div>
    )
  }
}

// Using the connect() function upgrades a component to a container. Containers can read state from the store and dispatch actions.
export default connect()(App)