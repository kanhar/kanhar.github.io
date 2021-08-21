const countries= {
    "Blueberry Hiking, WA": {
        "subtitle": "See https://www.wta.org/go-outside/seasonal-hikes/fall-destinations/berry-picking-hikes",
        "description": [
        ],
        "frame_url": "https://www.google.com/maps/d/u/0/embed?mid=1cWYP-5QNcAqpVChK3a1g8MYLUWIZYUZ-",
        "frame_image": "img/BlueBerry.jpg"
    },
    "Glacier Peak Resort, WA": {
        "subtitle": "Pit stops en route to Glacier Peak Resort",
        "description": [
        ],
        "frame_url": "https://www.google.com/maps/d/u/0/embed?mid=1wywyCo5zH1iQN9KoxbxynKQLmm6WgAV6",
        "frame_image": "img/Mt_Baker.jpg"
    }            
};

const urlParams   = new URLSearchParams(window.location.search);
const videoName   = urlParams.get('trail');

if(videoName == null || videoName == '') 
{
    const datas = Object.entries(countries);
    let output  = '';
    datas.forEach(d=> {
        output += `
            <a href="trails.html?trail=${d[0]}" class="item">
                <img src="${d[1].frame_image}" alt="">
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

    // Create new element
    const ul = document.createElement("ul");
    ul.className   = 'video-text-description';
    ul.innerHTML= `
        ${output}
        <div style="width: 95%; margin: 3.2rem auto;">
            <iframe width="100%" height="550" src="${found[1].frame_url}" width="800" height="640"></iframe>
        </section>
        </div>
    `;
    document.querySelector(".video-details-container").insertAdjacentElement("beforeend", ul);
}