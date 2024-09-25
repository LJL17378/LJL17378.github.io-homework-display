package com.example.market.data.po;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@TableName("shoppingcart")
public class ShoppingCart {
    @TableId(type = IdType.AUTO)
    private Integer id;
    private String name;
    private Integer price;
    private Integer count;
    private String num;
}
