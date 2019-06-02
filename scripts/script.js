
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
