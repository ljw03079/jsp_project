/**
 * 
 */

export default {
	template: `
	<div>
	    <div>
		    <table id="bookTable">
		    	<thead>
		    		<tr>
		    			<th style="width: 10%">도서코드</th>
		    			<th style="width: 20%">도서명</th>
		    			<th style="width: 10%">저자</th>
		    			<th style="width: 15%">출판사</th>
		    			<th style="width: 10%">가격</th>
		    			<th style="width: 25%">삭제</th>
		    		</tr>
		    	</thead>
		    	<tbody>
		    		<tr v-for="item in books">
		    			<td>{{item.bookCode}}</td>
		    			<td>{{item.bookName}}</td>
		    			<td>{{item.bookWriter}}</td>
		    			<td>{{item.bookPublisher}}</td>
		    			<td>{{item.bookPrice}}</td>
		    			<td><button v-on:click="bookDelete(item.bookCode)" style="width: 100px;">삭제</button></td>
		    		</tr>
		    	</tbody>
		    </table>
		    <br>
		    <button v-on:click="bookAdd" style="width: 100px; height: 50px;">책 추가하기</button>
	    </div>
    </div>
	`,
	props: ['books'],
	methods: {
		bookAdd(){
			this.$emit('book-add')
		},
		bookDelete(code){
			this.$emit('book-delete',code)
		}
	}
}