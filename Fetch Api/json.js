//now we want to fetch data from json format if we dont't have api link
let url="json.json";  //here we have given path of json file

let movies= document.getElementsByClassName("movies")[0];
fetch(url).then((response)=>{
    return response.json();  //here we have taken the response from url fetch will give promise object usme ham respnse se type of data batana padega here it is json
}).then((result)=>{ //result me data aaya hai here result is an array
   console.log(result); 

   //now we want data to in our website so we will array b/c result contains lots of data
   result.forEach((element)=>{
       const{Title,Year,Runtime,Poster}=element; //yaha hame jo data json se chahiye vo define karna padega 

       //hame data jo html me card class banayi ha usme leke jana hai so we will make card class here
       let card=document.createElement("div");
       card.classList.add("card");
       //yaha ham card ke innerhtml me card ka content dal rahe 
       card.innerHTML=`<img src="${Poster}" alt=""> //here we in place of img src we have given json wala data

       <div class="content">
           <h3>${Title}</h3>
           <div class="year_time">
               <h6>${Year}</h6>
               <h6>${Runtime}</h6>
               <h6>second</h6>
           </div>`

           //now we want this above data in movies container
           movies.appendChild(card);
   })
})