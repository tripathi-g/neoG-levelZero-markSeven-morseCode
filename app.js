const inputText = document.querySelector("#txt-input");
const transBtn = document.querySelector("#btn-translate");
const outputTxt = document.querySelector("#output");
const apiEndPoint = "https://api.funtranslations.com/translate/morse.json";

function translate() {
    let link = apiEndPoint+"?text="+inputText.value;
    fetch(link)
    .then((response)=>{
        return response.json();
    }).then((json)=>{
        console.log(json.contents.translated);
        outputTxt.innerText = json.contents.translated;
    })
}



transBtn.addEventListener("click",()=>{
   if(inputText.value !== undefined){
    translate()
   }
})