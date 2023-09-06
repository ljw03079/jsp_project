package co.project.prjdb.notice.web;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.databind.ObjectMapper;

import co.project.prjdb.notice.service.ReplyService;
import co.project.prjdb.notice.service.ReplyVO;
import co.project.prjdb.notice.serviceImpl.ReplyServiceImpl;

@WebServlet("/AjaxReplyList.do")
public class AjaxReplyList extends HttpServlet {
	private static final long serialVersionUID = 1L;

    public AjaxReplyList() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		String nid = request.getParameter("nid"); //중요 url에 "?nid=2"이런식으로 넣어줌
		
		ReplyService svc = new ReplyServiceImpl();
		List<ReplyVO> list = svc.listReply(Integer.parseInt(nid));
		
		ObjectMapper objectMapper = new ObjectMapper();
		String json = objectMapper.writeValueAsString(list); //writeValueAsString: objectMapper에 있는 것, list를 json 타입으로 변환
		
		response.setContentType("text/json;charset=utf-8"); //한글 깨지지 않도록
		PrintWriter out = response.getWriter(); //char기반 출력
		out.print(json);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}
}
