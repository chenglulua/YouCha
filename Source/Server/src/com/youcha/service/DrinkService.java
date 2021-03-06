package com.youcha.service;

import com.youcha.dao.drinkDao.DrinkMapper;
import com.youcha.entity.Drink;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import sun.misc.BASE64Decoder;
import sun.misc.BASE64Encoder;

import javax.annotation.Resource;
import java.io.*;
import java.util.ArrayList;
import java.util.Random;

/**
 * @ClassName DrinkService
 * @Description Drink应用逻辑层
 * @Date 2021-01-10 15:25
 */
@Service
@Transactional(readOnly = false)
public class DrinkService {

    @Resource
    private DrinkMapper drinkMapper;

    /**
     * @Description 前端随机推荐num个饮品
     * @Param [num]
     * @Return java.util.ArrayList<com.youcha.entity.Drink>
     */
    public ArrayList<Drink> randomDrinks(int num) {
        //1.求出饮品数量
        int sum = drinkMapper.getDrinkNum();
        System.out.println("数据库内饮品数量为：" + sum);
        //2.生成num个不重复的随机数，随机范围为[0-sum)
        int[] randomList = getRandom(sum, num);
        //3.将推荐移动到[1,sum]之间
        for (int i = 0; i < num; i++){
            randomList[i] += 1;
        }
        System.out.println("随机饮品id为：" + randomList[0]+ "，" +
                randomList[1] + "，" + randomList[2]);
        //4.获取num个饮品信息
        ArrayList<Drink> drinkList = new ArrayList<>(num);
        for (int i = 0; i < num; i++){
            Drink drink = drinkMapper.getDrinkById(randomList[i]);
            drinkList.add(drink);
        }
        System.out.println(drinkList);
        return drinkList;
    }

    /**
     * @Description 后台根据价格区间查找饮品
     * @Param [low, high]
     * @Return java.util.ArrayList<com.youcha.entity.Drink>
     */
    public ArrayList<Drink> getDrinkByPrice(int low, int high) {
        ArrayList<Drink> drinkList = drinkMapper.getDrinkByPrice(low, high);
        System.out.println(drinkList);
        return drinkList;
    }

    /**
     * @Description 后台根据名称模糊查找饮品
     * @Param [str]
     * @Return java.util.ArrayList<com.youcha.entity.Drink>
     */
    public ArrayList<Drink> getDrinksByName(String str) {
        ArrayList<Drink> drinkList = drinkMapper.getDrinkByName(str);
        System.out.println(drinkList);
        return drinkList;
    }

    /**
     * @Description 后台编辑饮品信息
     * @Param [newDrink]
     * @Return boolean
     */
    public boolean updateDrink(Drink newDrink) {
        int result = drinkMapper.updateDrink(newDrink);
        if (result == 1){
            System.out.println("更新成功");
            return true;
        } else {
            System.out.println("更新失败");
            return false;
        }
    }

    /**
     * @Description 后台查看单个饮品信息
     * @Param [drinkId]
     * @Return com.youcha.entity.Drink
     */
    public Drink getDrinkByDrinkId(int drinkId) {
        Drink drink = drinkMapper.getDrinkById(drinkId);
        System.out.println(drink);
        return drink;
    }

    /**
     * @Description 后台获取所有饮品
     * @Param []
     * @Return java.util.ArrayList<com.youcha.entity.Drink>
     */
    public ArrayList<Drink> getAllDrinks() {
        ArrayList<Drink> drinkList = drinkMapper.getAllDrinks();
        System.out.println(drinkList);
        return drinkList;
    }

    /**
     * @Description 后台新增饮品
     * @Param [newDrink]
     * @Return boolean
     */
    public boolean addDrink(Drink newDrink) {
        //1、设置drinkId = num + 1
        int drinkId = drinkMapper.getDrinkNum();
        newDrink.setDrinkId(drinkId + 1);
        //2、处理图片
        String imgName = drinkId + ".jpg";
        changeBase64ToImg(newDrink.getImg(), imgName);
        newDrink.setImg("drinkImg/" + imgName);
        //3、新增饮品
        int result = drinkMapper.insertDrink(newDrink);
        System.out.println("新增饮品结果：" + result);
        return true;
    }

    /**
     * @Description 前端更改drink表中的evStar
     * @Param [evStar]
     * @Return boolean
     */
    public boolean updateDrinkEvStarByDrinkId(int drinkId, int evStar) {
        boolean result = drinkMapper.updateDrinkEvStar(drinkId, evStar);
        System.out.println("evStar更改结果：" + result);
        return result;
    }

    /**
     * @Description 后台删除饮品
     * @Param [drinkId]
     * @Return boolean
     */
    public boolean deleteDrinkById(int drinkId) {
        boolean result = drinkMapper.deleteDrinkById(drinkId);
        System.out.println(result);
        return result;
    }

    /**
     * @Description 前端根据drinkId数组获取饮品
     * @Param [drinkIds]
     * @Return java.util.ArrayList<com.youcha.entity.Drink>
     */
    public ArrayList<Drink> getDrinkByDrinkIds(ArrayList<Integer> drinkIds) {
        ArrayList<Drink> drinkList = new ArrayList<>();
        for (int drinkId: drinkIds) {
            Drink drink = drinkMapper.getDrinkById(drinkId);
            drinkList.add(drink);
        }
        System.out.println(drinkList);
        return drinkList;
    }

    /**
     * @Description 在[0-sum)中生成num个不重复的随机数
     * @Param [sum, num]
     * @Return int[]
     */
    private static int[] getRandom(int sum, int num) {
        //list保存随机数
        int[] list = new int[num];
        Random random = new Random();
        boolean[] bool = new boolean[sum];
        int j = 0;
        for (int i = 0; i < num; i++){
            do {
                //如果产生的随机数已存在，则继续循环
                j = random.nextInt(sum);
            } while (bool[j]);
            bool[j] = true;
            list[i] = j;
        }
        return list;
    }

    /**
     * @Description 将base64格式的字符串转换成二进制流，并转换成图片
     * @Param [base64String, imgName]
     * @Return boolean
     */
    public boolean changeBase64ToImg(String base64String, String imgName){
        //base64格式字符串为空，返回false
        if(base64String == null){
            return false;
        }
        BASE64Decoder decoder = new BASE64Decoder();
        try {
            //图片解码
            FileOutputStream write = new FileOutputStream(
                    new File("d://" + imgName));
            byte[] decoderBytes = decoder.decodeBuffer(base64String.split(",")[1]);
            write.write(decoderBytes);
            write.close();
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return true;
    }

    /**
     * 图片编码
     */
    public String changeImgToBase64(String imgString){
        // 待处理的图片
        String imgFile = "d:/43.png";
        InputStream in = null;
        byte[] data = null;
        // 返回Base64编码过的字节数组字符串
        String encode = null;
        // 对字节数组Base64编码
        BASE64Encoder encoder = new BASE64Encoder();
        try {
            // 读取图片字节数组
            in = new FileInputStream(imgFile);
            data = new byte[in.available()];
            in.read(data);
            encode = encoder.encode(data);
        }catch (IOException e) {
            e.printStackTrace();
        } finally {
            try {
                in.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        return encode;
    }
}