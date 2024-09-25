package com.example.market.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.example.market.data.po.ShoppingCart;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Mapper

public interface ShoppingCartMapper extends BaseMapper<ShoppingCart> {
    //通过商品名和学号来删除购物车中的商品
    @Delete("delete from shoppingcart where name=#{name} and num=#{num}")
    void deleteCartByName(String name,String num);
    //通过学号来特异性的导出购物车
    @Select("select * from shoppingcart where num=#{num}")
    List<ShoppingCart> findAllCart(String num);
    //通过商品名和学号来查找购物车
    @Select("select * from shoppingcart where name=#{name} and num=#{num}")
    ShoppingCart findCartByNameByNum(String name,String num);
    //通过商品名和学号来修改购物车中的商品数量
    @Update("Insert INTO `shoppingcart` (`count`) VALUES (#{count})")
    @Transactional
    void save(ShoppingCart shoppingCart);
    @Update("update shoppingcart set count=#{count} where name=#{name} and num=#{num}")
    @Transactional
    void updateShoppingCartByName(ShoppingCart shoppingCart);
}
