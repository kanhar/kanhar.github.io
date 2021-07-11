$(document).ready(function () {
    document.querySelector("#nav-btn").addEventListener("click", () => {
        document.querySelector("#main-header").classList.toggle("show");
    });
    
    $.ajax({
        url: "header.inc.html", success: function (result) {
            $("#main-header").html(result);
        }
    });
  });