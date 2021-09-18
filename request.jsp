<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Client and Server information</title>
</head>
<body>
	Client IP = <%= request.getRemoteAddr() %><br>
	Information Length = <%= request.getContentLength() %><br>
	Information Encoding = <%= request.getCharacterEncoding() %><br>
	Content's type = <%= request.getContentType() %><br>
	Protocol = <%= request.getProtocol() %><br>
	Transfer Method = <%= request.getMethod() %><br>
	URI = <%= request.getRequestURI() %><br>
	Context Path = <%= request.getContextPath() %><br>
	Server Name = <%= request.getServerName() %><br>
	Server Port = <%= request.getServerPort() %><br>
</body>
</html>