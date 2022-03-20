async function weather(){
    let cityname=document.getElementById("test");
    let url='https://api.openweathermap.org/data/2.5/weather?q='+cityname.value+'&appid=3a3af3afa1da8cb02c4673beeeb7d99e';
    const resp=await fetch(url);
    let data=await resp.json();
    console.log(data);
    let{main :{temp,temp_min,temp_max}}=data;
    console.log("temp : "+temp);
    console.log("temp_min : "+temp_min);
    console.log("temp_max : "+temp_max);
}