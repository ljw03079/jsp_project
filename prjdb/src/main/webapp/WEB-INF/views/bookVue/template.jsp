<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>template.jsp</title>
<link rel="stylesheet" href="bookVue/assets/style.css">
<script src="https://unpkg.com/vue@2"></script>
</head>
<body>
	<div align="center">
		<jsp:include page="../menu/header.jsp" />
		<div id="app"></div>
		<script type="module" src="bookVue/app.js"></script>
	</div>
</body>
</html>