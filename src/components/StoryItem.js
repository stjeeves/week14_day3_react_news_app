import React from 'react';

const StoryItem = (props) => {
  return ( <div className="story-item">
    <a class="hyperlink" href={props.url} target="_blank"><h3>{props.title}</h3></a>
    <h4>Story by: {props.author}</h4>
    <p>_____________________________________________________________</p>
    </div>
    );
}
 
export default StoryItem;