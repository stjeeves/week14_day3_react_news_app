import React from 'react';

import StoryItem from './StoryItem'

const StoryList = (props) => {
  
  const stories = props.stories.filter(story => story.title.includes(`${props.input.input}`)).map(story => {
     return <StoryItem title={story.title} author={story.by} url={story.url} key={story.id}/>
  })

    return ( 
      <>
      <h2>Our Top Stories</h2>
      {stories}
    </>
    );

}
 
export default StoryList;