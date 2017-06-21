import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap'

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			query: ''
		}
	}

	search(){
		console.log('this.state', this.state);
		const BASE_URL = 'https://accounts.spotify.com/authorize?client_id=c8480e39f80940628a5d00b3b8634b09';
		const FETCH_URL = `${BASE_URL}q=${this.state.query}&type=artist&limit=1`;
		//const token = 'BQAluvCaZUmESiesMmkFM0Slh7satfH7YZWB4YT8a-m2BZPTOPmvRIQ1-fulTipDiVEPOMtVWCfPiZt6QGM2d5j6w_3F_2sJJ6MJywVlKPOdxBk9Eso-lqagCr0JIrfe4omrF5S6CDXKNI8mezCgWp88ST-CK-l7K1RRkMntbnvhoPTVI-6FHs12tgIFnBDtHObSeg';
		//console.log('FETCH_URL', FETCH_URL);
		const id = 'c8480e39f80940628a5d00b3b8634b09';
		console.log('FETCH_URL', FETCH_URL);
		fetch(BASE_URL, {
			method: 'GET',
			/*headers: new Headers({
				Authorization: `Bearer${token}`
			}),*/
			//client_id: 'c8480e39f80940628a5d00b3b8634b09',
			data: {
            	q: query,
            	type: 'album'
        	}

		})
		.then(response => response.json())
		.then(json => console.log('json', json));
	}

	render() {
		return (
			<div className="App">
				<div className="App-title">Music Master from App</div>
				<FormGroup>

					<InputGroup>
						<FormControl
						type="text"
						placeholder="Search for an Artist"
						value={this.state.query}
						onChange={event => {this.setState({query: event.target.value})}}
						onKeyPress = {event => {
							if(event.key === 'Enter'){
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
				<div className="Profile">
					<div>Artist Picture</div>
					<div>Artist Name</div>
				</div>
				<div className="Gallery">
					Gallery
				</div>
			</div>
		)
	}
}

export default App;

