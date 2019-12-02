import React, { Component } from 'react';

import './App.css';

//axios api
import axios from 'axios';

class App extends Component {

  state = {
    posts: []
  }
  componentDidMount() {
    console.log('did mount');
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then (res => {
      console.log('res', res) 
      this.setState({
        posts: res.data
      })
    })

  }

  
  render() {
    const {posts} = this.state;
    const postsList = posts.length ? (posts.map( (item) => 
      <div className="post card" key={item.id}>
        <div className="card-content">
          <span className="card-title"> {item.title}</span>
          <p>{item.body}</p>
        </div>
       </div>
     )) : (<p>No data</p>)
    return (
      <div className="container">
        <h3>Axios Example</h3>
        {postsList}
      </div>
    )

  }
}

export default App
