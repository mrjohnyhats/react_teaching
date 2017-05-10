var myArr = ['hello', 'potato', 5];
var myElem = <div>
    {myArr.map(function(a){
        return (<div style={{display: 'block'}}>{a}</div>);
    })}
</div>;

ReactDOM.render(myElem, document.getElementById('app'));
