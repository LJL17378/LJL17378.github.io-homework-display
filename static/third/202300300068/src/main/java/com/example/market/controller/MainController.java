package com.example.market.controller;

import com.example.market.data.po.Account;
import com.example.market.data.po.Goods;
import com.example.market.data.po.ShoppingCart;
import com.example.market.data.po.UploadList;
import com.example.market.data.vo.Result;
import com.example.market.mapper.AccountMapper;
import com.example.market.mapper.GoodsMapper;
import com.example.market.mapper.ShoppingCartMapper;
import com.example.market.mapper.UploadListMapper;
import com.example.market.service.MainService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class MainController {
    @Autowired
    MainService mainService;
    @Autowired
    GoodsMapper goodsMapper;
    @Autowired
    UploadListMapper uploadListMapper;
    @Autowired
    ShoppingCartMapper shoppingCartMapper;
    @Autowired
    AccountMapper accountMapper;
    //添加商品
    @PostMapping("/addgoods")
    public Result addGoods(@RequestBody Goods goods){
        return mainService.addGoods(goods);
    }
    //删除商品
    @PostMapping("/deletegoods")
    public String deleteGoods(@RequestBody Goods goods){
        goodsMapper.deleteGoodsByNumByName(goods.getNum(),goods.getName());
        return "success";
    }
    //修改商品
    @PostMapping("/updategoods")
    public String updateGoods(@RequestBody Goods goods){
        goodsMapper.updateGoodsByNumByName(goods);
        return "success";
    }
    //更新商品的库存
    @PostMapping("/updateinventory")
    public String updateInventory(@RequestBody Goods goods){
        goodsMapper.updateGoodsByName(goods);
        return "success";
    }
    //添加你所添加的商品表
    @PostMapping("/adduploadlist")
    public Result addUploadList(@RequestBody UploadList uploadList){
        return mainService.addUploadList(uploadList);
    }
    //删除你所添加的商品表
    @PostMapping("/deleteuploadlist")
    public String deleteUploadList(@RequestBody UploadList uploadList){
        uploadListMapper.deleteUploadListByNumByName(uploadList.getNum(),uploadList.getName());
        return "success";
    }
    @PostMapping("/updateuploadlist")
    public String updateUploadList(@RequestBody UploadList uploadList){
        uploadListMapper.updateUploadListByNumByName(uploadList);
        return "success";
    }
    //获取购物车的内容
    @PostMapping("/getcart")
    public Result getCart(@RequestBody ShoppingCart shoppingCart){
        return Result.success(shoppingCartMapper.findCartByNameByNum(shoppingCart.getName(),
                shoppingCart.getNum()));

    }
    //添加购物车中的内容
    @PostMapping("/addcart")
    public Result addCart(@RequestBody ShoppingCart shoppingCart){
        return mainService.addCart(shoppingCart);
    }
    //修改购物车中的内容
    @PostMapping("/updatecart")
    public String updateCart(@RequestBody ShoppingCart shoppingCart){
        shoppingCartMapper.updateShoppingCartByName(shoppingCart);
        return "success";
    }
    //删除购物车中的内容
    @PostMapping("/deletecart")
    public String deleteCart(@RequestBody ShoppingCart shoppingCart){
        shoppingCartMapper.deleteCartByName(shoppingCart.getName(),shoppingCart.getNum());
        return "success";
    }
    //添加用户
    @PostMapping("/addaccount")
    public Result addAccount(@RequestBody Account account){
        return mainService.addAccount(account);
    }
    //获取account的数据
    @PostMapping("/getaccount")
    public Result getAccount(@RequestBody Account account){
        return mainService.getAccount(account);
    }
    //修改account的余额
    @PostMapping("/updateaccount")
    public String updateAccount(@RequestBody Account account){
        accountMapper.updateAccountByNum(account);
        return "success";
    }
    //输出商品
    @PostMapping("/outputgoods")
    public List<Goods> outputGoods(){
        return goodsMapper.findAllGoods();
    }
    //输出购物车内容
    @PostMapping("/outputcart")
    public List<ShoppingCart> outputCart(@RequestBody ShoppingCart shoppingCart){
        return shoppingCartMapper.findAllCart(shoppingCart.getNum());
    }
    //输出你所输入的商品信息
    @PostMapping("/outputuploadlist")
    public List<UploadList> outputUploadList(@RequestBody UploadList uploadList){
        return uploadListMapper.findAllByNum(uploadList.getNum());
    }
    //获取商品信息
    @PostMapping("/getgoods")
    public Result getGoods(@RequestBody Goods goods){
        return Result.success(goodsMapper.findGoodByName(goods.getName()));
    }
    //得到用户上传的商品
    @PostMapping("/getuploadlist")
    public Result getUploadList(@RequestBody UploadList uploadList){
        return Result.success(uploadListMapper.findUploadListByName(uploadList.getName()));
    }
}
