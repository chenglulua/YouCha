package com.youcha.entity;

/**
 * @ClassName Drink
 * @Description Drink实体类
 * @Date 2021-01-09 10:20
 */
public class Drink {

    private int drinkId;
    private String dName;
    private int typeId;
    private String details;
    private int price;
    private String img;
    private boolean brix;
    private boolean temp;
    private boolean extra;
    private boolean size;
    private int evStar;

    public int getDrinkId() {
        return drinkId;
    }

    public void setDrinkId(int drinkId) {
        this.drinkId = drinkId;
    }

    public String getDName() {
        return dName;
    }

    public void setDName(String dName) {
        this.dName = dName;
    }

    public int getTypeId() {
        return typeId;
    }

    public void setTypeId(int typeId) {
        this.typeId = typeId;
    }

    public String getDetails() {
        return details;
    }

    public void setDetails(String details) {
        this.details = details;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }

    public boolean getBrix() {
        return brix;
    }

    public void setBrix(boolean brix) {
        this.brix = brix;
    }

    public boolean getTemp() {
        return temp;
    }

    public void setTemp(boolean temp) {
        this.temp = temp;
    }

    public boolean getExtra() {
        return extra;
    }

    public void setExtra(boolean extra) {
        this.extra = extra;
    }

    public boolean getSize() {
        return size;
    }

    public void setSize(boolean size) {
        this.size = size;
    }

    public int getEvStar() {
        return evStar;
    }

    public void setEvStar(int evStar) {
        this.evStar = evStar;
    }

    @Override
    public String toString() {
        return "Drink{" +
                "drinkId=" + drinkId +
                ", dName='" + dName + '\'' +
                ", typeId=" + typeId +
                ", details='" + details + '\'' +
                ", price=" + price +
                ", img='" + img + '\'' +
                ", brix=" + brix +
                ", temp=" + temp +
                ", extra=" + extra +
                ", size=" + size +
                ", evStar=" + evStar +
                '}';
    }
}