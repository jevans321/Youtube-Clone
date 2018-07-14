import React from 'react';
/* Video List component
    - parent of video-list-item & video-list-detail
  doesn't have any need for state
  doesn't record any user interaction
  doesn't re-render itself in any fashion */

/* PROPS
   In a Functional Component the 'props' object is an Argument
   - defined as 'props'
   In a Class-based Component 'props' are available anywhere in any
   method
   - defined as 'this.props' */
const VideoList = (props) => {
  return (
    <ul className="col-md-4 list-group">
      {props.videos.length}
    </ul>
  );
}

export default VideoList;