import React, { Component } from 'react'
import Tone from 'tone'
import '../styles/App.css'

const Header = () => (
  <header className='App-header'>
    <h1 className='App-title'>Energy  Monitor App </h1>
  </header>
)

const Items = (props) => (
  <div className='main'>

    <div className="btn" onClick={props.handleClick}>2KWH</div>

  </div>
)

const ControleBar = () => (
  <div className='menu'>

      Controle bar

  </div>
)

class EnergyMonitorApp extends Component {
  
  state = {
    
  }

  handleClick = () => {
     
     

  }

  componentDidMount() {
    
  

  }


      render () {
    return (
      <div className='App-container'>

        <ControleBar />
        <Items 
          handleClick={this.handleClick}
        />

      </div>
    )
  }
}

const App = (props) => (
  <div className='App'>
    <Header />
    <EnergyMonitorApp />

  </div>
)

export default App

