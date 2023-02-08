
//menu
const $=document.querySelector.bind(document)
const $$=document.querySelectorAll.bind(document)
const itemMenus=$$('.menu>li')
const line=$('.line')
line.style.width=$('.active').offsetWidth+`px`
line.style.left=$('.active').offsetLeft+`px`
itemMenus.forEach((item)=>{
    item.onclick=function()
    {
        $('.active').classList.remove('active')
        $('.check').classList.remove('check')
        this.classList.add('active')
        this.classList.add('check')
        
        line.style.width=this.offsetWidth+`px`
        line.style.left=this.offsetLeft+`px`
        
    
    }
})
itemMenus.forEach((item)=>{
    item.onmouseover=function()
    {   
        $('.active').classList.remove('active')
        this.classList.add('active')
        line.style.width= this.offsetWidth+`px`
        line.style.left= this.offsetLeft+`px`
    }
    item.onmouseout=function()
    {   

        this.classList.remove('active')
        line.style.width= $('.check').offsetWidth+`px`
        line.style.left= $('.check').offsetLeft+`px`
        $('.check').classList.add('active')
    }
})
//select nut dots
const dots=$$('.btn');
const next=$('.next');
const prev=$('.prev');
const itemList=$('.place-list');
const itemPlaces=$$('.place-list-item');
let itemWidth=itemPlaces[0].offsetWidth;
let gap=itemPlaces[1].offsetLeft-itemPlaces[0].offsetWidth;
let width=gap+itemWidth;
let index=0;
let positonX=0;
//nút button circle
dots.forEach((item)=>{
    item.onclick=function (){ 
        const indexDot=item.getAttribute('value')
        positonX=-indexDot*width;
        index=indexDot;
        itemList.style=`transform: translateX(${positonX}px);`
        $('.btn-active').classList.remove('btn-active')
        this.classList.add('btn-active') 
    }
})
// nút next prev
next.onclick=() => nextprev(1);
prev.onclick=() => nextprev(-1);
function nextprev(tmp)
{
    if(tmp===1)
    {
        if(index>=itemPlaces.length-2)
        {
            index=itemPlaces.length-2
            return
        }
        positonX=positonX-width
        itemList.style=`transform: translateX(${positonX}px);`
        ++index
    }
    else if(tmp===-1)
    {
        if(index<=0)
        {
            index=0
            return
        }
        positonX=positonX+width
        itemList.style=`transform: translateX(${positonX}px);`    
        --index
    }
    $('.btn-active').classList.remove('btn-active')
    dots[index].classList.add('btn-active') 
}

// menu ẩn hiện
$('.fa-bars').addEventListener('click',()=>{
    if($('.menu').className!=="menu open")
        $('.menu').classList.add('open')
else $('.menu').classList.remove('open')
})







