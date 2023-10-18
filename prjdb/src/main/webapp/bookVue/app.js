/**
 * 
 */
import router from './router/router.js';
import Header from "./components/myBookHeader.js";

const template = `
	<div>
		<my-book-header></my-book-header>
		<ul>
			<li style="color: black; background-color: #aaa">
				<router-link v-bind:to="{name: 'list'}"
				>Book List</router-link>
			</li>
			<li style="color: black; background-color: #aaa">
				<router-link v-bind:to="{name: 'add'}">Add Book</router-link>
			</li>
		</ul>
		<hr>
		<div>
			<router-view></router-view>
		</div>
	</div>
`;

new Vue({
	el: '#app',
	template,
	data: {
		bookArray: {}
	},
	components: {
 		'my-book-header': Header
 	},
	router
})
	
// 	methods: {
// 		bookAddList(code, name, writer, publisher, price) {
// 			fetch('BookVueAdd.do', {
// 				method: "POST",
// 				headers: {
// 					'Content-Type': 'application/x-www-form-urlencoded',
// 				},
// 				body: 'bc=' + code + '&bn=' + name + '&bw=' + writer + '&bpu=' + publisher + '&bpr=' + price
// 			})
// 				.then(resolve => resolve.json())
// 				.then(result => {
// 					if (result.retCode == "Success") {
// 						alert("추가 성공");
// 						location.reload();
// 					} else if (data.retCode == "Fail") {
// 						alert("처리 중 에러");
// 					} else {
// 						alert("알 수 없는 반환코드");
// 					}
// 				})
// 				.catch(err => console.log(err));
// 		}
// 	},