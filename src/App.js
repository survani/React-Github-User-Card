import React from 'react';
import './App.css';
import axios from "axios";

import UserCard from "./components/UserCard"

class App extends React.Component {
  state = {
    gitHubUsers: []
  };

  componentDidMount() {


  }

  userData = () => {
    // axios.get("https://api.github.com/users/survani")
  }
  render(){
    return (
      <div>
        <h1>Github User</h1>
        {this.state.doggos && 
        this.state.gitHubUsers.map( users => (
        <UserCard
        key={users.id}
        name={users.name}
        bio={users.bio}
        img={users.avatar_url}
        />
        ))}
      </div>
    )
  }
}

export default App;
