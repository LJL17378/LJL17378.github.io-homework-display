var data = JSON.stringify({
   "num":localStorage.getItem("xh")
});

var config = {
   method: 'post',
   url: 'http://62.234.11.20:8088/balance/getBalance',
   headers: { 
      'User-Agent': 'Apifox/1.0.0 (https://apifox.com)', 
      'Content-Type': 'application/json'
   },
   data : data
};

axios(config)
.then(function (money) {
   console.log(money.data);
   let yue =document.querySelector(".money")
   yue.innerHTML=`<p id="yue"><b>您的余额为：${money.data.data}</b></p>`
   yue.value=money.data.data;
})
.catch(function (error) {
   console.log(error);
});

//"http://62.234.11.20:8088/balance/getBalance"


function charge(){
   let m=parseFloat(document.getElementById("money").value)
   let add=parseFloat(document.getElementById("充钱").value)
   let n=(m+add);
   console.log(n)
   var data = JSON.stringify({
      "num":localStorage.getItem("xh"),
      "balance":(m+add),
   });
   
   var config = {
      method: 'post',
      url: 'http://zyhcc.top:8088/balance/setBalance',
      headers: { 
         'User-Agent': 'Apifox/1.0.0 (https://apifox.com)', 
         'Content-Type': 'application/json'
      },
      data : data
   };
   
   axios(config)
   .then(function (response) {
      console.log(JSON.stringify(response.data));
      if (response.data.code==400)
         {
            alert(response.data.msg)
            location.reload();
         }
      else{
         alert("充值成功，即将刷新");
         location.reload();}
   })
   .catch(function (error) {
      console.log(error);
   });

}
