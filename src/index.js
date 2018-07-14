import React, { Component } from 'react';
import ReactDOM from 'react-dom';
/* './' means Current Directory */
import SearchBar from './components/search_bar';
import youtubeSearch from 'youtube-api-v3-search';
import VideoList from './components/video_list';
require('dotenv').config();

const API_KEY = process.env.GOOGLE_KEY;

// Create a new component. This component should produce some HTML
// 'const' - ES6 syntax, we're saying this is the final value of this variable, it's never gonna change, constant
// JSX dialect of JS that allows us to write what looks like HTML, but is really JS behind the scenes
class App extends Component {
  /* constructor always gets called with props */
  constructor(props){
    super(props);
    this.state = { videos: [] };
    
    youtubeSearch(API_KEY, {q: 'surfboards'}, (error, videos) => {
      console.log('the video results: ', videos.items);
      this.setState({ videos: videos.items });
    });
  }
  render(){
    /* When making reference to a javascript variable...
       USE CURLY BRACES! e.g.{this.state.videos} e.g.{variable} */
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos}/>
      </div>
    );
  }
}
// Take this component's generated HTML and put in on the page(in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));