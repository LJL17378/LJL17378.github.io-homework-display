let goodsList = [];
let myGoods = [];
let idNum = {
    num : 200000000000,}
let myAccountBalance ;
//调试 无参请求 返回值helloWorld
axios.post("http://62.234.11.20:8088/helloWorld",null)
    .then(function(res){

        console.log(res.data);
    })
//获取全部商品列表
window.onload = show();
function show(){
    axios.post("http://62.234.11.20:8088/goods/getGoodsList",null)
    .then(function(res){
        
        goodsList = res.data.data;
        console.log(goodsList);
        
        render();
    })
}
//对商品进行渲染
function render(){
    for(let i = 0; i < goodsList.length ;i++){

        let newBox =  document.createElement('div');
        newBox.setAttribute('class',"goodShelf_box");
        document.getElementsByClassName('goodShelf_boxes')[0].appendChild(newBox);
        newBox.innerHTML = `<p class="goodName">商品名称：<span>${goodsList[i].name}</span></p>
        \t<p class="goodPrice">商品价格：<span>${goodsList[i].price}</span></p>
        \t<p class="goodInventory">商品剩余：<span>${goodsList[i].inventory}</span></p>
        \t<p class="goodDescrioption">商品描述：<span>${goodsList[i].description}</span></p>`;

        let newButtonBox = document.createElement('div');
        newButtonBox.setAttribute('class',"buy_box");
        document.getElementsByClassName('goodShelf_box')[i].appendChild(newButtonBox);
        newButtonBox.innerHTML = `<input type="button" class="buy_button" value="购买" onclick="openBuyConsult(${goodsList[i].id})">
        <input type="button" class="cart_button" value="加入购物车" onclick="openBuyConsult(${goodsList[i].id})">`
    }
}
//对自己上传商品进行渲染
function myRender(){
    for(let i =0;i < myGoods.length ; i++){
        let newBox = document.createElement('div');
        newBox.setAttribute('class',"myGood_box");
        document.getElementsByClassName("myGood_boxes")[0].appendChild(newBox);
        newBox.innerHTML = `<p class="goodName">商品名称：<span>${myGoods[i].name}</span></p>
        \t<p class="goodPrice">商品价格：<span>${myGoods[i].price}</span></p>
        \t<p class="goodInventory">商品剩余：<span>${myGoods[i].inventory}</span></p>
        \t<p class="goodDescrioption">商品描述：<span>${myGoods[i].description}</span></p>`;

        let newButtonBox = document.createElement('div');
        newButtonBox.setAttribute('class',"update_box");
        document.getElementsByClassName('mygood_box')[i].appendChild(newButtonBox);
        newButtonBox.innerHTML = `<input type="button" class="update_button" value="修改信息" onclick="openUpdateConsult(${myGoods[i].id})">
        <input type="button" class="delete_button" value="删除商品" onclick="openDeleteConsult(${myGoods[i].id})">`
    }
}
//打开注册界面
function openRegister(){
    document.getElementsByClassName('login_boxes')[0].style.display = "none";
    document.getElementsByClassName('register_boxes')[0].style.display = "flex";
}
//关闭注册界面
function closeRegister(){
    document.getElementsByClassName('login_boxes')[0].style.display = "flex";
    document.getElementsByClassName('register_boxes')[0].style.display = "none";
}
 //注册账号，在浏览器中保存数据
function register(){
    let account =  {
        username : document.getElementsByClassName("register_box")[0].value,
        num : document.getElementsByClassName("register_box")[1].value,
        password : document.getElementsByClassName("password_box")[1].value,
    }
    localStorage.setItem('account',JSON.stringify(account));
    //注册完成后返回登录界面
    document.getElementsByClassName('login_boxes')[0].style.display = "flex";
    document.getElementsByClassName('register_boxes')[0].style.display = "none";
 }
 //登陆账号
