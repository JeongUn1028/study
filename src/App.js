<<<<<<< HEAD
<<<<<<< HEAD
import React, { Component } from 'react';
import LifeCycleSample from './LifeCycleSample';
import ErrorBoundary from './ErrorBoundary';

function getRandomColor() {
  return '#' + Math.floor(Math.random()*1677215).toString(16);
}
class App extends Component {
  state = {
    color: '#000000'
  }

  handleClick = () => {
    this.setState({
      color: getRandomColor()
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>랜덤 색상</button>
        <ErrorBoundary>
          <LifeCycleSample color={this.state.color}/>
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
=======
import logo from './logo.svg';
import './App.css';
=======
import React from 'react';
import Average from './Average';
>>>>>>> ad2ba27 (8. Hooks 23.1.4)

const App = () => {
  return <Average/>
};

<<<<<<< HEAD
export default App;
>>>>>>> c01f291 (Initialize project using Create React App)
=======
export default App;
>>>>>>> ad2ba27 (8. Hooks 23.1.4)
