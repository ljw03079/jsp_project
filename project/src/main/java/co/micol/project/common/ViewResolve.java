package co.micol.project.common;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class ViewResolve {
	public static void views(HttpServletRequest request, HttpServletResponse response, String page) throws ServletException, IOException {
		String jspPage = "WEB-INF/views/" + page + ".jsp";
		RequestDispatcher dispatcher = request.getRequestDispatcher(jspPage);
		dispatcher.forward(request, response); //forward는 권한이름
		//페이지로 돌아가게 하겠다
		//jsp페이지를 html로 만들어서 브라우저로 보내게 해줌
	}
}
