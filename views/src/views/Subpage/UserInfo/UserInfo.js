export default {
	props: [ 'userInfo' ],
	created() {
		let createDate = new Date(this.userInfo.createDate);
		
		this.userInfo.createDate = `${createDate.getFullYear()}年${createDate.getMonth() + 1}月${createDate.getDate()}日`;
	}
}