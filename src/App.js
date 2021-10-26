import React from 'react';
import Counter from './Components/Counter';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      count: 0
    }
  }

  handlePlusClick = () => {
    if (this.state.count < 100)
    this.setState ({ count: this.state.count + 1 })
  }

  handleMinusClick = () => {
    if (this.state.count > 0)
    this.setState ({ count: this.state.count - 1 })
  }

  render() {
  
    return (
      <div className="card border border-dark border-4 rounded shadow m-3 p-2">
        <h1 className="text-center rounded text-white bg-dark p-2">Counter</h1>
        <Counter count={this.state.count} substract={this.handleMinusClick} increment={this.handlePlusClick}/>
        <Counter count={this.state.count} substract={this.handleMinusClick} increment={this.handlePlusClick}/>
      </div>
    )
  }

}

export default App;
