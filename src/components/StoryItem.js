import React from 'react';

const StoryItem = (props) => {
  return ( <div>
    <a href={props.url}><h3>{props.title}</h3></a>
    <h4>Story by: {props.author}</h4>
    </div>
    );
}
 
export default StoryItem;