package com.youcha.entity;

/**
 * @ClassName ShoppingCart
 * @Description ShoppingCart实体类
 * @Date 2021-02-18 11:36
 */
public class ShoppingCart {

    private int sId;
    private String userId;
    private int drinkId;
    private String sBrix;
    private String sTemp;
    private String sExtra;
    private String sSize;
    private int num;

    public int getsId() {
        return sId;
    }

    public void setsId(int sId) {
        this.sId = sId;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public int getDrinkId() {
        return drinkId;
    }

    public void setDrinkId(int drinkId) {
        this.drinkId = drinkId;
    }

    public String getsBrix() {
        return sBrix;
    }

    public void setsBrix(String sBrix) {
        this.sBrix = sBrix;
    }

    public String getsTemp() {
        return sTemp;
    }

    public void setsTemp(String sTemp) {
        this.sTemp = sTemp;
    }

    public String getsExtra() {
        return sExtra;
    }

    public void setsExtra(String sExtra) {
        this.sExtra = sExtra;
    }

    public String getsSize() {
        return sSize;
    }

    public void setsSize(String sSize) {
        this.sSize = sSize;
    }

    public int getNum() {
        return num;
    }

    public void setNum(int num) {
        this.num = num;
    }

    @Override
    public String toString() {
        return "ShoppingCart{" +
                "sId=" + sId +
                ", userId='" + userId + '\'' +
                ", drinkId=" + drinkId +
                ", sBrix='" + sBrix + '\'' +
                ", sTemp='" + sTemp + '\'' +
                ", sExtra='" + sExtra + '\'' +
                ", sSize='" + sSize + '\'' +
                ", num=" + num +
                '}';
    }
}