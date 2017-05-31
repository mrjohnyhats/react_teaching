class SpecialListing extends React.Component {
	constructor(props){
  	super(props);
    this.state = {excited: false};
    this.toggleExcitement = this.toggleExcitement.bind(this);
	}

  toggleExcitement(){
		this.setState({excited: !this.state.excited});
  }

	render(){
  	var style = {};
    if(this.state.excited) style = {color: 'purple'}

    return (<li style={style} onMouseOver={this.toggleExcitement}>
        {this.props.text}
    </li>);
	}
}

SpecialListing.propTypes = {
	text: React.PropTypes.string.isRequired
}

class Listing extends React.Component {
	render(){
  	return (<li>{this.props.text}</li>)
	}
}

Listing.propTypes = {
	text: React.PropTypes.string.isRequired
}

class List extends React.Component {
	render(){
  	return (<ul>
  	  <Listing text="hello"/>
      <Listing text="there"/>
      <Listing text="sir"/>
      <Listing text="I am"/>
      <SpecialListing text="Jarvis"/>
  	</ul>);
	}
}

ReactDOM.render(<List/>, document.getElementById("app"));
