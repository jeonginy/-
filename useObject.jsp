<%@page import="member.MemberInfo"%>
<%@ page contentType = "text/html; charset=utf-8" %>
<jsp:useBean id="member" scope="request"
             class="member.MemberInfo" /> 
<html>
<head><title>Introduction</title></head>
<body>

<%= member.getName() %> (<%= member.getId() %>) User
<jsp:getProperty name="member" property="id" />
<jsp:getProperty name="member" property="name" /> 
<%
	// MemberInfo member = (MemberInfo) request.getAttribute("member");
%>
	<%= member.getId() %>
	<%= member.getName() %>
HELLO,

</body>
</html>
