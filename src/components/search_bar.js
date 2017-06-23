import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';

class SearchBar extends Component {
	constructor(props){
		super(props);
		this.state = {
			query: ''
		}
	}
	search() {
			console.log('this.state', this.state);
	}
		render() {
			return (
			  <div className="search_field">
			  	  <FormGroup>
			  	  	  <InputGroup>
			  	  		<FormControl
			  	  		    type = "text"
			  	  		    placeholder = "Search for a video" 
			  	  		    value = {this.state.query}
			  	  		    onChange = {event => {this.setState({query: event.target.value})}}
			  	  		    onKeyPress = {event => {
			  	  		    		if (event.key === 'Enter'){
			  	  		    			this.search()
			  	  		    		}
			  	  		    	}
			  	  		    }
			  	  		/>
			  	  		<InputGroup.Addon onClick={() => this.search()}>
			  	  			<Glyphicon glyph="search"></Glyphicon>
			  	  		</InputGroup.Addon>
			  	  	</InputGroup>
			  	</FormGroup>
			  </div>
			)
		}
		
};

export default SearchBar;

