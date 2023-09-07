/**
 * 
 */
console.log('js/reply.js');

class Reply {
	showInfo() {
		console.log('ss');
	}
	//목록조회 기능
	replyList(noticeId, callback, errorcall) {
		//let xhttp = new XMLHttpRequest(); //데이터 전송하고 받아오는 객체
		//xhttp.open('get', 'AjaxReplyList.do?nid=' + noticeId);
		//xhttp.send(); //실제 작동, 요청정보를 보냄
		//document.querySelector('#replyList').innerHTML = '';
		//xhttp.onload = function(e) { //처리된 데이터를 담아놓음
		//	let data = JSON.parse(xhttp.responseText); //배열형태로 값을 담음
		//
		//	callback(data);	//호출하는 곳에서 함수를 정의해서 쓰세요
		//}
		fetch('AjaxReplyList.do?nid=' + noticeId) //promise: 처리중(pending), 완료(fullfill), 실패
		.then(resolve => resolve.json()) //문자를 객체로 바꿔줌. promise가 가지고 있는 메소드
		//정상적으로 값을 가지고 온 경우 then 실행, 익명함수/ 화살표함수: 매개값을 받아와서 실행블럭 실행
		.then(result => callback(result))
		.catch(err => errorcall(err)); //정상적으로 값을 못가지고 온 경우(예외 발생) catch 실행
	}

	//댓글삭제 기능
	replyRemove(replyId, callback, errorcall) {
		//let xhttp = new XMLHttpRequest(); //데이터 전송하고 받아오는 객체
		//xhttp.open('get', 'AjaxReplyDelete.do?rid=' + replyId);
		//xhttp.send(); //실제 작동, 요청정보를 보냄
		//xhttp.onload = function(e) { //처리된 데이터를 담아놓음
		//	let data = JSON.parse(xhttp.responseText); //배열형태로 값을 담음
		//	callback(data);	//호출하는 곳에서 함수를 정의해서 쓰세요
		//}
		fetch('AjaxReplyDelete.do?rid=' + replyId) 
		.then(resolve => resolve.json())
		.then(result => callback(result))
		.catch(err => errorcall(err));
	}

	//댓글등록 기능
	replyAdd(reply = { nid: 1, replyer: 'user1', reply: 'test' }, callback) {
		//let xhttp = new XMLHttpRequest(); //fetch기능도 있음
		//xhttp.open('post', 'AjaxReplyAdd.do');
		//xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');//key, value 기본 폼, post일때 있어야함
		//xhttp.send('nid=' + reply.nid + '&content=' + reply.reply + '&writer=' + reply.replyer);//post일때 parameter를 넘겨줘야함
		//xhttp.onload = function(e) {
		//	let data = JSON.parse(xhttp.responseText);
		//	callback(data);
		//}
		fetch('AjaxReplyAdd.do',{ //반환되는 것: response
			method: "POST",
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: 'nid='+reply.nid+'&content='+reply.reply+'&writer='+reply.replyer
		})
		.then(resolve => resolve.json())
		.then(result => callback(result))
		.catch(console.log);
	}
	
	//댓글조회 기능
	replySearch(replyId, callback){
		//let xhttp = new XMLHttpRequest();
		//xhttp.open('get','AjaxReplySearch.do?rid='+replyId);
		//xhttp.send();
		//xhttp.onload = function(e){
		//	let data = JSON.parse(xhttp.responseText);
		//	callback(data);
		//}
		fetch('AjaxReplySearch.do?rid='+replyId) 
		.then(resolve => resolve.json())
		.then(result => callback(result))
		.catch(console.log);
	}
	
	//댓글수정 기능
	replyModify(reply={rid:10, reply: "변경값입니다.."}, callback){
		//let xhttp = new XMLHttpRequest();
		//xhttp.open('post', 'AjaxReplyModify.do');
		//xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');//key, value 기본 폼, post일때 있어야함
		//xhttp.send('rid=' + reply.rid + '&content=' + reply.reply);
		//xhttp.onload = function(e) {
		//	let data = JSON.parse(xhttp.responseText);
		//	callback(data);
		//}
		fetch('AjaxReplyModify.do',{ //반환되는 것: response
			method: "POST",
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: 'rid=' + reply.rid + '&content=' + reply.reply
		})
		.then(resolve => resolve.json())
		.then(result => callback(result))
		.catch(console.log);
	}
	//숫자 => 년월일 시분초 출력
	displayDate(millis) {
		//2023-09-05 13:22:11
		let today = new Date(millis);
		let yyyy = today.getFullYear();
		let mm = ('0' + (today.getMonth() + 1)).slice(-2); //뒤에서 두자리 잘라옴
		let dd = ('0' + today.getDate()).slice(-2);
		let hh = ('0' + today.getHours()).slice(-2);
		let mi = ('0' + today.getMinutes()).slice(-2);
		let ss = ('0' + today.getSeconds()).slice(-2);

		return yyyy + "-" + mm + "-" + dd + " " + hh + ":" + mi + ":" + ss;
	}
}