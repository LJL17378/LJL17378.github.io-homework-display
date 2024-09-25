package com.example.market.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.example.market.data.po.Goods;
import com.example.market.data.po.UploadList;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Mapper
public interface UploadListMapper extends BaseMapper<UploadList> {
    //通过学号来查找该用户上传的商品表单
    @Select("select * from uploadlist where num =#{num}")
    List<UploadList> findAllByNum(String num);
    //通过商品名来查找上传的商品的数据
    @Select("select * from uploadlist where name=#{name}")
    UploadList findUploadListByName(String name);
    //通过商品名和学号来删除上传的商品
    @Delete("delete from uploadlist where num=#{num} and name=#{name}")
    void deleteUploadListByNumByName(String num,String name);
    //通过商品名和学号来修改上传商品的描述和库存
    @Update("Insert INTO `uploadlist` (`description`,`inventory`) VALUES (#{description},#{inventory})")
    @Transactional
    void save(UploadList uploadList);
    @Update("update uploadlist set description=#{description}, inventory=#{inventory} where num=#{num} and name=#{name}")
    @Transactional
    void updateUploadListByNumByName(UploadList uploadList);
}
