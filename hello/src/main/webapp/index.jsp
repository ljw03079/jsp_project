<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<div align="center">
		<div>
			<h1>시작하는 곳</h1>
		</div>
		<div>
			<form id="form" action="result.do" onsubmit="return Check()" method="post">
				<label> 이 름 : </label> 
				<input type="text" id="name" name="name"><br>
				<label> 전화번호 : </label> 
				<input type="tel" id="tel" name="tel"><br>
				<input type="submit" value="전송">
			</form>
		</div>
	</div>

	<script type="text/javascript">
		function Check() {
			let name = document.getElementById("name").value;
			console.log(name);
			alert(name);
			return true;
		}
	</script>
</body>
</html>