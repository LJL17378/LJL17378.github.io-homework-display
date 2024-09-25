function myfunction1(){
    let num;


    if(n>=0)
    {
    num=Number(prompt("输入你要取的数字"));
    if(num<l||num>r)
        {
            alert('填错了,不在范围,罚你重新填')
        }else{
            n=n-num;
            document.getElementById("text").innerHTML='现在的宝石数目还有';
            document.getElementById("demo").innerHTML=n;
        }
    if(n==0) 
        {
            document.getElementById("result").innerHTML=`你赢了`;

        }
    if(n<0)
    alert('超出范围,行不行啊?你输了');

    }
}
function myfunction2(){
        let num= Math.round(Math.random()*(r-l)+1)+l;
        if(n>=num)
        alert("电脑取了"+num+"个宝石");
        else{
        alert("电脑取了"+num+"个宝石,犯规了,你赢了");
        }
        n=n-num;
        document.getElementById("demo").innerHTML=n;
        if(n===0)
        document.getElementById("result").innerHTML=`电脑赢了`;
        
}
function myfunction3(){
    let num;


    if(n>=0)
    {
    num=Number(prompt("输入2号玩家要取的数字"));
    if(num<l||num>r)
        {
            alert('填错了,不在范围,罚你重新填')
        }else{
            n=n-num;
            document.getElementById("text").innerHTML='现在的宝石数目还有';
            document.getElementById("demo").innerHTML=n;
        }
    if(n==0) 
        {
            document.getElementById("result").innerHTML=`2号玩家赢了`;

        }

    }
}
function myfunction4(){
    if(n%(r+l)==0){
    alert('你必赢的我怎么玩啊!!!!!!你要不知道怎么赢我只能笑你了');
    document.getElementById("text").innerHTML='现在的宝石数目还有';
    document.getElementById("demo").innerHTML=n;
    }
    if(n%(r+l)!=0)
    {
    num=n%(r+l);
    n=n-num;
    alert("电脑取了"+num+"个宝石,并说到\"你已经输了,哈哈哈\"")
    document.getElementById("text").innerHTML='现在的宝石数目还有';
    document.getElementById("demo").innerHTML=n;
    }
    if(n==0){  document.getElementById("result").innerHTML=`聪明的电脑赢了`;
    alert("你看我说什么你还不信.")
    }
}