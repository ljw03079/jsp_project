<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.0/jquery.min.js"></script>
<style>
    #bookSubmit th{
        text-align: center;
        background-color: #ccc;
        width: 200px;
        display: inline-block;
    }
    #bookSubmit td input{
    	width: 500px;
    	height: 20px;
    }
    #bookSubmit{
    	padding: 0 10px 10px 10px;
    	float: left;
    }
    #bookButton{
    	list-style: none;
    	padding: 0;
    	margin: 0;
    	width: 220px;
    	float: left;
    	height: 120px;
    	padding: 10px;
    	margin: 10px 0;
    	position: relative;
    }
    #insert{
    	display: block;
    	margin-bottom: 10px;
    	position: absolute;
    	top: 30px;
    	left: 100px;
    	width: 75px;
    }
    #checkedDelete{
    	display: block;
    	position: absolute;
    	top: 70px;
    	left: 100px;
    	width: 75px;
    }
    #bookTable{
    	width: 1000px;
    	border-collapse: separate;
    	border-spacing: 0 15px;
    	border: 1px solid black;
    }
    #bookTable > thead > tr > th{
    	height: 40px;
    	background-color: #747474;
    	color: white;
    }
    #inputBook{
    	width: 1000px;
    	padding-top:0;
    }
    #bookTable td{
    	text-align: center;
    	margin: 10px 0;
    	padding: 10px 0;
    }
	#bookTable tr{
		border: 1px dotted black;
	}
    #bookTable td:nth-child(3), #bookTable td:last-child{
    	text-align: left;
    }
