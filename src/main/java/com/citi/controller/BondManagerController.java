package com.citi.controller;

import com.citi.bean.DemoBondsSalesRecord;
import com.citi.service.BondService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import java.sql.Date;
import java.text.SimpleDateFormat;
import java.util.List;

/**
 * @Auther: chenle
 * @Date: 2020/8/24 - 22:47
 * @Description: com.citi.controller
 * @version: 1.0
 */
@Controller

public class BondManagerController {

    @Autowired
    private BondService bondService;

    @RequestMapping(value = "/home", method = RequestMethod.GET)
    public String getSalesMessage(Model model) {
        int totalRecords = bondService.countTotalRecords();
        int totalSales = bondService.countTotalSales();
        System.out.println(totalRecords);
        System.out.println(totalSales);
        model.addAttribute("totalRecords", totalRecords);
        model.addAttribute("totalSales", totalSales);
        return "home";
    }

    @RequestMapping(value = "/insert", method = RequestMethod.POST)
    public String AddBondRecord(DemoBondsSalesRecord bond, Model model) {
        bondService.insertBond(bond);
        System.out.println(bond);
        List<DemoBondsSalesRecord> allRecords = bondService.selectRecent();
        model.addAttribute("allRecords", allRecords);
        return "insert";
    }

    @RequestMapping(value = "/select", method = RequestMethod.GET)
    public String selectBondRecord(@RequestParam(value = "salesName", defaultValue = "") String salesName, @RequestParam(value = "bondsName", defaultValue = "")String bondsName,
                                   @RequestParam(value = "stime", defaultValue = "")String stime, @RequestParam(value = "etime", defaultValue = "")String etime, Model model) {

        Date start_date = null;
        Date end_date = null;
        if (!stime.isEmpty()) {
            start_date = strToDate(stime);
        }
        if (!etime.isEmpty()) {
            end_date = strToDate(etime);
        }
        List<DemoBondsSalesRecord> demoBondsSalesRecords = bondService.selectBonds(salesName, bondsName, start_date, end_date);
        System.out.println(demoBondsSalesRecords);
        model.addAttribute("demoBondsSalesRecords", demoBondsSalesRecords);
        return "select";
    }

    public static java.sql.Date strToDate(String strDate) {
        String str = strDate;
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
        java.util.Date d = null;
        try {
            d = format.parse(str);
        } catch (Exception e) {
            e.printStackTrace();
        }
        java.sql.Date date = new java.sql.Date(d.getTime());
        return date;
    }


}
