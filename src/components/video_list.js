import React from 'react';
import VideoListItem from './video_list_item';
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
  const videoItems = props.videos.map((video) => {
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video}/>
    );
  });
  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
}

export default VideoList;