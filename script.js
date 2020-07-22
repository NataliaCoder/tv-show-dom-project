/**
  
  <a href="http://.... " target="_blank">Name</a> 
  window.redirect
 */
function setup() {
    const allEpisodes = getAllEpisodes();

    let inputTitle = document.querySelector("#input_title");

    // select-search
    let selectSearch = document.createElement("select");
    inputTitle.appendChild(selectSearch);
    selectSearch.name = "episode_search";
    selectSearch.id = "episode_search";
    
   

    allEpisodes.forEach((episode, idx) => {  
        option = document.createElement('option');
        option.setAttribute('value', idx);
        option.appendChild(document.createTextNode(
            "S".concat(String(episode.season).padStart(2, 0)) +
            "E".concat(String(episode.number).padStart(2, 0)) +
            " - ".concat(episode.name)
        ));
        selectSearch.appendChild(option);

    });
   
  
    // selectSearch.onchange= function(){
    //   return episodeList.find(episode => {
    //       if(episode.id == selectSearch.value){
    //         window.open(episode.url);
    //       }
    //     });
    //   };
   
    // input for word-search
    let input = document.createElement("input");
    let results = document.createElement("div"); 
    inputTitle.appendChild(input);
    inputTitle.appendChild(results);
    results.className = "results";
    input.className = "input";
    input.id = "input_id";


  



  makePageForEpisodes(allEpisodes);
 
  let updateInput = document.querySelector('#input_id');
  updateInput.addEventListener('input', function() {
    let searchLine = updateInput.value.toLowerCase();          //what we entered in input
    let titleElement = document.querySelector('.results'); //where we want to see number result

    let result = allEpisodes.filter( episode => ( 
      
        episode.name.toLowerCase().includes(searchLine) || 
        episode.summary.toLowerCase().includes(searchLine) 
      ) 
    );
    let mainResult= result.length;
    
    titleElement.innerText = "Episodes found " + mainResult + " / " + allEpisodes.length;
    updateInput.value = searchLine;  
    makePageForEpisodes(result);
  });

}
function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  rootElem.textContent = "";

  for(let i = 0; i < episodeList.length; i++){
    console.log(episodeList[i].name);
    // episodeList[i].season 
    // episodeList[i].number 
    // episodeList[i].image.medium 
    // episodeList[i].summary



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
    number.textContent = "S".concat(String(episodeList[i].season).padStart(2, 0)) +
        "E".concat(String(episodeList[i].number).padStart(2, 0));
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

    /// -----
    let link = document.createElement("a");
    link.href = episodeList[i].url;

  }
}

window.onload = setup;
