//fetching data from external public api to get blogs, and health news
document.addEventListener('DOMContentLoaded', function(){
   
    fetch('https://inshorts.deta.dev/news?category=health')
        .then(response => response.json())
        .then(blogs => {
            blogs.data.forEach((blog, index) => {
              const {content, title,readMoreUrl,imageUrl} = blog
              let paragraph = document.querySelectorAll('.para')
              paragraph[index].innerHTML = blog.content
              let titles  = document.querySelectorAll('.title')
              titles[index].innerHTML = blog.title;
              let image = document.querySelectorAll('.blogimg img')
              image[index].src = blog.imageUrl;
       
            });
        })
    

    //Api to fetch User Details 
    const optionData = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'e746e9526fmshfd7b8fb75fdde2cp19cfb4jsn5e4f37b754cc',
            'X-RapidAPI-Host': 'dawn2k-random-german-profiles-and-names-generator-v1.p.rapidapi.com'
        }
    };
    fetch('https://dawn2k-random-german-profiles-and-names-generator-v1.p.rapidapi.com/?format=json&gender=b&cc=all&email=gmail.com%2Cyahoo.com&pwlen=12&ip=a&phone=l%2Ct%2Co&seed=helloworld&count=10&maxage=40&minage=30&uuid=1&color=1&lic=1&images=1', optionData)
        .then(response => response.json())
        .then(names =>
            { 
                names.forEach((name, indexs) => {
                    const {firstname, lastname} = name
                    let myName = document.querySelectorAll('label')
                    myName[indexs].innerHTML = name.firstname +" " + " "+ name.lastname;   
            })
        })
        getUserName()
})




//navigation script
window.onscroll = function(){
    addClass()
};
let navSticky = document.querySelector("nav")

//set navbar offset position
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

//function on submit of from update value
function updateEmail(){
    let input = document.getElementById('email')
    let form = document.getElementById('data')
    form.addEventListener('submit', function(e){
        e.preventDefault();
        let card = document.getElementById('change')
        card.innerHTML = "Thank You For subcribing" + " " + " " + input.value
        form.reset();
    })
}
updateEmail()



//display about  paragraph  after clicking on read more 
function updateParagraph(){
    let buttonClick = document.getElementById('abtButton')
    buttonClick.addEventListener('click', function(){
        let paragraph = document.getElementById('hide')
        paragraph.style.display = "block"
    })
}
updateParagraph()

///diplay contact form
function displayContactForm(){
   
    let readMore = document.querySelectorAll('#readmore')
    readMore.forEach((read) => {
        read.addEventListener('click', function(){
            let forms = document.querySelectorAll('.theraForm')
            forms.forEach((form) => {
                form.style.display = "block"
             
            })
            
        })
        
    })
    

}
displayContactForm()

//fill therapist contact form function
function fillEmail(){
    let input = document.getElementById('email')
    let form = document.querySelector('.theraForm')
    form.addEventListener('submit', function(e){
        e.preventDefault();
        let card = document.getElementById('changes')
        card.innerHTML = "Thank You For contacting me" + " " + " " + input.value +" " +"A response has been sent to your email"
        form.reset();
        form.style.display = "none"
    })
}
fillEmail()


//Streching Goals fetching data from DB-json sever
function getUserName(){
    fetch("http://localhost:3000/Users_Details")
    .then((res) => res.json())
    .then((names) =>{
        let name = document.querySelector('#Names')
        name.innerHTML = names[0].FirstName
    })

}



























