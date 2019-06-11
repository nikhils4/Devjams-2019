
// for color change of the nav-bar headings on click
let colors = ['#FE524D', '#4E96FC', '#34AD6D', '#FFC334'];
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

document.getElementById("back-btn").addEventListener("click", (e) => {
    document.getElementById("previous-events-top").style.display = "none";
    document.getElementById("home-top").style.display = "block";
    document.getElementById("home-top").classList.add("animated" ,"fadeInUp", "faster");
    document.getElementById("img-top").style.display = "block";
} )

document.getElementsByClassName("nav-box-right-heading")[0].addEventListener("click", (e) => {
    mainPageId.forEach( element => {
        document.getElementById(element).style.display = "none"
    })
    document.getElementById("img-top").style.display = "none";
    document.getElementById("previous-events-top").style.display = "block";
    document.getElementById("previous-events-top").classList.add("animated" ,"fadeInRight", "faster");
} )


function navAnimate() {
    document.getElementById("nav-top").style.animation = "sm-navbar-animate 0.4s linear";
    document.getElementById("nav-top").style.animationFillMode = "forwards";
    document.getElementById("sm-about-us").style.animation = "sm-aboutUs-animate 0.4s linear";
    document.getElementById("sm-about-us").style.animationFillMode = "forwards";
    document.getElementById("sm-diag").style.animation = "sm-diagonal-logo 0.4s linear";
    document.getElementById("sm-diag").style.animationFillMode = "forwards";
    document.getElementById("sm-about-us").style.paddingLeft = "200px";
}

let smnavId = ["sm-about-us", "sm-hackathon", "sm-downloads", "sm-speakers", "sm-sponsors", "sm-prev-events", "sm-timeline", "sm-contact-us"]
let smMainPageId = [ "sm-about-us-top", "sm-hackathon-top", "sm-timeline-top", "sm-speakers-top", "sm-sponsors-top", "sm-contact-us-top", "sm-downloads-top", "sm-prev-events"]


function smColorUpdate(e, int) {
    smnavId.forEach(element => {
        if (element == e.target.id) {
            document.getElementById(element).style.color = colors[int];
        } else {
            document.getElementById(element).style.color  = "gainsboro";
        }
    })
    smMainPageId.forEach( ele => {
        console.log(e.target.id + "-top")
        if(ele == e.target.id + "-top"){
            console.log("Dikhega")
            document.getElementById(ele).style.display = "block";
            document.getElementById(ele).classList.add("animated" , "fadeInUp", "faster");
        } else {
            console.log("Hide")
            document.getElementById(ele).style.display = "none"
        }
    })
}