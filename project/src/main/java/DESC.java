
public class DESC {
//	Maven Web Project 생성하기
//	1. Maven project에서 -web 선택(apache.maven.architech.webapp)
//	2. src/main/java, src/main/resources 폴더 생성
//	3. WEB-INF/lib 폴더 생성
//	4. web.xml 변경 3.1 dtd로
//	5. index.jsp 삭제
//	6. pom.xml 수정 (maven사이트에서 복사)servelt 3.1 라이브러리 의존(필수)
//	7. maven -> update
//	8. index.jsp 생성
//	9. Run As -> Run on Server 후 동작확인
//
//	**전통적 JSP** -> 현업에서는 잘 안씀, Html 안에 자바코드 작성하는 기술
//	<%@ 지시자 %> -> HTML 페이지 상단에 입력
//	<%! 선언문 %> -> 변수, 메소드 정의
//	<% 자바코드 %> -> 실제 자바코드
//	<%= 출력문 %> -> 화면에 출력하고자하는 것
//
//	**Servlet -> 자바안에 html 코드 작성
//	get: url에 값이 다보임 result.jsp?name=홍길동&tel=010-1111-1111
//	post: <form> 자체를 던지기 때문에 url에 표시가 안됨
//
//	**HttpServlet !!중요!!
//	request, response 요청이 있을때마다 서버가 무조건 만든다. 이후 통신을 끊어버림
//	session은 처음 한번만 만들고 보관
//	마지막 요청으로부터 일정시간동안 요청이 없으면 session 삭제
//	프로젝트 전역에서 쓰임
//
//
//	request.setAttribute(변수명, 값)
//	request.getParameter(넘어온 값) -> 클라이언트로부터 가져오는 것
//	request.getParameterValues(넘어온 값) -> 체크박스 등 다양한 데이터 가져오는 것
//
//	**MVL
//	control : servelt class
//	| VO로 주고받음
//	model, Map : Business Layer  / DB
//
//	Views: jsp(html, css, javascript, EL, .jstl ..) <- viewResolve <- control
//	|
//	브라우저
//	(환경설정은 web.xml)
//
//	https://mrgamza.tistory.com/714
//	https://mvnrepository.com/artifact/javax.servlet/javax.servlet-api/3.1
//
//	<?xml version="1.0" encoding="UTF-8"?>
//	<web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee"
//		xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
//		xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app_3_1.xsd"
//		version="3.1">
//	</web-app>
//
//	//메뉴바 만들어오기..
}
