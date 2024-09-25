
let str = localStorage.getItem("shoppinglist"); // 获取存储的字符串
let arr = JSON.parse(str); // 将字符串转换为数组
console.log(arr)
let num = []
let goodList = []



console.log(num)

axios.post("http://62.234.11.20:8088/goods/getGoodsList")
    .then(function (res) {

        goodlist = res.data.data;
        console.log(goodlist);
        num.length = arr.length
        num.fill(0)
        render()
    })

function render() {
    const box = document.querySelector('.list')
    box.innerHTML = ''
    for (let i = 0; i < arr.length; i++) {
        let el = document.createElement('div')

        el.innerHTML = `序号:${arr[i]},商品id${goodlist[arr[i] - 1].id}商品名称:${goodlist[arr[i] - 1].name}, 
            价格:${goodlist[arr[i] - 1].price}, 
            库存${goodlist[arr[i] - 1].inventory}
            num:${num[i]}
            <button id="${arr[i] - 1}" class="add">+</button>
            <button id="${arr[i] - 1}" class="minus">-</button>
            <br><br>`
        box.append(el)
    }
    bind()
}

function bind() {
    document.querySelectorAll('.add').forEach(btn => btn.addEventListener('click', e => {
        let index = +e.target.id + 1
        for (i = 0; i < num.length; i++) {
            if (index == arr[i])
                num[i]++


        }
        render()

    }))
    document.querySelectorAll('.minus').forEach(btn => btn.addEventListener('click', e => {
        let index = +e.target.id + 1
        for (i = 0; i < num.length; i++) {
            if (index == arr[i] && num[i] >= 1) {
                num[i]--
                break
            }
            if (num[i] == 0) {
                alert("数目不可以小于0")
                break
            }
        }
        render()


    }))
}
function jiesuan() {
    for (i = 0; i < arr.length; i++) {
        goodList[i] = {
            "id": goodlist[arr[i] - 1].id,
            "count": num[i]
        }
    }
    axios.post("http://62.234.11.20:8088/goods/buy",
        {
            "num": localStorage.getItem("xuehao"),
            "goodsList": goodList

        }
    )
        .then(function (res) {
            console.log(res)
            alert(res.data.msg)
        })

}










