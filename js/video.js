const countries= {
    "Spillian 10.19.2019": {
        "subtitle": "Kanhar Munshi & Carolyn Dawn Campo, Fleischmann, NY",
        "description": [
        ],
        "video_url": "https://www.youtube.com/watch?v=YvGxuIvkIo4",
        "video_image": "img/videoSpillianShort.jpg"
    },
    "Calcutta 02.19.2020": {
        "subtitle": "Kanhar Munshi & Carolyn Dawn Campo, Calcutta, India",
        "description": [
        ],
        "video_url": "https://www.youtube.com/embed/OljW9di0_TY",
        "video_image": "img/videoCalcuttaPreview.jpg"
    },    
};

// Create Header Links
var parentPage  = "video.html";
const urlParams     = new URLSearchParams(window.location.search);    
const levelAValue   = urlParams.get('levelA');  
const levelBValue   = urlParams.get('levelB');    

var level0Href  = '<a href="' + parentPage + '">Video</a>';
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

if (!levelAValue) 
{
    let output  = '';
    const datas = Object.entries(countries);

    datas.forEach(d=> {
        output += `
            <a href="video.html?levelA=${d[0]}" class="item">
                <img src="${d[1].video_image}" alt="">
                <span>${d[0]}</span>
            </a>
        `;
    });

    const div     = document.createElement("div");
    div.className = 'generic-items';
    div.innerHTML= output;

    document.querySelector(".generic-leaf-container").insertAdjacentElement("beforeend", div);
}
else
{   
    var x= Object.entries(countries);
    var found= x.find(y => {
        return y[0] == levelAValue;
    });

    document.querySelector(".generic-description").innerHTML            = found[1].subtitle;
    document.querySelector(".generic-description").style.textTransform  = 'capitalize';

    const ul = document.createElement("ul");

    ul.innerHTML= `
        <div style="width: 95%; margin: 3.2rem auto;">
            <iframe width="100%" height="550" src="${found[1].video_url}" id="video-player" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    `;

    document.querySelector("#generic-container .generic-leaf-container").insertAdjacentElement("afterend", ul);
}

document.querySelector(".generic-header").innerHTML= headerOutput;
