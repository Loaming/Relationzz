window.onload = function(){
    let open = false;
  document.querySelector("#mobile_menu").addEventListener("click",function(){
   if(open){
      document.querySelector(".mobile_nav").classList.add("nav_close");
      document.querySelector(".mobile_nav").classList.remove("nav_open");
    }else{
      document.querySelector(".mobile_nav").classList.add("nav_open");
      document.querySelector(".mobile_nav").classList.remove("nav_close");
    }
    open=!open;
  })}
  
  