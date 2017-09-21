import vueLookImages from './vue-look-images.vue'

const LookImages = {
	install (Vue) {
		Vue.component('vue-look-images', vueLookImages)
	}
}
//auto install
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(LookImages);
  //expose formly functions if auto installed
}
export default LookImages
