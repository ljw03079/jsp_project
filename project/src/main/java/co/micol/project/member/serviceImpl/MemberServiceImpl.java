package co.micol.project.member.serviceImpl;

import org.apache.ibatis.session.SqlSession;

import co.micol.project.common.DataSource;
import co.micol.project.member.map.MemberMapper;
import co.micol.project.member.service.MemberService;
import co.micol.project.member.service.MemberVO;

public class MemberServiceImpl implements MemberService {
	private SqlSession sqlSession = DataSource.getInstance().openSession(true);
	private MemberMapper map = sqlSession.getMapper(MemberMapper.class);
	
	@Override
	public MemberVO memberSelect(MemberVO vo) {
		return map.memberSelect(vo);
	}

}
