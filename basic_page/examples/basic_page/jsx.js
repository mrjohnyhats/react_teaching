const myHeader = <h1>my translation page!</h1>;

let lang = 'nl';
let output = <div></div>;

const langsAndCodes = {
    'dutch': 'nl',
    'hindi': 'hi',
    'french': 'fr'
};

const handleLangChange = (e) => {
    console.log('works');
    lang = e.target.value;
};

const mySelector = <select onChange={handleLangChange}>
    { Object.keys(langsAndCodes).map((l) => (<option key={l} value={langsAndCodes[l]}>{l}</option>) ) }
</select>

const handleInputChange = (e) => {
    console.log('works');
    const url = `http://www.transltr.org/api/translate?text=${e.target.value}&to=${lang}&from=en`;
    $.ajax({
        url,
        complete: (res, status) => {
            console.log(`status: ${status}`);
            const text = JSON.parse(res.responseText)['translationText'];
            console.log(text);
            update(text);
        }
    });
};

const myInput = <input type="text" onChange={handleInputChange}/>;


const update = (text) => {
    const elem = <div>
        {myHeader}
        {myInput}
        {mySelector}
        <div>{text}</div>
    </div>;
    ReactDOM.render(elem, document.getElementById('app'));
};
update();
