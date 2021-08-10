$(function(){

    $(".p-hamburger").click(function() {
        $(this).toggleClass("active");
        
    });
    
})

 
    
    

let pHamburger = document.querySelector(".p-hamburger");
let navPrimary = document.querySelector(".nav__primary");

pHamburger.addEventListener("click",function() {
    if(navPrimary.classList.contains("active")) {
        this.setAttribute("aria-expanded","false");
        this.setAttribute("aria-label","menu");
        navPrimary.classList.remove("active");
    }
    else {
        navPrimary.classList.add("active");
        this.setAttribute("aria-label","close menu");
        this.setAttribute("aria-expanded","true");
    }


})



$(document).ready(function(){
    
    $('.nav__primary__list').hover(function(){
        // アニメーションの多重実行防止
        $('.nav__secondry:not(:animated)', this).slideDown('fast');
    }, function(){
        $('.nav__secondry', this).slideUp('fast');
    });

})

$(window).resize(function(){ // ウィンドウがリサイズされたら
    
    $(".p-hamburger").removeClass("active");   // ×印をハンバーガーに戻す
    $(".nav__primary").removeClass("active");  // menuを消す

});

