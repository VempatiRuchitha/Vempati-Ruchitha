async function movies(){
    const  url="https://imdb-api.com/en/API/Top250Movies/k_vyu0lavv"
    const resp = await fetch(url);
    var data = await resp.json();
    console.log(data);
    
        let{ items}=data;
        items.forEach(ele=>{
            let{title,imDbRating}=ele;
            console.log("movie name is  "+title+"\nIMDB rating value  "+imDbRating);
        });
       
    
}