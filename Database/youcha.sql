/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 80011
Source Host           : localhost:3306
Source Database       : youcha

Target Server Type    : MYSQL
Target Server Version : 80011
File Encoding         : 65001

Date: 2021-01-17 16:58:12
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
  `typeId` int(11) DEFAULT NULL,
  `details` varchar(255) DEFAULT NULL,
  `price` int(11) DEFAULT '5',
  `img` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
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
INSERT INTO `drink` VALUES ('1', '经典奶茶', '1', '牛奶搭配红茶', '4', 'drinkImg/1.jpg', '1', '1', '1', '1', '5');
INSERT INTO `drink` VALUES ('2', '经典奶绿', '1', '牛奶搭配绿茶', '4', 'drinkImg/2.jpg', '1', '1', '1', '1', '4');
INSERT INTO `drink` VALUES ('3', '双拼奶茶', '1', '布丁与珍珠', '5', 'drinkImg/3.jpg', '1', '1', '0', '1', '4');
INSERT INTO `drink` VALUES ('4', '奶茶三兄弟', '1', '布丁、珍珠与椰果', '6', 'drinkImg/4.jpg', '1', '1', '0', '1', '4');
INSERT INTO `drink` VALUES ('5', '奶茶全家福', '1', '饱腹感极强', '7', 'drinkImg/5.jpg', '1', '1', '0', '0', '2');
INSERT INTO `drink` VALUES ('6', '鲜牛奶', '2', '新鲜牛奶', '4', 'drinkImg/6.jpg', '1', '1', '0', '1', '3');
INSERT INTO `drink` VALUES ('7', '芒果牛奶', '2', '芒果搭配牛奶', '5', 'drinkImg/7.jpg', '1', '1', '0', '1', '3');
INSERT INTO `drink` VALUES ('8', '草莓牛奶', '2', '草莓搭配牛奶', '5', 'drinkImg/8.jpg', '1', '1', '0', '1', '5');
INSERT INTO `drink` VALUES ('9', '抹茶牛奶', '2', '抹茶搭配牛奶', '5', 'drinkImg/9.png', '1', '1', '0', '1', '2');
INSERT INTO `drink` VALUES ('10', '芋泥牛奶', '2', '芋泥搭配牛奶', '5', 'drinkImg/10.jpg', '0', '1', '0', '1', '4');
INSERT INTO `drink` VALUES ('11', '芋圆巧巧牛奶', '2', '芋圆与巧克力', '6', 'drinkImg/11.png', '1', '1', '0', '1', '5');
INSERT INTO `drink` VALUES ('12', '巧克力牛奶', '2', '香浓巧克力搭配牛奶', '5', 'drinkImg/12.jpg', '1', '1', '0', '1', '5');
INSERT INTO `drink` VALUES ('13', '可可', '3', '香浓巧克力', '5', 'drinkImg/13.jpg', '1', '1', '0', '1', '4');
INSERT INTO `drink` VALUES ('14', '芋泥巧巧', '3', '芋泥搭配巧克力', '6', 'drinkImg/14.jpg', '0', '1', '0', '1', '5');
INSERT INTO `drink` VALUES ('15', '草莓酸奶', '4', '草莓搭配酸奶', '5', 'drinkImg/15.jpg', '0', '0', '0', '1', '5');
INSERT INTO `drink` VALUES ('16', '火龙果酸奶', '4', '火龙果搭配酸奶', '5', 'drinkImg/16.jpg', '0', '0', '0', '1', '1');
INSERT INTO `drink` VALUES ('17', '西柚酸奶', '4', '西柚搭配酸奶', '5', 'drinkImg/17.jpg', '0', '0', '0', '1', '5');
INSERT INTO `drink` VALUES ('18', '燕麦水果酸奶', '4', '燕麦与水果', '6', 'drinkImg/18.jpg', '0', '0', '0', '1', '5');
INSERT INTO `drink` VALUES ('19', '百香果养乐多', '4', '百香果搭配养乐多', '6', 'drinkImg/19.jpg', '0', '0', '0', '1', '5');
INSERT INTO `drink` VALUES ('20', '柠檬养乐多', '4', '柠檬搭配养乐多', '6', 'drinkImg/20.jpg', '0', '0', '0', '1', '4');
INSERT INTO `drink` VALUES ('21', '青柠养乐多', '4', '青柠搭配养乐多', '6', 'drinkImg/21.jpg', '0', '0', '0', '1', '5');
INSERT INTO `drink` VALUES ('22', '红茶奶盖', '5', '咸香奶盖搭配奶茶', '6', 'drinkImg/22.jpg', '1', '1', '1', '1', '4');
INSERT INTO `drink` VALUES ('23', '绿茶奶盖', '5', '咸香奶盖搭配奶绿', '6', 'drinkImg/23.jpg', '1', '1', '1', '1', '5');
INSERT INTO `drink` VALUES ('24', '芒果奶盖', '5', '咸香奶盖与芒果果肉', '7', 'drinkImg/24.jpg', '1', '1', '0', '1', '5');
INSERT INTO `drink` VALUES ('25', '黑糖珍珠奶盖茶', '5', '咸香奶盖与黑糖珍珠', '7', 'drinkImg/25.jpg', '1', '1', '0', '1', '4');
INSERT INTO `drink` VALUES ('26', '奶盖牛乳茶', '5', '咸香奶盖搭配牛乳茶', '5', 'drinkImg/26.jpg', '0', '0', '0', '1', '5');
INSERT INTO `drink` VALUES ('27', '抹茶芝士奶盖', '5', '芝士奶盖搭配抹茶', '7', 'drinkImg/27.jpg', '1', '1', '0', '1', '5');
INSERT INTO `drink` VALUES ('28', '草莓冰激凌', '6', '草莓与冰激凌', '5', 'drinkImg/28.jpg', '0', '0', '0', '1', '5');
INSERT INTO `drink` VALUES ('29', '草莓沙冰', '6', '草莓与沙冰', '5', 'drinkImg/29.jpg', '0', '0', '0', '1', '5');
INSERT INTO `drink` VALUES ('30', '冰鲜柠檬', '7', '新鲜柠檬', '3', 'drinkImg/30.jpg', '0', '0', '0', '1', '3');
INSERT INTO `drink` VALUES ('31', '冰鲜青柠', '7', '新鲜青柠', '3', 'drinkImg/31.jpg', '0', '0', '0', '1', '5');
INSERT INTO `drink` VALUES ('32', '冰鲜猕猴桃', '7', '新鲜猕猴桃', '4', 'drinkImg/32.jpg', '0', '0', '0', '1', '3');
INSERT INTO `drink` VALUES ('33', '冰鲜石榴', '7', '新鲜石榴', '4', 'drinkImg/33.png', '0', '0', '0', '1', '2');
INSERT INTO `drink` VALUES ('34', '冰鲜西瓜', '7', '新鲜西瓜', '4', 'drinkImg/34.jpg', '0', '0', '0', '1', '4');
INSERT INTO `drink` VALUES ('35', '冰鲜西柚', '7', '新鲜西柚', '4', 'drinkImg/35.png', '0', '0', '0', '1', '4');
INSERT INTO `drink` VALUES ('36', '冰鲜芭乐', '7', '新鲜芭乐', '5', 'drinkImg/36.jpg', '0', '0', '0', '1', '3');
INSERT INTO `drink` VALUES ('37', '冰鲜蓝莓', '7', '新鲜蓝莓', '5', 'drinkImg/37.jpg', '0', '0', '0', '1', '5');
INSERT INTO `drink` VALUES ('38', '冰鲜荔枝', '7', '新鲜荔枝', '5', 'drinkImg/38.png', '0', '0', '0', '1', '4');
INSERT INTO `drink` VALUES ('39', '柠檬红茶', '7', '柠檬搭配红茶', '4', 'drinkImg/39.png', '0', '0', '0', '1', '5');
INSERT INTO `drink` VALUES ('40', '青柠红茶', '7', '青柠搭配红茶', '4', 'drinkImg/40.jpg', '0', '0', '0', '1', '3');
INSERT INTO `drink` VALUES ('41', '百香果红茶', '7', '百香果搭配红茶', '5', 'drinkImg/41.jpg', '0', '0', '0', '1', '5');
INSERT INTO `drink` VALUES ('42', '青柠百香果', '7', '青柠与百香果', '5', 'drinkImg/42.jpg', '0', '0', '0', '1', '3');
INSERT INTO `drink` VALUES ('43', '水果茶', '7', '水果多多', '5', 'drinkImg/43.jpg', '0', '0', '0', '1', '5');

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
-- Table structure for type
-- ----------------------------
DROP TABLE IF EXISTS `type`;
CREATE TABLE `type` (
  `typeId` int(11) NOT NULL,
  `tName` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  PRIMARY KEY (`typeId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of type
-- ----------------------------
INSERT INTO `type` VALUES ('1', '经典奶茶');
INSERT INTO `type` VALUES ('2', '每日牛奶');
INSERT INTO `type` VALUES ('3', '巧克力');
INSERT INTO `type` VALUES ('4', '酸奶果汁');
INSERT INTO `type` VALUES ('5', '特色奶盖');
INSERT INTO `type` VALUES ('6', '夏日冰冰');
INSERT INTO `type` VALUES ('7', '新鲜果饮');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `userId` varchar(255) NOT NULL,
  `uName` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`userId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('testUser1', '测试用户1', '13301211646', '123456');
INSERT INTO `user` VALUES ('testUser2', '测试用户2', '12458465795', '123456');
INSERT INTO `user` VALUES ('testUser3', '测试用户3', '13012149543', '123456');
