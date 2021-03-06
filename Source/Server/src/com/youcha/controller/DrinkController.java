package com.youcha.controller;

import com.youcha.entity.Drink;
import com.youcha.service.DrinkService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.multipart.commons.CommonsMultipartResolver;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Iterator;

/**
 * @ClassName DrinkController
 * @Description Drink控制器类
 * @Date 2021-01-10 15:25
 */
@Controller
@RequestMapping("drink")
public class DrinkController {

    @Resource
    private DrinkService drinkService;

    /**
     * @Description 前端随机推荐num个饮品
     * @Param [num]
     * @Return java.util.ArrayList<com.youcha.entity.Drink>
     */
    @ResponseBody
    @RequestMapping("randomDrinks")
    public ArrayList<Drink> randomDrinks(@RequestParam("num") int num) {
        return this.drinkService.randomDrinks(num);
    }

    /**
     * @Description 后台根据price区间查找饮品
     * @Param [low, high]
     * @Return java.util.ArrayList<com.youcha.entity.Drink>
     */
    @ResponseBody
    @RequestMapping("getDrinkByPrice")
    public ArrayList<Drink> getDrinkByPrice(
            @RequestParam("low") int low, @RequestParam("high") int high){
        return this.drinkService.getDrinkByPrice(low, high);
    }

    /**
     * @Description 后台根据dName模糊查找饮品
     * @Param [str]
     * @Return java.util.ArrayList<com.youcha.entity.Drink>
     */
    @ResponseBody
    @RequestMapping("getDrinkByDName")
    public ArrayList<Drink> getDrinkByDName(@RequestParam("str") String str){
        return this.drinkService.getDrinksByName(str);
    }

    /**
     * @Description 后台编辑饮品
     * @Param [newDrink]
     * @Return boolean
     */
    @ResponseBody
    @RequestMapping("updateDrink")
    public boolean updateDrink(@RequestBody Drink newDrink){
        return this.drinkService.updateDrink(newDrink);
    }

    /**
     * @Description 后台根据drinkId查看饮品
     * @Param [drinkId]
     * @Return com.youcha.entity.Drink
     */
    @ResponseBody
    @RequestMapping("getDrinkByDrinkId")
    public Drink getDrinkByDrinkId(@RequestParam("drinkId") int drinkId){
        return this.drinkService.getDrink(drinkId);
    }

    /**
     * @Description 后台获取所有饮品
     * @Param []
     * @Return java.util.ArrayList<com.youcha.entity.Drink>
     */
    @ResponseBody
    @RequestMapping("getAllDrink")
    public ArrayList<Drink> getAllDrink(){
        return this.drinkService.getAllDrinks();
    }

    /**
     * @Description 后台新增饮品
     * @Param [newDrink]
     * @Return boolean
     */
    @ResponseBody
    @RequestMapping("addDrink")
    public boolean addDrink(@RequestBody Drink newDrink){
        return this.drinkService.addDrink(newDrink);
    }

    /**
     * @Description 后台根据drinkId删除饮品
     * @Param [drinkId]
     * @Return boolean
     */
    @ResponseBody
    @RequestMapping("deleteDrinkByDrinkId")
    public boolean deleteDrinkByDrinkId(@RequestParam("drinkId") int drinkId){
        return this.drinkService.deleteDrinkById(drinkId);
    }

    /**
     * @Description 前端根据drinkId数组获取饮品
     * @Param [drinkIds]
     * @Return java.util.ArrayList<com.youcha.entity.Drink>
     */
    @ResponseBody
    @RequestMapping("getDrinkByDrinkIds")
    public ArrayList<Drink> getDrinkByDrinkIds(
            @RequestParam("drinkIds") ArrayList<Integer> drinkIds){
        return this.drinkService.getDrinkByDrinkIds(drinkIds);
    }

    /*后台饮品图片上传，使用spring mvc提供的类的方法上传文件*/
    /**
     * @Description 文件上传
     * @Param [request]
     * @Return boolean
     */
    @ResponseBody
    @RequestMapping(value = "upload1", method = RequestMethod.POST)
    public boolean upload(HttpServletRequest request) throws IOException {
        String imgPath = "H:/HeBeiShiDa/GraduationProject/YouCha/Source/drinkImg";
        //将当前上下文初始化给CommonsMutipartResolver（多部分解析器）
        CommonsMultipartResolver multipartResolver = new CommonsMultipartResolver(
                request.getSession().getServletContext());
        //检查form中是否有enctype="multipart/form-data"
        if(multipartResolver.isMultipart(request))
        {
            //将request变成多部分request
            MultipartHttpServletRequest multiRequest =
                    (MultipartHttpServletRequest)request;
            //获取multiRequest 中所有的文件名
            Iterator iter = multiRequest.getFileNames();
            while(iter.hasNext())
            {
                //一次遍历所有文件
                MultipartFile file = multiRequest.getFile(iter.next().toString());
                if(file != null)
                {
                    String imgName = file.getOriginalFilename();
                    String path = imgPath + "/" + imgName;
                    //上传
                    file.transferTo(new File(path));
                }
            }
        }
        return true;
    }

    /*将base64格式的字符串转换成二进制流，并转换成图片*/
    /**
     * @Description 文件上传
     * @Param [base64String]
     * @Return boolean
     */
    @ResponseBody
    @RequestMapping(value = "upload2", method = RequestMethod.POST)
    public  boolean changeBase64ToImage(String base64String){
        //base64格式字符串为空，返回false
        System.out.println(base64String);
        return false;
//        if(base64String == null){
//            return false;
//        }
//        BASE64Decoder decoder =new BASE64Decoder();
//        try {
//            //解码过程，即将base64字符串转换成二进制流
//            byte[] imageByte=decoder.decodeBuffer(base64String);
//
//            //生成图片路径和文件名
//            String pathString ="F://base64图片.jpg";
//            OutputStream out =new FileOutputStream(pathString);
//            out.write(imageByte);
//            /*
//             * 使用流时,都会有一个缓冲区,按一种它认为比较高效的方法来发数据:
//             * 把要发的数据先放到缓冲区,缓冲区放满以后再一次性发过去,而不是分开一次一次地发.
//             * 而flush()表示强制将缓冲区中的数据发送出去,不必等到缓冲区满.
//             * 所以如果在用流的时候,没有用flush()这个方法,很多情况下会出
//             * 现流的另一边读不到数据的问题,特别是在数据特别小的情况下.
//             */
//            out.flush();
//            out.close();
//            return true;
//        } catch (IOException e) {
//            // TODO Auto-generated catch block
//            return false;
//        }
    }
}