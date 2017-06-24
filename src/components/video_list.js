import React from 'react';
import ReactDom from 'react-dom';
import {ListGroup, Grid, Row, Col} from 'react-bootstrap';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
	const videoItems = props.videos.map((video) => {
		return <VideoListItem key={video.etag} video = {video} />
	});	

	return (
		<Col md={4}>
			<ListGroup>
				{videoItems}
			</ListGroup>
		</Col>
	);
};

export default VideoList;