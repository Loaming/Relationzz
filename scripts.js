  window.addEventListener('DOMContentLoaded', () => {
    // Вызовыв функций после загрузки DOM
    let submit = document.querySelector(".pk1"),
        btn = document.querySelector(".btn_intro"),
        menu = document.querySelector(".mobile_btn"),
        nav = document.querySelector(".mobile_nav"),
        head = document.querySelector(".header"),
        logo = document.querySelector(".header_logo"),
        icon = document.querySelector(".menu-icon");
        open= false;

        menu.onclick = function(){
          icon.classList.toggle('menu-icon-active');
          icon.classList.toggle('normalize');
            if(icon.classList.contains('menu-icon-active')){
              document.body.style.overflow='hidden';
            }else{
              document.body.style.overflow='auto';
            }
      }

        menu.addEventListener("click",function(){
          if(open){
            nav.classList.add("nav_close");
            nav.classList.remove("nav_open");
            head.classList.remove("head-full");
            logo.classList.remove("logo-off");
          }else{
            head.classList.add("head-full");
            nav.classList.add("nav_open");
            nav.classList.remove("nav_close");
            logo.classList.add("logo-off");
          }
          open=!open;
        });
  })
  