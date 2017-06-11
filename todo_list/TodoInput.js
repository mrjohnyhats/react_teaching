const React = require("react");

class TodoInput extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            curText: ""
        };
    }

    render(){
        return (
            <input
                type="text"
                onKeyPress={ ({charCode}) => {
                    if(charCode == 13) this.props.addTodo(this.state.curText)
                } }
                onChange={ ({target: {value}}) => {
                    this.setState({
                        curText: value
                    });
                } }
            />
        )
    }
}

module.exports = TodoInput;
