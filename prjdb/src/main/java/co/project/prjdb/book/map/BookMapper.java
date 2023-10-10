package co.project.prjdb.book.map;

import java.util.List;

import co.project.prjdb.book.service.BookVO;

public interface BookMapper {
	List<BookVO> bookSelectList();
	BookVO bookSelect(BookVO vo);
	int bookInsert(BookVO vo);
	int bookDelete(BookVO vo);
}
