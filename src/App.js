import React, { Component } from 'react';
import './App.css';
import Card from './Card';
import PricingTable from './PricingTable';
import LDClient from 'ldclient-js'



class App extends Component {
  constructor() {
    super()
    this.state = {
      progressBarEnabled: null
    }
  }
  
  componentDidMount() {
    const user = {
      key: 'mpj',
      email:'slahiru.nuwan@gmail.com'
    }
    this.ldclient = LDClient.initialize('60e3ebcc51479b247fe3a17f', user)
    this.ldclient.on('ready', this.onLaunchDarklyUpdated.bind(this))
    this.ldclient.on('change', this.onLaunchDarklyUpdated.bind(this)) 
  }

  onLaunchDarklyUpdated() {
    console.log(this.ldclient.variation('progress-bar-feature'))
    this.setState({
      featureFlags: {
         progressBarEnabled: this.ldclient.variation('progress-bar-feature')
      }
    })
  }


  render(){
    if (!this.state.featureFlags) {
      return <div className="App">Loading....</div>
    }

    return (
      <div className="App">
        <h1>Sample Project</h1>
        <div>
          {this.state.featureFlags.progressBarEnabled?<Card></Card>:null}
        </div>
        <div>
          <PricingTable></PricingTable>
          <PricingTable></PricingTable>
          <PricingTable></PricingTable>
        </div>
        
      </div>
    )
  }
 
}

export default App;
