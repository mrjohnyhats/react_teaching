var myHeader = <h1>my translation page!</h1>;

var lang = 'ar'
var curText = '';

var mySelector = <select onChange={handleLangChange}>
    { langsAndCodes.map(function(l, i){ return (<option key={i} value={l['code']}>{l['name']}</option>)} ) }
</select>

var inputStyles = {
    width: '50vw',
    height: '20vh',
};

var myInput = <textarea style={inputStyles} type="text" onChange={handleInputChange}></textarea>;

update();


function update(text){
    var elem = <div>
        {myHeader}
        {myInput}
        {mySelector}
        <div>{text}</div>
    </div>;
    ReactDOM.render(elem, document.getElementById('app'));
}

function updateOutput(){
    var url = `http://www.transltr.org/api/translate?text=${curText}&to=${lang}&from=en`;
    $.ajax({
        url: url,
        complete: function(res, status){
            console.log(`status: ${status}`);
            var text = JSON.parse(res.responseText)['translationText'];
            console.log(text);
            update(text);
        }
    });
}

function handleLangChange(e){
    lang = e.target.value;
    updateOutput();
}

function handleInputChange(e){
    curText = e.target.value;
    updateOutput();
};
