package co.project.prjdb.notice.service;

import java.util.List;
import java.util.Map;

public interface ReplyService {
	public boolean addReply(ReplyVO vo);
	public boolean editReply(ReplyVO vo);
	public boolean delReply(int replyId);
	public ReplyVO getReply(int replyId);
	public List<ReplyVO> listReply(int noticeId);
	
	public List<EventVO> getEventList(); 
	public boolean eventInsert(EventVO vo);
}
