let name = "Hong";//string
let age = 20;//number
let obj = {
	name, //속성의 이름이 같으면 한번만 적어줘도 됨
	age,
	phone: '010-1111',
	showInfo: function() {
		return this.name + "," + this.age;
	}
}
console.log(obj.name);
console.log(obj.age);
console.log(obj['phone']); //이 방법이 더 유용
console.log(obj.showInfo());
for (let prop in obj) {
	console.log(`속성: ${prop}, 값: ${obj[prop]}`);
}
//문자열 연결 ``, 값을 가져오려면 달러 중괄호 사용, 주석에 달러쓰면 에러

obj.hobbies = ['reading', 'eating', 'sleepling']; //객체에 값을 추가
console.log(obj.hobbies[0]); //배열

let yourHobbies = ['운동하기','영화보기','자전거타기'];

function makeHobbies(hobbies=[]) {
	for (let i = 0; i < hobbies.length; i++) {
		let li = document.createElement('li'); //<li></li>
		let txt = document.createTextNode(hobbies[i]);
		li.appendChild(txt); //<li>reading</li>
		document.getElementById('myHobby').appendChild(li);
	}
}
makeHobbies(yourHobbies);
//makeHobbies(obj.hobbies);