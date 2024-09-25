
var myHeaders = new Headers();
myHeaders.append("User-Agent", "Apifox/1.0.0 (https://apifox.com)");

var requestOptions = {
   method: 'POST',
   headers: myHeaders,
   redirect: 'follow'
};


   axios.post('http://62.234.11.20:8088/goods/getGoodsList',)
   .then(function (goods) {
       let goodslist=[]
       goodslist=goods.data.data
        for (let i = 0; i < goodslist.length; i++) 
        {    const tbody=document.querySelector('.tbody1')
            omg =document.createElement("tr")
            td1 =document.createElement("td")
                omg.append(td1)
                td1.innerHTML=`<p class="goods">
                <b>${goodslist[i].name}</b>`
            
            td2 =document.createElement("td")
                omg.append(td2)
                td2.innerHTML=`<p class="goods">
                <b>${goodslist[i].price}</b>`    
            
            td3 =document.createElement("td")
                omg.append(td3)
                td3.innerHTML=`<p class="goods">
                    <b>${goodslist[i].description}</b>`

            td4 =document.createElement("td")
                    omg.append(td4)
                    td4.innerHTML=`<p class="goods">
                        <b>${goodslist[i].inventory}</b>`
            td5 =document.createElement("td")
                    omg.append(td5)
                    td5.innerHTML=`<p onclick=buy() id="buy">${goodslist[i].id}</p>`

            tbody.append(omg)
            
        }

   }, function (reason) {
       console.log('reason = ', reason)
   })






