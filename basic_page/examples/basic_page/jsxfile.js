var langsAndCodes = [
  {
    "code": "ar",
    "name": "Arabic"
  },
  {
    "code": "bs",
    "name": "Bosnian"
  },
  {
    "code": "bg",
    "name": "Bulgarian"
  },
  {
    "code": "ca",
    "name": "Catalan"
  },
  {
    "code": "zh-CHS",
    "name": "Chinese Simplified"
  },
  {
    "code": "zh-CHT",
    "name": "Chinese Traditional"
  },
  {
    "code": "hr",
    "name": "Croatian"
  },
  {
    "code": "cs",
    "name": "Czech"
  },
  {
    "code": "da",
    "name": "Danish"
  },
  {
    "code": "nl",
    "name": "Dutch"
  },
  {
    "code": "en",
    "name": "English"
  },
  {
    "code": "et",
    "name": "Estonian"
  },
  {
    "code": "fi",
    "name": "Finnish"
  },
  {
    "code": "fr",
    "name": "French"
  },
  {
    "code": "de",
    "name": "German"
  },
  {
    "code": "el",
    "name": "Greek"
  },
  {
    "code": "ht",
    "name": "Haitian Creole"
  },
  {
    "code": "he",
    "name": "Hebrew"
  },
  {
    "code": "hi",
    "name": "Hindi"
  },
  {
    "code": "mww",
    "name": "Hmong Daw"
  },
  {
    "code": "hu",
    "name": "Hungarian"
  },
  {
    "code": "id",
    "name": "Indonesian"
  },
  {
    "code": "it",
    "name": "Italian"
  },
  {
    "code": "ja",
    "name": "Japanese"
  },
  {
    "code": "sw",
    "name": "Kiswahili"
  },
  {
    "code": "ko",
    "name": "Korean"
  },
  {
    "code": "lv",
    "name": "Latvian"
  },
  {
    "code": "lt",
    "name": "Lithuanian"
  },
  {
    "code": "ms",
    "name": "Malay"
  },
  {
    "code": "mt",
    "name": "Maltese"
  },
  {
    "code": "no",
    "name": "Norwegian"
  },
  {
    "code": "fa",
    "name": "Persian"
  },
  {
    "code": "pl",
    "name": "Polish"
  },
  {
    "code": "pt",
    "name": "Portuguese"
  },
  {
    "code": "ro",
    "name": "Romanian"
  },
  {
    "code": "ru",
    "name": "Russian"
  },
  {
    "code": "sr-Cyrl",
    "name": "Serbian (Cyrillic)"
  },
  {
    "code": "sr-Latn",
    "name": "Serbian (Latin)"
  },
  {
    "code": "sk",
    "name": "Slovak"
  },
  {
    "code": "sl",
    "name": "Slovenian"
  },
  {
    "code": "es",
    "name": "Spanish"
  },
  {
    "code": "sv",
    "name": "Swedish"
  },
  {
    "code": "th",
    "name": "Thai"
  },
  {
    "code": "tr",
    "name": "Turkish"
  },
  {
    "code": "uk",
    "name": "Ukrainian"
  },
  {
    "code": "ur",
    "name": "Urdu"
  },
  {
    "code": "vi",
    "name": "Vietnamese"
  },
  {
    "code": "cy",
    "name": "Welsh"
  },
  {
    "code": "yua",
    "name": "Yucatec Maya"
  }
];

var myHeader = <h1>my translation page!</h1>;

var lang = 'nl';
var curText = '';
var output = <div></div>;

var mySelector = <select onChange={handleLangChange}>
    { langsAndCodes.map(function(l, i){ return (<option key={i} value={l['code']}>{l['name']}</option>)} ) }
</select>

var myInput = <input type="text" onChange={handleInputChange}/>;

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
