export const declareEvents = (doApi) => {
    let search_btn = document.querySelector("#search_btn");
    let id_input = document.querySelector("#id_input");
    let nav_btn = document.querySelectorAll('.a_class');

    id_input.addEventListener("keydown",(e) => {
      if(e.key == "Enter"){   
        doApi(id_input.value);
      }
    })
  
    search_btn.addEventListener("click", () => {   
      doApi(id_input.value);   
    })
   
    nav_btn.forEach(item =>{
        item.addEventListener("click", () => {
            doApi(item.innerHTML);
            
        })
    })
    
    
  }



