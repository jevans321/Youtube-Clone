import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  /* The above {video} arg is identical to the following code:
     const VideoListItem = (props) => {
     const video = props.video; 
     const onVideoSelect = props.onVideoSelect;
     - it says the argument, the props object, has a property 'video'.
       Please grab that video prop and declare a new variable called 'video'
    */
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li  onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl}/>
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
}

export default VideoListItem;