function login(){
    let enterNum  = document.getElementsByClassName('login_box')[0].value;
    let enterPassword = document.getElementsByClassName('password_box')[0].value;
    let account = JSON.parse(localStorage.getItem('account'));

    if( (enterNum === account.num)&&(enterPassword === account.password)){
        console.log("登录成功");

        document.querySelector('header').style.display = 'flex';
        document.getElementsByClassName('accountInformation_box')[0].style.display = 'flex';
        document.getElementsByClassName('goodShelf_boxes')[0].style.display = 'flex';
        document.getElementsByClassName('login_boxes')[0].style.display = 'none';

        console.log(account);
        document.getElementById('num_box').innerHTML = `学号:${account.num}`;
        document.getElementById('username_box').innerHTML = `欢迎您,${account.username}!`;
    }else{
        console.log("登录失败");
        return 0;
    }
    //登陆后获取账户余额
    idNum.num = account.num;

    axios.post('http://62.234.11.20:8088/balance/getBalance',idNum)
    .then(function(res){

        myAccountBalance = res.data.data;
        console.log(myAccountBalance);
        document.getElementById("balance_box").innerHTML = 
        `账户余额(元)：${myAccountBalance}`;
    })
    //登陆后获取我的商品
    axios.post("http://62.234.11.20:8088/goods/getMyGoods",idNum)
    .then(function(res){

        myGoods = res.data.data;
        console.log(myGoods);

        myRender();
    })
 }
//打开我的商品界面
function openMyGoods(){
    document.getElementsByClassName('goodShelf_boxes')[0].style.display = 'none';   
    document.getElementsByClassName('myGood_boxes')[0].style.display = 'flex';
    document.getElementsByClassName('addMyGoodButton_box')[0].style.display = 'flex';
 }
//打开首页
function openHome(){
    document.getElementsByClassName('goodShelf_boxes')[0].style.display = 'flex';   
    document.getElementsByClassName('myGood_boxes')[0].style.display = 'none';
    document.getElementsByClassName('addMyGoodButton_box')[0].style.display = 'none';
 }
