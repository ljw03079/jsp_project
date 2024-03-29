package co.project.prjdb.notice.web;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.project.prjdb.notice.service.ReplyService;
import co.project.prjdb.notice.serviceImpl.ReplyServiceImpl;

@WebServlet("/AjaxReplyDelete.do")
public class AjaxReplyDelete extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public AjaxReplyDelete() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String replyId = request.getParameter("rid");
		ReplyService svc = new ReplyServiceImpl();
		
		//파라미터는 항상 문자열로 받아오기 때문에 int타입으로 변환
		if(svc.delReply(Integer.parseInt(replyId))) {
			//{"retCode": "Success"}
			response.getWriter().print("{\"retCode\": \"Success\"}");
		}else {
			//{"retCode": "Fail"}
			response.getWriter().print("{\"retCode\": \"Fail\"}");
		}
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}
}
