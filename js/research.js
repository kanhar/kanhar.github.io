const hashMap= {
    "Golden Ratio": {
        "subtitle": "A collection of computing research interests",
        "url": "pdf/GoldenRatio.pdf",
        "image": "img/GoldenRatio.jpg"
    },
    "Machine Learning": {
        "subtitle": "Pit stops en route to Glacier Peak Resort",
        "url": "https://www.google.com/maps/d/u/0/embed?mid=1wywyCo5zH1iQN9KoxbxynKQLmm6WgAV6",
        "image": "img/Mt_Baker.jpg"
    },

};

var parentPage 	  = "research.html";
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
    div.className = 'video-items';
    div.innerHTML = output;
    document.querySelector(".video-container").insertAdjacentElement("beforeend", div);   
}    
else
{
    var found = Object.entries(hashMap).find(y => {
        return y[0] == levelAValue;
    });
        
    document.querySelector(".video-title").innerHTML                = found[0];
    document.querySelector(".video-title").style.textTransform      = 'capitalize';
    document.querySelector(".video-subtitle").innerHTML             = found[1].subtitle;
    document.querySelector(".video-subtitle").style.textTransform   = 'capitalize';

    const ul = document.createElement("ul");
    ul.className   = 'video-text-description';
    ul.innerHTML= `
        <div style="width: 95%; margin: 3.2rem auto;">
            <iframe width="100%" height="5000" src="${found[1].url}" width="800" height="640"></iframe>
        </section>
        </div>
    `;
    document.querySelector(".video-details-container").insertAdjacentElement("beforeend", ul);
}