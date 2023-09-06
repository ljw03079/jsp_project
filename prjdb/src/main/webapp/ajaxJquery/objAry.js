const mem1 = {
	name: "홍길동",
	age: 20,
	phone: '010-1111'
}
const mem2 = {
	name: "김길동",
	age: 23,
	phone: '010-2222'
}
const mem3 = {
	name: "박길동",
	age: 26,
	phone: '010-3333'
}
const members = [mem1, mem2, mem3];


let target = document.querySelector('#memberList>tbody');//공백은 자손, >는 자손, 후손 다 가능
//target.innerHTML = '';
members.forEach(addMemberFnc); //배열요소,inx,array를 매개값으로 넘겨주기로 약속됨

function addMemberFnc (member={}){
	let tr = document.createElement('tr');
	for(let prop in member){
		let td = document.createElement('td');
		td.innerText = member[prop];		
		tr.appendChild(td);
	}
	//삭제button 생성
	let td = document.createElement('td');
	let btn = document.createElement('button');
	btn.addEventListener('click',function(e){ //e: 클릭하면 event가 넘어가서 매개값으로 적용
		console.log(e); //this: 이벤트를 받는 대상(객체 안에서는 객체를 가리킴)
		this.parentElement.parentElement.remove();
	}); 
	
	btn.innerText = '삭제';
	td.appendChild(btn);
	tr.appendChild(td);
	target.appendChild(tr);
};

document.querySelector('#memberList>tbody button').onclick = function(e){
	e.target.parentElement.parentElement.remove();
};//tbody>tr>td:nth-child(4)>button -> 버튼이 또 있을경우

/*document.querySelectorAll('#memberList>tbody>tr').forEach(function(tr){
		tr.addEventListener('mouseover',function(){
				tr.setAttribute('style','background: yellow; color:red;');
		})
		tr.addEventListener('mouseout',function(){
			tr.setAttribute('style','background: null');
		})
})*/

//1. 등록버튼 찾고 2. click 등록 3.이름,나이,연락처 값을 확인 4.forEach 참고 제일끝부분에 추가
/*document.querySelector('.add').addEventListener('click',function(){
	const properties = ['name', 'age', 'phone'];
	let tr = document.createElement('tr');
	properties.forEach(function(property){
		let td = document.createElement('td');
		td.innerText = document.querySelector(`input[name=${property}]`).value;
		tr.appendChild(td);
	})
	let td = document.createElement('td');
	let btn = document.createElement('button');
	btn.addEventListener('click',function(){
		this.parentElement.parentElement.remove();
	}); 
	btn.innerText = '삭제';
	td.appendChild(btn);
	tr.appendChild(td);
	target.appendChild(tr);
	
	document.querySelectorAll('#memberList>tbody>tr').forEach(function(tr){
		tr.addEventListener('mouseover',function(){
			tr.setAttribute('style','background: yellow; color:red;');
		})
		tr.addEventListener('mouseout',function(){
			tr.setAttribute('style','background: null');
		})
	})
})*/

/*교수님*/
document.querySelector('.add').addEventListener('click', function(){
	let name = document.querySelector('input[name=name]').value;
	let age = document.querySelector('input[name=age]').value;
	let phone = document.querySelector('input[name=phone]').value;
	
	const member = {
		name, age, phone
	}// =>name:name, age:age, phone:phone으로 인식
	addMemberFnc(member);
	})