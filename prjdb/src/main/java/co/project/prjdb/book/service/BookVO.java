package co.project.prjdb.book.service;

import lombok.Data;

@Data
public class BookVO {
	private String bookCode;
	private String bookName;
	private String bookWriter;
	private String bookPublisher;
	private int bookPrice;
}
