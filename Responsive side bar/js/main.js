let btn=document.querySelector("#btn");
let sidebar=document.querySelector(".sidebar");
let searchBtn=document.querySelector(".bx-search");
let body = document.querySelector("body");
let modeSwitch =document.querySelector(".toggle-switch");
let modeText = document.querySelector(".mode-text");


btn.onclick=function(){
    sidebar.classList.toggle("active");
    menuBtnChange();
}
searchBtn.onclick=function(){
    sidebar.classList.toggle("active");
    menuBtnChange();
}
function menuBtnChange() {
    if(sidebar.classList.contains("active")){
      btn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
    }else {
      btn.classList.replace("bx-menu-alt-right","bx-menu");//replacing the iocns class
    }
   }
   modeSwitch.addEventListener("click" , () =>{
    body.classList.toggle("dark");
    
    if(body.classList.contains("dark")){
        modeText.innerText = "Light mode";
    }else{
        modeText.innerText = "Dark mode";
        
    }
});