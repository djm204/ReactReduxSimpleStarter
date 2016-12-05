import React from 'react';
import VideoListItem from './VideoListItem';

const VideoList = (props) => {
    const videos = props.videos;
    const videoItems = videos.map((video) => {
        return <VideoListItem
            onVideoClick={props.onVideoSelect}
            key={video.etag}
            video={video}
            />
    })
    return (
        <ul className="col-md-6 list-group">
            {videoItems}
        </ul>
    );
};

export default VideoList;