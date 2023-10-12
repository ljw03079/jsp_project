
App = {
	adoptedAry: [], // adopted.json의 정보. 입양버튼 클릭시 id를 저장.
	init: function() {
	// pets.json 파일의 정보를 읽어서 애완견의 정보를 활용해서 페이지 생성.
	fetch("json/pets.json")
	.then(response => response.json())
	.then(result => App.info(result));
	
	}, // end of init;
	info: function(data) {
		data.forEach((item)=>{
			let template = document.querySelector('div.info').cloneNode(true);
			//콘솔
			console.log();
			//id
			template.querySelector('button').setAttribute('data-id',item.id);
			//name
			template.querySelector('.panel-title').innerText = item.name;
			//picture
			template.querySelector('img').setAttribute('src',item.picture);
			//age
			template.querySelector('.pet-age').innerText = item.age;
			//breed
			template.querySelector('.pet-breed').innerText = item.breed;
			//location
			template.querySelector('.pet-location').innerText = item.location;
			
			document.querySelector('div#petsRow').append(template);
		})
		App.initContract();
	},

	initContract: function() {
	// initMarkData 호출.
	// bindEvents 호출.
		App.initMarkData();
		App.bindEvents();
	}, // end of initContract;

	bindEvents: function() {
		// 입양버튼에 클릭이벤트 등록. -> markAdopted를 활용하세요.
		let btn = document.querySelectorAll('.btn-adopt');
		for(let i=0; i<btn.length; i++){
			btn[i].addEventListener('click',function(e){
				App.handleAdopt(e);
			});
		}
	},

	initMarkData: function() {
		// adopted.json 정보를 활용해서 입양처리하기.
		$.ajax({
		  url: 'json/adopted.json', 
		  type: 'GET', 
		  async: true, 
		  contentType: 'application/json', 
		  dataType: 'json',
		  success: function(data) {
			  console.log(data);
			  for(let i=0;i<data.length;i++){
				  App.adoptedAry.push(data[i]);
			  }
			App.handleAdopt(null);
		  },
		})
		//console.log(this.adoptedAry);
	},

	markAdopted: function(id) {
		// 입양처리. adoptedAry에 추가.
		this.adoptedAry.push(Number(id));
		console.log(this.adoptedAry);
		
	}, // end of markAdopted;

	handleAdopt: function(event) {
		// 사용자화면에서 입양버튼 클릭 시 처리. 버튼 비활성화 작업.(disabled)
		//console.log(event.target.getAttribute('data-id'));
		if(event != null){
			let dataId = event.target.getAttribute('data-id');
			this.markAdopted(dataId);
		}
		this.adoptedAry.forEach((id)=>{
			let disableBtn = document.querySelector('button[data-id="'+id+'"]');
			disableBtn.setAttribute('disabled',true);
			disableBtn.innerText = "Adopted";
		})
				
	} // end of handleAdopt;

}; // end of App;


$(function() {
	App.init();
});
