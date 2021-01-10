package com.youcha.entity;

/**
 * @ClassName Assessment
 * @Description Assessment实体类
 * @Author 程璐
 * @Date 2021-01-09 10:20
 */
public class Assessment {

    private int assId;
    private int drinkId;
    private int star;

    public int getAssId() {
        return assId;
    }

    public void setAssId(int assId) {
        this.assId = assId;
    }

    public int getDrinkId() {
        return drinkId;
    }

    public void setDrinkId(int drinkId) {
        this.drinkId = drinkId;
    }

    public int getStar() {
        return star;
    }

    public void setStar(int star) {
        this.star = star;
    }

    @Override
    public String toString() {
        return "Assessment{" +
                "assId=" + assId +
                ", drinkId=" + drinkId +
                ", star=" + star +
                '}';
    }
}