function submit()
{   let name=document.getElementById("s1").value;
    let price =document.getElementById("s2").value;
    let description=document.getElementById("s3").value;
    let inventory=document.getElementById("s4").value;

    if (price>0)
    {
      var myHeaders = new Headers();
      var data = JSON.stringify({
        "num": localStorage.getItem("xh"),
        "name": name,
        "description": description,
        "inventory": inventory,
        "price": price
     });
     
     var config = {
        method: 'post',
        url: 'http://zyhcc.top:8088/goods/addGoods',
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
        else{alert("提交成功！即将刷新页面");location.reload();}
     })
     .catch(function (error) {
        console.log(error);
     });
    }
    else{alert("请输入一个正数！");
    document.getElementById("s1").value="";
    document.getElementById("s2").value="";
    document.getElementById("s3").value="";
    document.getElementById("s4").value="";}
    }


function edit(){


   let integer=document.getElementById("s5").value;
   let inventory=document.getElementById("s6").value;
   let description=document.getElementById("s7").value;

if(inventory>0)
{
      var data = JSON.stringify({
         "num":localStorage.getItem("xh"),
         "id":integer,
         "inventory":inventory,
         "description": description,
      })

      var config = {
      method: 'post',
      url: 'http://zyhcc.top:8088/goods/updateInventory',
      headers: { 
         'User-Agent': 'Apifox/1.0.0 (https://apifox.com)', 
         'Content-Type': 'application/json'
      },
      data : data};

      axios(config)
      .then(function (response) {
      console.log(JSON.stringify(response.data));

      if(response.data.code!=200){alert(response.data.msg);location.reload();}
      else{alert("编辑完成！即将刷新页面");location.reload();}
      })
      .catch(function (error) {
      console.log(error);
      });
   }     
else{alert("库存不能小于零！");document.getElementById("s6").value="";}
}








