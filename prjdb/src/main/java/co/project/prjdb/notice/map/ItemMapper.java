package co.project.prjdb.notice.map;

import java.util.List;

import co.project.prjdb.notice.service.ItemVO;

public interface ItemMapper {
	List<ItemVO> itemList();
	ItemVO itemSelect(String itemId);
}
