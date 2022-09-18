import { doApi } from "./app.js";


export default class countriesClass{
    constructor(_parent,_item){
      this.parent = _parent;
      this.flag = _item.flags.svg;
      this.name = _item.name.common;
      this.population = _item.population.toLocaleString();
      this.region = _item.subregion;
      this.languages = Object.values(_item.languages);
      this.coin = Object.values(Object.values(_item.currencies)[0])[0];
      this.capital = _item.capital;
      this.borders = _item.borders == undefined ?"ocean":_item.borders;
      
    }

    render(){
       
        let div = document.createElement("div");
        div.className = "col-md-12 border p-5";
        document.querySelector(this.parent).append(div);
        div.innerHTML += `
        <img src="${this.flag}" alt="${this.name}" class="w-50 border float-end ms-2" >
        <h2>${this.name}</h2>
        <p>POP: ${this.population}</p>
        <p>region: ${this.region}</p>
        <p>Languages: ${this.languages}</p>
        <p>Coin: ${this.coin}</p>
        <p>Capital: ${this.capital}</p>
                <p class="borders"><strong>States with borders:</strong> </p>
                <div class="mapouter"><div class="gmap_canvas"><iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=${this.name}&t=&z=5&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://putlocker-is.org">putlocker</a><br><style>.mapouter{position:relative;text-align:right;height:500px;width:600px;}</style><a href="https://www.embedgooglemap.net"></a><style>.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:600px;}</style></div></div>     
        `
        let tvBtn2 = document.querySelector(".borders");
               if(this.borders!="ocean"){
                
                this.borders.forEach(item =>{
                    tvBtn2.innerHTML +=`<span class="b_class m-1">${item}</span>` 
                })

                  let nav_btn4 = document.querySelectorAll('.b_class');
                  nav_btn4.forEach(item =>{
                    item.addEventListener("click", () => {
                        doApi(item.innerHTML);
                        
                    })

                }) 
                } 
                 
                else{
                    tvBtn2.innerHTML +=`<span class="c_class m-1">${this.borders}</span>`
                }       
            }   
    }
  
    