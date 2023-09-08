package co.project.prjdb.notice.service;

import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
public class EventVO {
	private String title;
	private String startDate;
	private String endDate;
}
