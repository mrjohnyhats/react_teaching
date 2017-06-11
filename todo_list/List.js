const React = require("react");

const todoStyle = {
    transition: "ease-in-out 0.2s"
};

const Todo = ({text, deleteTodo}) => {
    return (
        <div
            style={todoStyle}
            value={text}
            onClick={deleteTodo}
        >
            {text}
        </div>
    );
};

const List = ({todos, deleteTodo}) => {
    const todosElem = todos.map((t, i) => {
        return (<Todo text={t} deleteTodo={deleteTodo} key={i}/>);
    });

    return (<div>{todosElem}</div>);
};

module.exports = List;
