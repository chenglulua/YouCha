/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 80011
Source Host           : localhost:3306
Source Database       : youcha

Target Server Type    : MYSQL
Target Server Version : 80011
File Encoding         : 65001

Date: 2021-01-05 11:56:40
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
INSERT INTO `assessment` VALUES ('3', '30', '3');
INSERT INTO `assessment` VALUES ('4', '17', '5');

-- ----------------------------
-- Table structure for drink
-- ----------------------------
DROP TABLE IF EXISTS `drink`;
CREATE TABLE `drink` (
  `drinkId` int(11) NOT NULL,
  `dName` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `type` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `details` varchar(255) DEFAULT NULL,
  `price` int(11) DEFAULT '5',
  `pic` varchar(255) DEFAULT NULL,
  `brix` smallint(6) DEFAULT '0',
  `temp` smallint(6) DEFAULT '0',
  `extra` smallint(6) DEFAULT '0',
  `size` smallint(6) DEFAULT '1',
  `evStar` int(11) DEFAULT '5',
  PRIMARY KEY (`drinkId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of drink
-- ----------------------------
INSERT INTO `drink` VALUES ('1', '经典奶茶', '经典奶茶', null, '4', null, '1', '1', '1', '1', '5');
INSERT INTO `drink` VALUES ('2', '经典奶绿', '经典奶茶', null, '4', null, '1', '1', '1', '1', '4');
INSERT INTO `drink` VALUES ('3', '双拼奶茶', '经典奶茶', null, '5', null, '1', '1', '0', '1', '4');
INSERT INTO `drink` VALUES ('4', '奶茶三兄弟', '经典奶茶', null, '6', null, '1', '1', '0', '1', '4');
INSERT INTO `drink` VALUES ('5', '奶茶全家福', '经典奶茶', null, '7', null, '1', '1', '0', '0', '2');
INSERT INTO `drink` VALUES ('6', '鲜牛奶', '每日牛奶', null, '4', null, '1', '1', '0', '1', '3');
INSERT INTO `drink` VALUES ('7', '芒果牛奶', '每日牛奶', null, '5', null, '1', '1', '0', '1', '3');
INSERT INTO `drink` VALUES ('8', '草莓牛奶', '每日牛奶', null, '5', null, '1', '1', '0', '1', '5');
INSERT INTO `drink` VALUES ('9', '抹茶牛奶', '每日牛奶', null, '5', null, '1', '1', '0', '1', '2');
INSERT INTO `drink` VALUES ('10', '芋泥牛奶', '每日牛奶', null, '5', null, '0', '1', '0', '1', '4');
INSERT INTO `drink` VALUES ('11', '芋圆巧巧牛奶', '每日牛奶', null, '6', null, '1', '1', '0', '1', '5');
INSERT INTO `drink` VALUES ('12', '巧克力牛奶', '每日牛奶', null, '5', null, '1', '1', '0', '1', '5');
INSERT INTO `drink` VALUES ('13', '可可', '巧克力', null, '5', null, '1', '1', '0', '1', '4');
INSERT INTO `drink` VALUES ('14', '芋泥巧巧', '巧克力', null, '6', null, '0', '1', '0', '1', '5');
INSERT INTO `drink` VALUES ('15', '草莓酸奶', '酸奶果汁', null, '5', null, '0', '0', '0', '1', '5');
INSERT INTO `drink` VALUES ('16', '火龙果酸奶', '酸奶果汁', null, '5', null, '0', '0', '0', '1', '1');
INSERT INTO `drink` VALUES ('17', '西柚酸奶', '酸奶果汁', null, '5', null, '0', '0', '0', '1', '5');
INSERT INTO `drink` VALUES ('18', '燕麦水果酸奶', '酸奶果汁', null, '6', null, '0', '0', '0', '1', '5');
INSERT INTO `drink` VALUES ('19', '百香果养乐多', '酸奶果汁', null, '6', null, '0', '0', '0', '1', '5');
INSERT INTO `drink` VALUES ('20', '柠檬养乐多', '酸奶果汁', null, '6', null, '0', '0', '0', '1', '4');
INSERT INTO `drink` VALUES ('21', '青柠养乐多', '酸奶果汁', null, '6', null, '0', '0', '0', '1', '5');
INSERT INTO `drink` VALUES ('22', '红茶奶盖', '特色奶盖', null, '6', null, '1', '1', '1', '1', '4');
INSERT INTO `drink` VALUES ('23', '绿茶奶盖', '特色奶盖', null, '6', null, '1', '1', '1', '1', '5');
INSERT INTO `drink` VALUES ('24', '芒果奶盖', '特色奶盖', null, '7', null, '1', '1', '0', '1', '5');
INSERT INTO `drink` VALUES ('25', '黑糖珍珠奶盖茶', '特色奶盖', null, '7', null, '1', '1', '0', '1', '4');
INSERT INTO `drink` VALUES ('26', '奶盖牛乳茶', '特色奶盖', null, '5', null, '0', '0', '0', '1', '5');
INSERT INTO `drink` VALUES ('27', '抹茶芝士奶盖', '特色奶盖', null, '7', null, '1', '1', '0', '1', '5');
INSERT INTO `drink` VALUES ('28', '草莓冰激凌', '夏日冰冰', null, '5', null, '0', '0', '0', '1', '5');
INSERT INTO `drink` VALUES ('29', '草莓沙冰', '夏日冰冰', null, '5', null, '0', '0', '0', '1', '5');
INSERT INTO `drink` VALUES ('30', '冰鲜柠檬', '新鲜果饮', null, '3', null, '0', '0', '0', '1', '3');
INSERT INTO `drink` VALUES ('31', '冰鲜青柠', '新鲜果饮', null, '3', null, '0', '0', '0', '1', '5');
INSERT INTO `drink` VALUES ('32', '冰鲜猕猴桃', '新鲜果饮', null, '4', null, '0', '0', '0', '1', '3');
INSERT INTO `drink` VALUES ('33', '冰鲜石榴', '新鲜果饮', null, '4', null, '0', '0', '0', '1', '2');
INSERT INTO `drink` VALUES ('34', '冰鲜西瓜', '新鲜果饮', null, '4', null, '0', '0', '0', '1', '4');
INSERT INTO `drink` VALUES ('35', '冰鲜西柚', '新鲜果饮', null, '4', null, '0', '0', '0', '1', '4');
INSERT INTO `drink` VALUES ('36', '冰鲜芭乐', '新鲜果饮', null, '5', null, '0', '0', '0', '1', '3');
INSERT INTO `drink` VALUES ('37', '冰鲜蓝莓', '新鲜果饮', null, '5', null, '0', '0', '0', '1', '5');
INSERT INTO `drink` VALUES ('38', '冰鲜荔枝', '新鲜果饮', null, '5', null, '0', '0', '0', '1', '4');
INSERT INTO `drink` VALUES ('39', '柠檬红茶', '新鲜果饮', null, '4', null, '0', '0', '0', '1', '5');
INSERT INTO `drink` VALUES ('40', '青柠红茶', '新鲜果饮', null, '4', null, '0', '0', '0', '1', '3');
INSERT INTO `drink` VALUES ('41', '百香果红茶', '新鲜果饮', null, '5', null, '0', '0', '0', '1', '5');
INSERT INTO `drink` VALUES ('42', '青柠百香果', '新鲜果饮', null, '5', null, '0', '0', '0', '1', '3');
INSERT INTO `drink` VALUES ('43', '水果茶', '新鲜果饮', null, '5', null, '0', '0', '0', '1', '5');

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
  `tPrice` int(11) DEFAULT NULL,
  `code` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `status` smallint(6) DEFAULT NULL,
  PRIMARY KEY (`orderId`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of order
-- ----------------------------
INSERT INTO `order` VALUES ('1', '1', 'testUser1', '2020-12-6-15:05:03', '1', '1', 'none', 'ice', 'pearl', 'large', '2', '14', '06001', '1');
INSERT INTO `order` VALUES ('2', '1', 'testUser1', '2020-12-6-15:05:03', '2', '2', 'total', 'hot', null, 'middle', '1', '4', '06001', '1');
INSERT INTO `order` VALUES ('3', '2', 'testUser2', '2021-1-2-11:28:26', '30', '3', null, null, null, 'large', '1', '5', '02001', '1');
INSERT INTO `order` VALUES ('4', '3', 'testUser3', '2021-1-2-11:30:10', '17', '4', null, null, null, 'large', '1', '7', '02002', '1');
INSERT INTO `order` VALUES ('5', '4', 'testUser1', '2021-1-3-18:16:23', '25', null, 'half', 'hot', '', 'middle', '1', '7', '02003', '0');
INSERT INTO `order` VALUES ('6', '5', 'testUser2', '2021-1-3-18:16:25', '22', null, 'half', 'normal', 'pearl', 'large', '2', '18', '02004', '0');
INSERT INTO `order` VALUES ('7', '5', 'testUser2', '2021-1-3-18:16:23', '7', null, 'none', 'ice', null, 'middle', '1', '5', '02004', '0');

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
