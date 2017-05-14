var curTime = Date.now(); // milliseconds since a very long time ago

var myElem = <p>time since a very long time ago: {curTime}</p>;

ReactDOM.render(myElem, document.getElementById('app'));
