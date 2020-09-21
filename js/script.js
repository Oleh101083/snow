function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    
    testWebP(function (support) {
    
    if (support == true) {
    document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
    });

/*-----------------ibg-------------------*/
function ibg(){

    let ibg=document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
    if(ibg[i].querySelector('img')){
    ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
    }
    }
    }
    
    ibg();
/*-----------------ibg-------------------*/

/*---------------GUMBURGER-MENU-----------------*/
let headerContent = document.getElementById("header-content");    
let munuBtn = document.getElementById("menuBtn");
let sideNav = document.getElementById("sideNav");
sideNav.style.right = "-250px";
headerContent.style="opacity:1";
menuBtn.onclick = function(){
    if(sideNav.style.right == "-250px"){
        sideNav.style.right = "0";
        headerContent.style="opacity:0";
    }else{
        sideNav.style.right = "-250px";
        headerContent.style="opacity:1";
    }
}  