//打开提交商品界面
function openSubmitConsult(){
    document.getElementById('addGoodConsult_box').style.display = 'flex';
}
//提交新商品
function submitNewGood(){
    let addMyGood = {
        num: 200000000000,
        name: "",
        description: "", 
        inventory: 0,
        price : 0.00
    }
    addMyGood.num = idNum.num;
    addMyGood.name = document.getElementsByClassName('addGoodName_box')[0].value;
    addMyGood.description = document.getElementsByClassName('addGoodDescription_box')[0].value;
    addMyGood.inventory = document.getElementsByClassName('addGoodInventory_box')[0].value;
    addMyGood.price = document.getElementsByClassName('addGoodPrice_box')[0].value;
    //判断要添加商品的数量和价格
    if(addMyGood.inventory <= 1){
        alert("新增商品数量不能少于1个");
        return 0;
    }
    if(addMyGood.price < 0){
        alert("新增商品价格不能为负");
        return 0;
    }
    axios.post("http://62.234.11.20:8088/goods/addGoods",addMyGood)
    .then(function(res){
        console.log(res.data);
        alert("提交成功！");
        //重新获取我的商品列表
        axios.post("http://62.234.11.20:8088/goods/getMyGoods",idNum)
        .then(function(res){
            myGoods = res.data.data;
            console.log(myGoods);
            //创建一个新的盒子并添加到mygoods最后
            let newBox = document.createElement('div');
            newBox.setAttribute('class',"myGood_box");
            document.getElementsByClassName("myGood_boxes")[0].appendChild(newBox);
            newBox.innerHTML = `<p class="goodName">商品名称：<span>${myGoods[myGoods.length-1].name}</span></p>
            \t<p class="goodPrice">商品价格：<span>${myGoods[myGoods.length-1].price}</span></p>
            \t<p class="goodInventory">商品剩余：<span>${myGoods[myGoods.length-1].inventory}</span></p>
            \t<p class="goodDescrioption">商品描述：<span>${myGoods[myGoods.length-1].description}</span></p>`;

            let newButtonBox = document.createElement('div');
            newButtonBox.setAttribute('class',"update_box");
            console.log("按钮添加到第",myGoods.length-1,"盒子内")
            document.getElementsByClassName('mygood_box')[myGoods.length-1].appendChild(newButtonBox);
            newButtonBox.innerHTML = `<input type="button" class="update_button" value="修改信息" onclick="openUpdateConsult(${myGoods[myGoods.length-1].id})">
            <input type="button" class="delete_button" value="删除商品" onclick="openDeleteConsult(${myGoods[myGoods.length-1].id})">`;
        })
        axios.post("http://62.234.11.20:8088/goods/getGoodsList",null)
        .then(function(res){       
            goodsList = res.data.data;
            console.log(goodsList);

            let newBox =  document.createElement('div');
            newBox.setAttribute('class',"goodShelf_box");
            document.getElementsByClassName('goodShelf_boxes')[0].appendChild(newBox);
            newBox.innerHTML = `<p class="goodName">商品名称：<span>${goodsList[goodsList.length-1].name}</span></p>
            \t<p class="goodPrice">商品价格：<span>${goodsList[goodsList.length-1].price}</span></p>
            \t<p class="goodInventory">商品剩余：<span>${goodsList[goodsList.length-1].inventory}</span></p>
            \t<p class="goodDescrioption">商品描述：<span>${goodsList[goodsList.length-1].description}</span></p>`

            let newButtonBox = document.createElement('div');
            newButtonBox.setAttribute('class',"buy_box");
            document.getElementsByClassName('goodShelf_box')[goodsList.length-1].appendChild(newButtonBox);
            newButtonBox.innerHTML = `<input type="button" class="buy_button" value="购买" onclick="openBuyConsult(${goodsList[goodsList.length-1].id})">
            <input type="button" class="cart_button" value="加入购物车" onclick="openBuyConsult(${goodsList[goodsList.length-1].id})">`       
        })
    })
}
//关闭提交商品页面
function closeSubmitConsult(){
    document.getElementById('addGoodConsult_box').style.display = 'none';
}
//打开余额修改界面
function openBalanceConsult(){

    document.getElementById('balanceConsult_box').style.display = 'flex';
    document.getElementsByClassName('showBalance_box')[0].innerHTML = `目前余额(元):${myAccountBalance}`;

}
//关闭余额修改界面
function closeBalanceConsult(){

    document.getElementById('balanceConsult_box').style.display = 'none';
}
//修改余额
function changeBalance(){
    let setMyAccountBalance = {
        num : 200000000000,
        balance : 0.00,
    }
    setMyAccountBalance.num = idNum.num;
    setMyAccountBalance.balance = document.getElementsByClassName('setBalance_box')[0].value;
    if(setMyAccountBalance.balance < 0){
        alert("余额不能为负");
        return 0;
    }
    alert("修改成功！");
    axios.post('http://62.234.11.20:8088/balance/setBalance',setMyAccountBalance)
    .then(function(res){
        console.log("设置为",setMyAccountBalance.balance)
        console.log(res.data);
        //修改后更新余额显示
        axios.post('http://62.234.11.20:8088/balance/getBalance',idNum)
        .then(function(res){
            myAccountBalance = res.data.data;
            console.log(myAccountBalance);
            document.getElementById("balance_box").innerHTML = 
            `账户余额(元)：${myAccountBalance}`;
            document.getElementsByClassName('showBalance_box')[0].innerHTML = 
            `目前余额(元):${myAccountBalance}`;
        })
    }) 
}
//打开购物界面
function openBuyConsult(goodId){
    console.log(goodId);
    let goodToBuy;
    for(let i = 0;i < goodsList.length;i++){
        if(goodId === goodsList[i].id){
            goodToBuy = goodsList[i];
            break;
        }    
    }
    document.getElementById('buyConsult_box').style.display = 'flex';
    document.getElementById('goodId_box').innerHTML = goodToBuy.id;
    document.getElementById('goodName_box').innerHTML = goodToBuy.name;
    document.getElementById('goodPrice_box').innerHTML = goodToBuy.price;
    document.getElementById('goodInventory_box').innerHTML = goodToBuy.inventory;
 }
