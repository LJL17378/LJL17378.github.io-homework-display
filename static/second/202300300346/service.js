    var l = 1;
    var r = 5;
    var n = 30;
    var a = 0;
    var b = 0;
    var c = 0;
    var g = 0;
    var enemy = 0;
    function t1(){
        document.getElementsByClassName('box1-1')[0].style.display='none';
        document.getElementsByClassName('box1-2')[0].style.display='block';
    }
    // menu到settings
    function t2(){
        document.getElementsByClassName('head')[0].style.display='none';
        document.getElementsByClassName('box1-1')[0].style.display='none';
        document.getElementsByClassName('box1')[0].style.display='flex';
        document.getElementsByClassName('box6')[0].style.display='flex';
        alert('年轻的勇者雅琪哦，先和可爱的卡比兽练习一下吧')
        document.body.style.background='url("./image/use/background_by_shawn_frost-d49q54u.png")no-repeat center center';
        document.body.style.backgroundAttachment='fixed';
        document.body.style.backgroundSize='cover';
        document.body.style.display='block';
    }
    //menu to normal
    function t3(){
        document.getElementsByClassName('head')[0].style.display='none';
        document.getElementsByClassName('box1-1')[0].style.display='none';
        document.getElementsByClassName('box1-g')[0].style.display='flex';
        document.getElementsByClassName('box6-g')[0].style.display='flex';
        console.log(l,r,n);
        alert('勇者雅琪，又来挑战了吗')
        document.body.style.background='url("./image/use/background_by_shawn_frost-d49q54u.png")no-repeat center center';
        document.body.style.backgroundAttachment='fixed';
        document.body.style.backgroundSize='cover';
        document.body.style.display='block';
    }
    //menu to god
    function t4(){
        document.getElementsByClassName('box1-2')[0].style.display='none';
        document.getElementsByClassName('box1-1')[0].style.display='block';
    }
    //settings to menu 
    function t5(){
        document.getElementsByClassName('box1')[0].style.display='none';
        document.getElementsByClassName('box6')[0].style.display='none';
        document.getElementsByClassName('box12')[1].style.display='none';
        document.getElementsByClassName('box13')[1].style.display='none';
        document.getElementsByClassName('box8')[1].style.display='block';
        document.getElementsByClassName('box9')[1].style.display='block';
        document.getElementsByClassName('box1-1')[0].style.display='block';
        document.getElementsByClassName('head')[0].style.display='block';
        document.body.style.background='url("./image/use/cover1.jpg")no-repeat center center';
        document.body.style.backgroundAttachment='fixed';
        document.body.style.backgroundSize='cover';
        document.body.style.display='block';
    }
    //normal to menu
    function t6(){
        document.getElementsByClassName('box1-g')[0].style.display='none';
        document.getElementsByClassName('box6-g')[0].style.display='none';
        document.getElementsByClassName('box12')[0].style.display='none';
        document.getElementsByClassName('box13')[0].style.display='none';
        document.getElementsByClassName('box8')[0].style.display='block';
        document.getElementsByClassName('box9')[0].style.display='block';
        document.getElementsByClassName('box1-1')[0].style.display='block';
        document.getElementsByClassName('head')[0].style.display='block';
        document.body.style.background='url("./image/use/cover1.jpg")no-repeat center center';
        document.body.style.backgroundAttachment='fixed';
        document.body.style.backgroundSize='cover';
        document.body.style.display='block';
    }
    //god to menu
