//fetching data from external public api
document.addEventListener('DOMContentLoaded', function(){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'e746e9526fmshfd7b8fb75fdde2cp19cfb4jsn5e4f37b754cc',
            'X-RapidAPI-Host': 'mental-health-info-api.p.rapidapi.com'
        }
    };
    
    fetch('https://mental-health-info-api.p.rapidapi.com/news/thetimes', options)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            let paragraph1 = data[8]?.title;
            let paragraph2 = data[7]?.title;
            let paragraph3 = data[0]?.title;
            let p1 = document.getElementById("p1");
            let p2 = document.getElementById("p2");
            let p3 = document.getElementById("p3");
            p1.innerHTML = paragraph1;
            p2.innerHTML = paragraph2;
            p3.innerHTML = paragraph3;


        })
        .catch(err => console.error(err));
    
})


//navigation
window.onscroll = function(){addClass()};
let navSticky = document.querySelector("nav")

//navbar offset position
let position = navSticky.offsetTop;

//function to when we scroll add class sticky to navbar
function addClass(){
    if(window.pageYOffset>= position){
        
        navSticky.classList.add("sticky")
    }
    else{
        navSticky.classList.remove("sticky")
    }
   
 }



















































/*document.addEventListener('DOMContentLoaded', function(){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'e746e9526fmshfd7b8fb75fdde2cp19cfb4jsn5e4f37b754cc',
            'X-RapidAPI-Host': 'mental-health-info-api.p.rapidapi.com'
        }
    };
    
    fetch('https://mental-health-info-api.p.rapidapi.com/news/thetimes', options)
        .then(response => response.json())
        .then(data => {
            // console.log(data[0]?.title)
        let paragraph = data[0]?.title
        let addp = document.getElementById('tile blog')
        //addp.innerHTML = paragraph

        })
        .catch(err => console.error(err));

})
*/


