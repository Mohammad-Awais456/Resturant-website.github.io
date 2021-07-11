let navul=document.querySelector('#navul');
let leftul=document.querySelectorAll('.leftul');
let toggle=document.querySelector('#togglebar');
let toggleicon=document.querySelector('#toggleicon');

function disableScrolling(){
    var x=window.scrollX;
    var y=window.scrollY;
    window.onscroll=function(){window.scrollTo(x, y);};
}

function enableScrolling(){
    window.onscroll=function(){};
}


    
    leftul.forEach((item)=>{
        item.addEventListener("click",()=>{
            navul.style.left="-200%"

            toggleicon.classList.toggle('fa-bars');
            toggleicon.classList.toggle('fa-times');
            enableScrolling();
        });
    });





function bartoclose(){

    toggleicon.classList.toggle('fa-bars');
    toggleicon.classList.toggle('fa-times');
    if(!(navul.style.left==="0%"))
    {
    disableScrolling();
    navul.style.left="0%"
}
else{
    navul.style.left="-200%"
    enableScrolling();
}

}
toggle.addEventListener("click",bartoclose);







