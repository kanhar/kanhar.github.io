const countries= {
    "Spillian 10.19.2019": {
        "subtitle": "Kanhar Munshi & Carolyn Dawn Campo, Fleischmann, NY",
        "description": [
        ],
        "video_url": "https://www.youtube.com/embed/i1FQYjsghAI",
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

const urlParams   = new URLSearchParams(window.location.search);
const videoName   = urlParams.get('video_name');

if(videoName == null || videoName == '') 
{   
    let output  = '';
    const datas = Object.entries(countries);

    datas.forEach(d=> {
        output += `
            <a href="video.html?video_name=${d[0]}" class="item">
                <img src="${d[1].video_image}" alt="">
                <span>${d[0]}</span>
            </a>
        `;
    });

    const div     = document.createElement("div");
    div.className = 'video-items';
    div.innerHTML= output;

    document.querySelector(".video-container").insertAdjacentElement("beforeend", div);
}
else
{   
    var x= Object.entries(countries);
    var found= x.find(y => {
        return y[0] == videoName;
    });
        
    var descriptions= found[1].description;

    document.querySelector(".video-title").innerHTML                = found[0];
    document.querySelector(".video-title").style.textTransform      = 'capitalize';
    document.querySelector(".video-subtitle").innerHTML             = found[1].subtitle;
    document.querySelector(".video-subtitle").style.textTransform   = 'capitalize';

    let output=  '';
    descriptions.forEach(description => {
        output += `
            <li>${description}</li>
        `;
    });

    const ul = document.createElement("ul");
    ul.className   = 'video-text-description';
    ul.innerHTML= `
        ${output}
        <div style="width: 95%; margin: 3.2rem auto;">
            <iframe width="100%" height="550" src="${found[1].video_url}" id="video-player" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    `;

    document.querySelector(".video-details-container").insertAdjacentElement("beforeend", ul);
}