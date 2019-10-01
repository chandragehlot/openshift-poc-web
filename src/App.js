import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { saveNameToServer } from './api/savedata-api';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      username : '',
      NameOnServer: '',
      err: ''
    }
    this._onSubmitApp = this._onSubmitApp.bind(this);
  }

  _onChangeData(event){
    const val = event.target.value;
    this.setState({
      ...this.state,
      username : val
    },()=>{
      console.log("after udpate", this.state);
    });
  }

  _onSubmitApp(){
    saveNameToServer(this.state.username).then((response)=>{
      const name  = response.data.name
      this.setState({
        ...this.state,
        NameOnServer : name
      });
    }).catch((err)=>{
      this.setState({
        ...this.state,
        err : 'Network error'
      });
    });
  }

  render() {
    const { NameOnServer, err } = this.state;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          Enter Your Name
        </p>
        <div>
          <input type="text" value={this.state.username} name="username" id="username" onChange={(e) => this._onChangeData(e)}/>
        </div>

        <div>
          <button name="submit" type="button" onClick={this._onSubmitApp}>Save On Server</button>
        </div>
        {NameOnServer && 
            <div>
              <h2>You Name Saved on the server</h2>
              <p> { NameOnServer}</p>
            </div>
        }
        { err && <p style={{ color: 'red'}}>{err}</p>
        }
      </div>
    );
  }
}

export default App;
