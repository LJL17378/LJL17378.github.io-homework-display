package com.example.market.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.example.market.data.po.Goods;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Mapper
public interface GoodsMapper extends BaseMapper<Goods> {
    //用于输出所有的商品
    @Select("select * from goods")
    List<Goods> findAllGoods();
    //通过商品名查找数据
    @Select("select * from goods where name=#{name}")
    Goods findGoodByName(String name);
    //通过num和name来删除商品
    @Delete("delete from goods where num=#{num} and name=#{name}")
    void deleteGoodsByNumByName(String num,String name);
    //更新商品的描述和库存
    @Update("Insert INTO `goods` (`description`,`inventory`) VALUES (#{description},#{inventory})")
    @Transactional
    void save1(Goods goods);
    @Update("update goods set description=#{description}, inventory=#{inventory} where num=#{num} and name=#{name}")
    @Transactional
    void updateGoodsByNumByName(Goods goods);
    //用于购买时的库存修改
    @Update("Insert INTO `goods` (`inventory`) VALUES (#{inventory})")
    @Transactional
    void save2(Goods goods);
    @Update("update goods set inventory=#{inventory} where name=#{name}")
    @Transactional
    void updateGoodsByName(Goods goods);
}
