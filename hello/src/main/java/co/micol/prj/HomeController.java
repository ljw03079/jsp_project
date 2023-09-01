package co.micol.prj;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/home.do")//호출명, 호출하는것을 Mapping (다른 방법: web.xml에 <servlet>~</servlet>:호출할 Servlet Class 정의 <servlet-mapping>~</servlet-mapping>: 매핑명을 작성)
//브라우저에서 home.do라고 요청하면 이클래스가 동작함

public class HomeController extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public HomeController() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// get 방식으로 요청하면 처리하는 메소드
		response.setContentType("text/html; charset=UTF-8");//문자 쓰는것도 UTF-8
		response.setCharacterEncoding("UTF-8");//한글 안깨지도록 하는 것, 출력도 UTF-8
		response.getWriter().append("<h1>나의 이름은 : ")
							.append("홍길동 입니다.</h1>");		
	}
	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// post 방식으로 요청하면 실행되는 메소드
		doGet(request, response);
	}

}
