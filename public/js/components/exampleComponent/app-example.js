var react = require('react');
var ExampleStore = require('../../stores/app-example-store');
var ExampleAction = require('../../actions/app-example-action');
var Table = require('react-bootstrap/lib/Table');

var ExampleApp = React.createClass({
	getInitialState:function(){
		return {
			store : ExampleStore.getExample()
		}
	},
	_handleClick : function(event){
		ExampleAction.updateMyDetails("Pacrt", "Developer");
	},
	_onChange:function(){
		this.setState({
			store : ExampleStore.getExample()
		});
	},
	 componentDidMount: function() {
        ExampleStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        ExampleStore.removeChangeListener(this._onChange);
    },
	render : function(){
		return (
			<div>
				<h1> Hello there Team!!! </h1>
				<input type="button" value="click Me" onClick={this._handleClick}/>
				
				<br/>company -- {this.state.store.company}
				<br/>Desgination -- {this.state.store.designation}

				 <Table striped bordered condensed hover>
				    <thead>
				      <tr>
				        <th>#</th>
				        <th>First Name</th>
				        <th>Last Name</th>
				        <th>Username</th>
				      </tr>
				    </thead>
				    <tbody>
				      <tr>
				        <td>1</td>
				        <td>Mark</td>
				        <td>Otto</td>
				        <td>@mdo</td>
				      </tr>
				      <tr>
				        <td>2</td>
				        <td>Jacob</td>
				        <td>Thornton</td>
				        <td>@fat</td>
				      </tr>
				      <tr>
				        <td>3</td>
				        <td colSpan="2">Larry the Bird</td>
				        <td>@twitter</td>
				      </tr>
				    </tbody>
			  </Table>
			</div>
		)
	}
});

module.exports = ExampleApp;