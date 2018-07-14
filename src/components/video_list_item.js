import React from 'react';

const VideoListItem = ({video}) => {
  /* The above {video} arg is identical to the following code:
     const VideoListItem = (props) => {
     const video = props.video; 
     - it says the argument, the props object, has a property 'video'.
       Please grab that video prop and declare a new variable called 'video'
    */
   console.log(video);
  return <li>Video</li>
}

export default VideoListItem;
