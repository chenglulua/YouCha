package com.youcha.util;

/**
 * @ClassName Md5Encode
 * @Description Md5加密，将密码加密为32位字符串
 * @Date 2021-02-17 10:20
 */
public class Md5Encode {
	public static String getMD5(byte[] source) {
		String s = null;
		//用来将字节转换成16进制表示的字符
		char hexDigits[] = {'0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
				'a', 'b', 'c', 'd', 'e', 'f' };
		try {
			java.security.MessageDigest md =
					java.security.MessageDigest.getInstance("MD5");
			md.update(source);
			//MD5的计算结果是一个128位的长整数，
			byte tmp[] = md.digest();
			//用字节表示就是16个字节
			//每个字节用16进制表示的话，使用两个字符，所以表示成16进制需要32个字符
			char str[] = new char[16 * 2];
			//表示转换结果中对应的字符位置
			int k = 0;
			//从第一个字节开始，对MD5的每一个字节，转换成16进制字符的转换
			for (int i = 0; i < 16; i++) {
				//取第i个字节
				byte byte0 = tmp[i];
				//取字节中高4位的数字转换
				//>>>为逻辑右移，将符号位一起右移
				str[k++] = hexDigits[byte0 >>> 4 & 0xf];
				//取字节中低4位的数字转换
				str[k++] = hexDigits[byte0 & 0xf];
			}
			//换后的结果转换为字符串
			s = new String(str);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return s;
	}
}