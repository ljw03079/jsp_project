package co.project.prjdb.bookVue;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.project.prjdb.book.service.BookService;
import co.project.prjdb.book.service.BookVO;
import co.project.prjdb.book.serviceImpl.BookServiceImpl;

@WebServlet("/BookVueDelete.do")
public class BookVueDelete extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public BookVueDelete() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String bookCode = request.getParameter("bcode");
		BookService dao = new BookServiceImpl();
		BookVO vo = new BookVO();
		vo.setBookCode(bookCode);
		
		if(dao.bookDelete(vo) != 0) {
			response.getWriter().print("{\"retCode\": \"Success\"}");
		}else {
			response.getWriter().print("{\"retCode\": \"Fail\"}");
		}
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}
