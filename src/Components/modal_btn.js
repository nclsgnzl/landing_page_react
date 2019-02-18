import React, { Component } from 'react';

class modal extends Component{

	render(){
		return(
			<button 
			className="btn btn-primary btn-lg" 
			type="button"
			data-toggle="modal" 
			data-target="#landing_page_modal"
			>
				<span>Aprende React JS!</span>
			</button>

		);
	}
}

export default modal;