// document.querySelector("#nav-btn").addEventListener("click", () => {
//     document.querySelector("#nav-btn").classList.toggle("show");
// });

// var opened= false;
// document.querySelector("#nav-btn").addEventListener("click", () => {
//     if(opened == false) {
//         document.querySelector("#main-header").classList.add("show");
//         document.querySelector("#main-header").classList.remove("hide");
//         opened= true;
//     } else {
//         document.querySelector("#main-header").classList.remove("show");
//         document.querySelector("#main-header").classList.add("hide");
//         opened= false;
//     }
// });

document.querySelector("#nav-btn").addEventListener("click", () => {

    document.querySelector("#main-header").classList.toggle("show");

});