//关闭购物界面
function closeBuyConsult(){
    document.getElementById('buyConsult_box').style.display = 'none';
}
//购买商品
function buy(){
    let buyAGood = {
        num: 200000000000,
        id: 0,
        count: 0
    } 
    let count = document.getElementById('buyCount_box').value;
    let id = document.getElementById('goodId_box').innerHTML;
    let singlePrice = document.getElementById('goodPrice_box').innerHTML;
    let inventory = document.getElementById('goodInventory_box').innerHTML;
    //获取商品总价格，判断价格与余额的大小关系
    let sumPrice = singlePrice * count;
    if(sumPrice > myAccountBalance){
        alert("余额不足，请充值！");
        return 0;
    }
    //获取商品数量，与购买数量进行大小关系判断
    console.log("count:",count,"inventory",inventory)
    if(count > inventory*1){
        alert("商品库存不足！");
        return 0;
    }
    alert("购买成功！");
    buyAGood.num = idNum.num;
    buyAGood.count = count;
    buyAGood.id = id;

    axios.post('http://62.234.11.20:8088/goods/buy',buyAGood)
    .then(function(res){
        console.log(res.data);
        //买完商品更新余额
        axios.post('http://62.234.11.20:8088/balance/getBalance',idNum)
        .then(function(res){
            myAccountBalance = res.data.data;
            console.log(myAccountBalance);
            document.getElementById("balance_box").innerHTML = 
            `账户余额(元):${myAccountBalance}`;
        })
        //买完商品更新商品数量
        axios.post("http://62.234.11.20:8088/goods/getGoodsList",null)
        .then(function(res){       
            goodsList = res.data.data;
            console.log(goodsList);  
            //更新显示
            let i = 0
            for(i = 0;i < goodsList.length;i++){
                if(buyAGood.id == goodsList[i].id){
                break;
            }}    
            console.log("goodshelf更新第",i,"个商品的信息");
            document.getElementsByClassName('goodShelf_box')[i].children[2].children[0].innerHTML = goodsList[i].inventory;
        })
        //如果是自己的商品，还需要更新我的商品显示
        let isMyGood = false;
        let j = 0;
        for(j = 0;j < myGoods.length;j++){
            if(buyAGood.id == myGoods[j].id){
                isMyGood = true;
                break;
            }}
        if(isMyGood == true){
            axios.post("http://62.234.11.20:8088/goods/getMyGoods",idNum)
            .then(function(res){
                myGoods = res.data.data;
                console.log(myGoods);
                console.log("更新第",j,"个商品的信息");
                document.getElementsByClassName('myGood_box')[j].children[2].children[0].innerHTML = myGoods[j].inventory;
            })}
    })
 }
//打开商品信息修改界面
function openUpdateConsult(goodId){
    console.log(goodId);
    let goodToUpdate;
    for(let i = 0;i < goodsList.length;i++){
        if(goodId === goodsList[i].id){
            goodToUpdate = goodsList[i];
            break;
        }    
    }
    document.getElementById('updateGoodId_box').innerHTML = goodToUpdate.id;
    document.getElementById('updateGoodName_box').innerHTML = goodToUpdate.name;
    document.getElementsByClassName('updateGoodInventory_box')[0].value = goodToUpdate.inventory;
    document.getElementsByClassName('updateGoodDescription_box')[0].value = goodToUpdate.description;
    document.getElementById('updateGoodConsult_box').style.display = 'flex';
}
//修改商品库存描述
function updateGoodInfo(){  
    let updateMyGood = {
        num: 200000000000,
        id: 0,
        inventory: 0,
        description: ""
    }
    updateMyGood.num = idNum.num;
    updateMyGood.id = document.getElementById('updateGoodId_box').innerHTML;
    updateMyGood.inventory = document.getElementsByClassName('updateGoodInventory_box')[0].value;
    updateMyGood.description = document.getElementsByClassName('updateGoodDescription_box')[0].value;
    //判断要修改的数量
    if(updateMyGood.inventory < 0){
        alert("商品数量不能为负");
        return 0;
    }
    alert("修改成功！");
    axios.post('http://62.234.11.20:8088/goods/updateInventory',updateMyGood)
    .then(function(res){
        console.log(res.data);
        //修改后更新商品信息
        axios.post("http://62.234.11.20:8088/goods/getGoodsList",null)
        .then(function(res){       
            goodsList = res.data.data;
            console.log(goodsList);  
            //更新显示
            let i = 0
            for(i = 0;i < goodsList.length;i++){
                if(updateMyGood.id == goodsList[i].id){
                break;
            }}    
            console.log("goodshelf更新第",i,"个商品的信息");
            document.getElementsByClassName('goodShelf_box')[i].children[2].children[0].innerHTML = goodsList[i].inventory;
            document.getElementsByClassName('goodShelf_box')[i].children[3].children[0].innerHTML = goodsList[i].description;
        })
        //还需要更新我的商品显示
        axios.post("http://62.234.11.20:8088/goods/getMyGoods",idNum)
        .then(function(res){
            myGoods = res.data.data;
            console.log(myGoods);
            let j = 0;
            for(j = 0;j < myGoods.length;j++){
            if(updateMyGood.id == myGoods[j].id){
                break;
            }}
            console.log("mygood更新第",j,"个商品的信息");
            document.getElementsByClassName('myGood_box')[j].children[2].children[0].innerHTML = myGoods[j].inventory;
            document.getElementsByClassName('myGood_box')[j].children[3].children[0].innerHTML = myGoods[j].description;
        })      
    })
 }
