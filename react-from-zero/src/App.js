import React, { Component } from 'react'
import './App.css'
//  import Greet from './components/Greet'
//  import Welcome from './components/Welcome'
//  import Message from './components/Message'
//import Hello from './components/Hello'
import Count from './components/Counter'
class App extends Component {
  render() {
    return (
      <div className="App">
        <br />
        <Count />
{/*         
        <Greet name="Bruce" heroName="Batman">
          <p>This is children props</p>
        </Greet>

        <Greet name="Clark" heroName="Superman">
          <button>Action</button>
        </Greet>

        <Greet name="Diana" heroName="Wonder Woman" />

        <Welcome name="Bruce" heroName="Batman" />
        <Welcome name="Clark" heroName="Superman" />
        <Welcome name="Diana" heroName="Wonder Woman" /> */}

        {/* <Message message='Welcome Visitor' /> */}

        {/* <Greet />
        <Welcome />
        <Hello />*/}
      </div> 
    )
  }
}

export default App
