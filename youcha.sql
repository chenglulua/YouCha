/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 80011
Source Host           : localhost:3306
Source Database       : youcha

Target Server Type    : MYSQL
Target Server Version : 80011
File Encoding         : 65001

Date: 2020-12-06 16:34:39
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for assessment
-- ----------------------------
DROP TABLE IF EXISTS `assessment`;
CREATE TABLE `assessment` (
  `assId` int(11) NOT NULL,
  `drinkId` int(11) DEFAULT NULL,
  `star` float(10,1) DEFAULT NULL,
  PRIMARY KEY (`assId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of assessment
-- ----------------------------
INSERT INTO `assessment` VALUES ('1', '1', '5.0');
INSERT INTO `assessment` VALUES ('2', '2', '4.0');

-- ----------------------------
-- Table structure for drink
-- ----------------------------
DROP TABLE IF EXISTS `drink`;
CREATE TABLE `drink` (
  `drinkId` int(11) NOT NULL,
  `dName` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `details` varchar(255) DEFAULT NULL,
  `price` float(10,1) NOT NULL,
  `pic` varchar(255) DEFAULT NULL,
  `brix` varchar(20) DEFAULT NULL,
  `temp` varchar(20) DEFAULT NULL,
  `extra` varchar(20) DEFAULT NULL,
  `size` varchar(20) DEFAULT NULL,
  `type` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `evStar` float(10,1) DEFAULT NULL,
  PRIMARY KEY (`drinkId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of drink
-- ----------------------------
INSERT INTO `drink` VALUES ('1', '经典奶茶', '经典红茶搭配纯正牛奶', '7.0', null, '1', '1', '1', '1', '经典搭配', '5.0');
INSERT INTO `drink` VALUES ('2', '醇香可可', '现磨云南可可豆', '10.0', null, '1', '1', '0', '1', '醇香咖啡', '4.0');
INSERT INTO `drink` VALUES ('3', '柠檬鲜鲜', '新鲜柠檬', '4.0', null, '0', '0', '0', '1', '新鲜柠檬', '0.0');

-- ----------------------------
-- Table structure for order
-- ----------------------------
DROP TABLE IF EXISTS `order`;
CREATE TABLE `order` (
  `orderId` int(11) NOT NULL AUTO_INCREMENT,
  `time` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `userId` varchar(255) DEFAULT NULL,
  `drinkId` int(11) DEFAULT NULL,
  `assId` int(11) DEFAULT NULL,
  `oBrix` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `oTemp` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `oExtra` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `oSize` varchar(20) DEFAULT NULL,
  `num` int(11) DEFAULT NULL,
  `code` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `tPrice` float(10,1) DEFAULT NULL,
  PRIMARY KEY (`orderId`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of order
-- ----------------------------
INSERT INTO `order` VALUES ('1', '2020-12-6-15:05:03', 'testUser1', '1', '1', 'noneBrix', 'ice', 'pearl', 'large', '2', '1', '0', '18.0');
INSERT INTO `order` VALUES ('2', '2020-12-6-15:05:03', 'testUser1', '2', '2', 'totalBrix', 'hot', null, 'middle', '1', '1', '0', '10.0');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `userId` varchar(255) NOT NULL,
  `phone` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `uName` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  PRIMARY KEY (`userId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('testUser1', '15316221594', '测试用户1');
INSERT INTO `user` VALUES ('testUser2', '15346497851', '测试用户2');
INSERT INTO `user` VALUES ('testUser3', '18469762594', '测试用户3');
