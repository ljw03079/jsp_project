/**
 * 
 */

export default {
	template: `
	<div>
		<div id="inputBook">
			<hr style="padding: 0">
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
		    <br>
		    <button v-on:click="bookList" style="width: 100px; height: 50px;">목록보기</button>
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
		bookList(){
			this.$emit('book-list')
		},
		bookAddList(){
			this.$emit('book-add-list',this.code,this.name,this.writer,this.publisher,this.price)
		}
	}
}