//fetching data from external public api to get blogs 
document.addEventListener('DOMContentLoaded', function(){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c4a43b0837msh33b8b514d584608p1f6f25jsn120c96a6c374',
            'X-RapidAPI-Host': 'blog-articles.p.rapidapi.com'
        }
    };
    
    fetch('https://inshorts.deta.dev/news?category=health', options)
        .then(response => response.json())
        .then(blogs => {
            console.log(blogs)
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
        .catch(err => console.error(err));

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
                    myName[indexs].innerHTML = name.firstname +" " + " "+name.lastname;   
            })
        })
        .catch(err => console.error(err))
})

//open url onclick



//navigation
window.onscroll = function(){addClass()};
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

//function on submit of from upadate value
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



//display paragraph  after clicking on read more 
function updateParagraph(){
    let buttonClick = document.getElementById('abtButton')
    buttonClick.addEventListener('click', function(){
        let paragraph = document.getElementById('hide')
        paragraph.style.display = "block"
    })
}
updateParagraph()








































