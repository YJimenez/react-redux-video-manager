import React, { Component } from 'react';

class SearchBar extends Component {
	
	constructor(props){
		super(props)
		
		this.state = { term:'' }
	}
	
	render() {
		return (
			<div className='search-bar'>
				<input
					value={this.state.term}
					onChange={event => this.onSearchbarChange(event.target.value)}
				/>
				<br/>
			</div>
		)
	}
	
	onSearchbarChange(term){
		this.setState({term});
		this.props.onSearchTerm(term)
	}
}

export default SearchBar;