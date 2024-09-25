let total,mini,max,present,model;


function model1(){
    document.getElementsByClassName("settings")[0].style.display = "flex";
    document.getElementsByClassName("home")[0].style.display = "none";

    document.getElementsByClassName("order_option")[0].innerHTML = "玩家先手";
    document.getElementsByClassName("order_option")[1].innerHTML = "玩家后手";
    model = 0;

    document.getElementsByClassName("gaming_exit")[0].style.right = "10%";
}

function model2(){
    document.getElementsByClassName("settings")[0].style.display = "flex";
    document.getElementsByClassName("home")[0].style.display = "none";

    document.getElementsByClassName("order_option")[0].innerHTML = "玩家一先手";
    document.getElementsByClassName("order_option")[1].innerHTML = "玩家二先手";
    model = 1;

    document.getElementsByClassName("gaming_exit")[0].style.right = "0";
}

function exit(){
    document.getElementsByClassName("settings")[0].style.display = "none";
    document.getElementsByClassName("home")[0].style.display = "flex";
}

function intro(){
    document.getElementsByClassName("intro")[0].style.display = "flex";
    document.getElementsByClassName("home")[0].style.display = "none";
}

function exitIntro(){
    document.getElementsByClassName("intro")[0].style.display = "none";
    document.getElementsByClassName("home")[0].style.display = "flex";
}


function fresh(){
    document.getElementsByClassName('show_box')[0].innerHTML = present;
    document.getElementsByClassName('show_box')[1].innerHTML = mini;
    document.getElementsByClassName('show_box')[2].innerHTML = max;

    if(model == 1){
        document.getElementsByClassName('show_box')[3].innerHTML = present;
        document.getElementsByClassName('show_box')[4].innerHTML = mini;
        document.getElementsByClassName('show_box')[5].innerHTML = max;
    }
}

function clearValue(){
    document.getElementById('total_box').value = "";
    document.getElementById('mini_box').value = "";
    document.getElementById('max_box').value = "";

}

function showResult(str){
    document.getElementById('result_box').innerHTML = str;
    console.log(str);
    document.getElementsByClassName("result")[0].style.display = 'flex';
    
    document.getElementsByClassName('fight_button')[0].setAttribute('disabled',"disabled");
    document.getElementsByClassName('fight_button')[1].setAttribute('disabled',"disabled");
}

function showGame(player,num){
    let newp = document.createElement('p');
    if( num != 0){
        newp.innerHTML = player+"行动：取值为"+num+",剩余总值为："+present+";";
    }else if(num == 0){
        newp.innerHTML = player;
    }
    document.getElementsByClassName('gaming_show')[0].appendChild(newp);
}


function waitComputer(){

    document.getElementsByClassName("warn_box")[1].style.display = "block";
    setTimeout("document.getElementsByClassName('warn_box')[1].style.display = 'none'",2000);

    document.getElementsByClassName('fight_button')[0].setAttribute('disabled',"disabled");
    setTimeout("document.getElementsByClassName('fight_button')[0].removeAttribute('disabled')",2000);
    setTimeout("computerFighting()",2000);
}

