const countries= {
    "japan": [
        "img/travel_1.jpg",
        "img/travel_2.jpg",
        "img/travel_3.jpg",
        "img/travel_4.jpg",
        "img/travel_5.jpg",
        "img/travel_6.jpg",
        "img/travel_7.jpg",
        "img/travel_8.jpg",
    ],
    "usa": [
        "img/video_1.jpg",
        "img/video_2.jpg",
        "img/video_3.jpg",
        "img/video_4.jpg",
        "img/video_5.jpg",
        "img/video_6.jpg",
        "img/video_7.jpg",
        "img/video_8.jpg",
    ],
    "australia": [
        "img/video_3.jpg",
        "img/video_4.jpg",
        "img/video_5.jpg",
        "img/video_6.jpg",
        "img/travel_2.jpg",
        "img/travel_3.jpg",
        "img/travel_4.jpg",
        "img/travel_5.jpg",
        "img/travel_6.jpg",
    ],
    "nepal": [
        "img/video_5.jpg",
        "img/video_6.jpg",
        "img/travel_2.jpg",
        "img/travel_3.jpg",
        "img/travel_4.jpg",
        "img/travel_5.jpg",
        "img/video_2.jpg",
        "img/video_3.jpg",
        "img/video_4.jpg",
    ],
    "canada": [
        "img/travel_3.jpg",
        "img/travel_4.jpg",
        "img/travel_5.jpg",
        "img/travel_6.jpg",
        "img/video_2.jpg",
        "img/video_3.jpg",
        "img/video_4.jpg",
        "img/video_1.jpg",
        "img/video_2.jpg",
        "img/video_3.jpg",
    ],
    "korea": [
        "img/travel_1.jpg",
        "img/travel_2.jpg",
        "img/travel_3.jpg",
        "img/travel_4.jpg",
        "img/travel_5.jpg",
        "img/travel_6.jpg",
        "img/video_1.jpg",
        "img/video_2.jpg",
        "img/video_3.jpg",
        "img/video_4.jpg",
        "img/video_5.jpg",
    ],
    "france": [
        "img/video_4.jpg",
        "img/video_5.jpg",
        "img/video_6.jpg",
        "img/video_7.jpg",
        "img/video_8.jpg",
        "img/travel_1.jpg",
        "img/travel_2.jpg",
        "img/travel_3.jpg",
        "img/travel_4.jpg",
        "img/travel_5.jpg"
    ],
    "uk": [
        "img/video_7.jpg",
        "img/video_8.jpg",
        "img/travel_1.jpg",
        "img/travel_2.jpg",
        "img/travel_3.jpg",
        "img/travel_4.jpg",
    ]
};

// Get the URL param
const queryString = window.location.search;
const urlParams   = new URLSearchParams(queryString);

const travelCity  = urlParams.get('travel_city');

// Check if the url param doesn't contain empty value.
if(travelCity != '') {

    // load images that is related to the specific country
    var x= Object.entries(countries);

    // Find the data related to the specific country
    var found= x.find(y => {
        return y[0] == travelCity;
    });
      
    var all_images= found[1];
    console.log(found);

    // Show the country title at the top.
    document.querySelector(".single-travel-title").innerHTML= found[0];
    document.querySelector(".single-travel-title").style.textTransform= 'capitalize';

    let output=  '';
    all_images.forEach(image => {
        // console.log(image);
        output += `
            <div class="grid-item">
                <img src="${image}" alt="img_1">
            </div>
        `;
    });

    // Create new element
    const parentDiv = document.createElement("div");
    parentDiv.className   = 'grid';
    parentDiv.innerHTML= `
        <div class="grid-col grid-col--1">
                    
        </div>
        <div class="grid-col grid-col--2">

        </div>
        ${output}
    `;

    document.querySelector(".single-video-container").insertAdjacentElement("beforeend", parentDiv);

    // render it to the screen
    // document.querySelector(".single-video-container .grid").insertAdjacentElement('beforeend', output);
    
    // console.log(output);
    console.log(parentDiv);

} else {
    window.location.href = 'video.html';
}

// console.log(travelCity);