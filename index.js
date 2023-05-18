let navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = () =>{
    navbar.classList.toggle("active");
}

let themeBtn = document.querySelector(".theme-btn");

themeBtn.onclick = () =>{
    themeBtn.classList.toggle("sun");

    if(themeBtn.classList.contains("sun")){
        document.body.classList.add("active");
    }else{
        document.body.classList.remove("active");
    }
};
 


var acc = document.getElementsByClassName("accordion");
var i;
var len = acc.length;
for(i =0; i < len; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if(panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + 'rem';
        }
    })
}
