const countries= {
    "Mt.Baker, WA": {
        "subtitle": "Lake Tye Triathlon",
        "description": [
        ],
        "frame_url": "https://www.google.com/maps/d/u/0/embed?mid=1cWYP-5QNcAqpVChK3a1g8MYLUWIZYUZ-",
        "frame_image": "img/Mt_Baker.jpg"
    }    
};

var path = window.location.pathname;
var page = path.split("/").pop();

if(page == 'trailsContent.html') {
    // Get the URL param
    const queryString = window.location.search;
    const urlParams   = new URLSearchParams(queryString);
    
    const videoName   = urlParams.get('video_name');
    // console.log(videoName);
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
    
        // document.querySelector("#video-player").src= found[1].frame_url;
    
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
                <iframe width="100%" height="550" src="${found[1].frame_url}" width="800" height="640"></iframe>
            </section>
            </div>
        `;
    
        document.querySelector(".video-details-container").insertAdjacentElement("beforeend", ul);
    
        // console.log(ul);
    
    } else {
        window.location.href = 'trails.html';
    }
    
    // console.log(travelCity);
}


if(page == 'trails.html') {
    // for images in video.html file
    function fetch_video_html_images() { 
        var path = window.location.pathname;
        var page = path.split("/").pop();

        if(page === 'trails.html') {
            // Create element
            const div     = document.createElement("div");
            div.className = 'video-items';

            let output  = '';
            const datas = Object.entries(countries);
            // console.log(datas);

            datas.forEach(d=> {
                // console.log(d[1][0]);
                output += `
                    <a href="trailsContent.html?video_name=${d[0]}" class="item">
                        <img src="${d[1].frame_image}" alt="">
                        <span>${d[0]}</span>
                    </a>
                `;
            });

            div.innerHTML= output;

            document.querySelector(".video-container").insertAdjacentElement("beforeend", div);

            // console.log(output);
        }
    }

    fetch_video_html_images();
}