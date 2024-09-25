package com.example.market.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.example.market.data.po.Account;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;
import org.springframework.transaction.annotation.Transactional;

@Mapper
public interface AccountMapper extends BaseMapper<Account> {
    //通过学号取出余额
    @Select("select * from account where num=#{num}")
    Account findAccountByNum(String num);
    //用于更新用户的存款
    @Update("Insert INTO `account` (`balance`) VALUES (#{balance})")
    @Transactional
    void save(Account account);
    @Update("update account set balance=#{balance} where num=#{num}")
    @Transactional
    void updateAccountByNum(Account account);
}
