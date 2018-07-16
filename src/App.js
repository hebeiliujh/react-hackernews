import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

const list = [{
  title: 'React',
  url: 'https://facebook.github.io/react/',
  author: 'React',
  num_comments: 3,
  points: 4,
  objectID: 0,
}, {
  title: 'Redux',
  url: 'https://github.com/reactjs/redux',
  author: 'React',
  num_comments: 5,
  points: 2,
  objectID: 1,
}]
class App extends Component {
  render() {
    return (
      <div className="App">
        {list.map(item => {
          return (
            <div key={item.objectID}>
              <span>
                  <a href={item.url}>{item.title}</a>
              </span>
              <span>{item.author}</span>
              <span>{item.num_comments}</span>
              <span>{item.points}</span>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
