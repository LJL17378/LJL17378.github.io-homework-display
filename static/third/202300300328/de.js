function fun(){
    let xuehao=document.getElementById("xuehao").value
    if(xuehao==""){alert("别心急呀，请先输入学号！");document.getElementById("xuehao").value="";}
    else{
    localStorage.setItem("xh", xuehao)
    alert("尊敬的"+xuehao+"，欢迎光临！")
    window.location.href='fleamarket.html'}

}