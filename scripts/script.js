
// for color change of the nav-bar headings on click
let colors = ['red', 'blue', 'green', 'orange'];
let navId = ['contact-us', 'downloads', 'hackathon', 'timeline', 'speakers', 'about-us', 'sponsors']
let mainPageId = ["home-top", "about-us-top", "hackathon-top", "timeline-top", "speakers-top", "sponsors-top", "contact-us-top", "downloads-top"]
function colorAnimate(event, color, blocknAnimate){
    document.getElementById("diag").style.animation = "diagonal 0.3s linear";
    document.getElementById("diag").style.animationFillMode = "forwards";
    navId.forEach( element => {
        console.log(event.target.classList)
        if (element == event.target.classList[1]){
            console.log(blocknAnimate.slice(0,-4));
            let ele = document.getElementsByClassName(element);
            for(let i=0; i< ele.length; i++){
                ele[i].style.color = colors[color];
            }
        } else {
            let ele = document.getElementsByClassName(element);
            for(let i=0; i< ele.length; i++){
                ele[i].style.color = "gainsboro";
            }       
        }
    })
    mainPageId.forEach( element => {
        if (blocknAnimate != element){
            document.getElementById(element).style.display = "none"
        } else {
            document.getElementById(element).style.display = "block"
        }
    })
    console.log(blocknAnimate.slice(0,-4));
    document.getElementById(blocknAnimate.slice(0,-4) + "-content").classList.add("animated" , "fadeInUp", "faster");
    document.getElementById(blocknAnimate.slice(0,-4) + "-img").classList.add("animated" ,"fadeInRight", "faster");
}
