package com.youcha.entity;

/**
 * @ClassName Type
 * @Description Type实体类
 * @Author 程璐
 * @Date 2021-01-18 14:08
 */
public class Type {

    private int typeId;
    private String tName;

    public int getTypeId() {
        return typeId;
    }

    public void setTypeId(int typeId) {
        this.typeId = typeId;
    }

    public String getTName() {
        return tName;
    }

    public void setTName(String tName) {
        this.tName = tName;
    }

    @Override
    public String toString() {
        return "Type{" +
                "typeId=" + typeId +
                ", tName='" + tName + '\'' +
                '}';
    }
}