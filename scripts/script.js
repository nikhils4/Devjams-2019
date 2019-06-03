
// for color change of the nav-bar headings on click
let colors = ['red', 'blue', 'green', 'orange'];
let navId = ['contact-us', 'documents', 'hackathon', 'timeline', 'speakers', 'about-us', 'sponsors']
function colorChange(event, color) {
    navId.forEach( element => {
        if (element == event.target.id){
            document.getElementById(element).style.color = colors[color];
        } else {
            document.getElementById(element).style.color = "gainsboro";
        }
    })
}

document.getElementById("about-us").addEventListener("click", (e) => {
    document.getElementById("diag").style.animation = "diagonal 0.3s linear";
    document.getElementById("diag").style.animationFillMode = "forwards";
    // Add none for all other 
    document.getElementById("home-top").style.display = "none";
    document.getElementById("about-us-top").style.display = "block"
    document.getElementById("about-us-content").classList.add("animated" , "fadeInUp", "faster");
    document.getElementById("about-us-img").classList.add("animated" ,"fadeInRight", "faster");

})
document.getElementById("hackathon").addEventListener("click", (e) => {
    document.getElementById("diag").style.animation = "diagonal 0.5s linear";
    document.getElementById("diag").style.animationFillMode = "forwards";
})
document.getElementById("timeline").addEventListener("click", (e) => {
    document.getElementById("diag").style.animation = "diagonal 0.5s linear";
    document.getElementById("diag").style.animationFillMode = "forwards";
})
document.getElementById("speakers").addEventListener("click", (e) => {
    document.getElementById("diag").style.animation = "diagonal 0.5s linear";
    document.getElementById("diag").style.animationFillMode = "forwards";
})
document.getElementById("sponsors").addEventListener("click", (e) => {
    document.getElementById("diag").style.animation = "diagonal 0.5s linear";
    document.getElementById("diag").style.animationFillMode = "forwards";
})
document.getElementById("contact-us").addEventListener("click", (e) => {
    document.getElementById("diag").style.animation = "diagonal 0.5s linear";
    document.getElementById("diag").style.animationFillMode = "forwards";
})
document.getElementById("documents").addEventListener("click", (e) => {
    document.getElementById("diag").style.animation = "diagonal 0.5s linear";
    document.getElementById("diag").style.animationFillMode = "forwards";
})