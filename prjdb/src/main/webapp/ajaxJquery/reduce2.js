// reduce2.js
// 비동기방식. fetch()

async function asyncFunc() { 
  //동기방식으로 사용하려면 async 붙여줘야함.
  //let memberAry = []
  let promise = await fetch('./MOCK_DATA.json');
  //await: 진행이 완료될때까지 다음코드를 실행하지 않음
  let json = await promise.json();
  
  memAry = json;
  console.log(memAry);

  //female: 분홍색, male: 보라색, 그외 빼주기

  memAry.reduce((acc, mem, idx, ary) => {
    if(idx == 0){
      let ul = document.createElement('ul');
      acc.append(ul);
    }
    let li = document.createElement('li');
    li.innerHTML = 'id: ' + mem.id + ', 이름: ' + mem.first_name;
    if (idx < 5){
      if(mem.gender == "Female"){
        li.setAttribute('style','color: pink');
      }else if(mem.gender == "Male"){
        li.setAttribute('style','color: purple');
      }else{
        li.setAttribute('style','display: none');
      }
      acc.querySelector('ul').append(li);
    }
    return acc;
  }, document.querySelector('#list'));

  // reduce 사용해서...
  // memAry.reduce((acc, mem, idx, ary) => {
  //   // 마지막 순번에서 document.querySelector('#list').innerHTML = acc;
  //   let str = '';
  //   if(idx+1 == ary.length){
  //     str += "</ul>";
  //     console.log(acc);
  //     return document.querySelector('#list').innerHTML = acc+str;
  //   }
  //   if(idx == 0){
  //     str = "<ul>"
  //   }
  //   if(idx < 5){
  //     str += "<li>id: "+mem.id+",이름: "+mem.first_name+"</li>";
  //     console.log(acc);
  //     return acc+str;
  //   }
  //   return acc+str;
  // }, "");
 };

asyncFunc();