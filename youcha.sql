/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 80011
Source Host           : localhost:3306
Source Database       : youcha

Target Server Type    : MYSQL
Target Server Version : 80011
File Encoding         : 65001

Date: 2021-01-04 11:12:01
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for assessment
-- ----------------------------
DROP TABLE IF EXISTS `assessment`;
CREATE TABLE `assessment` (
  `assId` int(11) NOT NULL,
  `drinkId` int(11) DEFAULT NULL,
  `star` int(11) DEFAULT NULL,
  PRIMARY KEY (`assId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of assessment
-- ----------------------------
INSERT INTO `assessment` VALUES ('1', '1', '5');
INSERT INTO `assessment` VALUES ('2', '2', '4');

-- ----------------------------
-- Table structure for drink
-- ----------------------------
DROP TABLE IF EXISTS `drink`;
CREATE TABLE `drink` (
  `drinkId` int(11) NOT NULL,
  `dName` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `type` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `details` varchar(255) DEFAULT NULL,
  `price` float(10,1) NOT NULL,
  `pic` varchar(255) DEFAULT NULL,
  `brix` smallint(6) DEFAULT NULL,
  `temp` smallint(6) DEFAULT NULL,
  `extra` smallint(6) DEFAULT NULL,
  `size` smallint(6) DEFAULT NULL,
  `evStar` int(11) DEFAULT NULL,
  PRIMARY KEY (`drinkId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of drink
-- ----------------------------
INSERT INTO `drink` VALUES ('1', '经典奶茶', '经典搭配', '经典红茶搭配纯正牛奶', '7.0', null, '1', '1', '1', '1', '5');
INSERT INTO `drink` VALUES ('2', '醇香可可', '醇香咖啡', '现磨云南可可豆', '10.0', null, '1', '1', '0', '1', '4');
INSERT INTO `drink` VALUES ('3', '柠檬鲜鲜', '新鲜柠檬', '新鲜柠檬', '4.0', null, '0', '0', '0', '1', '0');

-- ----------------------------
-- Table structure for order
-- ----------------------------
DROP TABLE IF EXISTS `order`;
CREATE TABLE `order` (
  `orderId` int(11) NOT NULL AUTO_INCREMENT,
  `oId` int(11) DEFAULT NULL,
  `userId` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `time` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `drinkId` int(11) DEFAULT NULL,
  `assId` int(11) DEFAULT NULL,
  `oBrix` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `oTemp` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `oExtra` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `oSize` varchar(20) DEFAULT NULL,
  `num` int(11) DEFAULT NULL,
  `tPrice` float(10,1) DEFAULT NULL,
  `code` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `status` smallint(6) DEFAULT NULL,
  PRIMARY KEY (`orderId`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of order
-- ----------------------------
INSERT INTO `order` VALUES ('1', '1', 'testUser1', '2020-12-6-15:05:03', '1', '1', 'noneBrix', 'ice', 'pearl', 'large', '2', '18.0', '0601', '0');
INSERT INTO `order` VALUES ('2', '1', 'testUser1', '2020-12-6-15:05:03', '2', '2', 'totalBrix', 'hot', null, 'middle', '1', '10.0', '0601', '0');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `userId` varchar(255) NOT NULL,
  `uName` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  PRIMARY KEY (`userId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('testUser1', '测试用户1');
INSERT INTO `user` VALUES ('testUser2', '测试用户2');
INSERT INTO `user` VALUES ('testUser3', '测试用户3');
