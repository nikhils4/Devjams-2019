
// for color change of the nav-bar headings on click
let colors = ['#FE524D', '#4E96FC', '#34AD6D', '#FFC334', '#000000'];
let navId = ['contact-us', 'downloads', 'main', 'hackathon', 'timeline', 'speakers', 'about-us', 'sponsors']
let mainPageId = ["home-top", "about-us-top", 'main-top',  "hackathon-top", "timeline-top", "speakers-top", "sponsors-top", "contact-us-top", "downloads-top"]
function colorAnimate(event, color, blocknAnimate){
    document.getElementById("diag").style.animation = "diagonal 0.3s linear";
    document.getElementById("diag").style.animationFillMode = "forwards";
    navId.forEach( element => {
        if (element == event.target.classList[1]){
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
            console.log(element)
            document.getElementById(element).style.display = "block"
        }
    })
    document.getElementById(blocknAnimate.slice(0,-4) + "-content").classList.add("animated" , "fadeInUp", "faster");
    document.getElementById(blocknAnimate.slice(0,-4) + "-img").classList.add("animated" ,"fadeInRight", "faster");
}

// document.getElementById("back-btn").addEventListener("click", (e) => {
//     // document.getElementById("previous-events-top").style.display = "none";
//     document.getElementById("home-top").style.display = "block";
//     document.getElementById("home-top").classList.add("animated" ,"fadeInUp", "faster");
//     document.getElementById("img-top").style.display = "block";
// } )

// document.getElementsByClassName("nav-box-right-heading")[0].addEventListener("click", (e) => {
//     mainPageId.forEach( element => {
//         document.getElementById(element).style.display = "none"
//     })
//     document.getElementById("img-top").style.display = "none";
//     // document.getElementById("previous-events-top").style.display = "block";
//     // document.getElementById("previous-events-top").classList.add("animated" ,"fadeInRight", "faster");
// } )






function navAnimate() {
    document.getElementById("nav-top").style.animation = "sm-navbar-animate 0.4s linear";
    document.getElementById("nav-top").style.animationFillMode = "forwards";
    document.getElementById("sm-main").style.animation = "sm-aboutUs-animate 0.4s linear";
    document.getElementById("sm-main").style.animationFillMode = "forwards";
    document.getElementById("sm-diag").style.animation = "sm-diagonal-logo 0.4s linear";
    document.getElementById("sm-diag").style.animationFillMode = "forwards";
    document.getElementById("sm-main").style.paddingLeft = "150px";
}

// function navAnimateGeneral() {
//     document.getElementById("nav-top").style.animation = "sm-navbar-animate 0.4s linear";
//     document.getElementById("nav-top").style.animationFillMode = "forwards";
//     document.getElementById("sm-about-us").style.animation = "sm-aboutUs-animate 0.4s linear";
//     document.getElementById("sm-about-us").style.animationFillMode = "forwards";
//     document.getElementById("sm-diag").style.animation = "sm-diagonal-logo 0.4s linear";
//     document.getElementById("sm-diag").style.animationFillMode = "forwards";
//     document.getElementById("sm-about-us").style.paddingLeft = "150px";
// }

let smnavId = ["sm-about-us", "sm-hackathon", "sm-downloads", "sm-speakers", "sm-sponsors",  "sm-timeline", "sm-contact-us", "sm-main"]
// "sm-prev-events",
let smMainPageId = [ "sm-about-us-top", "sm-hackathon-top", "sm-timeline-top", "sm-speakers-top", "sm-sponsors-top", "sm-contact-us-top", "sm-downloads-top", "sm-main-top"]

// "sm-prev-events-top"
function smColorUpdate(e, int) {
    smnavId.forEach(element => {
        if (element == e.target.id) {
            document.getElementById(element).style.color = colors[int];
        } else {
            document.getElementById(element).style.color  = "gainsboro";
        }
    })
    smMainPageId.forEach( ele => {
        if(ele == e.target.id + "-top"){
            document.getElementById(ele).style.display = "block";
            document.getElementById(ele).classList.add("animated" , "fadeInUp", "faster");
        } else {
            document.getElementById(ele).style.display = "none"
        }
    })
}