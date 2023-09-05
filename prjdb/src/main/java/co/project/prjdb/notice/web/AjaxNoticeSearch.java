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
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;

import co.project.prjdb.notice.service.NoticeService;
import co.project.prjdb.notice.service.NoticeVO;
import co.project.prjdb.notice.serviceImpl.NoticeServiceImpl;

@WebServlet("/ajaxnoticesearch.do")
public class AjaxNoticeSearch extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public AjaxNoticeSearch() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		NoticeService dao = new NoticeServiceImpl();
		List<NoticeVO> notices = new ArrayList<NoticeVO>();
		ObjectMapper objectMapper = new ObjectMapper().registerModule(new JavaTimeModule()); //json 형태의 데이터로 변환(java에서 javascript로 던져줄때 사용/json->{id: ,name: ,password: }->{key:value}이런형태)
		//jsr: java standard required, jsr310 요구사항을 충족시키기 위해 사용
		
		String key = request.getParameter("key");
		String val = request.getParameter("val");
		System.out.println(key+"===============");
		System.out.println(val+"===============");
		
		notices = dao.noticeSelectList(key, val);
		String list = objectMapper.writeValueAsString(notices); //실제 json 형태로 변환 -> list to json
		
		response.setContentType("text/html; charset=UTF-8"); //한글깨짐 방지 html폼 데이터라는 인식
		response.getWriter().append(list);
		return;
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}
}
