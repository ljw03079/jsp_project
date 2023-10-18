/**
 * 
 */

export default {
	template: `
	<div>
		<div id="inputBook">
		    <table id="bookSubmit">
		        <tr>
		            <th>도서코드</th>
		            <td><input v-model="code" type="text" id="code" name="code"></td>
		        </tr>
		        <tr>
		            <th>도서명</th>
		            <td><input v-model="name" type="text" id="name" name="name" style="color: black"></td>
		        </tr>
		        <tr>
		            <th>저자</th>
		            <td><input v-model="writer" type="text" id="writer" name="writer"></td>
		        </tr>
		        <tr>
		            <th>출판사</th>
		            <td><input v-model="publisher" type="text" id="publisher" name="publisher"></td>
		        </tr>
		        <tr>
		            <th>금액</th>
		            <td><input v-model="price" type="text" id="price" name="price"></td>
		        </tr>
		    </table>
		    <div id="bookButton">
		    	<button v-on:click="bookAddList" type="button" id="insert" style="width: 100px; height: 50px;">저장</button>
		    </div>
		</div>
	</div>
	`,
	data: function(){
		return{
			code: '',
			name: '',
			writer: '',
			publisher: '',
			price: ''
		}
	},
	methods: {
		bookAddList(){
			fetch('BookVueAdd.do', {
				method: "POST",
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
				},
				body: 'bc=' + this.code + '&bn=' + this.name + '&bw=' + this.writer + '&bpu=' + this.publisher + '&bpr=' + this.price
			})
			.then(resolve => resolve.json())
			.then(result => {
				if (result.retCode == "Success") {
					alert("추가 성공");
					location.reload();
				} else if (data.retCode == "Fail") {
					alert("처리 중 에러");
				} else {
					alert("알 수 없는 반환코드");
				}
			})
			.catch(err => console.log(err));
		}
	}
}