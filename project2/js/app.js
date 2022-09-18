import countriesClass from "./countriesClass.js";
import { declareEvents } from "./declareEvents.js";


function init(){
    doApi("iceland");
    declareEvents(doApi);
  }


 

  export const doApi = async(_country)  => {
    let country_ar = [];
let borders_ar = [];
let borders_ar2 = [];
    let  url = `https://restcountries.com/v3.1/name/${_country}`;
    let resp = await fetch(url);
    if(!resp.ok){
        alert("bad search try again")
    }
        
    
    let data = await resp.json();
    country_ar = data[0];
   
    if(country_ar.borders){  
        borders_ar = country_ar.borders;
        borders_ar.forEach( async(item)=> {
            let url = `https://restcountries.com/v3.1/alpha/${item}`;
            let resp = await fetch(url);
        let data = await resp.json();
        borders_ar2.push(data[0].name.common);
        country_ar.borders = borders_ar2;
        if(borders_ar.length==borders_ar2.length){
         createcountries(country_ar)
        }  
        
        }) 
    
      
    } 

    else{
        createcountries(country_ar)
    }
    

    }


    const createcountries = (_ar) => {
        
        document.querySelector("#id_parent").innerHTML = "";
        let country = new countriesClass("#id_parent", _ar);
        
        
        
        
        country.render();

   }


   
    

     





   
        init();
