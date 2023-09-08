package co.project.prjdb.notice.map;

import java.util.List;
import java.util.Map;

import co.project.prjdb.notice.service.EventVO;
import co.project.prjdb.notice.service.ReplyVO;

public interface ReplyMapper {
	//등록, 수정, 삭제, 한건 조회, 목록
	public int insert(ReplyVO vo);
	public int update(ReplyVO vo);
	public int delete(int replyId);
	public ReplyVO select(int replyId);
	public List<ReplyVO> list(int noticeId);
	
	public List<EventVO> getEventList();
	public boolean eventInsert(EventVO vo);
}
