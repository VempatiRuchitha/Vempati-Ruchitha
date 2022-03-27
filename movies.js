async function display(){
    const url="https://imdb-api.com/API/AdvancedSearch/k_02bgjnwd?title_type=short&user_rating=7.9,10&genres=comedy&countries=in&languages=te"
    const response=await fetch(url);
    var data=await response.json();
    return Promise.resolve(data);
}
display().then(function(data)
{
    console.log(data)
    let{results}=data;
    table=document.getElementById("table");
   results.forEach(element=>{
        let{title,imDbRating}=element;
        table.innerHTML+='<tr><td>'+title+'</td><td>'+imDbRating+'</td></tr>';
    })
},
function()
{
    console.log("url not found");

})