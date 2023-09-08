package co.project.prjdb.notice.web;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.databind.ObjectMapper;

import co.project.prjdb.notice.service.EventVO;
import co.project.prjdb.notice.service.ReplyService;
import co.project.prjdb.notice.serviceImpl.ReplyServiceImpl;

@WebServlet("/AjaxEventList.do")
public class AjaxEventList extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public AjaxEventList() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		ReplyService svc = new ReplyServiceImpl();
		List<EventVO> eventList = new ArrayList<>();
		
		eventList = svc.getEventList();
		
		ObjectMapper mapper = new ObjectMapper();
		String json = mapper.writeValueAsString(eventList);
		
		response.setContentType("text/json; charset=utf-8");
		response.getWriter().print(json);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}
