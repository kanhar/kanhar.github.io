// Countries datas
const countries= {
    "japan": [
        "img/travel_8.jpg", // assume the first one as the main image
        "img/travel_1.jpg",
        "img/travel_2.jpg",
        "img/travel_3.jpg",
        "img/travel_4.jpg",
        "img/travel_5.jpg",
        "img/travel_6.jpg",
        "img/travel_7.jpg",
    ],
    "usa": [
        "img/video_1.jpg", // main image
        "img/video_2.jpg",
        "img/video_3.jpg",
        "img/video_4.jpg",
        "img/video_5.jpg",
        "img/video_6.jpg",
        "img/video_7.jpg",
        "img/video_8.jpg",
    ],
    "australia": [
        "img/video_3.jpg", // main image
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
        "img/video_5.jpg", // main image
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
        "img/travel_3.jpg", // main image
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
        "img/travel_1.jpg", // main image
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
        "img/video_4.jpg", // main image
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
        "img/video_7.jpg", // main image
        "img/video_8.jpg",
        "img/travel_1.jpg",
        "img/travel_2.jpg",
        "img/travel_3.jpg",
        "img/travel_4.jpg",
    ]
};

var path = window.location.pathname;
var page = path.split("/").pop();

// Get the URL param
const queryString = window.location.search;
const urlParams   = new URLSearchParams(queryString);    
const travelCity  = urlParams.get('travel_city');    

// Render the image for the travel.html page.
if(page == 'travel.html') {
    let output  = '';
    const datas = Object.entries(countries);

    datas.forEach(d=> {
        output += `
            <a href="travelPhotos.html?travel_city=${d[0]}" class="item">
                <div class="img-container">
                    <img src="${d[1][0]}" alt="">
                </div>
                <span>${d[0]}</span>
            </a>
        `;
    });

    // Create element
    const div     = document.createElement("div");
    div.className = 'travel-items';
    div.innerHTML = output;
    document.querySelector(".travel-container").insertAdjacentElement("beforeend", div);
}
else
{
    var x = Object.entries(countries);       
    var all_images= countries[travelCity];

    // Show the country title at the top.
    document.querySelector(".single-travel-title").innerHTML= travelCity;
    document.querySelector(".single-travel-title").style.textTransform= 'capitalize';

    let output=  '';
    all_images.forEach((image, index) => {
        output += `
            <a href="${image}" class='grid-item' data-fancybox="gallery">
                <img src="${image}" alt="img_${index}">
            </a>
        `;
    });

    // Create and Inject new Div
    const parentDiv = document.createElement("div");
    parentDiv.className   = 'grid';
    parentDiv.innerHTML= `
        <div class="grid-col grid-col--1"></div>
        <div class="grid-col grid-col--2"></div>
        ${output}
    `;

    document.querySelector(".travel-container").insertAdjacentElement("beforeend", parentDiv);

}