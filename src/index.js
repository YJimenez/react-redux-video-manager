//Using {} in ES6 is possible create a variable and assign a value
//When the both have the same name
//const Component = React.Component
//as equal to { component }
import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const YOUTUBE_API_KEY = 'AIzaSyC1ka-XjBtQ11_7XfQ58J5POZBkHKFPvtE';


//Create the general class_based component 
class App extends Component {
	constructor(props) {
		super(props);
		
		this.state = { 
			videos: [] ,
			selectedVideo: null,
		}
		
		this.videoSerch('metal');
	}
	
	videoSerch(term){
		YTSearch({ key: YOUTUBE_API_KEY, term: term}, videos => {
			this.setState({ 
				videos: videos,
				selectedVideo: videos[0],
			});
		})
	}
	
	render(){
		console.log(this.state.videos);
		const videoTerm = _.debounce(term => {this.videoSerch(term)}, 300);
		return (
			<div>
				<SearchBar 
					onSearchTerm={videoTerm}
				/>
				<VideoDetail 
					video={this.state.selectedVideo} 
				/>
				<VideoList 
					onVideoSelect={selectedVideo => this.setState({selectedVideo})}
					videos={this.state.videos} 
				/>
			</div>
		);
	}
}

//Pass component in a instance <App />
//With ReactDOM assign the instance <App /> to the class container in HTML
ReactDOM.render(<App />, document.querySelector('.container'));