var beepStyle = {
    fontSize: '30px',
    color: 'red',
    fontFamily: 'helvetica',
    position: 'absolute',
    right: 0,
    margin: '5vw'
};

var boopStyle = {
    fontSize: '30px',
    color: 'blue',
    fontFamily: 'helvetica',
    position: 'absolute',
    left: 0,
    margin: '5vw'
};

function mapBeepToUpdate(beep){
    if(beep){
        ReactDOM.render(beepElem, document.getElementById('app'));
    }
    else {
        ReactDOM.render(boopElem, document.getElementById('app'));
    }
}

var beepElem = <div style={beepStyle}>beep</div>;
var boopElem = <div style={boopStyle}>boop</div>;

var beep = true
setInterval(function(){
    beep = !beep;
    mapBeepToUpdate(beep);
}, 750);
