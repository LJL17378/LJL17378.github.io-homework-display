let car1 = [];
let j = 0;
function car(){
    axios.post('http://62.234.11.20:8088/goods/getGoodsList')
            .then(function(res){
                list = res.data.data;
                console.log(res.data)
            }),
            function(reason){
                alert(reason)
            }
    let box = document.querySelector('.myCar')
                for(let i = 0;i < car1.length;i++){
                    let el = document.createElement('div')
                    el.className="unit"
                    el.innerHTML=`
                    id:${car1[i].id}<br>
                    购买数量:${car1[i].count}<br>`
                    box.append(el)
                }
    document.getElementsByClassName('selector')[0].style.display="none";
    document.getElementsByClassName('car')[0].style.display="block";
}
function carBack(){
    document.getElementsByClassName('selector')[0].style.display="block";
    document.getElementsByClassName('car')[0].style.display="none";
    document.getElementsByClassName('myCar')[0].innerHTML="";
}
function carApply(){




    car1[j]={
        "id":parseInt(document.getElementsByClassName("carSet")[0].value),
        "count":parseInt(document.getElementsByClassName("carSet")[1].value),
    }
    j++;
    alert("添加成功")
    document.getElementsByClassName('myCar')[0].innerHTML="";
    car();
}
function carBuy(){

    var aim1 = [];
    let sum = 0;
    let k = 0;
    var judgement = false;
//遍历数组寻找id匹配的商品
    for(let i = 0;i < car1.length;i++){
        for(let g = 0;g < list.length;g++){
            if(list[g].id == car1[i].id){
                aim1[i] = list[g];
                console.log(aim1[i]);
            }
        }
    }
// 计算购买总额
    for(let i = 0;i<aim1.length;i++){
        sum += (aim1[i].price * car1[i].count);
    }
// 判断库存
for(let i = 0;i < car1.length ; i++){
    if(car1[i].count > aim1[i].inventory){
        judgement = true;
    }
}


//获取账户余额

    axios.post('http://62.234.11.20:8088/balance/getBalance',{
        "num":num,
    })
    .then(function(res){
        balance = res.data.data;
    },
    function(reason){
        alert("获取失败"+reason)
    }
    )

if(judgement){alert("库存不足")}
else if (balance < sum){alert("账户余额不足")}
else{
    axios.post('http://62.234.11.20:8088/goods/buy',{
        "num":num,
        "goodsList":car1,
    })
    .then(function(res){
    let del = document.getElementsByClassName("window")[0];
    del.innerHTML="";
    alert('购买成功')
    reset()
    getList()
    document.getElementsByClassName('myCar')[0].innerHTML="";
    car();
    },
    function(reason){
        alert("购买失败"+reason)
    }
    )
    function reset(){
        j = 0;
        console.log(j);
        console.log(car1);
        car1.splice(0);
        console.log(car1);
    }
}
}