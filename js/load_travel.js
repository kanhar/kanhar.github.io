// travel.html page datas
const travel_html = {
    "japan"     : ["img/travel_7.jpg"],
    "usa"       : ["img/travel_1.jpg"],
    "australia" : ["img/travel_2.jpg"],
    "nepal"     : ["img/travel_3.jpg"],
    "canada"    : ["img/travel_4.jpg"],
    "korea"     : ["img/travel_5.jpg"],
    "france"    : ["img/travel_6.jpg"],
    "uk"        : ["img/travel_8.jpg"]
};


/////////////////////////////////////
// For images in the travel.html file
function fetch_travel_html_images() { 
    var path = window.location.pathname;
    var page = path.split("/").pop();

    if(page === 'travel.html') {
        // Create element
        const div     = document.createElement("div");
        div.className = 'travel-items';

        let output  = '';
        const datas = Object.entries(travel_html);

        datas.forEach(d=> {
            // console.log(d[0]);
            output += `
                <a href="single_travel.html?travel_city=${d[0]}" class="item">
                    <div class="img-container">
                        <img src="${d[1][0]}" alt="">
                    </div>
                    <span>${d[0]}</span>
                </a>
            `;
        });

        div.innerHTML= output;

        document.querySelector(".travel-container").insertAdjacentElement("beforeend", div);

        // console.log(output);
    }
}
fetch_travel_html_images();