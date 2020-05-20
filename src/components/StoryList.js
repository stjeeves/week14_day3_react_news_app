import React from 'react';

import StoryItem from './StoryItem'

const StoryList = (props) => {
  
  const stories = props.stories.filter(story => story.title.includes(`${props.input}`)).map(story => {
     return <StoryItem title={story.title} author={story.by} url={story.url} key={story.id}/>
  })

  const statusCheck = () => {
    if (props.stories.length === 0){
      return <div>Loading...</div>
    }
    if (props.stories.length >= 1 && (stories.length === 0)){
    return <div>No Stories found for filter: {props.input}</div>
    }
  }
    return ( 
      <div id="story-list">
      <h2>Our Top Stories</h2>
      {statusCheck()}
      {stories}
    </div>
    );

}
 
export default StoryList;