</style>
</head>
<body>
	<div align="center">
	<jsp:include page="../menu/header.jsp" />
		<div id="inputBook">
			<hr style="padding: 0">
		    <table id="bookSubmit">
		        <tr>
		            <th>도서코드</th>
		            <td><input type="text" id="code" name="code"></td>
		        </tr>
		        <tr>
		            <th>도서명</th>
		            <td><input type="text" id="name" name="name" style="color: black"></td>
		        </tr>
		        <tr>
		            <th>저자</th>
		            <td><input type="text" id="writer" name="writer"></td>
		        </tr>
		        <tr>
		            <th>출판사</th>
		            <td><input type="text" id="publisher" name="publisher"></td>
		        </tr>
		        <tr>
		            <th>금액</th>
		            <td><input type="text" id="price" name="price"></td>
		        </tr>
		    </table>
		    <div id="bookButton">
		    	<button type="button" id="insert">저장</button>
		   		<button type="button" id="checkedDelete">선택삭제</button>
		    </div>
	    </div>
	    <div>
		    <table id="bookTable">
		    	<thead>
		    		<tr>
		    			<th><input type="checkbox" id="ckAll" onclick="checkAll()"></th>
		    			<th style="width: 10%">도서코드</th>
		    			<th style="width: 20%">도서명</th>
		    			<th style="width: 10%">저자</th>
		    			<th style="width: 15%">출판사</th>
		    			<th style="width: 10%">가격</th>
		    			<th style="width: 25%">삭제</th>
		    		</tr>
		    	</thead>
		    	<tbody>
		    	</tbody>
		    </table>
	    </div>
    </div>
    <script>
    	//리스트 불러오기
    	fetch('BookList.do')
    	.then(resolve => resolve.json())
    	.then(result => bookList(result))
    	.catch(err => console.log(err));
    	
    	let fields = ['bookCode','bookName','bookWriter','bookPublisher','bookPrice'];
    	function bookList(result){
			result.forEach(function (book){
				let tr = makeTr(book);
				document.querySelector('#bookTable').appendChild(tr);
			});
    	};
    	function makeTr(book){
    		let tr = document.createElement('tr');
    		tr.setAttribute('id',book.bookCode);
    		let tdCk = document.createElement('td');
    		let input = document.createElement('input');
    		input.setAttribute('type','checkbox');
    		input.setAttribute('name','ckbox');
    		tdCk.appendChild(input);
   			tr.appendChild(tdCk);
    		for(let prop of fields){
	   			let tdData = document.createElement('td');
    			tdData.innerText = book[prop];
	    		tr.appendChild(tdData);
    		}
    		let tdBtn = document.createElement('td');
    		let btn = document.createElement('button');
    		btn.addEventListener('click',deleteBook);
    		btn.innerText = "삭제";
    		btn.style.width = "100px"
    		tdBtn.appendChild(btn);
    		tr.appendChild(tdBtn);
    		
    		return tr;
    	}
    	//추가
    	document.querySelector('#insert').addEventListener('click',function(e){
    		let code = document.querySelector('input[name=code]').value;
    		let name = document.querySelector('input[name=name]').value;
    		let writer = document.querySelector('input[name=writer]').value;
    		let publisher = document.querySelector('input[name=publisher]').value;
    		let price = document.querySelector('input[name=price]').value;
    		console.log(publisher);
    		
    		fetch('BookAdd.do',{
    			method: "POST",
    			headers: {
    				'Content-Type': 'application/x-www-form-urlencoded',
    			},
    			body: 'bc='+code+'&bn='+name+'&bw='+writer+'&bpu='+publisher+'&bpr='+price
    		})
    		.then(resolve => resolve.json())
    		.then(result => bookAdd(result))
    		.catch(err => console.log(err));
    	})
    	function bookAdd(data){
    		if(data.retCode == "Success"){
    			let tr = makeTr(data.data);
    			document.querySelector('#bookTable').appendChild(tr);
    			fieldInit();
    		}else if(data.retCode == "Fail"){
    			alert("처리 중 에러");
    		}else{
    			alert("알 수 없는 반환코드");
    		}
    	}
    	function fieldInit(){
    		document.querySelector('input[name=code]').value='';
    		document.querySelector('input[name=name]').value='';
    		document.querySelector('input[name=writer]').value='';
    		publisher = document.querySelector('input[name=publisher]').value='';
    		document.querySelector('input[name=price]').value='';
    	}
    	//삭제
    	function deleteBook(e){
    		let bookCode = e.target.parentElement.parentElement.getAttribute('id');
    		console.log(bookCode);
    		
    		fetch('BookDelete.do?bcode='+bookCode)
    		.then(resolve => resolve.json())
    		.then(result => {
    			if(result.retCode == 'Success'){
        			e.target.parentElement.parentElement.remove();
        		}else if(result.retCode == 'Fail'){
        			alert("처리 중 에러");
        		}else{
        			alert("잘못된 코드 반환");
        		}
    		})
    		.then(err => console.log(err))
    	}
    	//선택삭제
    	$('#checkedDelete').on('click',function(){
    		let ck = [];
    		$('input[type=checkbox]:checked').each(function(){
    			console.log($(this));
    			fetch('BookDelete.do?bcode='+$(this).parents()[1].id)
    			.then(resolve => resolve.json())
        		.then(result => {
        			if(result.retCode == 'Success'){
        				$(this).parents()[1].remove();
            		}else if(result.retCode == 'Fail'){
            			alert("처리 중 에러");
            		}else{
            			alert("잘못된 코드 반환");
            		}
        		})
    		});
    	})
    	//전체선택,해제
    	function checkAll(){
    		console.log($('#ckAll').is(':checked'));
    		if($('#ckAll').is(':checked')){
    			$('input[name=ckbox]').prop('checked',true);
    		}else{
    			$('input[name=ckbox]').prop('checked',false);
    		}
    	}
    	//모든 선택체크시 전체선택체크
			$(document).on("click", "input:checkbox[name=ckbox]", function(e) {
        var checks = document.getElementsByName('ckbox');
        var checkeds = 0;

        for(var i=0; i<checks.length; i++) {
            var cbox = checks[i];
            if(cbox.checked) {
                checkeds++;
            }
        }

        if(checks.length == checkeds) {
            $('#ckAll').prop("checked", true);
        }
        else {
            $('#ckAll').prop("checked", false);
        }
    })
    </script>
</body>
</html>