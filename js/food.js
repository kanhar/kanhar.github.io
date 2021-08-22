const hashMap= {
	"Kashmiri Rohan Josh": {
		"Desc": "<p>The Rogan Josh - The Revenge of the Black Cardamom</p><p>An aromatic, rendition of the Kashmiri Rogan Josh cannot be made possible without the presence of a crushing dose of Black Cardamom. Grown in the foothills of the Himalayas &ndash; the brown cardamom is dried over an open flame to give it a characteristic smoky profile. It brings out the essence of the pepper flavor in a way only a paprikash loving Hungarian would fully appreciate &ndash; but that the Kashmiris used to put the Rogan Josh on a pedestal.</p><p>Recipes call for it to be cooked whole, crushed, the outer layer taken out &ndash; but the irreverent Kashmiri could care less &ndash; the incorrect way to use is it, is it use it in all its splendor &ndash; crack open the shell, extract the seeds, crush them &ndash; and then put both the crushed seeds and the shell into whatever it is you are cooking. This pseudo sacred act is not one for your regular omelette, after all the black cardamom could care less about a mundane chicken tikka masala, or a lentil stew &ndash; it wants to influence the dish no Kashmiri lives without. The Rogan Josh.</p><p>The Rosh may intimidate some &ndash; but with the correct use of black Cardamon, some aniseed powder, ginger powder, a few cloves &ndash; and some red chilli powder- any chef worth his cardamom could get a slice of Kashmir into their homes.</p><p>The way one would proceed irreverently would be to:</p><p>-&nbsp; Get about 2 pounds of Meat &ndash; whatever kind that has a lot of fat and bones. And if you want to be particularly irreverent get a particularly fatty cut of a boneless leg of pork offensive to most.</p><p>-&nbsp; Salt it.</p><p>-&nbsp; Light fry it with an oil &ndash; medium heat. Medium heat is key. If your first time &ndash; go even lower.</p><p>-&nbsp; Crush the black cardamoms and cloves &ndash; about 4 each of both&ndash; and throw it in &ndash; shell and seeds and all.</p><p>-&nbsp; With a pair of tongs, flip the meat so that it cooks uniformly</p><p>-&nbsp; Water from the meat will intimidate the novice chef as it floods the pan&ndash; hang in there &ndash; let it evaporate.</p><p>-&nbsp; When it does, the original oil will be visible - throw in 3 tea spoons of Red Chilli powder.</p><p>-&nbsp; Stir, stir and stir quick &ndash; you have 15 seconds to do so before you douse the pan with a cup of water. And stir again.</p><p>-&nbsp; The chilli and oil at this point are now emulsified.</p><p>-&nbsp; Let the water come to a simmer.</p><p>-&nbsp; Add a teaspoon each of Aniseed powder, and ginger powder &ndash; and if you want add more of each &ndash; but just remember the black cardamom don&rsquo;t like being over-powered, it might just get angry! &nbsp;</p><p>-&nbsp; Pressure cook the daylights of it &ndash; most recipes say 10m, but the irreverent Kashmiri says 20 is better</p><p>-&nbsp; When de-pressurized, the cooking is over, but the process has just begun - refrigerate. Yes, refrigerate!</p><p>-&nbsp; Most recipes would entice you to chow down ASAP&ndash; but only a true connoisseur of the Rogan Josh would know that it must be eaten the next day. Unless you want to join the ranks of Reverent Kashmiri&rsquo;s &hellip; wait!</p><p>-&nbsp; The next day host a lavish dinner party, cook white rice with a brick of butter in it, seriously don&rsquo;t hold back.</p><p>-&nbsp; Re-heat the Rogan in a regular sauce pan on a low flame &ndash; serve as is, and talk up the smokey flavor of the black cardamon!</p><p>-&nbsp; Pair with a Campari spritz, two parts prosecco, two part&rsquo;s soda, one part Campari. Throw in a wedge of orange.</p>",
		"Cuisine": "Kashmiri",
        "Images": [
			"media/food/RoganJosh/image005.jpg",
            "media/food/RoganJosh/image001.jpg",
            "media/food/RoganJosh/image002.jpg",
			"media/food/RoganJosh/image003.jpg",
			"media/food/RoganJosh/image004.jpg",
		]
	},
	"Kashmiri Kalia": {
		"Desc": "...",
		"Cuisine": "Kashmiri",
        "Images": [
			"media/food/Kalia/image009.jpg",
            "media/food/Kalia/image003.jpg",

		]
	},
	"Keral Shrimp with Curry Leaf": {
		"Desc": "...",
		"Cuisine": "South Indian",
        "Images": [
			"media/food/ShrimpWithCurry/image001.jpg",
		]
	},
	"Persian Lentil Stew": {
		"Desc": "...",
		"Cuisine": "Persian",
        "Images": [
			"media/food/PersianLentilStew/image001.jpg",
		]
	},
	"Butter Chicken": {
		"Desc": "...",
		"Cuisine": "North Indian",
        "Images": [
			"media/food/ButterChicken/image001.jpg",
		]
	},
	"Aijaco": {
		"Desc": "...",
		"Cuisine": "Colombian",
        "Images": [
			"media/food/Aijaco/image001.jpg",
		]
	},
	"Poached Fish with Vinegar": {
		"Desc": "...",
		"Cuisine": "Colombian",
        "Images": [
			"media/food/Aijaco/image001.jpg",
		]
	},
	"Chicken Paprikash": {
		"Desc": "<a href='https://www.tripadvisor.com/Restaurant_Review-g274887-d758267-Reviews-Kadar_Etkezde-Budapest_Central_Hungary.html'>Kadar_Etkezde</a>",
		"Cuisine": "Hungarian",
        "Images": [
			"media/food/ChickenPaprikash/ChickenPaprikash.jpg",
		]
	},
	"Bácskai Pork Risotto": {
		"Desc": "<a href='https://www.tripadvisor.com/Restaurant_Review-g274887-d758267-Reviews-Kadar_Etkezde-Budapest_Central_Hungary.html'>Kadar_Etkezde</a>",
		"Cuisine": "Hungarian",
        "Images": [
			"media/food/BacksaiRisotto/pork-risotto-bacskai2.jpg",
		]
	}
};

