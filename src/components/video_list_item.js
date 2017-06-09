import React from 'react';

//In ES6, to assign the props value can use 
//({ video })  is equally to 
//const video = props.video;
const VideoListItem = ( {video, onVideoSelect} ) => {	
	const imgUrl = video.snippet.thumbnails.default.url;
	
	return(
		<li onClick={() => onVideoSelect(video)} className="list-group-item">
			<div className='video-list media'>
				<div className='media-left'>
					<img className='media-object' src={imgUrl}/>
				</div>
				<div className='media-body'>
					<div className='media-heading'>
						{video.snippet.title}
					</div>
				</div>
			</div>
		</li>
	)
}

export default VideoListItem;