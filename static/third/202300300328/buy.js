function buy (){

   
    let id=parseInt(document.getElementById("s8").value);
    let count =document.getElementById("s9").value;
    

    var data = JSON.stringify
    ({
        "num": localStorage.getItem("xh"),
        "id":id,
        "count":count,
    })

    var config = {
       method: 'post',
       url: 'http://zyhcc.top:8088/goods/buy',
       headers: { 
          'User-Agent': 'Apifox/1.0.0 (https://apifox.com)', 
          'Content-Type': 'application/json'
       },
       data : data
    };
    
    axios(config)
    .then(function (response) {
       console.log(JSON.stringify(response.data));
       if(response.data.code!=200){alert(response.data.msg);location.reload();}
       else{alert("购买成功！即将刷新页面");location.reload();}
    })
    .catch(function (error) {
       console.log(error);
    });


}
