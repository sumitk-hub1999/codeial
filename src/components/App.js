//import React from 'react';
//import logo from './logo.svg';

// function App() {
//   return <div className="App">App</div>;
// }

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/posts';
export class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }
  render() {
    console.log('props:', this.props);
    return <div>App</div>;
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}

export default connect(mapStateToProps)(App);
