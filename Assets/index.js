
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
        })
        .catch(err => console.error(err));
    
})




















































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


