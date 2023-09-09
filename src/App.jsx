import { Component } from 'react'
import './App.css'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      location: 'lisbon'
    }
    this.fetchWeather = this.fetchWeather.bind(this)
  }

  fetchWeather(){
    console.log('Loading data...')
    console.log(this);
  }

  render() {
    return (
      <div className='app'>
        <h1>Classy Weather</h1>
        <div>
          <input 
            type='text'
            placeholder='Search from location...'
            value={this.state.location}
            onChange={e => this.setState({location: e.target.value})}
          />
        </div>
        <button onClick={this.fetchWeather}>Get weather</button>
      </div>
    )
  }
}

export default App
