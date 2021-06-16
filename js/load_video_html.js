// video.html page datas
const video_html = {
    "the baby day out"                         : ["img/video_7.jpg"],
    "the comedian jems"                        : ["img/video_1.jpg"],
    "watch together"                           : ["img/video_2.jpg"],
    "watching the movie"                       : ["img/video_3.jpg"],
    "movie theatre"                            : ["img/video_4.jpg"],
    "presentation"                             : ["img/video_5.jpg"],
    "the old stories"                          : ["img/video_6.jpg"],
    "the confidence and clarity of the voice"  : ["img/video_8.jpg"]
};

/////////////////////////////////////
// For images in the travel.html file
function fetch_video_html_images() { 
    var path = window.location.pathname;
    var page = path.split("/").pop();

    if(page === 'video.html') {
        // Create element
        const div     = document.createElement("div");
        div.className = 'video-items';

        let output  = '';
        const datas = Object.entries(video_html);

        datas.forEach(d=> {
            // console.log(d[1][0]);
            output += `
                <a href="single_video.html?video_name=${d[0]}" class="item">
                    <img src="${d[1][0]}" alt="">
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