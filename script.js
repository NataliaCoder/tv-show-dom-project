//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
 
let updateInput = document.querySelector('#input_id');
updateInput.addEventListener('input', function() {
let title = updateInput.value;          //what we entered in input
let titleElement = document.querySelector('.results'); //where we want to see number result

let result = allEpisodes.filter( episode =>  ( 
  episode.name.toLowerCase().includes(title) || 
  episode.summary.toLowerCase().includes(title) 
 ) 
);
let mainResult= result.length;
 
titleElement.innerText = "Episodes found " + mainResult + " / " + allEpisodes.length;
updateInput.value = title;  
});
}

let inputTitle = document.querySelector("#input_title")
let input = document.createElement("input");
let results = document.createElement("div"); 
inputTitle.appendChild(input);
inputTitle.appendChild(results);
results.className = "results";
input.className = "input";
input.id = "input_id"
// ///////



// let updateInput = document.querySelector('#input_id');
// updateInput.addEventListener('click', function() {
//   let title = updateInput.value;          //what we entered in input
// let titleElement = document.querySelector('.results'); //where we want to see number result
//     // titleElement.innerText = title;
//     // updateInput.value = title;
// });




//////////
function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  
  for(let i = 0; i < episodeList.length; i++){
    console.log(episodeList[i].name);
// episodeList[i].season 
// episodeList[i].number 
// episodeList[i].image.medium 
// episodeList[i].summary

function displayCode(symbol, num){
  if (num<10){
    return symbol + "0"+num;
  } else {
    return symbol + num;
  }
 }

 let divBlock = document.createElement("div");
 rootElem.appendChild(divBlock);
 divBlock.className = "block";


let divTitle = document.createElement("div");
divBlock.appendChild(divTitle);
divTitle.className = "div_title"; 

  let div = document.createElement("div");
div.textContent = episodeList[i].name;
divTitle.appendChild(div);
div.className = "name";

let number = document.createElement("div");
number.textContent = displayCode("S", episodeList[i].season)+displayCode("E", episodeList[i].number);
divTitle.appendChild(number);
number.className = "number";

let divAdd = document.createElement("div");
divBlock.appendChild(divAdd);

let mediumImage = document.createElement("img");
mediumImage.src = episodeList[i].image.medium;
mediumImage.className = "image";
divBlock.appendChild(mediumImage);

let summary = document.createElement("div");
divBlock.appendChild(summary);
let par = document.createElement("p");
summary.appendChild(par);
par.textContent = episodeList[i].summary;
par.className = "summary";



  }
}

window.onload = setup;
