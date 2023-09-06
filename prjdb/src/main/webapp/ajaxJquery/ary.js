const myNumbers = [20,30,45,66,88,22];
let sum = 0;

for(let i=0; i < myNumbers.length; i++){
	console.log(myNumbers[i]);
	sum += myNumbers[i];
}

sum = 0;
for(let num of myNumbers){
	sum += num;
}

sum = 0;
myNumbers.forEach(function(elem, idx){
	console.log(`index: ${idx}, value: ${elem}`);
	sum += elem;
}); //배열 메소드, ()안에 함수가 들어감
console.log(`배열의 누적합: ${sum}`);

let fruits = ['Apple','Banana','Cherry'];
document.querySelector('.fruits').innerHTML='';
fruits.forEach(function(elem){
	let li = document.createElement('li');
	let txt = document.createTextNode(elem);
	let btn = document.createElement('button');
	btn.onclick = function(){
		console.log(btn);
		btn.parentElement.remove();
	}
	btn.innerText = '삭제';
	li.appendChild(txt);
	li.appendChild(btn);
	document.querySelector('.fruits').appendChild(li);
});