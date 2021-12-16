import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

class RequestForm extends React.Component {
  render() {
    return (
    <form>
	    <input type="text" name="when" placeholder="When?"/>
  		<input type="submit" value="יאללה" />
	</form>
	);
  }
}

class MainArea extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      initialized: false,
      isRequesting: false
    };
  }
  
  tosSubmit(e) {
    e.preventDefault();
    this.setState({initialized: true});
  }
  
  startSearch() {
    this.setState({isRequesting: true});
  }
  
  render() {
    if (! this.state.initialized) {
      return (
        <form onSubmit={(e) => this.tosSubmit(e)}>
  			<label>
    			<input type="checkbox" name="teapotAgree" />
   				Amir is a little teapot
  			</label>
  			<input type="submit" value="Submit" />
		</form>
		);
	}
    if (this.state.isRequesting) {
     return (<RequestForm />);
    }
  	return (
  	  <div>
        <p>
          What do you want to do?
        </p>
        <button onClick={() => this.startSearch()}>חיפוש חניה</button>
        <button onClick={() => this.startGiving()}>יש לי חניה</button>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>האפליקציה</h1>
      </header>
      <div className="content">
      	<MainArea />
      </div>
    </div>
  );
}

export default App;