const urlParams     = new URLSearchParams(window.location.search);    
const levelAValue   = urlParams.get('levelA');  
const levelBValue   = urlParams.get('levelB');    
const isChild       = urlParams.get('child');

var parentPage  = "food.html";
var level0Href  = '<a href="' + parentPage + '">World</a>';
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

// Render the image for the Parent Page
if(!isChild) {
    let output  = '';
    var countriesDisplayed = new Set()
    for(let key of Object.entries(hashMap)) 
    {
        var Name = key[0];
        var Desc = key[1]["Desc"];
        var Imag = key[1]["Images"][0];
        var Cuisine = key[1]["Cuisine"];

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
			<a href="${parentPage}?levelA=${Cuisine}&levelB=${Name}&child=true" class="item">
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
    div.className = 'travel-items';
    div.innerHTML = output;
    document.querySelector(".travel-container").insertAdjacentElement("beforeend", div);
    document.querySelector(".travel-header").innerHTML = headerOutput;
}
else
{
    let output=  '';
    for(let key of Object.entries(hashMap)) 
    {
        var Name = key[0];
        var Desc = key[1]["Desc"];
        var Images = key[1]["Images"];

        if (Name != levelBValue)
            continue;

        document.querySelector(".travel-description").innerHTML= Desc;
  
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
    }

    // Create and Inject new Div
    const parentDiv = document.createElement("div");
    parentDiv.className   = 'grid';
    parentDiv.innerHTML= `
        <div class="grid-col grid-col--1"></div>
        <div class="grid-col grid-col--2"></div>
        ${output}
    `;

    document.querySelector(".travel-container").insertAdjacentElement("beforeend", parentDiv);
    document.querySelector(".travel-header").innerHTML= headerOutput;
    document.querySelector(".travel-header").style.textTransform = 'capitalize';

}