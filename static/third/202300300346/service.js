var list = [];
var myGoodsList = [];
        function getList(){
            axios.post('http://62.234.11.20:8088/goods/getGoodsList')
            .then(function(res){
                list = res.data.data;
                console.log(res.data)
                render ();
            }),
            function(reason){
                alert(reason)
            }
            function render (){
                let box = document.querySelector('.window')
                for(let i = 0;i < list.length;i++){
                    let el = document.createElement('div')
                    el.className="unit"
                    el.innerHTML=`商品名称:<b>${list[i].name}</b><br>
                    id:${list[i].id}<br>价格:${list[i].price}<br>
                    库存:${list[i].inventory}<br>
                    商品描述:${list[i].description}`
                    box.append(el)
                }
            }
        }
function myGoods(){
        let del = document.getElementsByClassName("window")[0];
        del.innerHTML="";
        document.getElementsByClassName("selector")[0].style.display='none';
        document.getElementsByClassName("window")[0].style.display='none';
        document.getElementsByClassName("myGoods")[0].style.display='flex';
        document.getElementsByClassName("myGoodsBtn")[0].style.display='block';
        axios.post('http://62.234.11.20:8088/goods/getMyGoods',{
            "num":num,
        })
            .then(function(res){
                myGoodsList = res.data.data;
                console.log(res.data)
                render1 ();
            }),
            function(reason){
                alert(reason)
            }
            function render1 (){
                let box = document.querySelector('.myGoods')
                for(let i = 0;i < myGoodsList.length;i++){
                    let el = document.createElement('div')
                    el.className="unit"
                    el.innerHTML=`商品名称:<b>${myGoodsList[i].name}</b><br>
                    id:${myGoodsList[i].id}<br>
                    价格:${myGoodsList[i].price}<br>
                    库存:${myGoodsList[i].inventory}<br>
                    商品描述:${myGoodsList[i].description}`
                    box.append(el)
                }
            }

}
function myGoodsBack(){
    document.getElementsByClassName("myGoods")[0].innerHTML="";
    document.getElementsByClassName("selector")[0].style.display='block';
    document.getElementsByClassName("myGoods")[0].style.display='none';
    document.getElementsByClassName("myGoodsBtn")[0].style.display='none';
    document.getElementsByClassName("window")[0].style.display='flex';
}
function login(){
    document.getElementsByClassName("window")[0].style.display='flex';
    document.getElementsByClassName("selector")[0].style.display='block';
    document.getElementsByClassName("login")[0].style.display='none';
    num = document.getElementsByClassName("number")[0].value;
    localStorage.setItem('num',num )
}
function add(){
    document.getElementsByClassName("myGoodsBtn")[0].style.display="none";
    document.getElementsByClassName("add")[0].style.display="block";
}
function addBack(){
    document.getElementsByClassName("myGoodsBtn")[0].style.display="block";
    document.getElementsByClassName("add")[0].style.display="none";
}
function addApply(){
    let price = Number(document.getElementsByClassName('addSet')[3].value);
    price = price.toFixed(2);
    axios.post('http://62.234.11.20:8088/goods/addGoods',{
        "num":num,
        "name":document.getElementsByClassName('addSet')[0].value,
        "description":document.getElementsByClassName('addSet')[1].value,
        "inventory":parseInt(document.getElementsByClassName('addSet')[2].value),
        "price":parseFloat(price)
    })
    .then(function(res){
    alert('添加成功')
    },
    function(reason){
        alert("设置失败"+reason)
    }
    )
}
function adjust(){
    document.getElementsByClassName("myGoodsBtn")[0].style.display="none";
    document.getElementsByClassName("adjust")[0].style.display="block";
}
function adjustBack(){
    document.getElementsByClassName("myGoodsBtn")[0].style.display="block";
    document.getElementsByClassName("adjust")[0].style.display="none";
}
function adjustApply(){
    axios.post('http://62.234.11.20:8088/goods/updateInventory',{
        "num":num,
        "id":parseInt(document.getElementsByClassName('adjustSet')[0].value),
        "inventory":parseInt(document.getElementsByClassName('adjustSet')[1].value),
        "description":document.getElementsByClassName('adjustSet')[2].value
    })
    .then(function(res){
    alert('修改成功')
    },
    function(reason){
        alert("设置失败"+reason)
    }
    )
}
function del(){
    document.getElementsByClassName("myGoodsBtn")[0].style.display="none";
    document.getElementsByClassName("del")[0].style.display="block";
}
function delBack(){
    document.getElementsByClassName("myGoodsBtn")[0].style.display="block";
    document.getElementsByClassName("del")[0].style.display="none";
}
function delApply(){
    axios.post('http://62.234.11.20:8088/goods/deleteGoods',{
        "num":num,
        "id":parseInt(document.getElementsByClassName('delSet')[0].value),
    })
    .then(function(res){
    alert('删除成功')
    },
    function(reason){
        alert("删除失败"+reason)
    }
    )
}
function buy(){
    document.getElementsByClassName('selector')[0].style.display="none";
    document.getElementsByClassName('buy')[0].style.display="block";
}
function buyBack(){
    document.getElementsByClassName('selector')[0].style.display="block";
    document.getElementsByClassName('buy')[0].style.display="none";
}
let balance = 0;
function buyApply(){
    let aimId = parseInt(document.getElementsByClassName('buySet')[0].value);
    let aimCount = parseInt(document.getElementsByClassName('buySet')[1].value);
    var aim;

//遍历数组寻找id匹配的商品
for(let i = 0;i < list.length;i++){
    if(list[i].id == aimId){
        aim = list[i];
        console.log(aim);
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
//检查余额和库存
    if(aim.inventory < aimCount){alert("库存不足")}
    else if (balance < aimCount * aim.price){alert("余额不足")}
    else{
    axios.post('http://62.234.11.20:8088/goods/buy',{
        "num":num,
        "id":id,
        "count":count,
    })
    .then(function(res){
    let del = document.getElementsByClassName("window")[0];
    del.innerHTML="";
    alert(res.msg)
    getList()
    },
    function(reason){
        alert("购买失败"+reason)
    }
    )
}
}
function account(){
    let del = document.getElementsByClassName("window")[0];
        del.innerHTML="";
    document.getElementsByClassName('window')[0].style.display="none";
    document.getElementsByClassName('selector')[0].style.display="none";
    document.getElementsByClassName('account')[0].style.display="block";
    axios.post('http://62.234.11.20:8088/balance/getBalance',{
        "num":num,
    })
    .then(function(res){
        balance = res.data.data
        let box = document.querySelector('.balance')
            let el = document.createElement('div')
            el.className="unit1"
            el.innerHTML=`您的账户还有:<b>${balance}</b>元`
            box.append(el)
    },
    function(reason){
        alert("获取失败"+reason)
    }
    )
}
function accountBack(){
    document.getElementsByClassName('window')[0].style.display="flex";
    document.getElementsByClassName('selector')[0].style.display="block";
    document.getElementsByClassName('account')[0].style.display="none";
    document.getElementsByClassName('balance')[0].innerHTML="";
}
function accountApply(){
    let addBalance = Number(document.getElementsByClassName('accountSet')[0].value);
    addBalance = addBalance.toFixed(2);
    axios.post('http://62.234.11.20:8088/balance/setBalance',{
        "num":num,
        "balance":parseFloat(balance)+parseFloat(addBalance),
    })
    .then(function(res){
    alert('充值成功')
    },
    function(reason){
        alert("充值失败"+reason)
    }
    )
}