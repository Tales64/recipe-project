// Machico script

// var searchBtn = document.getElementById('search-byn');
// var mealList = document.getElementById('meal');
// var mealDetailsContent = documentquerySelector('.meal-details-content');
// var recipeCloseBtn = document.getElementById('recipe-close-byn');
// var ingredients = document.querySelector('ingredients');

// searchBtn.addEventListener('click', getMealList);

// //matched meal list with the ingredient
// function getMealList(){
//     var searchInputTxt = document.getElementById('search-input').value.trim();
//     console.log(searchInputTxt.length);

//     function getApi(e){
//         e.preventDefault();
//         console.log('getApi')
//         var url = "https://tasty.p.rapidapi.com/recipes/list?i=${searchInputTxt}";
//     }

//     fetch('url')
//     .then(function(Response){
//         return response.json();
//     })
//     .then(function (data){
//         // for (var i = 0; i < data.length; i++){
//         //     var ingredients = textContent = data[i].html_url;
            
//         console.log(data);
// })}

// const settings = {
// 	"async": true,
// 	"crossDomain": true,
// 	"url": "https://tasty.p.rapidapi.com/recipes/auto-complete?i=${searchInputTxt}",
// 	"method": "GET",
// 	"headers": {
// 		"X-RapidAPI-Key": "9c4e2effe4mshdb57e3901e2dbcap1c3d2djsnc2f16284b672",
// 		"X-RapidAPI-Host": "tasty.p.rapidapi.com"
// 	}
// };

// $.ajax(settings).done(function (response) {
// 	console.log(response);
// });
// console.log('hi')



// Pooja script

var recipeNameEl = document.querySelector(".todayrecipe");
var recipeImageDivEl = document.querySelector(".recipeDiv");
var buttonEl = document.getElementById("buttonThis");
var recipedetailDivEl = document.querySelector(".recipedetail");

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'da4c2a888amshc0a3faa09c1e7b5p15d91djsn6bdd906fb36b',
        'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
    }
};

var description;

function fetchRandomRecipe() {
    var recipeNumber = Math.floor(Math.random() * 100)
    console.log(recipeNumber);
    var url = "https://tasty.p.rapidapi.com/recipes/list?from=" + recipeNumber + "&size=1";

    fetch(url, options)
	.then(response => response.json())
	.then(function (data) {
        console.log(data);
        console.log(data.results[0].name + " " + data.results[0].thumbnail_url+ " " + data.results[0].description);

        recipeNameEl.textContent = "Today's recipe: " + data.results[0].name;
        let recipeImageEl = document.createElement("img");
        recipeImageEl.src = data.results[0].thumbnail_url;
        recipeImageEl.className = "recipeImage";
        recipeImageDivEl.appendChild(recipeImageEl);

        description = data.results[0].description;
        console.log("des-" + description);
        recipedetailDivEl.textContent = description;
    })
	.catch(err => console.error(err));
}

// function handleButtonEvent(event) {
//     event.preventDefault();
//     console.log("des-" + description);
//     recipedetailDivEl.textContent = description;
// }


fetchRandomRecipe();

// buttonEl.addEventListener('click', handleButtonEvent);