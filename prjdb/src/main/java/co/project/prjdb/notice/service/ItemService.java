package co.project.prjdb.notice.service;

import java.util.List;

public interface ItemService {
	List<ItemVO> itemList();
	ItemVO itemSelect(String itemId);
}
