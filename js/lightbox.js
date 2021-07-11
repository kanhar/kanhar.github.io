const lightbox = document.createElement("div");
lightbox.id    = "lightbox";

document.body.appendChild(lightbox);

const images= document.querySelectorAll("img");

images.forEach(image => {
    image.addEventListener("click", () => {
        lightbox.classList.add("active");

        const img = document.createElement("img");
        img.src   = image.src;

        while(lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild);
        }

        lightbox.appendChild(img);
    });
});

lightbox.addEventListener("click", (e) => {
    if(e.target !== e.currentTarget) 
        return // current target is the target we're currently on, in this case, it's lightbox, because we added event on lightbox

    lightbox.classList.remove("active");
});