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

// 高阶函数 条件过滤列表 ES5
// function isSearched(searchTerm) {
//   return function(item) {
//     return item.title.toLowerCase().includes(searchTerm.toLowerCase());
//   }
// }

// 高阶函数 条件过滤列表 ES5
const isSearched = searchTerm => item => 
  item.title.toLowerCase().includes(searchTerm.toLowerCase());

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list,
      searchTerm: '',
    }

    this.onSearchChange = this.onSearchChange.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
  }

  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value });
  }
  onDismiss(id) {
    const isNotId = item => item.objectID !== id;
    const updataList = this.state.list.filter(isNotId);
    this.setState({list: updataList});
  }

  render() {
    return (
      <div className="App">
        <form>
          <input
            type="text"
            onChange={this.onSearchChange}
          />
        </form>
        {this.state.list.filter(isSearched(this.state.searchTerm)).map(item => {
          return (
            <div key={item.objectID}>
              <span>
                  <a href={item.url}>{item.title}</a>
              </span>
              <span>{item.author}</span>
              <span>{item.num_comments}</span>
              <span>{item.points}</span>
              <span>
                <button
                  onClick={() => this.onDismiss(item.objectID)}
                  type="button"
                >
                  Dismiss
                </button>
              </span>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
