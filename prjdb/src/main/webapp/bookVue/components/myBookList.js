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
		    			<th style="width: 30%">도서명</th>
		    			<th style="width: 10%">저자</th>
		    			<th style="width: 10%">출판사</th>
		    			<th style="width: 10%">가격</th>
		    			<th style="width: 20%">삭제</th>
		    		</tr>
		    	</thead>
		    	<tbody>
		    		<tr v-for="item in books">
		    			<td>{{item.bookCode}}</td>
		    			<td>
		    				<router-link v-bind:to='"/list/"+item.bookCode'
		    					style="color: black">
		    				{{item.bookName}}
		    				</router-link>
		    			</td>
		    			<td>{{item.bookWriter}}</td>
		    			<td>{{item.bookPublisher}}</td>
		    			<td>{{item.bookPrice}}</td>
		    			<td style="text-align: center"><button v-on:click="bookDelete(item.bookCode)" style="width: 100px;">삭제</button></td>
		    		</tr>
		    	</tbody>
		    </table>
		    <br>
		    <router-view></router-view>
	    </div>
    </div>
	`,
	data: function(){
		return {
			books: []
		}
	},
	methods: {
		 bookDelete(code){
			fetch('BookVueDelete.do?bcode=' + code)
			.then(resolve => resolve.json())
			.then(result => {
				if (result.retCode == "Success") {
					alert('삭제성공');
					location.reload();
				} else if (result.retCode == 'Fail') {
					alert("처리 중 에러");
				} else {
					alert("잘못된 코드 반환");
				}
			})
			.then(err => console.log(err))
		 }
	},
	created(){
		fetch('BookVueList.do')
		.then(resolve => resolve.json())
		.then(result => {
			console.log(result);
			this.books = result;
		})
		.catch(err => console.log(err))
 	}
}