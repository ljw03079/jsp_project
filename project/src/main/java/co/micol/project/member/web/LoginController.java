package co.micol.project.member.web;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.micol.project.common.ViewResolve;
import co.micol.project.member.service.MemberService;
import co.micol.project.member.service.MemberVO;
import co.micol.project.member.serviceImpl.MemberServiceImpl;

@WebServlet("/login.do")
public class LoginController extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public LoginController() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		//Service 생성
		//MemberVO 생성
		MemberService dao = new MemberServiceImpl();
		MemberVO vo = new MemberVO();
		
		vo.setMemberId(request.getParameter("memberId"));
		vo.setMemberPassword(request.getParameter("memberPassword"));
		
		//vo에 넘어온 값 담고
		String id = request.getParameter("memberId");
		String password = request.getParameter("memberPassword");
		//dao 호출
		vo = dao.memberSelect(vo);
		//결과처리
		if(vo != null) {
			request.setAttribute("message", "로그인 성공!!");//결과를 처리해서 보여줄 페이지에 값을 전달하는 역할(변수명, 데이터)
		}else {
			request.setAttribute("message", "로그인 실패!!");
		}
		String page = "member/membermessage";
		ViewResolve.views(request, response, page);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}
}
