const countries= {
    "Computing": {
        "subtitle": "A collection of computing research interests",
        "description": [
        ],
        "frame_url": "https://www.google.com/maps/d/u/0/embed?mid=1cWYP-5QNcAqpVChK3a1g8MYLUWIZYUZ-",
        "frame_image": "img/matrix.jpg"
    },
    "Machine Learning": {
        "subtitle": "A collection of Machine Learning research interests",
        "description": [
        ],
        "frame_url": "https://www.google.com/maps/d/u/0/embed?mid=1wywyCo5zH1iQN9KoxbxynKQLmm6WgAV6",
        "frame_image": "img/machineLearning.jpeg"
    },
    "Tea": {
        "subtitle": "A collection of tea research interests",
        "description": [
        ],
        "frame_url": [
            "https://img1.wsimg.com/blobby/go/daf47534-09c5-48e5-a358-420f36953360/Tea%20Trails%20Dec%202018.pdf"
        ],
        "frame_image": "img/teaGarden.jpg"
    }       
};

var parentPage 	   = "research.html";
const urlParams   = new URLSearchParams(window.location.search);
const videoName   = urlParams.get('trail');

if(videoName == null || videoName == '') 
{
    const datas = Object.entries(countries);
    let output  = '';
    datas.forEach(d=> {
        output += `
            <a href="${parentPage}?trail=${d[0]}" class="item">
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
    const div = document.createElement("div");
    div.className   = 'video-details-container';
    for(let articles of found[1].frame_url) 
    {
            console.log(articles);
            div.innerHTML += `
        ${output}
        <div style="margin: 3.2rem auto;">
            <iframe width="300" height="300" src="${articles}" name="page"  ></iframe>
        </section>
        </div>
    `;
    }


    document.querySelector(".video-details-container").insertAdjacentElement("beforeend", div);
}