//关闭商品修改界面
function closeUpdateConsult(){
    document.getElementById('updateGoodConsult_box').style.display = 'none';
}
//打开商品删除界面
function openDeleteConsult(goodId){
    console.log(goodId);
    let goodToDelete;
    for(let i = 0;i < goodsList.length;i++){
        if(goodId === goodsList[i].id){
            goodToDelete = goodsList[i];
            break;
        }    
    }
    document.getElementById('deleteGoodId_box').innerHTML = goodToDelete.id;
    document.getElementById('deleteGoodConsult_box').style.display = 'flex';
}
//删除商品
function deleteGood(){
    let deleteMyGood = {
        num: 202200300164,
        id:0,
    }
    deleteMyGood.num = idNum.num;
    deleteMyGood.id = document.getElementById('deleteGoodId_box').innerHTML;
    console.log(document.getElementById('deleteGoodId_box').innerHTML);

    axios.post('http://62.234.11.20:8088/goods/deleteGoods',deleteMyGood)
    .then(function(res){
        console.log(res.data);
        alert("删除成功！");
        //更新mygoods的显示
        let i = 0
        for(i = 0;i < goodsList.length;i++){
            if(deleteMyGood.id == goodsList[i].id){
                break;
        }}  
        let thisGoodShelf = document.getElementsByClassName('goodShelf_box')[i];
        thisGoodShelf.parentNode.removeChild(thisGoodShelf);
        //更新goodshelf的显示
        let j = 0
        for(j = 0;j < goodsList.length;j++){
            if(deleteMyGood.id == myGoods[j].id){
                break;
        }}  
        //document.getElementsByClassName('myGood_box')[j].style.display = 'none';
        let thisMyGood = document.getElementsByClassName('myGood_box')[j];
        thisMyGood.parentNode.removeChild(thisMyGood);

        axios.post("http://62.234.11.20:8088/goods/getMyGoods",idNum)
        .then(function(res){
            myGoods = res.data.data;
            console.log(myGoods);
        })

        axios.post("http://62.234.11.20:8088/goods/getGoodsList",null)
        .then(function(res){      
            goodsList = res.data.data;
            console.log(goodsList);
        })
    }) 
}
//关闭商品删除界面
function closeDeleteConsult(){
    document.getElementById('deleteGoodConsult_box').style.display = 'none';
}
//打开购物车界面
function openCart(){  
    document.getElementsByClassName('myCart_boxes')[0].style.display = 'flex';
}
//关闭购物车
function closeCart(){
    document.getElementsByClassName('myCart_boxes')[0].style.display = 'none';
}
//添加至购物车
function addToCart(){
    //判断商品库存与添加数量
    let count = document.getElementById('buyCount_box').value;
    let inventory = document.getElementById('goodInventory_box').innerHTML;
    if( count > inventory*1){
        alert("商品库存不足！");
        return 0;
    }
    alert("添加成功！");
    let newCartBox = document.createElement('div');
    newCartBox.setAttribute('class',"myCart_box");
    let singlePrice = document.getElementById('goodPrice_box').innerHTML;
    let goodCount = document.getElementById('buyCount_box').value;
    let sum = singlePrice * goodCount;
    document.getElementsByClassName('goodsInCart_box')[0].appendChild(newCartBox);

    newCartBox.innerHTML = `<p class="goodInCartId_box">商品ID:<span>${document.getElementById('goodId_box').innerHTML}</span></p>
    <p class="goodInCartName_box">商品名称:<span>${document.getElementById('goodName_box').innerHTML}</span></p>
    <p class="goodInCartCount_box">商品数量:<span>${document.getElementById('buyCount_box').value}</span></p>
    <p class="goodInCartSum_box">总价:<span>${sum}</span></p>
    <input type ="button" class="CartDeleteButton_box" value="从购物车中删除" onclick="deleteFromCart(${document.getElementById('goodId_box').innerHTML})">`
}
//从购物车中删除商品
function deleteFromCart(cartId){
    let i = 0;
    let CartSize =  document.getElementsByClassName('goodsInCart_box')[0].childNodes;
    console.log(CartSize.length);
    for(i = 0;i <CartSize.length-1;i++){
        if(cartId == document.getElementsByClassName('myCart_box')[i].children[0].children[0].innerHTML){
            break;
        }
    }
    let thisCart = document.getElementsByClassName('myCart_box')[i];
        thisCart.parentNode.removeChild(thisCart);
}
//购物车结算
function cartBuy(){
    
    let buyGoodsInCart = {
        num : 200000000000,
        goodsList :[]
        
    }
    buyGoodsInCart.num = idNum.num;
    let CartSize =  document.getElementsByClassName('goodsInCart_box')[0].childNodes;
    console.log(CartSize.length);
    //获得商品总价格并将其与余额进行大小关系判断
    let sum = 0;
    for(let i = 0;i < CartSize.length-1;i ++){
        sum += document.getElementsByClassName('myCart_box')[i].children[3].children[0].innerHTML;
    }
    if(sum > myAccountBalance){
        alert("余额不足，请充值！");
        return 0;
    }
    alert("购买成功！");
    for(let i = 0;i < CartSize.length-1;i ++){
        let goodInCart = {
            id : document.getElementsByClassName('myCart_box')[i].children[0].children[0].innerHTML,
            count : document.getElementsByClassName('myCart_box')[i].children[2].children[0].innerHTML,
        }
        console.log(goodInCart);
        buyGoodsInCart.goodsList[i] = goodInCart;
    }
    console.log(buyGoodsInCart);

    axios.post('http://62.234.11.20:8088/goods/buy',buyGoodsInCart)
    .then(function(res){
        console.log(res.data);
        //买完商品更新余额
        axios.post('http://62.234.11.20:8088/balance/getBalance',idNum)
        .then(function(res){
            myAccountBalance = res.data.data;
            console.log(myAccountBalance);
            document.getElementById("balance_box").innerHTML = 
            `账户余额(元):${myAccountBalance}`;
        })
        //买完商品更新商品数量
        axios.post("http://62.234.11.20:8088/goods/getGoodsList",null)
        .then(function(res){       
            goodsList = res.data.data;
            console.log(goodsList);  
            //更新显示
            for(let i = 0;i<buyGoodsInCart.goodsList.length;i++){
                let j = 0;
                for(j = 0;j < goodsList.length;j++){
                    if(buyGoodsInCart.goodsList[i].id == goodsList[j].id){
                        break;
                    }}
                    console.log("goodshelf更新第",j,"个商品的信息");
                    document.getElementsByClassName('goodShelf_box')[j].children[2].children[0].innerHTML = goodsList[j].inventory;
            }
        })
        //如果是自己的商品，还需要更新我的商品显示
        for(let i = 0;i <buyGoodsInCart.goodsList.length;i++){
            let isMyGood = [];
            isMyGood[i] = false;
            let j = 0;
            for(j = 0;j<myGoods.length;j++){
                if(buyGoodsInCart.goodsList[i].id == myGoods[j].id){
                    isMyGood[i] = true;
                    break;
                }}
            if(isMyGood[i] == true){
                axios.post("http://62.234.11.20:8088/goods/getMyGoods",idNum)
                .then(function(res){
                    myGoods = res.data.data;
                    console.log(myGoods);
                    console.log("更新第",j,"个商品的信息");
                    document.getElementsByClassName('myGood_box')[j].children[2].children[0].innerHTML = myGoods[j].inventory;
                })}}
    })
}