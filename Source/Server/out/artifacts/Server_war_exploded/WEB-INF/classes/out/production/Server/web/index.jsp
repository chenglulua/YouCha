<%@ page language="java" contentType="text/html; charset=UTF-8"
		 pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<form name="Form2" action="drink/upload" method="post" enctype="multipart/form-data">
		<h1>使用spring mvc提供的类的方法上传文件</h1>
		<input type="file" name="file"><br>
		<input type="submit" value="upload"/>
	</form>
	<img src="/drinkImg/1.jpg">
</body>
</html>