import React, { Component } from 'react';
import '../css/modal.css';

class contenido extends Component{

	show_modal(){
		alert("Gracias por suscribirse :)");
	}

	render(){
		return(
			<div id="landing_page_modal" className="modal fade" role="dialog">
			  <div className="modal-dialog">
			    <div className="modal-content">
			      <div className="modal-body">
			      	<div className="contenido_modal">
			      		<div className="titulo_landing">¡Obtén más conocimiento del que ya tienes!</div>
			      		<br/>
			      		<table className="tabla_info">
			      			<tr>
			      				<td align="left">
			      					<span className="texto">¡Suscribete y te haremos llegar la información para que puedas aprender:<br/> - Jquery<br/> - HTML5<br/> - Responsividad<br/> - Javascript<br/> - React JS<br/> - y mucho más!</span>
			      				</td>
			      				<td>
			      					<input type="text" className="form-control" placeholder="Tu nombre y apellido :)"/><br/>
			      					<input type="text" className="form-control" placeholder="Tu correo ;)"/>
			      				</td>
			      			</tr>
			      		</table>
			      	</div>
			        <button 
			        type="button" 
			        className="btn btn-success btn-lg"
			        data-dismiss="modal"
			        onClick={this.show_modal}
			        >
			        <span><i className="glyphicon glyphicon-ok"></i> Suscribirse</span>
			        </button>
			      </div>
			      <div className="modal-footer">
			        <button type="button" className="btn btn-danger btn-md" data-dismiss="modal">
			        <span><i className="glyphicon glyphicon-remove"></i></span>
			        </button>
			      </div>
			    </div>

			  </div>
			</div>
		);
	}
}

export default contenido;