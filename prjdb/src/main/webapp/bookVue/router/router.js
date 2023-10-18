/**
 * 
 */

import Add from "../components/myBookAdd.js";
import List from "../components/myBookList.js";
import Detail from "../components/myBookListDetail.js";

const router = new VueRouter({
	routes: [
		{path: '/add', name: 'add', component: Add},
		{path: '/list',
		 name: 'list',
		 component: List,
		 children: [{path: ':bookCode',component: Detail}]}
	]
})

export default router;