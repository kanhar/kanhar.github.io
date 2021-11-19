const hashMap= {
	"Dining Table": {
		"Desc": "A table Ralph and I made in a woodshop in South Portland, Maine during the pandemic.",
		"Cuisine": "Dining Table",
        "Images": [
            "media/carpentry/table/image001.jpg",
            "media/carpentry/table/image002.jpg",
			"media/carpentry/table/image003.jpg",
			"media/carpentry/table/image004.jpg",
            "media/carpentry/table/image005.jpg",
            "media/carpentry/table/image006.jpg",
			"media/carpentry/table/image007.jpg",
			"media/carpentry/table/image008.jpg",
            "media/carpentry/table/image009.jpg",
            "media/carpentry/table/image010.jpg",
			"media/carpentry/table/image011.jpg",
			"media/carpentry/table/image012.jpg",
            "media/carpentry/table/image013.jpg",
            "media/carpentry/table/image014.jpg",
			"media/carpentry/table/image015.jpg"
		]
	}
};

// Create Header Links
var parentPage  = "carpentry.html";
const urlParams     = new URLSearchParams(window.location.search);    
const levelAValue   = urlParams.get('levelA');  
const levelBValue   = urlParams.get('levelB');    

var level0Href  = '<a href="' + parentPage + '">Carpentry</a>';
var levelAHref  = '<a href="' + parentPage + '?levelA=' + levelAValue + '">' + levelAValue +'</a>';
var levelBHref  = '<a href="' + parentPage + '?levelA=' + levelAValue + '&levelB='+levelBValue+'">'+levelBValue+'</a>';
var headerOutput;
if (levelAValue != null && levelBValue != null)
{
    headerOutput = level0Href + " --> " + levelAHref + " --> " + levelBHref;
}
else if(levelAValue != null)
{
    headerOutput = level0Href + " --> " + levelAHref;
}
else
{
    headerOutput = level0Href;
}

if (!levelAValue || !levelBValue)  
{
    let output  = '';
    var countriesDisplayed = new Set()
    for(let iRow of Object.entries(hashMap)) 
    {
        var Name = iRow[0];
        var Desc = iRow[1]["Desc"];
        var Imag = iRow[1]["Images"][0];
        var Cuisine = iRow[1]["Cuisine"];

        // Level 1. Show all Countries
        if (levelAValue == null)      
        {
            //Display a country on Main page only once
            if(countriesDisplayed.has(Cuisine))
                continue;
            else
                countriesDisplayed.add(Cuisine);

            output += `
            <a href="${parentPage}?levelA=${Cuisine}" class="item">
                <div class="img-container">
                    <img src="${Imag}" alt="">
                </div>
                <span>${Cuisine}</span>
            </a>
            `;
        }
        // Level 2: Show only a specific Country
        else if (levelAValue == Cuisine)
		{
			output += `
			<a href="${parentPage}?levelA=${Cuisine}&levelB=${Name}" class="item">
				<div class="img-container">
					<img src="${Imag}" alt="">
				</div>
				<span>${Name}</span>
			</a>
			`;
		}
    }

    // Create element
    const div     = document.createElement("div");
    div.className = 'generic-items';
    div.innerHTML = output;
    document.querySelector("#parent .generic-leaf-container").insertAdjacentElement("beforeend", div);
}
else
{
    var found = Object.entries(hashMap).find(y => {
        return y[0] == levelBValue;
    });

    var Name = found[0];
    var Desc = found[1]["Desc"];
    var Images = found[1]["Images"];

    let output =  '';
    for (let Imag of Images) 
    {
        if (Imag.includes('.mp4'))
        {
            output += `   
            <a href="${Imag}" class='grid-item' data-fancybox="gallery">
                <video width="550" height="450" controls>
                    <source src="${Imag}#t=3" type="video/mp4">
                </video>
            </a>
            `;
        }
        else
        {
            output += `
            <a href="${Imag}" class='grid-item' data-fancybox="gallery">
                <img src="${Imag}">
            </a>
            `;
        }
    }

    // Create and Inject new Div
    const parentDiv 	= document.createElement("div");
    parentDiv.className = 'grid';
    parentDiv.innerHTML = `
        <div class="grid-col grid-col--1"></div>
        <div class="grid-col grid-col--2"></div>
        ${output}
    `;
	
	document.querySelector(".generic-description").innerHTML = Desc;
	document.querySelector("#generic-container .generic-leaf-container").insertAdjacentElement("beforeend", parentDiv);
}

document.querySelector(".generic-header").innerHTML = headerOutput;