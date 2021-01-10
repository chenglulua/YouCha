package com.youcha.entity;

/**
 * @ClassName User
 * @Description User实体类
 * @Author 程璐
 * @Date 2020-12-14 16:15
 */
public class User {

    private int userId;
    private String uName;

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getUName() {
        return uName;
    }

    public void setUName(String uName) {
        this.uName = uName;
    }

    @Override
    public String toString() {
        return "User{" +
                "userId=" + userId +
                ", uName='" + uName + '\'' +
                '}';
    }
}