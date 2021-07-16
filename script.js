
var browser = (function() {
    var test = function(regexp) {return regexp.test(window.navigator.userAgent)}
    switch (true) {
        case test(/edg/i): return "Microsoft Edge";
        case test(/trident/i): return "Microsoft Internet Explorer";
        case test(/firefox|fxios/i): return "Mozilla Firefox";
        case test(/opr\//i): return "Opera";
        case test(/ucbrowser/i): return "UC Browser";
        case test(/samsungbrowser/i): return "Samsung Browser";
        case test(/chrome|chromium|crios/i): return "Google Chrome";
        case test(/safari/i): return "Apple Safari";
        default: return "Other";
    }
})();
if(browser=="Microsoft Internet Explorer"){


    alert("This website does not support Internet Explorer.Click below to open in Micorsoft Edge")
   
  var url=document.location.href;
  var inex='<div class="internetex"> <div class="innerexp"> <div class="headingexp"> <h1>This browser is no longer supported</h1> </div> <div class="detailparadiv"> <p id="expdetailpara" class="exppara">Please, Switch to supported browsers i.e, chrome,firefox,Micorsoft Edge,opera,safari,vivaldi or any modern browser except Internet Explorer. <span>Internet Explorer does not support modern web pages, even bootstrap 5 & Twitter does not support it.</span> Now, Micorsoft are replacing it with modern Micorsoft Edge brower. Micorsoft Edge are pre-Installed in window 10. <span id="expopeninpara" class="exppara">If you want to open this website in Micorsoft Edge then click on below Button</span></p></div><div class="buttonexpdiv">  <a id="expbutton" href="microsoft-edge:'+url+'"> Open Edge </a></div> </div></div>';
  var body=document.getElementById("mainbodybody");
  body.innerHTML=inex;
  document.write("The Internet Explorer browser is not supported by this site. We suggest you visit the site using supported browsers." + "<A HREF='microsoft-edge:"+url+"'>Click here to launch the site in the MS Edge browser</A>");

}
else{
 console.log(browser);




}
















"use strict";







var navul = document.querySelector('#navul');
var leftul = document.querySelectorAll('.leftul');
var toggle = document.querySelector('#togglebar');
var toggleicon = document.querySelector('#toggleicon');

function disableScrolling() {
  var x = window.scrollX;
  var y = window.scrollY;

  window.onscroll = function () {
    window.scrollTo(x, y);
  };
}

function enableScrolling() {
  window.onscroll = function () {};
}

leftul.forEach(function (item) {
  item.addEventListener("click", function () {
    navul.style.left = "-200%";
    toggleicon.classList.toggle('fa-bars');
    toggleicon.classList.toggle('fa-times');
    enableScrolling();
  });
});

function bartoclose() {
  toggleicon.classList.toggle('fa-bars');
  toggleicon.classList.toggle('fa-times');

  if (!(navul.style.left === "0%")) {
    disableScrolling();
    navul.style.left = "0%";
  } else {
    navul.style.left = "-200%";
    enableScrolling();
  }
}

toggle.addEventListener("click", bartoclose);