function apply(){
    l = parseInt(document.getElementsByClassName('box3-1')[0].value);
    r = parseInt(document.getElementsByClassName('box3-1')[1].value);
    n = parseInt(document.getElementsByClassName('box3-1')[2].value);
    if(l>=1&&r>=l&&n>=r&&!isNaN(l)&&!isNaN(r)&&!isNaN(n)){
        alert("设置完成")
        console.log(l,r,n)
    }
    else{
        l = 1;
        r = 5;
        n = 30;
        alert("请输入合法的数字")
    }
    console.log(l,r,n);
}
function normalPlayFirst(){
    a = l;
    b = r;
    c = n;
    document.getElementsByClassName('box8')[1].style.display='none';
    document.getElementsByClassName('box9')[1].style.display='none';
    document.getElementsByClassName('box12')[1].style.display='none';
    document.getElementsByClassName('box13')[1].style.display='none';
    document.getElementsByClassName('box10')[1].style.display='block';
    document.getElementsByClassName('box11')[1].style.display='block';
    document.getElementsByClassName('gemnum')[1].innerHTML=c;
    console.log(l,r,n)
}
function normalPlayLast(){
    a = l;
    b = r;
    c = n;
    document.getElementsByClassName('box8')[1].style.display='none';
    document.getElementsByClassName('box9')[1].style.display='none';
    document.getElementsByClassName('box12')[1].style.display='none';
    document.getElementsByClassName('box13')[1].style.display='none';
    document.getElementsByClassName('box10')[1].style.display='block';
    document.getElementsByClassName('box11')[1].style.display='block';
    document.getElementsByClassName('gemnum')[1].innerHTML=c;
    console.log(l,r,n)
    if (b<=c){
        enemy = Math.floor(Math.random() * (b - l + 1)) + l
        c-=enemy
        alert('卡比兽获取了'+enemy+'颗宝石')
        document.getElementsByClassName('gemnum')[1].innerHTML=c;
    }
    else{
        enemy=Math.floor(Math.random() * (c - l + 1)) + l
        c-=enemy
        alert('卡比兽获取了'+enemy+'颗宝石')
        document.getElementsByClassName('gemnum')[1].innerHTML=c;
    }
    if(c==0){
        alert('you lose')
        document.getElementsByClassName('box10')[1].style.display='none';
document.getElementsByClassName('box11')[1].style.display='none';
document.getElementsByClassName('box12')[1].style.display='block';
document.getElementsByClassName('box13')[1].style.display='block';
    }
    else{
        if(c<l){
            alert('平局')
            document.getElementsByClassName('box10')[1].style.display='none';
    document.getElementsByClassName('box11')[1].style.display='none';
    document.getElementsByClassName('box12')[1].style.display='block';
    document.getElementsByClassName('box13')[1].style.display='block';
        }
        else {
        document.getElementsByClassName('gemnum')[1].innerHTML=c;
    }
    }
}
function godPlayFirst(){
    a = l;
    b = r;
    c = n;
    document.getElementsByClassName('box8')[0].style.display='none';
    document.getElementsByClassName('box9')[0].style.display='none';
    document.getElementsByClassName('box12')[0].style.display='none';
    document.getElementsByClassName('box13')[0].style.display='none';
    document.getElementsByClassName('box10')[0].style.display='block';
    document.getElementsByClassName('box11')[0].style.display='block';
    document.getElementsByClassName('gemnum')[0].innerHTML=c;
    console.log(l,r,n)
}
function godPlayLast(){
    a = l;
    b = r;
    c = n;
    document.getElementsByClassName('box8')[0].style.display='none';
    document.getElementsByClassName('box9')[0].style.display='none';
    document.getElementsByClassName('box12')[0].style.display='none';
    document.getElementsByClassName('box13')[0].style.display='none';
    document.getElementsByClassName('box10')[0].style.display='block';
    document.getElementsByClassName('box11')[0].style.display='block';
    document.getElementsByClassName('gemnum')[0].innerHTML=c;
    console.log(l,r,n)
    if (c%(a+b)==0||c%(a+b)<a||c%(a+b)>b){
        enemy = Math.floor(Math.random() * (b - l + 1)) + l
        c-=enemy
        alert('裂空座获取了'+enemy+'颗宝石')
        document.getElementsByClassName('gemnum')[0].innerHTML=c;
    }
    else{
        enemy=c%(a+b)
        c-=enemy
        alert('裂空座获取了'+enemy+'颗宝石')
        document.getElementsByClassName('gemnum')[0].innerHTML=c;
    }
    if(c==0){
        alert('you lose')
        document.getElementsByClassName('box10')[0].style.display='none';
document.getElementsByClassName('box11')[0].style.display='none';
document.getElementsByClassName('box12')[0].style.display='block';
document.getElementsByClassName('box13')[0].style.display='block';
    }
    else{
        if(c<l){
            alert('平局')
            document.getElementsByClassName('box10')[0].style.display='none';
    document.getElementsByClassName('box11')[0].style.display='none';
    document.getElementsByClassName('box12')[0].style.display='block';
    document.getElementsByClassName('box13')[0].style.display='block';
        }
        else {
        document.getElementsByClassName('gemnum')[0].innerHTML=c;
    }
    }
    
}
function godAgain(){
    document.getElementsByClassName('box8')[0].style.display='block';
    document.getElementsByClassName('box9')[0].style.display='block';
    document.getElementsByClassName('box12')[0].style.display='none';
    document.getElementsByClassName('box13')[0].style.display='none';
}
function godGet(){
    g = parseInt(document.getElementsByClassName('box11')[0].value)
    console.log(g,c)
    if(g<=c&&g<=b&&g>=a){
        c = c - g;
        if(c==0){
            alert('雅琪终于战胜了自己的心魔，跨越了曾经无法逾越的阻碍')
            document.getElementsByClassName('box10')[0].style.display='none';
    document.getElementsByClassName('box11')[0].style.display='none';
    document.getElementsByClassName('box12')[0].style.display='block';
    document.getElementsByClassName('box13')[0].style.display='block';
        } 
        else {
            if(c<l){
                alert('平局')
                document.getElementsByClassName('box10')[0].style.display='none';
        document.getElementsByClassName('box11')[0].style.display='none';
        document.getElementsByClassName('box12')[0].style.display='block';
        document.getElementsByClassName('box13')[0].style.display='block';
            }
            else if (!(c%(a+b)==0||c%(a+b)<a||c%(a+b)>b)){
                enemy=c%(a+b)
                c-=enemy
                alert('你获取了'+g+'颗宝石'+'  '+'裂空座获取了'+enemy+'颗宝石')
                document.getElementsByClassName('gemnum')[0].innerHTML=c;
                }
            else if (b<=c){
            enemy = Math.floor(Math.random() * (b - l + 1)) + l
            c-=enemy
            alert('你获取了'+g+'颗宝石'+'  '+'裂空座获取了'+enemy+'颗宝石')
            document.getElementsByClassName('gemnum')[0].innerHTML=c;
        }
        else{
            enemy=Math.floor(Math.random() * (c - l + 1)) + l
            c-=enemy
            alert('你获取了'+g+'颗宝石'+'  '+'裂空座获取了'+enemy+'颗宝石')
            document.getElementsByClassName('gemnum')[0].innerHTML=c;
        }
        if(c==0){
            alert('你获取了'+g+'颗宝石'+'  '+'裂空座获取了'+enemy+'颗宝石'+' '+'you lose')
            document.getElementsByClassName('box10')[0].style.display='none';
    document.getElementsByClassName('box11')[0].style.display='none';
    document.getElementsByClassName('box12')[0].style.display='block';
    document.getElementsByClassName('box13')[0].style.display='block';
        }
        else{
            if(c<l){
                alert('你获取了'+g+'颗宝石'+'  '+'裂空座获取了'+enemy+'颗宝石')
                alert('平局')
                document.getElementsByClassName('box10')[0].style.display='none';
        document.getElementsByClassName('box11')[0].style.display='none';
        document.getElementsByClassName('box12')[0].style.display='block';
        document.getElementsByClassName('box13')[0].style.display='block';
            }
            else {
            document.getElementsByClassName('gemnum')[0].innerHTML=c;
        }
        }
    }
}
else{
    alert('超出取值范围')
}
}
function again(){
    document.getElementsByClassName('box8')[1].style.display='block';
    document.getElementsByClassName('box9')[1].style.display='block';
    document.getElementsByClassName('box12')[1].style.display='none';
    document.getElementsByClassName('box13')[1].style.display='none';
}
function get(){
    g = parseInt(document.getElementsByClassName('box11')[1].value)
    console.log(g,c)
    if(g<=c&&g<=b&&g>=a){
        c = c - g;
        if(c==0){
            alert('you win')
            document.getElementsByClassName('box10')[1].style.display='none';
    document.getElementsByClassName('box11')[1].style.display='none';
    document.getElementsByClassName('box12')[1].style.display='block';
    document.getElementsByClassName('box13')[1].style.display='block';
        } 
        else {
            if(c<l){
                alert('平局')
                document.getElementsByClassName('box10')[1].style.display='none';
        document.getElementsByClassName('box11')[1].style.display='none';
        document.getElementsByClassName('box12')[1].style.display='block';
        document.getElementsByClassName('box13')[1].style.display='block';
            }
            else if (b<=c){
            enemy = Math.floor(Math.random() * (b - l + 1)) + l
            c-=enemy
            alert('你获取了'+g+'颗宝石'+'  '+'卡比兽获取了'+enemy+'颗宝石')
            document.getElementsByClassName('gemnum')[1].innerHTML=c;
        }
        else{
            enemy=Math.floor(Math.random() * (c - l + 1)) + l
            c-=enemy
            alert('你获取了'+g+'颗宝石'+'  '+'卡比兽获取了'+enemy+'颗宝石')
            document.getElementsByClassName('gemnum')[1].innerHTML=c;
        }
        if(c==0){
            alert('你获取了'+g+'颗宝石'+'  '+'卡比兽获取了'+enemy+'颗宝石'+' '+'you lose')
            document.getElementsByClassName('box10')[1].style.display='none';
    document.getElementsByClassName('box11')[1].style.display='none';
    document.getElementsByClassName('box12')[1].style.display='block';
    document.getElementsByClassName('box13')[1].style.display='block';
        }
        else{
            if(c<l){
                alert('你获取了'+g+'颗宝石'+'  '+'卡比兽获取了'+enemy+'颗宝石')
                alert('平局')
                document.getElementsByClassName('box10')[1].style.display='none';
        document.getElementsByClassName('box11')[1].style.display='none';
        document.getElementsByClassName('box12')[1].style.display='block';
        document.getElementsByClassName('box13')[1].style.display='block';
            }
            else {
            document.getElementsByClassName('gemnum')[1].innerHTML=c;
        }
        }
    }
}
else{
    alert('超出取值范围')
}
}