function submitSetting(){
    
        
    
        console.log("提交游戏设置");
        
        total = parseInt(document.getElementById('total_box').value);
        mini = parseInt(document.getElementById('mini_box').value);
        max = parseInt(document.getElementById('max_box').value);

        if((mini >= max)||(max >= total)||(!(total > 1))||(!(max > 1))||(!(mini >= 1))){
            console.log("输入非法数字，请重新输入！")
            alert("输入数字有误，请重新输入")
            clearValue();
            return 0;
        }/*此处有问题，不知道该怎么限制输入小数。我采取的方法包括：对1进行取余，再判断！= 0，不好用。我又改为对1.0，跟0.0判断，依旧
        无效果。
        我还能想到的就是对取值乘10，再对整数进行取余，但泰国麻烦，需要考虑一位小数两位小数。。。。*/

        present = total;

        console.log("设置总数为:" + total);
        console.log("设置最小值为:" + mini);
        console.log("设置最大值为:" + max);
        console.log("游戏开始！");
        fresh();

        for(let i = mini;i <= max;i++){
            let newo = document.createElement('option');
            newo.innerHTML = i;
            newo.value = i;
            document.getElementsByClassName('selectValue_box')[0].appendChild(newo);
            
        }

        for(let i = mini;i <= max;i++){
            let newo = document.createElement('option');
            newo.innerHTML = i;
            newo.value = i;
            document.getElementsByClassName('selectValue_box')[1].appendChild(newo);
            
        }

        showGame("游戏开始！",0)
        

        document.getElementsByClassName('settings')[0].style.display = 'none';
        document.getElementsByClassName('gaming')[0].style.display = 'flex';

        if(model == 0){
            document.getElementById("player2").style.display = "none";
            console.log("pve模式");
            if(document.getElementById('order_box').value == 1){
                console.log("玩家先手操作");
            }else if(document.getElementById('order_box').value == 0){
                console.log("电脑先手操作");
                waitComputer();
            }
        }else if(model == 1){
            document.getElementById("player2").style.display = "flex";
            console.log("pvp模式");
            if(document.getElementById("order_box").value == 1){
                console.log("玩家一先手");
                document.getElementsByClassName("fight_button")[1].setAttribute('disabled',"disabled");
            }else if(document.getElementById("order_box").value == 0){
                console.log("玩家二先手");
                document.getElementsByClassName("fight_button")[0].setAttribute('disabled',"disabled");

            }
        }
    
}
function pvpFighting(){
    let playerValue2 = parseInt(document.getElementsByClassName('selectValue_box')[1].value);
    console.log("玩家二取值为："+playerValue2);
    if(playerValue2 >= present){
        present = 0;
        fresh();
        showGame("玩家二",playerValue2);
        showResult("玩家二胜利！");
    }
    else {
        present = present - playerValue2;
        fresh();
        console.log("玩家二取值后剩余:" + present);
        showGame("玩家二",playerValue2);
        document.getElementsByClassName("fight_button")[1].setAttribute('disabled',"disabled");
        document.getElementsByClassName("fight_button")[0].removeAttribute("disabled");
    }
}

function fighting(){
    if(model == 0){
        let playerValue = parseInt(document.getElementsByClassName('selectValue_box')[0].value);
        
        console.log("玩家取值为:" + playerValue);

        if(playerValue >= present){
            present = 0;
            fresh();
            showGame("玩家",playerValue);
            showResult("玩家胜利！");
        }
        else{
            present = present - playerValue;
            fresh();
            console.log("玩家取值后剩余:" + present);
            showGame("玩家",playerValue);
            waitComputer();
        }
    }else if(model == 1){
        let playerValue1 = parseInt(document.getElementsByClassName('selectValue_box')[0].value);
        console.log("玩家一取值为："+playerValue1);
        if(playerValue1 >= present){
            present = 0;
            fresh();
            showGame("玩家一",playerValue1);
            showResult("玩家一胜利！");
        }
        else {
            present = present - playerValue1;
            fresh();
            console.log("玩家一取值后剩余:" + present);
            showGame("玩家一",playerValue1);
            document.getElementsByClassName("fight_button")[0].setAttribute('disabled',"disabled");
            document.getElementsByClassName("fight_button")[1].removeAttribute("disabled");
    }
    }
}

function computerFighting(){
    console.log("电脑操作中...");

    let prior = present%(max+mini);
    let computerValue;

    console.log("mini=" + mini);
    console.log("max=" + max);
    console.log("prior=" + prior);

    if( (mini<=prior)&&(prior<=max)){

        computerValue = prior;
        console.log("电脑取值为:" + computerValue);
    }else{
        computerValue = Math.floor(Math.random()*(max+1-mini)+mini);
        console.log("电脑取值为:" + computerValue);
    }

    if(computerValue >= present){
        present = 0;
        fresh();
        showGame("电脑",computerValue);
        showResult("电脑胜利！");
    }
    else{
        present = present - computerValue;
        console.log("电脑取值后剩余：" + present);
        showGame("电脑",computerValue);
        fresh();
    }
}

function closeIt(){
    document.getElementsByClassName('fight_button')[0].removeAttribute('disabled');
    document.getElementsByClassName('fight_button')[1].removeAttribute('disabled');
    document.getElementsByClassName('result')[0].style.display = 'none';
    document.getElementsByClassName('settings')[0].style.display = 'flex';
    document.getElementsByClassName('gaming')[0].style.display = 'none';

    clearValue();

    let x = document.getElementsByClassName('gaming_show')[0];
    while(x.hasChildNodes()){
        x.removeChild(x.firstChild);
    }

    let y = document.getElementsByClassName('selectValue_box')[0];
    while(y.hasChildNodes()){
        y.removeChild(y.firstChild);
    }
    let z = document.getElementsByClassName('selectValue_box')[1];
    while(z.hasChildNodes()){
        z.removeChild(z.firstChild);
    }
}
