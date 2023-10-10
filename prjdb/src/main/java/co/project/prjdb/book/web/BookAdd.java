package co.project.prjdb.book.web;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.databind.ObjectMapper;

import co.project.prjdb.book.service.BookService;
import co.project.prjdb.book.service.BookVO;
import co.project.prjdb.book.serviceImpl.BookServiceImpl;

@WebServlet("/BookAdd.do")
public class BookAdd extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public BookAdd() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String bc = request.getParameter("bc");
		String bn = request.getParameter("bn");
		String bw = request.getParameter("bw");
		String bpu = request.getParameter("bpu");
		String bpr = request.getParameter("bpr");
		System.out.println(bpr);
		
		BookVO vo = new BookVO();
		vo.setBookCode(bc);
		vo.setBookName(bn);
		vo.setBookWriter(bw);
		vo.setBookPublisher(bpu);
		vo.setBookPrice(Integer.parseInt(bpr));
		
		BookService dao = new BookServiceImpl();
		System.out.println(vo);
		
		Map<String,Object> resultMap = new HashMap<>();
		
		if(dao.bookInsert(vo) != 0) {
			resultMap.put("retCode", "Success");
			resultMap.put("data", vo);
		}
		else {
			resultMap.put("retCode", "Fail");
		}
		ObjectMapper objectMapper = new ObjectMapper();
		String json = objectMapper.writeValueAsString(resultMap);
		
		response.setContentType("text/json;charset=utf-8");
		response.getWriter().print(json);
}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}
