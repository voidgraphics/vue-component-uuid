export default function install(Vue) {
	let uid = 0;

	Vue.mixin({
	    beforeCreate() {
	        this.$uid = ++uid;
	    }
	});
}
