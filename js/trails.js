const hashMap= {
    "Blueberry Hiking, WA": {
        "subtitle": "See https://www.wta.org/go-outside/seasonal-hikes/fall-destinations/berry-picking-hikes",
        "url": "https://www.google.com/maps/d/u/0/embed?mid=1cWYP-5QNcAqpVChK3a1g8MYLUWIZYUZ-",
        "image": "img/BlueBerry.jpg"
    },
    "Glacier Peak Resort, WA": {
        "subtitle": "Pit stops en route to Glacier Peak Resort",
        "url": "https://www.google.com/maps/d/u/0/embed?mid=1wywyCo5zH1iQN9KoxbxynKQLmm6WgAV6",
        "image": "img/Mt_Baker.jpg"
    }            
};

var parentPage 	  = "trails.html";
const urlParams   = new URLSearchParams(window.location.search);
const levelAValue = urlParams.get('levelA');  

if (!levelAValue) 
{
    let output  = '';
    Object.entries(hashMap).forEach(d=> {
        output += `
            <a href="${parentPage}?levelA=${d[0]}" class="item">
                <img src="${d[1].image}" alt="">
                <span>${d[0]}</span>
            </a>
        `;
    });

    const div     = document.createElement("div");
    div.className = 'generic-items';
    div.innerHTML = output;
    document.querySelector(".generic-leaf-container").insertAdjacentElement("beforeend", div);   
}    
else
{
    var found = Object.entries(hashMap).find(y => {
        return y[0] == levelAValue;
    });
        
    const ul = document.createElement("ul");
    ul.className   = 'video-text-description';
    ul.innerHTML= `
        <div style="width: 95%; margin: 3.2rem auto;">
            <iframe width="100%" height="550" src="${found[1].url}" width="800" height="640"></iframe>
        </section>
        </div>
    `;

    document.querySelector(".generic-header").innerHTML= found[0];
    document.querySelector(".generic-description").innerHTML = found[1].subtitle;
    document.querySelector(".generic-header").style.textTransform = 'capitalize'	
	document.querySelector("#generic-container .generic-leaf-container").insertAdjacentElement("beforeend", ul);
}