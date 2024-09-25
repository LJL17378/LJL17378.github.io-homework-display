package com.example.market.service;

import com.example.market.data.po.Account;
import com.example.market.data.po.Goods;
import com.example.market.data.po.ShoppingCart;
import com.example.market.data.po.UploadList;
import com.example.market.data.vo.Result;
import com.example.market.mapper.AccountMapper;
import com.example.market.mapper.GoodsMapper;
import com.example.market.mapper.ShoppingCartMapper;
import com.example.market.mapper.UploadListMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MainService {
    @Autowired
    GoodsMapper goodsMapper;
    @Autowired
    ShoppingCartMapper shoppingCartMapper;
    @Autowired
    UploadListMapper uploadListMapper;
    @Autowired
    AccountMapper accountMapper;
    //添加用户
    public Result addAccount(Account account){
        Account account1 = new Account(null,account.getNum(),account.getBalance());
        accountMapper.insert(account1);
        return Result.success(account1);
    }
    //添加用户输入的商品表
    public Result addUploadList(UploadList uploadList){
        UploadList uploadList1 = new UploadList(null,uploadList.getNum(),uploadList.getName(),uploadList.getDescription(),
                uploadList.getInventory(),uploadList.getPrice());
        uploadListMapper.insert(uploadList1);
        return Result.success(uploadList1);
    }
    //添加总商品表
    public Result addGoods(Goods goods){
        Goods goods1 = new Goods(null,goods.getNum(),goods.getName(),goods.getDescription(),
                goods.getInventory(),goods.getPrice());
        goodsMapper.insert(goods1);
        return Result.success(goods1);
    }
    //添加购物车
    public Result addCart(ShoppingCart shoppingCart){
        ShoppingCart shoppingCart1 = new ShoppingCart(null,shoppingCart.getName(),shoppingCart.getPrice()
                ,shoppingCart.getCount(),shoppingCart.getNum());
        shoppingCartMapper.insert(shoppingCart1);
        return Result.success(shoppingCart1);
    }
    //获取用户
    public Result getAccount(Account account){
        return Result.success(accountMapper.findAccountByNum(account.getNum()));
    }
}
