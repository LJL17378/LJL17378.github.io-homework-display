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
@TableName("uploadlist")
public class UploadList {
    @TableId(type = IdType.AUTO)
    private Integer id;
    private String num;
    private String name;
    private String description;
    private Integer inventory;
    private double price;
}
