/**
 * 
 */
import myBookAdd from "./components/myBookAdd.js"
import myBookList from "./components/myBookList.js"
import myBookHeader from "./components/myBookHeader.js"

const template = `
	<div>
		<my-book-header></my-book-header>
		<my-book-add v-if="addOK"
			v-on:book-list="bookList"
			v-on:book-add-list="bookAddList"></my-book-add>
		<my-book-list v-if="listOK" v-bind:books="bookArray"
			v-on:book-add="bookAdd"
			v-on:book-delete="bookDelete"
		></my-book-list>
	</div>
`;

new Vue({
	el: '#app',
	template: template,
	data: {
		addOK: false,
		listOK: false,
		bookArray: {}
	},
	components: {
		'my-book-header': myBookHeader,
		'my-book-add': myBookAdd,
		'my-book-list': myBookList
	},
	methods: {
		bookAdd() {
			this.addOK = true,
				this.listOK = false
		},
		bookList() {
			this.addOK = false,
				this.listOK = true
		},
		bookDelete(code) {
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
		},
		bookAddList(code, name, writer, publisher, price) {
			fetch('BookVueAdd.do', {
				method: "POST",
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
				},
				body: 'bc=' + code + '&bn=' + name + '&bw=' + writer + '&bpu=' + publisher + '&bpr=' + price
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
	},
	created: function() {
		fetch('BookVueList.do')
			.then(resolve => resolve.json())
			.then(result => {
				console.log(result);
				this.bookArray = result;
				this.bookList();
			})
			.catch(err => console.log(err))
	}
})