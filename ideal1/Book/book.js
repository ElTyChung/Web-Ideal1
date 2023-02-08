const $$=document.querySelectorAll.bind(document)
const $=document.querySelector.bind(document)
const message=$$('.message')

const radio=$$('input[type="radio"]')
const checkBox=$$('input[type="checkbox"]')
const select=$$('select')
let date=new Date()
let year=date.getFullYear()
let month=date.getMonth()+1
let day=date.getDate()+1
$('input[type="date"]').value=year + '-' + month + '-' + day

function Myf()
{
    let dateValue=$('input[type="date"]').value
    dateValue=dateValue.split("-")
    let myDate=new Date(dateValue[0],dateValue[1]-1,dateValue[2])
    
    if($("#name").value=="")
            message[0].innerText="Hãy điền tên của bạn"
    else if($("#name").value.length>50)
            message[0].innerText="Tên không dài quá 50 kí tự"
        else    message[0].innerText=""

    if($("#phone").value.length>50)
            message[1].innerText="Số điện thoại không dài quá 50 kí tự"
    else if($("#phone").value=="")
            message[1].innerText="Hãy điền số điện thoại của bạn"
        else    message[1].innerText=""

    if(radio[0].checked||radio[1].checked||radio[2].checked)
            message[2].innerText=""
        else
            message[2].innerText="Hãy chọn hãng hàng không"

    if(select[0].value==="")
            message[3].innerText="Hãy chọn địa điểm khởi hành"
        else    message[3].innerText=""

    if(myDate>date)
            message[4].innerText=""
        else   message[4].innerText="Hãy chọn lại thời gian"
    
    if($("#quantily").value=="")
            message[5].innerText="Hãy nhập số hành khách"
    else if($("#quantily").value<=0)
            message[5].innerText="Chỉ được phép nhập số dương"
        else    message[5].innerText=""
    if(select[1].value==="")
            message[6].innerText="Hãy chọn khung giờ"
        else    message[6].innerText=""


    // tính tổng tiền
    // let sum=$('#quantily').value*500000
    // checkBox.forEach(item=>{
    //     if(item.checked)
    //     sum+=parseInt(item.value)
    // })

    // $('#sum').innerText=sum+" VND"
    let a2=true
    message.forEach((item)=>{
        if(item.textContent==="")
        {}
        else 
        a2=false   
    })
    if(a2)  alert("Đặt vé thành công")
    
}
function myF()
{
    let sum=$('#quantily').value*500000
        checkBox.forEach(item=>{
            if(item.checked)
            sum+=parseInt(item.value)
        })
        $('#sum').innerText=sum+" VND"
}