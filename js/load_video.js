const countries= {
    "the baby day out": {
        "subtitle": "Some subtitle goes here",
        "description": [
            "desc_1- baby day out",
            "desc_2- baby day out",
            "desc_3- baby day out",
            "desc_4- baby day out",
        ],
        "video_url": "https://www.youtube.com/embed/PAhHEwrsamk"
    },
    "the comedian jems": {
        "subtitle": "Some subtitle goes here",
        "description": [
            "the comedian jems- 1: the comedian jems descriptions",
            "the comedian jems- 2: the comedian jems descriptions",
            "the comedian jems- 3: the comedian jems descriptions",
            "the comedian jems- 4: the comedian jems descriptions",
        ],
        "video_url": "https://www.youtube.com/embed/PAhHEwrsamk"
    },
    "watch together": {
        "subtitle": "Some subtitle goes here",
        "description": [
            "the comedian jems- 1: the comedian jems descriptions",
            "the comedian jems- 2: the comedian jems descriptions",
            "the comedian jems- 3: the comedian jems descriptions",
            "the comedian jems- 4: the comedian jems descriptions",
        ],
        "video_url": "https://www.youtube.com/embed/PAhHEwrsamk"
    },
    "watching the movie": {
        "subtitle": "Some subtitle goes here",
        "description": [
            "the comedian jems- 1: the comedian jems descriptions",
            "the comedian jems- 2: the comedian jems descriptions",
            "the comedian jems- 3: the comedian jems descriptions",
            "the comedian jems- 4: the comedian jems descriptions",
        ],
        "video_url": "https://www.youtube.com/embed/PAhHEwrsamk"
    },
    "movie theatre": {
        "subtitle": "Some subtitle goes here",
        "description": [
            "the comedian jems- 1: the comedian jems descriptions",
            "the comedian jems- 2: the comedian jems descriptions",
            "the comedian jems- 3: the comedian jems descriptions",
            "the comedian jems- 4: the comedian jems descriptions",
        ],
        "video_url": "https://www.youtube.com/embed/PAhHEwrsamk"
    },
    "presentation": {
        "subtitle": "Some subtitle goes here",
        "description": [
            "the comedian jems- 1: the comedian jems descriptions",
            "the comedian jems- 2: the comedian jems descriptions",
            "the comedian jems- 3: the comedian jems descriptions",
            "the comedian jems- 4: the comedian jems descriptions",
        ],
        "video_url": "https://www.youtube.com/embed/PAhHEwrsamk"
    },
    "the old stories": {
        "subtitle": "Some subtitle goes here",
        "description": [
            "the comedian jems- 1: the comedian jems descriptions",
            "the comedian jems- 2: the comedian jems descriptions",
            "the comedian jems- 3: the comedian jems descriptions",
            "the comedian jems- 4: the comedian jems descriptions",
        ],
        "video_url": "https://www.youtube.com/embed/PAhHEwrsamk"
    },
    "the confidence and clarity of the voice": {
        "subtitle": "Some subtitle goes here",
        "description": [
            "the comedian jems- 1: the comedian jems descriptions",
            "the comedian jems- 2: the comedian jems descriptions",
            "the comedian jems- 3: the comedian jems descriptions",
            "the comedian jems- 4: the comedian jems descriptions",
        ],
        "video_url": "https://www.youtube.com/embed/PAhHEwrsamk"
    },
};

// Get the URL param
const queryString = window.location.search;
const urlParams   = new URLSearchParams(queryString);

const videoName   = urlParams.get('video_name');
console.log(videoName);
// Check if the url param doesn't contain empty value.
if(videoName != '') {

    // load images that is related to the specific country
    var x= Object.entries(countries);

    // Find the data related to the specific country
    var found= x.find(y => {
        return y[0] == videoName;
    });
      
    var descriptions= found[1].description;

    // console.log(found);
    // console.log(found[1].subtitle);

    // Show the country title at the top.
    document.querySelector(".video-title").innerHTML            = found[0];
    document.querySelector(".video-title").style.textTransform  = 'capitalize';


    document.querySelector(".video-subtitle").innerHTML            = found[1].subtitle;
    document.querySelector(".video-subtitle").style.textTransform  = 'capitalize';

    // document.querySelector("#video-player").src= found[1].video_url;

    let output=  '';
    descriptions.forEach(description => {
        // console.log(image);
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
            <iframe width="100%" height="550" src="${found[1].video_url}" id="video-player" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    `;

    document.querySelector(".video-details-container").insertAdjacentElement("beforeend", ul);

    // console.log(ul);

} else {
    window.location.href = 'video.html';
}

// console.log(travelCity);