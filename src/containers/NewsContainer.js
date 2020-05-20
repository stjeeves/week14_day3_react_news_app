import React, { Component } from 'react';

import StoryList from '../components/StoryList'
import SearchBox from '../components/SearchBox'

class NewsContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
    stories: [],
    input: " "
    }
  }
  
  getStories = () => {
    const mainStoriesURL = "https://hacker-news.firebaseio.com/v0/topstories.json"

    fetch(mainStoriesURL)
    .then(res => res.json())
    .then(json => {
      const top100Stories = json.slice(0,100);
      const storyURLs = top100Stories.map(story => {
        return fetch(`https://hacker-news.firebaseio.com/v0/item/${story}.json`)
        .then(res => res.json())
      })
      Promise.all(storyURLs)
      .then(story => this.setState({
        stories: story
      }))
    })
  }

  componentDidMount() {
     this.getStories();
  }

  sendSearch = (input) => {
    this.setState({input: input})
  }

  render() { 
    return ( <>
    <h1>Hacker News</h1>
    <SearchBox sendSearch={this.sendSearch}/>
    <StoryList input={this.state.input} stories={this.state.stories}/>
    </> );
  }
}

export default NewsContainer;