// Countries datas
const map= {
	"Travel": {
		"Link": "travel.html",
        "Images": [
            "media/202001/82383424_510590322922874_3968208657414513111_n_17863184872630761.jpg"
		]
	},
	"Trails": {
		"Link": "trails.html",
        "Images": [
            "img/Mt_Baker.jpg"
		]
	},
	"Food": {
		"Link": "food.html",
        "Images": [
            "media/food/ShrimpWithCurry/image001.jpg"
		]
	},
	"Ancestry": {
		"Link": "ancestry/main.html",
        "Images": [
            "ancestry/ThumbNail2.jpg"
		]
	},
	"Video": {
		"Link": "video.html",
        "Images": [
            "img/videoSpillianShort.jpg"
		]
	},
	"Research": {
		"Link": "research.html",
        "Images": [
            "img/machineLearning.jpeg"
		]
	},
};

var path = window.location.pathname;
var page = path.split("/").pop();

// Get the URL param
const queryString = window.location.search;
const urlParams   = new URLSearchParams(queryString);    
const datas = Object.entries(map);

const levelBValue  = urlParams.get('levelB');    
const levelAValue  = urlParams.get('levelA');  

var headerOutput = "Work in Progress"
let output  = '';
var countriesDisplayed = new Set()
for(let key of datas) 
{
	var Name = key[0];
	var Link = key[1]["Link"];
	var Imag = key[1]["Images"][0];

	output += `
	<a href="${Link}" class="item">
		<div class="img-container">
			<img src="${Imag}" alt="">
		</div>
		<span>${Name}</span>
	</a>
	`;
}

// Create element
const div     = document.createElement("div");
div.className = 'generic-items';
div.innerHTML = output;
document.querySelector(".generic-leaf-container").insertAdjacentElement("beforeend", div);
document.querySelector(".generic-header").innerHTML = headerOutput;

