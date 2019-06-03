
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
    if (blocknAnimate == "about-us-top"){
        document.getElementById("about-us-content").classList.add("animated" , "fadeInUp", "faster");
        document.getElementById("about-us-img").classList.add("animated" ,"fadeInRight", "faster");
    }
    if (blocknAnimate == "hackathon-top"){
        document.getElementById("hackathon-content").classList.add("animated" , "fadeInUp", "faster");
        document.getElementById("hackathon-img").classList.add("animated" ,"fadeInRight", "faster");
    }    
    if (blocknAnimate == "timeline-top"){
        document.getElementById("timeline-content").classList.add("animated" , "fadeInUp", "faster");
        document.getElementById("timeline-img").classList.add("animated" ,"fadeInRight", "faster");
    }    
    if (blocknAnimate == "speakers-top"){
        document.getElementById("speakers-content").classList.add("animated" , "fadeInUp", "faster");
        document.getElementById("speakers-img").classList.add("animated" ,"fadeInRight", "faster");
    }    
    if (blocknAnimate == "sponsors-top"){
        document.getElementById("sponsors-content").classList.add("animated" , "fadeInUp", "faster");
        document.getElementById("sponsors-img").classList.add("animated" ,"fadeInRight", "faster");
    }
    if (blocknAnimate == "contact-us-top"){
        document.getElementById("contact-us-content").classList.add("animated" , "fadeInUp", "faster");
        document.getElementById("contact-us-img").classList.add("animated" ,"fadeInRight", "faster");
    }
    if (blocknAnimate == "downloads-top"){
        document.getElementById("downloads-content").classList.add("animated" , "fadeInUp", "faster");
        document.getElementById("downloads-img").classList.add("animated" ,"fadeInRight", "faster");
    }
}
