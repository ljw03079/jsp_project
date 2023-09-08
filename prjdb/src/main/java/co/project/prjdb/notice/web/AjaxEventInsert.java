package co.project.prjdb.notice.web;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.databind.ObjectMapper;

import co.project.prjdb.notice.service.EventVO;
import co.project.prjdb.notice.service.ReplyService;
import co.project.prjdb.notice.serviceImpl.ReplyServiceImpl;

@WebServlet("/AjaxEventInsert.do")
public class AjaxEventInsert extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public AjaxEventInsert() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String title = request.getParameter("title");
		String start = request.getParameter("start");
		String end = request.getParameter("end");
		
		ReplyService svc = new ReplyServiceImpl();
		Map<String, Object> map = new HashMap<>();
		
		if(svc.eventInsert(new EventVO(title, start, end))) {
			map.put("retCode", "Success");
		}else {
			map.put("retCode", "Fail");
		}
		
		ObjectMapper mapp = new ObjectMapper();
		String json = mapp.writeValueAsString(map);
		
		response.getWriter().print(json);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}
