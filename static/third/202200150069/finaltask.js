let num = parseInt(localStorage.getItem('xuehao'))
let goodlist = []
axios.post("http://62.234.11.20:8088/goods/getGoodsList")
    .then(function (res) {

        goodlist = res.data.data;
        console.log(goodlist);

        const box = document.querySelector('.list')
        for (let i = 0; i < goodlist.length; i++) {
            let el = document.createElement('div')
            el.innerHTML = `序号:${i+1},iD:${goodlist[i].id}商品名称:${goodlist[i].name}, 
            价格:${goodlist[i].price}, 
            库存${goodlist[i].inventory}
            <b class="color">描述:${goodlist[i].description}<b>
           
            <br><br>`
            box.append(el)

        }

    })
let shoppinglist=[]
let shoppingnum=0

function shopping() {
    for (i = 0; i <goodlist.length; i++) {
        
        if (shoppinglist[i] == null) {    
            shoppinglist[i] =Number(prompt("请加入商品的序号"))
            shoppingnum++

            break;
        }else continue

    }
    localStorage.setItem("shoppinglist",JSON.stringify(shoppinglist))
    localStorage.setItem("shoppingnum",shoppingnum)
}

function shoppingmarket() {
    window.location.href = './shopping.html'

}
function upload() {
    let name = prompt("输入商品名称")
    let description = prompt("输入商品描述")
    let inventory = Number(prompt("输入你的库存"))
    let price = Number(prompt("输入商品价格"))
    axios.post("http://62.234.11.20:8088/goods/addGoods", {
        "num": localStorage.getItem("xuehao"),
        "name": name,
        "description": description,
        "inventory": inventory,
        "price": price

    })
        .then(function (res) {
            console.log(res);
            alert(`${res.data.msg}`)
        })
}
function deletething() {
    let id = Number(prompt("输入商品的id"))
    axios.post("http://62.234.11.20:8088/goods/deleteGoods", {
        "num": localStorage.getItem("xuehao"),
        "id": id
    })
        .then(function (res) {
            console.log(res);
            alert(`${res.data.msg}`)
        })



}

function buy() {
    let id = Number(prompt('输入你要购买的物品id'))
    let count = Number(prompt('输入购买数量'))
    axios.post("http://62.234.11.20:8088/goods/buy", {
        "num": localStorage.getItem("xuehao"),
        "id": id,
        "count": count
    })
        .then(function (res) {
            console.log(res);
            alert(`${res.data.msg}`)
        })

}
function recharge() {
    let balance = Number(prompt('输入你想要的余额'))


    axios.post("http://62.234.11.20:8088/balance/setBalance", {
        "num": localStorage.getItem("xuehao"),
        "balance": balance
    })
        .then(function (res) {
            alert(`${res.data.msg}`)
        })

}
function present() {

    axios.post("http://62.234.11.20:8088/balance/getBalance", {
        "num": localStorage.getItem("xuehao")
    })
        .then(function (res) {
            alert(`你的余额为${res.data.data}`)
        })

}


