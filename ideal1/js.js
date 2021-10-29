const next=document.querySelector(".next");
const prev=document.querySelector(".prev");
const slideList=document.querySelectorAll(".place-slider-list");
const slide=document.querySelector(".place-slider");
const slideWidth=slideList[0].offsetWidth;
var index=0;
let positonX=0;
next.addEventListener('click',()=>{nextprev(1)});
prev.addEventListener('click',()=>{nextprev(-1)});
function nextprev(tmp) 
{
    if(tmp==1)        
    {   
        if(index>=slideList.length-1) 
        {
            index=slideList.length-1;
            return;
        };       
        positonX=positonX-slideWidth;
        slide.style=`transform:translateX(${positonX}px)`;
        index++;                      
    }            
    else if(tmp==-1)  
    {
        if(index<=0) 
        {
            index=0;
            return;
        } ;
        positonX=positonX+slideWidth;
        slide.style=`transform:translateX(${positonX}px)`;  
        index--;
    }   
}

//buttoncicrle
const btn=document.querySelectorAll(".btn");
const move=document.querySelector("#move");
//lay do dai GAP
const width=document.querySelector(".place-btn-circle");
const style=getComputedStyle(width)
const gap=width.gap;
console.log(gap);
for(let i=0;i<btn.length;i++)
{
    
    btn[i].addEventListener('click',()=>{
                                            slide.style=`transform:translateX(${-slideWidth * i}px)`
                                            move.style=`transform:translateX(30px)`
                                        }
                            ); 
       
}
console.log(style.gap);
// for(let i=0;i<btn.length;i++)
// {
//     if(btn[i].checked)
//     slide.style=`transform:translateX(${-slideWidth * i}px)`
// }