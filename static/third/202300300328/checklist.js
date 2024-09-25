
    var data = JSON.stringify({
        "num":localStorage.getItem("xh"),})

    var config = {
       method: 'post',
       url: 'http://62.234.11.20:8088/goods/getMyGoods',
       headers: { 
          'User-Agent': 'Apifox/1.0.0 (https://apifox.com)', 
          'Content-Type': 'application/json'},
       data : data
    };
    
    axios(config)
    .then(function (mygoods) {
        console.log(mygoods.data)
        let mylist=[]
        mylist=mygoods.data.data
         console.log(mylist)
         for (let i=0; i < mylist.length; i++) 
         {    const tbody=document.querySelector('.tbody2')
             omg =document.createElement("tr")
             td1 =document.createElement("td")
             omg.append(td1)
             td1.innerHTML=`<p class="goods">
                 <b>${mylist[i].name}</b>`
             
             td2 =document.createElement("td")
             omg.append(td2)
             td2.innerHTML=`<p class="goods">
                 <b>${mylist[i].price}</b>`    
             
                 td3 =document.createElement("td")
                 omg.append(td3)
                 td3.innerHTML=`<p class="goods">
                     <b>${mylist[i].description}</b>`
    
                 td4 =document.createElement("td")
                     omg.append(td4)
                     td4.innerHTML=`<p class="goods">
                         <b>${mylist[i].inventory}</b>`


                td5 =document.createElement("td")
                omg.append(td5)
                td5.innerHTML=`<p class="goods">
                 <b>${mylist[i].id}</b>`


                td6 =document.createElement("td")
                    omg.append(td6)
                    td6.innerHTML=`<p onclick="del(event)" class="buy" id="${mylist[i].id}"}>删除 </p>`              
             tbody.append(omg)
         }
    }, 
    function (reason) {
        console.log('reason = ', reason)
    })

    

    function del(e){

        //let id=document.getElementById("s10").value;
     
        console.log(e.target.id)
     
        var data = JSON.stringify({
           "num":localStorage.getItem("xh"),
           "id":e.target.id})
     
     var config = {
        method: 'post',
        url: 'http://62.234.11.20:8088/goods/deleteGoods',
        headers: { 
           'User-Agent': 'Apifox/1.0.0 (https://apifox.com)', 
           'Content-Type': 'application/json'
        },
        data : data
     };
     
     axios(config)
     .then(function (response) {
        console.log(JSON.stringify(response.data));
        if(response.data.code!=200){alert(response.data.msg);document.getElementById("s10").value=""}
        else{alert("删除成功！即将刷新页面");location.reload();}
     
     })
     .catch(function (error) {
        console.log(error);
     });
     }
















