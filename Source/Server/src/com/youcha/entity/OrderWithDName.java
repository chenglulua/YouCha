package com.youcha.entity;

/**
 * @ClassName OrderWithDName
 * @Description order带有dName的pojo对象
 * @Date 2021-02-25 11:22
 */
public class OrderWithDName {

    private int orderId;
    private int oId;
    private String userId;
    private String time;
    private int drinkId;
    private int assId;
    private String oBrix;
    private String oTemp;
    private String oExtra;
    private String oSize;
    private int num;
    private int tPrice;
    private String code;
    private boolean status;
    private String dName;

    public int getOrderId() {
        return orderId;
    }

    public void setOrderId(int orderId) {
        this.orderId = orderId;
    }

    public int getOId() {
        return oId;
    }

    public void setOId(int oId) {
        this.oId = oId;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public int getDrinkId() {
        return drinkId;
    }

    public void setDrinkId(int drinkId) {
        this.drinkId = drinkId;
    }

    public int getAssId() {
        return assId;
    }

    public void setAssId(int assId) {
        this.assId = assId;
    }

    public String getOBrix() {
        return oBrix;
    }

    public void setOBrix(String oBrix) {
        this.oBrix = oBrix;
    }

    public String getOTemp() {
        return oTemp;
    }

    public void setOTemp(String oTemp) {
        this.oTemp = oTemp;
    }

    public String getOExtra() {
        return oExtra;
    }

    public void setOExtra(String oExtra) {
        this.oExtra = oExtra;
    }

    public String getOSize() {
        return oSize;
    }

    public void setOSize(String oSize) {
        this.oSize = oSize;
    }

    public int getNum() {
        return num;
    }

    public void setNum(int num) {
        this.num = num;
    }

    public int getTPrice() {
        return tPrice;
    }

    public void setTPrice(int tPrice) {
        this.tPrice = tPrice;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public boolean getStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    public String getDName() {
        return dName;
    }

    public void setDName(String dName) {
        this.dName = dName;
    }

    @Override
    public String toString() {
        return "OrderWithDName{" +
                "orderId=" + orderId +
                ", oId=" + oId +
                ", userId='" + userId + '\'' +
                ", time='" + time + '\'' +
                ", drinkId=" + drinkId +
                ", assId=" + assId +
                ", oBrix='" + oBrix + '\'' +
                ", oTemp='" + oTemp + '\'' +
                ", oExtra='" + oExtra + '\'' +
                ", oSize='" + oSize + '\'' +
                ", num=" + num +
                ", tPrice=" + tPrice +
                ", code='" + code + '\'' +
                ", status=" + status +
                ", dName='" + dName + '\'' +
                '}';
    }
}