function func1(){
    var l = parseInt(document.getElementById("min").value);
    var r = parseInt(document.getElementById("max").value);
    var n = parseInt(document.getElementById("amount").value);
    if ((0<l)&&(l<=r)&&(r<=n))
    {alert("设置完成！作为先手出招吧！")
    document.getElementById("left").innerHTML=n;
    document.getElementById("hope").value=n;console.log(document.getElementById("hope").value);
    document.getElementById("computer").innerHTML="";document.getElementById("player").innerHTML="";
    }
    else 
    {
        alert("请输入正确的数值")
        document.getElementById("min").value="";
        document.getElementById("max").value="";
        document.getElementById("amount").value="";
    }
}


function func2()
{
    var l = parseInt(document.getElementById("min").value);
    var r = parseInt(document.getElementById("max").value);
    var n = parseInt(document.getElementById("amount").value);
    if ((0<l)&&(l<=r)&&(r<=n))
    {alert("设置完成！作为后手接招吧！")
    document.getElementById("left").innerHTML=n;
    document.getElementById("hope").value=n;
    document.getElementById("computer").innerHTML="";document.getElementById("player").innerHTML="";
    }
    else 
    {
        alert("请输入正确的数值")
        document.getElementById("min").value="";
        document.getElementById("max").value="";
        document.getElementById("amount").value="";
    }

    var m = parseInt(document.getElementById("hope").value);    console.log(m);
    var y = parseInt(document.getElementById("computer").value);
    if(m%(r+l)!=0 && m>r)
        {   if(l<=m%(r+l) && m%(r+l)<=r)
            {   y=m%(r+l);document.getElementById("computer").innerHTML=y;
                m=m-y;
                setTimeout(document.getElementById("left").innerHTML=m, 3000 )
                document.getElementById("hope").value=m;
            }
            else
            {   y=l;
                document.getElementById("computer").innerHTML=y;
                m=m-y;document.getElementById("left").innerHTML=m;document.getElementById("hope").value=m;
            }
        }
        else if(m%(r+l)==0&&m>r)
        {
            y=l;
            document.getElementById("computer").innerHTML=y;
            m=m-y;document.getElementById("left").innerHTML=m;document.getElementById("hope").value=m;
        }
        else if(m>0&&m<=r)
        {   y=m;m=m-y;
            document.getElementById("computer").innerHTML=y;
            document.getElementById("left").innerHTML=m;document.getElementById("hope").value=m;
            setTimeout("alert('你输了！')", 1000 );document.getElementById("computer").value="";document.getElementById("player").value="";
        }
    let x = parseInt(document.getElementById("player").value);
    if (l<=x&&x<=r)
    {   
        m=m-x;console.log(m);
        document.getElementById("left").innerHTML=m;
        if(m<=0){alert("你赢了！");document.getElementById("computer").value="";document.getElementById("player").value="";}
    }
    else 
    {
        alert("输入正确的数值")
        document.getElementById("player").value="";
    }
}






function func3(){
    var l = parseInt(document.getElementById("min").value);
    var r = parseInt(document.getElementById("max").value);
    var m = parseInt(document.getElementById("hope").value);    console.log(m);
    var y = parseInt(document.getElementById("computer").value);
    let x = parseInt(document.getElementById("player").value);
    if (l<=x&&x<=r)
    {   
        m=m-x;console.log(m);
        document.getElementById("left").innerHTML=m;
        if(m<=0){alert("你赢了！");document.getElementById("computer").value="";document.getElementById("player").value="";}
        if(m%(r+l)!=0 && m>r)
        {   if(l<=m%(r+l) && m%(r+l)<=r)
            {   y=m%(r+l);document.getElementById("computer").innerHTML=y;
                m=m-y;
                setTimeout(document.getElementById("left").innerHTML=m, 3000 )
                document.getElementById("hope").value=m;}
            else
            {   y=l;
                document.getElementById("computer").innerHTML=y;
                m=m-y;document.getElementById("left").innerHTML=m;document.getElementById("hope").value=m;
            }
        }
        else if(m%(r+l)==0&&m>r)
        {
            y=l;
            document.getElementById("computer").innerHTML=y;
            m=m-y;document.getElementById("left").innerHTML=m;document.getElementById("hope").value=m;
        }
        else if(m>0&&m<=r)
        {   y=m;m=m-y;
            document.getElementById("computer").innerHTML=y;
            document.getElementById("left").innerHTML=m;document.getElementById("hope").value=m;
            setTimeout("alert('你输了！')", 1000 );document.getElementById("computer").value="";document.getElementById("player").value="";
        }
    }
    else 
    {
        alert("输入正确的数值")
        document.getElementById("player").value="";
    }

}