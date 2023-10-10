package co.project.prjdb.book.web;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.databind.ObjectMapper;

import co.project.prjdb.book.service.BookService;
import co.project.prjdb.book.service.BookVO;
import co.project.prjdb.book.serviceImpl.BookServiceImpl;

@WebServlet("/BookList.do")
public class BookList extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public BookList() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		BookService dao = new BookServiceImpl();
		List<BookVO> booklist = new ArrayList<BookVO>();
		
		booklist = dao.bookSelectList();
		
		ObjectMapper objectMapper = new ObjectMapper();
		String json = objectMapper.writeValueAsString(booklist);

		response.setContentType("text/json;charset=utf-8");
		PrintWriter out = response.getWriter();
		out.print(json);
		
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}
