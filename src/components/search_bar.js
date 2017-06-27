import React, { Component } from 'react';
import ReactDom from 'react-dom';

class SearchBar extends Component {
	constructor(props){
		super(props);
		this.state = {
			query: ''
		}
	}
	
	render() {
		return ( 
		  <div className="search_field">
			 <div className ="row">
			 	<div className = "col-md-12">
			 		<div className="input-group">
    					<div className="input-group-btn">
							<input className="form-control" 
							  placeholder="search a video"
							   value = {this.state.query}
							    onChange={ event => this.setState({ query: event.target.value })} />
								  <button type="button" className="btn btn-default">
  									<span className="glyphicon glyphicon-search"></span>
								  </button>
						</div>
					</div>
				</div>
			</div>
		 </div> 
		)
	}

};

export default SearchBar;

