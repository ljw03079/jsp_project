/**
 * 
 */

export default {
	template: `
	<div>
		<h3>Book Detail</h3>
		<br>
		<table border="1">
	      <tbody>
	        <tr>
	          <td style="width: 200px; height: 40px; text-align: center;">Code</td>
	          <td style="width: 400px; height: 40px;">&nbsp;&nbsp;&nbsp;{{book.bookCode}}</td>
	        </tr>
	        <tr>
	          <td style="width: 200px; height: 40px; text-align: center;">Name</td>
	          <td style="width: 400px; height: 40px;">&nbsp;&nbsp;&nbsp;{{book.bookName}}</td>
	        </tr>
	        <tr>
	          <td style="width: 200px; height: 40px; text-align: center;">Writer</td>
	          <td style="width: 400px; height: 40px;">&nbsp;&nbsp;&nbsp;{{book.bookWriter}}</td>
	        </tr>
	        <tr>
	          <td style="width: 200px; height: 40px; text-align: center;">Publisher</td>
	          <td style="width: 400px; height: 40px;">&nbsp;&nbsp;&nbsp;{{book.bookPublisher}}</td>
	        </tr>
	        <tr>
	          <td style="width: 200px; height: 40px; text-align: center;">Price</td>
	          <td style="width: 400px; height: 40px;">&nbsp;&nbsp;&nbsp;{{book.bookPrice}}</td>
	        </tr>
	      </tbody>
	    </table>
	</div>
	`,
	data: function(){
		return{
			books: [],
			code: 0
		}
	},
	computed: {
		book(){
			console.log(this.$route.params.bookCode);
			this.code = this.$route.params.bookCode;
			var ary = this.books.filter(book => {
				if(book.bookCode == this.code){
					return true;
				}
			})
			if(ary.length > 0) return ary[0];
			else return {};
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