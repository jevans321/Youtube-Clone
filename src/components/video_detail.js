import React from 'react';

const VideoDetail = ({video}) => {
  if(!video) {
    return <img src="../../assets/pie_loader.gif" />;
    // <div>Loading...</div>
  }
  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;
  return (
    <div className="video-details col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
      {/* The 'iframe' will show a video player 
          - all you have to do is provide a 'src' and the iframe
            will reach out to the url and place whatever content
            inside the iframe */}
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
         <div>{video.snippet.title}</div>
         <div>{video.snippet.description}</div>
      </div>
    </div>
  )
};

export default VideoDetail;