const React = require("react");
const ReactDOM = require("react-dom");
const List = require("./List.js");
const TodoInput = require("./TodoInput.js");

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            todos: ["do things", "do stuff"]
        };
        this.deleteTodo = this.deleteTodo.bind(this);
        this.addTodo = this.addTodo.bind(this);
    }

    deleteTodo(index){
        const newTodos = this.state.todos;
        // delete one todo at index
        newTodos.splice(index, 1);
        this.setState({
            todos: newTodos
        });
    }

    addTodo(todo){
        const newTodos = this.state.todos;
        newTodos.push(todo);
        this.setState({
            todos: newTodos
        });
    }

    render(){
        return (
            <div>
                <List
                    todos={this.state.todos}
                    deleteTodo={this.deleteTodo}
                />
                <TodoInput
                    addTodo={this.addTodo}
                />
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById("root"));
