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
//
//menu ẩn hiện
$('.fa-bars').addEventListener('click',()=>{
    if($('.menu').className!=="menu open")
        $('.menu').classList.add('open')
else $('.menu').classList.remove('open')
})