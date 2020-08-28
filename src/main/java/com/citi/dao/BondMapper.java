package com.citi.dao;

import com.citi.bean.DemoBondsSalesRecord;
import org.apache.ibatis.annotations.Mapper;

import java.sql.Date;
import java.util.List;

@Mapper
public interface BondMapper {

    public void insertBond(DemoBondsSalesRecord bond);

    public List<DemoBondsSalesRecord> selectBondByName(String salesName, String bondsName);

    public DemoBondsSalesRecord selectBondById(int id);

    public List<DemoBondsSalesRecord> selectRecent();

    public List<DemoBondsSalesRecord> selectBonds(String salesName, String bondsName, Date stime, Date etime);

    public int countTotalRecords();

    public int countTotalSales();
}
